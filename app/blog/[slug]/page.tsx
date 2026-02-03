import { Metadata, ResolvingMetadata } from 'next';
import { BLOG_CONTENT } from '@/lib/data/blog-data';
import BlogDetailClient from '@/components/blog/BlogDetailClient';

type Props = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_CONTENT[slug];

  if (!post) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: `${post.title} | Blog Đi Săn Cùng Tớ`,
    description: `Đọc bài viết ${post.title} từ ${post.author}.`,
    openGraph: {
      title: post.title,
      description: `Đọc bài viết ${post.title} từ ${post.author}.`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <BlogDetailClient slug={slug} />;
}
