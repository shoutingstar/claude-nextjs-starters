import { Header } from "@/components/layout/Header";
import { ExamplesSidebar } from "@/components/examples/ExamplesSidebar";

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="w-64 hidden md:block">
        <ExamplesSidebar />
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-auto bg-muted/30">{children}</main>
      </div>
    </div>
  );
}
