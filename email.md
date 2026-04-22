Assunto: Alinhamento de deploy — Website epag (Next.js)

Olá pessoal,

Finalizamos o desenvolvimento do novo site da epag e gostaria de alinhar o setup dos ambientes antes de compartilharmos o código.

Cenário de Deploy
O projeto foi estruturado em uma arquitetura headless, com as seguintes definições:

Frontend (Next.js 16): É a única parte que será hospedada por nós. O repositório já contém o Dockerfile (build multi-stage) específico para o frontend.

Painel Administrativo: Desenvolvemos uma interface de gestão customizada dentro do próprio Next.js. O usuário final não acessará o Strapi diretamente.

Backend (Strapi): Será hospedado externamente. O frontend apenas consumirá essa API via requisições autenticadas.

O que precisaremos (Staging e Produção)
Como o Strapi e o PostgreSQL estão em infraestrutura externa, o foco do ambiente será:

Deploy do Container Next.js: Utilizando o Dockerfile presente no repo.

Variáveis de Ambiente: Configuração das chaves conforme o .env.example (principalmente STRAPI_URL e STRAPI_API_TOKEN para comunicação com o backend externo).

Conectividade: Garantir que o ambiente de hospedagem do front tenha saída para a URL externa do Strapi.

Segurança
As rotas administrativas no Next.js já estão protegidas por middleware com validação de sessão JWT e cookies HttpOnly. Toda a comunicação com a API externa é validada no servidor via schemas Zod.

Próximos Passos
Ainda não liberei o acesso ao repositório no GitLab. Gostaria de saber:

Qual o fluxo de deploy/CI-CD que vocês preferem que eu siga?

Posso liberar o acesso ao repo para vocês analisarem o Dockerfile e as necessidades de variáveis?

Fico no aguardo para definirmos o melhor caminho.

Abraços,

[Seu Nome]