import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartItem from "../CartItem";

const ProductCart = () => {
  return (
    <>
      <div>
        <Sheet>
          <SheetContent>
            <CartItem />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductCart;
