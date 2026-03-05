import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function CTASection() {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-r from-primary/10 via-background to-primary/5">
      <Container>
        <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-8 md:p-12 text-center">
          {/* 배경 장식 */}
          <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-r from-primary/20 to-transparent blur-3xl" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            지금 시작해보세요
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            프로덕션 레디 스타터킷으로 바로 개발을 시작하세요.
            모든 보일러플레이트가 준비되어 있습니다.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="gap-2" asChild>
              <Link href="/dashboard">
                대시보드 살펴보기
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-in">
                로그인
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
