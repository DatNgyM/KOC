import { Metadata, ResolvingMetadata } from 'next';
import { PRODUCTS } from '@/lib/products';
import ProductDetailClient from '@/components/ProductDetailClient';

type Props = {
  params: Promise<{ slug: string }>
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Sản phẩm không tồn tại',
    };
  }

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `${product.title} | Đi Săn Cùng Tớ`,
    description: product.reviewShort,
    openGraph: {
      title: product.title,
      description: product.reviewShort,
      images: product.image ? [product.image, ...previousImages] : previousImages,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
