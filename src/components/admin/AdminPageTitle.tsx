'use client';

import { useLanguage } from '@/lib/i18n';

type TitleType = 'categories' | 'tags' | 'newPost' | 'editPost';

export default function AdminPageTitle({ type }: { type: TitleType }) {
  const { t } = useLanguage();
  const a = t.admin;

  const titles: Record<TitleType, string> = {
    categories: a.taxonomy.categoriesTitle,
    tags: a.taxonomy.tagsTitle,
    newPost: a.blog.newPost,
    editPost: a.blog.editPost,
  };

  return <h1 className="mb-6 text-2xl font-extrabold text-secondary-900">{titles[type]}</h1>;
}
