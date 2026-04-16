# Roadmap — Blog & CMS Features

Features not yet implemented, with implementation guidance for each.

---

## 1. Paginação na listagem do blog

**Por que:** Com muitos posts, carregar tudo de uma vez é lento e ruim para SEO.

**Como implementar:**

1. Atualizar `getPosts()` em `src/lib/strapi.ts` para aceitar `page` e `pageSize`:
```ts
export async function getPosts(page = 1, pageSize = 12): Promise<{ posts: StrapiPost[]; total: number }> {
  const res = await strapiRequest<StrapiListResponse<RawStrapiPost>>(
    `/posts?populate=*&sort=createdAt:desc&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
  return { posts: res.data.map(normalize), total: res.meta.pagination.total };
}
```

2. Passar `page` via `searchParams` na página `/blog/page.tsx`:
```tsx
export default async function BlogPage({ searchParams }) {
  const page = Number(searchParams.page ?? 1);
  const { posts, total } = await getPosts(page, 12);
  // ...
}
```

3. Criar componente `Pagination` em `src/components/ui/Pagination.tsx` com links `?page=N`.

4. Atualizar `BlogList` para receber `total` e `currentPage` e renderizar o `Pagination`.

---

## 2. Busca de posts

**Por que:** UX essencial quando o blog tiver muitos posts.

**Como implementar:**

**Opção A — Busca client-side (simples, funciona sem backend extra):**
1. Adicionar input de busca no `BlogList`
2. Filtrar `posts` pelo título/excerpt no cliente com `useMemo`
3. Funciona bem até ~200 posts

**Opção B — Busca via Strapi (recomendado para escala):**
1. Strapi suporta busca com `_q`: `/posts?_q=pix&populate=*`
2. Criar rota `GET /api/posts/search?q=termo`
3. Adicionar debounce no input e chamar a rota

**Opção C — Algolia / Meilisearch (melhor UX):**
1. Instalar `@algolia/client-search` ou `meilisearch`
2. Indexar posts no Strapi via webhook ao publicar
3. Usar `InstantSearch` no frontend

---

## 3. Data de publicação editável

**Por que:** Permite agendar posts ou corrigir a data de publicação.

**Como implementar:**

1. No Strapi — Content Type Builder → Post → adicionar campo `publishedAt` como `DateTime` (ou usar o campo nativo do Strapi se já existir).

2. No `PostForm.tsx`, adicionar campo de data:
```tsx
const [publishedAt, setPublishedAt] = useState(initialData?.publishedAt ?? '');

// No form:
<input
  type="datetime-local"
  value={publishedAt}
  onChange={(e) => setPublishedAt(e.target.value)}
/>
```

3. Incluir no payload do POST/PUT:
```ts
publishedAt: publishedAt || undefined,
```

4. Adicionar string de tradução `a.post.publishedAt` nas 3 traduções.

---

## 4. Preview do post antes de publicar

**Por que:** Permite ver como o post vai ficar antes de publicar.

**Como implementar:**

1. Criar rota de preview em `src/app/blog/preview/[id]/page.tsx` que busca o post pelo `documentId` (sem filtrar por `status === 'published'`):
```tsx
export default async function PreviewPage({ params }) {
  const post = await getPostById(params.id);
  if (!post) notFound();
  // renderiza igual ao BlogPostPage mas sem checar status
}
```

2. Proteger a rota de preview com autenticação (só admin pode ver):
```tsx
// Verificar cookie de sessão no layout ou na própria página
```

3. No `PostForm`, adicionar botão "Preview":
```tsx
<a
  href={`/blog/preview/${initialData?.id}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {a.post.preview}
</a>
```

4. Adicionar string `preview` nas traduções.

---

## 5. Autor do post

**Por que:** Credibilidade e SEO (structured data de autor).

**Como implementar:**

1. No Strapi — Content Type Builder → Post → adicionar relação `author` com `User` (manyToOne).

2. Atualizar o tipo `StrapiPost` em `src/lib/strapi.ts`:
```ts
export type StrapiPost = {
  // ...
  author: { id: number; username: string; email: string } | null;
};
```

3. Atualizar `normalize()` para incluir `author`.

4. Exibir no `BlogPostHero` e no `PostCard`:
```tsx
{post.author && (
  <p className="text-xs text-light-gray">By {post.author.username}</p>
)}
```

5. Adicionar structured data JSON-LD no `blog/[slug]/page.tsx`:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "author": { "@type": "Person", "name": post.author?.username },
  // ...
}) }} />
```

---

## 6. Editor rico (links, imagens inline, tabelas)

**Por que:** O `RichTextEditor` atual usa `contentEditable` com `execCommand` (deprecated). Não suporta links, imagens inline ou tabelas de forma confiável.

**Como implementar com TipTap:**

1. Instalar:
```bash
npm install @tiptap/react @tiptap/starter-kit @tiptap/extension-link @tiptap/extension-image
```

2. Substituir `src/components/admin/RichTextEditor.tsx` por um editor TipTap:
```tsx
'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';

export default function RichTextEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit, Link, Image],
    content: value,
    onUpdate: ({ editor }) => onChange(editor.getHTML()),
  });
  return <EditorContent editor={editor} />;
}
```

3. O output continua sendo HTML — compatível com o `sanitizeHtml` e `dangerouslySetInnerHTML` existentes.

4. Adicionar botões de toolbar para link e imagem (upload via `/api/upload`).

---

## 7. Paginação na página de tag

**Dependência:** Implementar paginação geral primeiro (item 1).

Após implementar paginação no `BlogList`, a página `/blog/tag/[slug]` herda automaticamente — só precisa passar `total` e `currentPage` para o componente.

---

## Prioridade sugerida

| # | Feature | Esforço | Impacto |
|---|---------|---------|---------|
| 1 | Paginação | Médio | Alto |
| 2 | Busca client-side | Baixo | Alto |
| 3 | Data de publicação editável | Baixo | Médio |
| 4 | Autor do post | Médio | Médio |
| 5 | Preview | Médio | Médio |
| 6 | Editor rico (TipTap) | Alto | Médio |
