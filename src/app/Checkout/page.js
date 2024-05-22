"use client";

import OrderSummary from '@/components/OrderSummary'
import React, { useState } from "react";
import AuthModal from "@/components/Auth/AuthModal"
import { useSelector } from 'react-redux';

const Page = () => {
  const user = useSelector((state) => state.user);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);

  const openAuthModal = () => setAuthModalOpen(true);
  const closeAuthModal = () => setAuthModalOpen(false);

  return (
    <div>
      {user?.name}
      <OrderSummary openAuthModal={openAuthModal} />
      <AuthModal isOpen={isAuthModalOpen} onClose={closeAuthModal} />
    </div>
  );
}

export default Page;
