import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartItem from "./CartItem";

const ProductCart = () => {
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <button variant="outline">Open</button>
          </SheetTrigger>

          <SheetContent>
            <CartItem />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductCart;
