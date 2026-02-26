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
  try {
    const { slug } = await params;
    const products = await getShopProducts();
    const product = products.find((p) => p.slug === slug);

    if (!product) {
      return { title: 'Sản phẩm không tồn tại' };
    }

    const previousImages = (await parent).openGraph?.images || [];
    const title = typeof product.title === 'string' ? product.title : 'Sản phẩm';
    const description = typeof product.reviewShort === 'string' ? product.reviewShort : '';

    return {
      title: `${title} | Đi Săn Cùng Tớ`,
      description: description || title,
      openGraph: {
        title,
        description: description || title,
        images: product.image ? [product.image, ...previousImages] : previousImages,
      },
    };
  } catch {
    return { title: 'Sản phẩm | Đi Săn Cùng Tớ' };
  }
}

export default async function Page({ params }: Props) {
  try {
    const { slug } = await params;
    const products = await getShopProducts();
    const product = products.find((p) => p.slug === slug);

    if (!product) notFound();

    const productList: Product[] = products;
    return (
      <ProductDetailClient slug={slug} product={product} products={productList} />
    );
  } catch (e) {
    notFound();
  }
}
