import type { Metadata } from 'next';
import PostForm from '@/components/admin/PostForm';

export const metadata: Metadata = { title: 'New Post — epag Admin' };

export default function NewPostPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="mb-6 text-2xl font-extrabold text-secondary-900">New Post</h1>
      <PostForm />
    </div>
  );
}
