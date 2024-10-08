"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lightbulb, ServerIcon, UserIcon } from "lucide-react";
import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

type Props = {
  open: boolean;
};

const JourneyBuilderModuleMenu = ({ open }: Props) => {
  const pathname = usePathname();
  const isPath = pathname.includes("journeyBuilder");
  return (
    <div className="flex flex-row items-center mx-auto p-2">
      <Link
        href={"/journeyBuilder"}
        className={`flex gap-2 p-2 ${isPath ? "text-muted-foreground" : null}`}
      >
        <Lightbulb className="w-6" />
        <span className={open ? "" : "hidden"}>Journey Builder</span>
      </Link>
    </div>
  );
};

export default JourneyBuilderModuleMenu;
