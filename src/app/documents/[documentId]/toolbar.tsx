"use client";

import { cn } from "@/lib/utils";
import React from "react";
import {
  Undo2Icon,
  LucideIcon,
  Redo2Icon,
  PrinterIcon,
  SpellCheckIcon,
  BoldIcon,
} from "lucide-react";
import { useEditorStore } from "@/store/use-editor-store";
import { Separator } from "@/components/ui/separator";

interface ToolbarButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  isActive?: boolean;
}

const ToolbarButton = ({
  icon: Icon,
  onClick,
  isActive,
}: ToolbarButtonProps) => (
  <button
    onClick={onClick}
    className={cn(
      "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
      isActive && "bg-neutral-200/80"
    )}
  >
    <Icon />
  </button>
);

const Toolbar = () => {
  const { editor } = useEditorStore();
  console.log("Toolbar editor", { editor });
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current =
            editor?.view.dom.getAttribute("spellcheck") === "true";
          editor?.view.dom.setAttribute(
            "spellcheck",
            current ? "false" : "true"
          );
        },
      },
    ],
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-2 overflow-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {/* TODO : Font Family */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {/* TODO : Heading */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {/* TODO : Font Size */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
    </div>
  );
};

export default Toolbar;
