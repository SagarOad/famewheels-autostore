import MainBanner from "@/components/MainBanner/MainBanner";
import MainSidebarWrapper from "@/components/MainSidebar/MainSidebarWrapper";
import ProductCart from "@/components/ProductCart/ProductCart";

export default function Home() {
  return (
    <>
      {" "}
      <div className=" bg-[#ffffff]">
        <main>
          <MainBanner />
          <MainSidebarWrapper />
          <ProductCart />
        </main>
      </div>
    </>
  );
}
