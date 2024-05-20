"use client"

import OrderSummary from '@/components/OrderSummary'
import React from "react";
import AuthModal from "@/components/Auth/AuthModal"

const page = () => {


  return (
    <div>
        <OrderSummary />
        <AuthModal />
    </div>
  )
}

export default page