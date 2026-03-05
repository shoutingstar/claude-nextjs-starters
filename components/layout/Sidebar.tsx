"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
} from "lucide-react";

const sidebarItems = [
  {
    href: "/dashboard",
    label: "대시보드",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/users",
    label: "사용자",
    icon: Users,
  },
  {
    href: "/dashboard/analytics",
    label: "분석",
    icon: BarChart3,
  },
  {
    href: "/dashboard/settings",
    label: "설정",
    icon: Settings,
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`border-r border-border bg-muted/20 ${className || ""}`}>
      <nav className="space-y-1 p-4">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
