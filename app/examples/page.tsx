import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Blocks,
  FileText,
  Layout,
  Zap,
  Database,
  Settings2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";

const examples = [
  {
    icon: Blocks,
    title: "컴포넌트",
    description: "shadcn UI 컴포넌트 예제들을 확인해보세요",
    href: "/examples/components",
  },
  {
    icon: FileText,
    title: "폼",
    description: "react-hook-form과 zod를 사용한 폼 예제",
    href: "/examples/forms",
  },
  {
    icon: Layout,
    title: "레이아웃",
    description: "Grid, Flexbox 등 다양한 레이아웃 예제",
    href: "/examples/layouts",
  },
  {
    icon: Zap,
    title: "Hooks",
    description: "usehooks-ts 라이브러리 활용 예제",
    href: "/examples/hooks",
  },
  {
    icon: Database,
    title: "데이터 패칭",
    description: "Next.js에서 데이터를 불러오는 다양한 방법",
    href: "/examples/data-fetching",
  },
  {
    icon: Settings2,
    title: "최적화",
    description: "성능 최적화 및 설정 예제",
    href: "/examples/optimization",
  },
];

export default function ExamplesPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">예제</h1>
          <p className="text-lg text-muted-foreground">
            Next.js 개발 시 참고할 수 있는 실제 예제들입니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {examples.map((example) => {
            const Icon = example.icon;
            return (
              <Card
                key={example.href}
                className="flex flex-col hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        <Icon className="h-5 w-5" />
                        {example.title}
                      </CardTitle>
                      <CardDescription>{example.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex items-end">
                  <Link href={example.href} className="w-full">
                    <Button variant="outline" className="w-full">
                      보러가기
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
