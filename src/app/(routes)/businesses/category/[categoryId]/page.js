import Container from "/src/components/ui/container";
import Billboard from "/src/components/ui/billboard";
import ProductCard from "/src/components/ui/product-card";
import NoResults from "/src/components/ui/no-results";

import getProducts from "/actions/get-products";
import getCategory from "/actions/get-category";
import getSizes from "/actions/get-sizes";
import getColors from "/actions/get-colors";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const metadata = {
  title: "Category Details",
  description: "Here are some categories of products in Iqra Biashara E-Store.",
};

export const revalidate = 0;

const CategoryPage = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-none mx-auto">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block ">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
