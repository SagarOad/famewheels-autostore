"use client"

import OrderSummary from '@/components/OrderSummary'
import React from "react";
import AuthModal from "@/components/Auth/AuthModal"
import { useSelector } from 'react-redux';

const page = () => {
const user = useSelector((state) => state.user);

  return (
    <div>
      {user?.name}
        <OrderSummary />
        <AuthModal />
    </div>
  )
}

export default page