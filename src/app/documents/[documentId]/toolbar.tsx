import { cn } from "@/lib/utils";
import { LucideIcon, Undo2Icon, UndoIcon } from "lucide-react";
import React from "react";

interface ToolbarButtonsProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const toolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonsProps) => {
  return (
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
};

const toolbar = () => {
  const sections: Array<
    Array<{
      label: string;
      icon: LucideIcon;
      onClick: () => void;
      isActive: boolean;
    }>
  > = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => console.log("Undo clicked"),
        isActive: false,
      },
    ],
  ];
  return (
    <div className="bg-[#f1f4f9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.2 overflow-auto ">
      {sections[0].map((item) => {
        <toolbarButton key={item.label} {...item} />;
      })}
    </div>
  );
};

export default toolbar;
