"use client"
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import { ArrowUpCircleIcon, BarChartIcon, CameraIcon, ClipboardListIcon, DatabaseIcon, FileCodeIcon, FileIcon, FileTextIcon, FolderIcon, GalleryVerticalEnd, HelpCircleIcon, LayoutDashboardIcon, ListIcon, SearchIcon, SettingsIcon, UsersIcon } from "lucide-react";
import { NavMain } from "./nav-main";
import { NavUser } from "./nav-user";

const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: [
      {
        title: "Dashboard",
        url: "#",
        icon: LayoutDashboardIcon,
      },
      {
        title: "Lifecycle",
        url: "#",
        icon: ListIcon,
      },
      {
        title: "Analytics",
        url: "#",
        icon: BarChartIcon,
      },
      {
        title: "Projects",
        url: "#",
        icon: FolderIcon,
      },
      {
        title: "Users",
        url: "#",
        icon: UsersIcon,
      },
    ],
    navClouds: [
      {
        title: "Capture",
        icon: CameraIcon,
        isActive: true,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Proposal",
        icon: FileTextIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
      {
        title: "Prompts",
        icon: FileCodeIcon,
        url: "#",
        items: [
          {
            title: "Active Proposals",
            url: "#",
          },
          {
            title: "Archived",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
      {
        title: "Settings",
        url: "#",
        icon: SettingsIcon,
      },
      {
        title: "Get Help",
        url: "#",
        icon: HelpCircleIcon,
      },
      {
        title: "Search",
        url: "#",
        icon: SearchIcon,
      },
    ],
    documents: [
      {
        name: "Data Library",
        url: "#",
        icon: DatabaseIcon,
      },
      {
        name: "Reports",
        url: "#",
        icon: ClipboardListIcon,
      },
      {
        name: "Word Assistant",
        url: "#",
        icon: FileIcon,
      },
    ],
  }

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>){
    return(
        <Sidebar collapsible="offcanvas" {...props}>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                className="data-[slot=sidebar-menu-button]:!p-1.5"
              >
                <a href="#">
                <GalleryVerticalEnd className="size-4" />
                  <span className="text-base font-semibold">Portal.</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          {/* <NavDocuments items={data.documents} /> */}
          {/* <NavSecondary items={data.navSecondary} className="mt-auto" /> */}
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={data.user} />
        </SidebarFooter>
      </Sidebar>
    )
}