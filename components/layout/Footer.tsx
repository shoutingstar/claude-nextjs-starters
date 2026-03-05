import Link from "next/link";
import { Container } from "./Container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <Container className="py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4">NextStarter</h3>
            <p className="text-sm text-muted-foreground">
              프로덕션 레디 Next.js 웹 스타터킷
            </p>
          </div>

          {/* 제품 링크 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">제품</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  기능
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  가격
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  문서
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 링크 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">회사</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  소개
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  블로그
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  연락처
                </Link>
              </li>
            </ul>
          </div>

          {/* 법규 링크 */}
          <div>
            <h4 className="text-sm font-semibold mb-4">법규</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  개인정보 처리
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  쿠키 정책
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 NextStarter. 모든 권리 보유.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              트위터
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              깃허브
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              링크드인
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
