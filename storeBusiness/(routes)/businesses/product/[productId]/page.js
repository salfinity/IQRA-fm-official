import ProductList from "/src/components/product-list";
import Gallery from "/src/components/gallery";
import Info from "/src/components/info";
import getProduct from "/actions/get-product";
import getProducts from "/actions/get-products";

export const metadata = {
  title: "Product Details",
  description: "This is a detailed page of products.",
};

const ProductPage = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  return (
    <div className=" justify-center w-full">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductList title="Related Items" items={suggestedProducts} />
      </div>
    </div>
  );
};

export default ProductPage;
