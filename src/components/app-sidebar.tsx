import * as React from "react"
import {
  RadioTower,
  Command,
  Frame,
  ChartColumn,
  FileChartColumnIncreasing,
  ChartCandlestick,
  Megaphone,
  Settings2,
  Handshake,
  Telescope
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
// import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import {TeamSwitcher} from "@/components/team-switcher.tsx";

// This is sample data.
const data = {
  user: {
    name: "Brent Lee",
    email: "blee@sparrowtv.ai",
    avatar: "",
  },
  teams: [
    {
      name: "Sinclair",
      logo: RadioTower,
      plan: "",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "",
    },
  ],
  navMain: [
    {
      title: "Ad Campaigns",
      url: "#",
      icon: Megaphone,
      isActive: true,
      items: [
        {
          title: "Just Do It",
          url: "#",
        },
        {
          title: "Belong Anywhere",
          url: "#",
        },
      ],
    },
    {
      title: "Audience Groups",
      url: "#",
      icon: Telescope,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Reports",
      url: "#",
      icon: FileChartColumnIncreasing,
      items: [
        {
          title: "Overview",
          url: "#"
        }
      ]
    },
    {
      title: "Partners",
      url: "#",
      icon: Handshake,
      items: [
        {
          title: "Sinclair Affiliates",
          url: "/sinclair-affiliates",
          icon: Frame,
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Campaign Performance",
      url: "/bar-chart",
      icon: ChartColumn,
    },
    {
      name: "Audience Insights",
      url: "/box-plot-chart",
      icon: ChartCandlestick,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
