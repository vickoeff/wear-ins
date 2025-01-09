'use client'

import { EditProductModal, CreateProductModal, AuthModal } from "@/components/ui";
import { AddPhotoModal } from "@/components/ui/AddPhotoModal";
import { EditPhotoModal } from "@/components/ui/EditPhotoModal";
import { SessionProvider } from "next-auth/react";
import { createContext, useState } from "react";

// Modal Default State
type TModalName = "create_product" | "edit_product" | "auth" | "add_gallery_photo" | "edit_gallery_photo";
const MODAL_VALUE = {
  isOpen: {
    "create_product": false,
    "edit_product": false,
    "auth": false,
    "add_gallery_photo": false,
    "edit_gallery_photo": false,
  },
  params: undefined as string | undefined,
  toggle: (null as unknown) as (modal: string, params?: string) => void
}

export const ModalContext = createContext(MODAL_VALUE);

export function ContextWrapper({ children }: { children: React.ReactNode }) {
  // Modal Handler
  const [isOpen, setOpen] = useState({ "create_product": false, "edit_product": false, "auth": false, "add_gallery_photo": false, "edit_gallery_photo": false });
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
    <SessionProvider>
      <ModalContext.Provider value={{ isOpen, params, toggle }}>
        {children}
        <CreateProductModal />
        <EditProductModal />
        <AuthModal />
        <AddPhotoModal />
        <EditPhotoModal />
      </ModalContext.Provider>
    </SessionProvider>
  );
}