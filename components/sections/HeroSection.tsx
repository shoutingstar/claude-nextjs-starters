import Link from "next/link";
import { ArrowRight, Sparkles, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center py-12 md:py-0">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

      <Container className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          {/* 배지 */}
          <div className="flex justify-center">
            <Badge variant="outline" className="px-4 py-1.5">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              지금 바로 시작하세요
            </Badge>
          </div>

          {/* 제목 */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
            프로덕션 레디 <br />
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Next.js 스타터킷
            </span>
          </h1>

          {/* 설명 */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            현대적인 UI 컴포넌트, 다크 모드, 폼 검증, 데이터 테이블과 함께
            웹 애플리케이션을 개발할 수 있습니다.
          </p>

          {/* CTA 버튼 */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/dashboard">
                대시보드 보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
