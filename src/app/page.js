import MainBanner from "@/components/MainBanner/MainBanner";
import MainSidebarWrapper from "@/components/MainSidebar/MainSidebarWrapper";
import ProductCart from "@/components/ProductCart/ProductCart";

export default function Home() {
  return (
    <>
      {" "}
      <div className=" bg-[#ffffff]">
        <main>
          <div className=" max-w-[1600px] mx-auto">
            <MainBanner />
            <MainSidebarWrapper />
            <ProductCart />
          </div>
        </main>
      </div>
    </>
  );
}
