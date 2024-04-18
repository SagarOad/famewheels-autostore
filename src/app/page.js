import MainSidebar from "@/components/MainSidebar";
import ProductsCatalogue from "@/components/ProductsCatalogue";
import ProductCart from "@/components/productCart";

export default function Home() {
  return (
    <>
      {" "}
      <div className=" bg-[#ffffff]">
        <main>
          <MainSidebar />
          <ProductCart />
        </main>
      </div>
    </>
  );
}
