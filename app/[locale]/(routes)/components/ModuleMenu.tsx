"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Image from "next/image";

import ProjectModuleMenu from "./menu-items/Projects";
import JourneyBuilderModuleMenu from "./menu-items/JourneyBuilder";
import JourneyBuilderModuleMenu from "./menu-items/JourneyBuilder";
import ReportsModuleMenu from "./menu-items/Reports";
import DocumentsModuleMenu from "./menu-items/Documents";
import WindroseNavModuleMenu from "./menu-items/WindroseNav";
import ClientsModuleMenu from "./menu-items/Clients";
import WindroseNavModuleMenu from "./menu-items/WindroseNav";
import ClientsModuleMenu from "./menu-items/Clients";
import CrmModuleMenu from "./menu-items/Crm";

import AdministrationMenu from "./menu-items/Administration";
import DashboardMenu from "./menu-items/Dashboard";
import EmailsModuleMenu from "./menu-items/Emails";
import { cn } from "@/lib/utils";
import windroseLogo from "../../../../public/images/windroseLogo.png"
import windroseLogo from "../../../../public/images/windroseLogo.png"

type Props = {
  modules: any;
  dict: any;
};

const ModuleMenu = ({ modules, dict }: Props) => {
const ModuleMenu = ({ modules, dict }: Props) => {
  const [open, setOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="flex flex-col">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        }  h-screen p-5  pt-8 relative duration-300`}
      >
        <div className="flex flex-col gap-x-4 items-center">
        <div className="flex flex-col gap-x-4 items-center">
          <div
            className={`cursor-pointer duration-500 border rounded-full px-4 py-2 ${
              open && "rotate-[360deg]"
            }`}
            onClick={() => setOpen(!open)}
          >
            <Image src={windroseLogo.src} alt="windrose logo" width={40} height={40}/>
            <Image src={windroseLogo.src} alt="windrose logo" width={40} height={40}/>
          </div>

          <div>
          <div>
          <h1
            className={` origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            {process.env.NEXT_PUBLIC_APP_NAME}
          </h1>
          </div>
          </div>
        </div>
        <div className="pt-6">
          <DashboardMenu open={open} title={dict.ModuleMenu.dashboard} />
          {modules.find(
            (menuItem: any) => menuItem.name === "crm" && menuItem.enabled
          ) ? (
            <CrmModuleMenu open={open} localizations={dict.ModuleMenu.crm} />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "projects" && menuItem.enabled
          ) ? (
            <ProjectModuleMenu open={open} title={dict.ModuleMenu.projects} />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "emails" && menuItem.enabled
          ) ? (
            <EmailsModuleMenu open={open} title={dict.ModuleMenu.emails} />
          ) : null}
          {modules.find(
            (menuItem: any) =>
              menuItem.name === "journeyBuilder" && menuItem.enabled
              menuItem.name === "journeyBuilder" && menuItem.enabled
          ) ? (
            <JourneyBuilderModuleMenu open={open} />
            <JourneyBuilderModuleMenu open={open} />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "client" && menuItem.enabled
          ) ? (
            <ClientsModuleMenu open={open} />
            <ClientsModuleMenu open={open} />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "reports" && menuItem.enabled
          ) ? (
            <ReportsModuleMenu open={open} title={dict.ModuleMenu.reports} />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "documents" && menuItem.enabled
          ) ? (
            <DocumentsModuleMenu
              open={open}
              title={dict.ModuleMenu.documents}
            />
          ) : null}
          {modules.find(
            (menuItem: any) => menuItem.name === "openai" && menuItem.enabled
          ) ? (
            <WindroseNavModuleMenu open={open} />
            <WindroseNavModuleMenu open={open} />
          ) : null}
          <AdministrationMenu open={open} title={dict.ModuleMenu.settings} />
        </div>
      </div>
      <div
        className={cn("flex justify-center items-center w-full", {
          hidden: !open,
        })}
      >
      </div>
    </div>
  );
};

export default ModuleMenu;
