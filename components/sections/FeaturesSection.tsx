import { Zap, Palette, Shield, Moon, Layers, Code2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";

const features = [
  {
    icon: Zap,
    title: "초고속 성능",
    description: "Next.js 16과 Tailwind CSS v4로 빌드된 최고 성능의 애플리케이션",
  },
  {
    icon: Palette,
    title: "아름다운 UI",
    description: "shadcn/ui 컴포넌트 라이브러리로 일관된 디자인 시스템",
  },
  {
    icon: Shield,
    title: "타입 안전성",
    description: "TypeScript로 작성된 전체 코드베이스, 런타임 에러 최소화",
  },
  {
    icon: Moon,
    title: "다크 모드",
    description: "next-themes로 완벽하게 구현된 다크 모드 지원",
  },
  {
    icon: Layers,
    title: "컴포넌트 계층",
    description: "UI, 섹션, 템플릿으로 명확하게 분류된 컴포넌트 구조",
  },
  {
    icon: Code2,
    title: "개발자 경험",
    description: "HMR, 자동완성, 타입 체킹으로 개발 생산성 극대화",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            강력한 기능들
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            웹 애플리케이션을 빠르게 개발하기 위한 모든 것을 갖추고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="transition-all hover:shadow-lg hover:border-primary/50 cursor-pointer"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
