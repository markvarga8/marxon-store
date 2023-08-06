import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/Container";

export const revalidate = 0;

const HomePage = async () => {
  const product = await getProducts({ isFeatured: true });
  const billboard = await getBillboards("27975d00-d493-492a-8f42-885c465bce79");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={product} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
