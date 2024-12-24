'use client'

import { CreateProductModal } from "@/components/ui/CreateProductModal";
import { createContext, useState } from "react";

// Modal Default State
type TModalName = "create_product";
const MODAL_VALUE = {
  isOpen: {
    "create_product": false
  },
  toggle: (null as unknown) as (modal: string) => void
}

export const ModalContext = createContext(MODAL_VALUE);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setOpen] = useState({ "create_product": false });

  const toggle = (modal: string) => {
    setOpen({ ...isOpen, [modal]: !isOpen[modal as TModalName] });
  }

  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {children}
      <CreateProductModal />
    </ModalContext.Provider>
  );
}