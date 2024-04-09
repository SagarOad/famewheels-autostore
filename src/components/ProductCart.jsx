import React from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ProductCart = () => {
  return (
    <>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <button variant="outline">Open</button>
          </SheetTrigger>
          <SheetContent>Testing</SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default ProductCart;
