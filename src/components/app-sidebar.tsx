"use client";

import * as React from "react";
import { History, WandSparkles, CreditCard } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { UserButton } from "@clerk/nextjs";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";

// Menu items.
const items = [
  {
    title: "ジェネレータ一覧",
    url: "/dashboard",
    icon: WandSparkles,
  },
  {
    title: "生成履歴",
    url: "/dashboard/history",
    icon: History,
  },
  {
    title: "アップグレード",
    url: "/dashboard/upgrade",
    icon: CreditCard,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="flex items-center justify-center p-4">
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} /> */}
        <SidebarGroup>
          <SidebarGroupContent className="pl-2">
            <SidebarMenu className="flex gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="flex items-center justify-center">
        <div className="p-4">
          <UserButton showName />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
