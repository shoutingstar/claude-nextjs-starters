import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export function AuthLayout({
  children,
  title,
  subtitle,
}: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md space-y-8">
        {/* 로고 */}
        <div className="flex flex-col items-center space-y-2">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary/80" />
          <h1 className="text-2xl font-bold">NextStarter</h1>
        </div>

        {/* 제목과 부제목 */}
        {title && (
          <div className="text-center">
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && (
              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
        )}

        {/* 컨텐츠 */}
        <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
          {children}
        </div>

        {/* 도움말 링크 */}
        <div className="text-center text-sm">
          <Link
            href="/"
            className="text-primary hover:underline"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
