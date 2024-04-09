import MainSidebar from "@/components/MainSidebar";
import Navbar from "@/components/Navbar";
import ProductsCatalogue from "@/components/ProductsCatalogue";
import ProductCart from "@/components/productCart";

export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <div className=" bg-[#ffffff]">
        <main className="max-w-[1600px] mx-auto">
          <MainSidebar />
          <ProductCart />
        </main>
      </div>
    </>
  );
}
