# Tech Report — epag Website

## Visão Geral

Desenvolvimento do website institucional da epag com área de admin e CMS para blog. O projeto foi construído inteiramente em Next.js 16, sem separação de repositórios ou serviços externos — frontend, backend e admin na mesma aplicação.

---

## Stack e Decisões Técnicas

### Por que Next.js para tudo?

A decisão de não criar um backend separado (Express, Hono, etc.) foi intencional. O Next.js 16 com App Router oferece:

- **Route Handlers** — endpoints REST nativos (`src/app/api/**/route.ts`)
- **Server Components** — busca de dados no servidor sem API calls desnecessários
- **Server Actions** — mutations diretas sem boilerplate
- **`revalidatePath`** — invalida cache do site público automaticamente quando um post é salvo no admin

Isso elimina a necessidade de um serviço separado para o CMS, reduz complexidade operacional e mantém tudo em TypeScript com tipos compartilhados.

### Banco de dados

**PostgreSQL + Prisma 7**

Prisma foi escolhido como ORM pela tipagem automática gerada a partir do schema. Qualquer query retorna tipos TypeScript corretos sem configuração manual.

Prisma 7 introduziu uma mudança importante: a connection string saiu do `schema.prisma` e foi para `prisma.config.ts`, e o client agora exige um driver adapter explícito. Usamos `@prisma/adapter-pg` para conectar ao Postgres.

### Autenticação

Optamos por **session-based auth própria** em vez de NextAuth. Motivo: o projeto não precisa de OAuth/SSO por enquanto, e uma implementação própria com `bcryptjs` + cookie `httpOnly` é mais simples, sem dependências externas de auth.

Fluxo:
1. Login → valida email/senha → cria `Session` no banco com token aleatório
2. Cookie `session` setado com `httpOnly`, `secure` em produção
3. Middleware verifica o cookie em todas as rotas `/admin/*`
4. `getSession()` usa `cache()` do React para não repetir queries na mesma request

### Validação

**Zod 4** para validação de inputs nas APIs. Os schemas ficam em `src/lib/validations/` e são compartilhados entre client e server.

---

## Estrutura do Projeto

O projeto segue uma organização por feature, não por tipo de arquivo:

```
src/
  app/           → rotas (Next.js App Router)
  components/
    admin/       → componentes exclusivos do admin
    layout/      → Header, Navbar, Footer
    sections/    → seções de página, agrupadas por feature
    ui/          → primitivos (Button, Icon, Logo)
  content/       → conteúdo i18n por feature
  lib/
    auth/        → session management
    db/          → Prisma client singleton
    services/    → lógica de negócio (CRUD + cache)
    validations/ → Zod schemas
```

Cada feature tem sua própria pasta em `sections/` e `content/`, com barrel exports (`index.ts`) para imports limpos.

---

## Blog — Arquitetura Completa

### Modelo de dados

```prisma
model Post {
  id          String      @id @default(cuid())
  slug        String      @unique
  status      PostStatus  @default(DRAFT)
  title       Json        // { en: "", "pt-BR": "", "es-ES": "" }
  excerpt     Json
  content     Json        // HTML gerado pelo Tiptap
  coverImage  String?
  tags        Tag[]
  publishedAt DateTime?
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}
```

O campo `Json` para `title`, `excerpt` e `content` armazena as três traduções em uma única coluna. Isso evita tabelas separadas por locale e simplifica as queries.

### Fluxo de publicação

```
Admin cria/edita post
  → POST /api/posts ou PUT /api/posts/[id]
  → Validação Zod
  → Prisma salva no banco
  → revalidatePath('/blog') + revalidatePath('/blog/[slug]')
  → Cache do Next.js invalidado
  → Site público atualiza na próxima request
```

O `revalidatePath` é a peça central: o site público é servido com cache (rápido), mas quando um post é publicado no admin, o cache é invalidado automaticamente. Sem rebuild, sem deploy.

### Editor de conteúdo

**Tiptap** foi escolhido como editor rich text por ser headless — sem CSS próprio, sem conflito com o design system. Suporta:

- Bold, italic, strikethrough
- Headings (H2, H3)
- Listas ordenadas e não ordenadas
- Blockquote
- Links e imagens
- Undo/redo

O editor gera HTML que é salvo no banco e renderizado no site público via `dangerouslySetInnerHTML` com estilos aplicados via seletores CSS (`[&_h2]:...`).

### Internacionalização (i18n)

O `PostForm` tem tabs por idioma (EN / PT-BR / ES-ES). Cada tab edita `title`, `excerpt` e `content` independentemente. O site público usa o hook `useContent()` para servir o locale correto baseado na preferência do usuário.

### Rotas do blog

| Rota | Tipo | Descrição |
|------|------|-----------|
| `/blog` | Server Component | Lista posts com status `PUBLISHED` |
| `/blog/[slug]` | Server Component | Post individual |
| `/admin/blog` | Server Component (protegido) | Lista todos os posts |
| `/admin/blog/new` | Client Component | Formulário de criação |
| `/admin/blog/[id]` | Server + Client | Formulário de edição |
| `GET /api/posts` | Route Handler | Lista posts (autenticado) |
| `POST /api/posts` | Route Handler | Cria post |
| `PUT /api/posts/[id]` | Route Handler | Atualiza post |
| `DELETE /api/posts/[id]` | Route Handler | Remove post |

---

## Seção Legal

A seção `/legal` foi construída como um hub de documentos com navegação lateral inteligente:

- **Scroll spy** — o item ativo na sidebar muda conforme o scroll usando `IntersectionObserver`
- **Hover sync** — passar o mouse em um card acende o item correspondente na sidebar (via React Context)
- **Subpáginas** — cada documento tem sua própria rota com sidebar de navegação interna pelas seções do documento

Documentos implementados:
- `/legal/terms-for-users`
- `/legal/terms-for-merchants`
- `/legal/privacy-policy`
- `/legal/imprint`
- `/legal/prohibited-products-and-services`

Todo o conteúdo está em `src/content/legal/` separado por arquivo, com 3 traduções cada.

---

## Admin CMS

### Proteção de rotas

Duas camadas:

1. **Middleware** (`src/middleware.ts`) — verifica o cookie `session` antes de qualquer request para `/admin/*`. Redireciona para `/admin/login` se não autenticado.
2. **Layout server-side** (`src/app/admin/(protected)/layout.tsx`) — segunda verificação no servidor, garante que o usuário existe no banco.

O `/admin/login` fica fora do route group `(protected)`, então não herda o layout com sidebar.

### Mock mode

Para desenvolvimento sem banco configurado, `MOCK_DB=true` no `.env`:

- `getSession()` retorna um usuário admin falso
- `getPosts()` retorna 3 posts de exemplo
- `/api/auth/login` aceita qualquer credencial

Basta mudar para `MOCK_DB=false` e configurar `DATABASE_URL` para conectar ao banco real.

---

## Próximos Passos

- [ ] Configurar `DATABASE_URL` no ambiente do cliente
- [ ] Rodar `npx prisma migrate dev --name init`
- [ ] Criar primeiro usuário admin via seed
- [ ] Implementar upload de imagens (cover image dos posts)
- [ ] Área admin para edição dos documentos legais
- [ ] Adicionar blog ao menu de navegação do site
