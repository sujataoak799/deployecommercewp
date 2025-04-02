import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    { id: 1, name: "Laptop", price: "$999", image: "laptop.jpg" },
    { id: 2, name: "Smartphone", price: "$699", image: "phone.jpg" }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Home;
