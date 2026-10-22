export default async function ProductsDetail({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const { productId } = await params;
  return <h1> Products Detail Product {productId}</h1>;
}
