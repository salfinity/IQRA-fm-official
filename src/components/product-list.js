import ProductCard from "/src/components/ui/product-card";
import NoResults from "/src/components/ui/no-results";

const ProductList = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold texl-2xl md:text-4xl text-black dark:text-white">
        {title}
      </h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
