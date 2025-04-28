"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onClose}>
      <div
        className="absolute right-0 top-0 h-screen w-3/4 max-w-sm bg-white shadow-lg p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-xl">DESIGN STUDIO</span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link
            href="/"
            className="text-lg py-2 border-b border-neutral-100 hover:text-primary"
            onClick={onClose}
          >
            ホーム
          </Link>
          <Link
            href="/about"
            className="text-lg py-2 border-b border-neutral-100 hover:text-primary"
            onClick={onClose}
          >
            私たちについて
          </Link>
          <Link
            href="/services"
            className="text-lg py-2 border-b border-neutral-100 hover:text-primary"
            onClick={onClose}
          >
            サービス
          </Link>
          <Link
            href="/works"
            className="text-lg py-2 border-b border-neutral-100 hover:text-primary"
            onClick={onClose}
          >
            実績
          </Link>
          <Link
            href="/access"
            className="text-lg py-2 border-b border-neutral-100 hover:text-primary"
            onClick={onClose}
          >
            アクセス
          </Link>
        </nav>
        <div className="mt-8">
          <Link href="/contact" onClick={onClose}>
            <Button className="w-full">お問い合わせ</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;