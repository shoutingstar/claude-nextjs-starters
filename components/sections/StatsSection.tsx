import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";

const stats = [
  {
    label: "활성 사용자",
    value: "12,543",
    change: "+23%",
    trend: "up",
  },
  {
    label: "월간 수익",
    value: "$45,231",
    change: "+12%",
    trend: "up",
  },
  {
    label: "세션 수",
    value: "89,234",
    change: "+5%",
    trend: "up",
  },
  {
    label: "주문",
    value: "2,341",
    change: "+18%",
    trend: "up",
  },
];

export function StatsSection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-muted/30">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            대시보드 통계
          </h2>
          <p className="text-lg text-muted-foreground">
            실시간으로 업데이트되는 주요 지표들을 한눈에 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <Badge variant="outline" className="gap-1 text-green-600">
                      <TrendingUp className="h-3 w-3" />
                      {stat.change}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
