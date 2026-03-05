import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <Container>
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* 아이콘 */}
          <div className="rounded-full bg-primary/10 p-6">
            <FileQuestion className="h-12 w-12 text-primary" />
          </div>

          {/* 제목과 설명 */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">404</h1>
            <p className="text-xl font-semibold text-foreground">
              페이지를 찾을 수 없습니다
            </p>
            <p className="text-muted-foreground max-w-md">
              요청하신 페이지가 존재하지 않습니다.
              올바른 URL을 입력했는지 확인하세요.
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/">홈으로</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">대시보드</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
