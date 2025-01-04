'use client'

import { EditProductModal, CreateProductModal, LoginModal } from "@/components/ui";
import { createContext, useState } from "react";

// Modal Default State
type TModalName = "create_product" | "edit_product" | "login";
const MODAL_VALUE = {
  isOpen: {
    "create_product": false,
    "edit_product": false,
    "login": false
  },
  params: undefined as string | undefined,
  toggle: (null as unknown) as (modal: string, params?: string) => void
}

export const ModalContext = createContext(MODAL_VALUE);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  // Modal Handler
  const [isOpen, setOpen] = useState({ "create_product": false, "edit_product": false, "login": false });
  const [params, setParams] = useState<string | undefined>();

  const toggle = async (modal: string, params?: string) => {
    if (params) {
      setParams(params);
    } else if (!params || !isOpen[modal as TModalName]) {
      setParams(undefined);
    }
    setOpen({ ...isOpen, [modal]: !isOpen[modal as TModalName] });
  }

  return (
    <ModalContext.Provider value={{ isOpen, params, toggle }}>
      {children}
      <CreateProductModal />
      <EditProductModal />
      <LoginModal />
    </ModalContext.Provider>
  );
}