"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Blocks,
  FileText,
  Layout,
  Zap,
  Database,
  Settings2,
} from "lucide-react";

const exampleItems = [
  {
    href: "/examples/components",
    label: "컴포넌트",
    icon: Blocks,
  },
  {
    href: "/examples/forms",
    label: "폼",
    icon: FileText,
  },
  {
    href: "/examples/layouts",
    label: "레이아웃",
    icon: Layout,
  },
  {
    href: "/examples/hooks",
    label: "Hooks",
    icon: Zap,
  },
  {
    href: "/examples/data-fetching",
    label: "데이터 패칭",
    icon: Database,
  },
  {
    href: "/examples/optimization",
    label: "최적화",
    icon: Settings2,
  },
];

interface ExamplesSidebarProps {
  className?: string;
}

export function ExamplesSidebar({ className }: ExamplesSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={`border-r border-border bg-muted/20 ${className || ""}`}>
      <nav className="space-y-1 p-4">
        {exampleItems.map((item) => {
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
