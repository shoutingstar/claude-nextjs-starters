"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// useMemo 예제를 위한 컴포넌트
function ExpensiveComponent({ count }: { count: number }) {
  // 무거운 계산 시뮬레이션
  const expensiveValue = React.useMemo(() => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);

  return (
    <div className="p-4 bg-muted rounded-lg">
      <p className="text-sm">계산 결과: {expensiveValue}</p>
    </div>
  );
}

// useCallback 예제
interface CallbackButtonProps {
  onClick: () => void;
  label: string;
}

const CallbackButton = React.memo(function CallbackButton({
  onClick,
  label,
}: CallbackButtonProps) {
  console.log("CallbackButton 렌더링:", label);
  return <Button onClick={onClick}>{label}</Button>;
});

export default function OptimizationExample() {
  const [count, setCount] = React.useState(0);
  const [renderCount, setRenderCount] = React.useState(0);

  // useCallback으로 함수 메모이제이션
  const handleIncrement = React.useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleRenderCount = React.useCallback(() => {
    setRenderCount((prev) => prev + 1);
  }, []);

  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">최적화 예제</h1>
          <p className="text-muted-foreground">
            성능 최적화 패턴과 기법들
          </p>
        </div>

        {/* useMemo 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>useMemo</CardTitle>
            <CardDescription>
              복잡한 계산을 메모이제이션하여 성능 개선
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">카운트: {count}</p>
                <Button onClick={() => setCount(count + 1)}>증가</Button>
              </div>
              <ExpensiveComponent count={count} />
              <p className="text-xs text-muted-foreground">
                count가 변할 때만 재계산됩니다. 콘솔을 열어 확인하세요.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* useCallback 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>useCallback</CardTitle>
            <CardDescription>
              콜백 함수를 메모이제이션하여 불필요한 재렌더링 방지
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm font-medium">렌더링 횟수: {renderCount}</p>
              <Button onClick={handleRenderCount}>부모 재렌더링</Button>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  콘솔에서 "CallbackButton 렌더링" 메시지를 확인하세요.
                  useCallback이 없으면 매번 렌더링됩니다.
                </p>
                <CallbackButton onClick={handleIncrement} label="증가" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* React.lazy 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Code Splitting</CardTitle>
            <CardDescription>
              동적 import로 번들 크기 최적화
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <code className="text-xs">
                  const LazyComponent = React.lazy(() =&gt;
                  import('./HeavyComponent'))
                </code>
              </div>
              <p className="text-sm text-muted-foreground">
                필요할 때만 컴포넌트를 로드하여 초기 로딩 시간 단축
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 최적화 체크리스트 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">최적화 체크리스트</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="mt-1">next/image</Badge>
                <div>
                  <p className="text-sm font-medium">이미지 최적화</p>
                  <p className="text-xs text-muted-foreground">
                    자동 포맷 변환, lazy loading, responsive sizing
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="mt-1">next/font</Badge>
                <div>
                  <p className="text-sm font-medium">폰트 최적화</p>
                  <p className="text-xs text-muted-foreground">
                    자체 호스팅, 자동 fallback, zero layout shift
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="mt-1">Dynamic Import</Badge>
                <div>
                  <p className="text-sm font-medium">동적 임포트</p>
                  <p className="text-xs text-muted-foreground">
                    필요한 시점에 코드 로드, 번들 크기 감소
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="mt-1">useMemo/useCallback</Badge>
                <div>
                  <p className="text-sm font-medium">메모이제이션</p>
                  <p className="text-xs text-muted-foreground">
                    불필요한 계산/렌더링 방지, 의존성 배열 관리 필요
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
