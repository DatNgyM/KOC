import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { getShopProducts } from '@/lib/shop-products';
import type { Product } from '@/lib/data/products';
import ProductDetailClient from '@/components/product/ProductDetailClient';

type Props = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const products = await getShopProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Sản phẩm không tồn tại' };
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
  const products = await getShopProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const productList: Product[] = products;
  return (
    <ProductDetailClient slug={slug} product={product} products={productList} />
  );
}
