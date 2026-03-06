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
import { Input } from "@/components/ui/input";
import { useLocalStorage, useMediaQuery, useToggle, useCounter } from "usehooks-ts";

export default function HooksExample() {
  // useLocalStorage 예제
  const [name, setName] = useLocalStorage("username", "");

  // useMediaQuery 예제
  const isLarge = useMediaQuery("(min-width: 1024px)");

  // useToggle 예제
  const [isOpen, toggleOpen] = useToggle(false);

  // useCounter 예제
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <Container className="py-12">
      <div className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">Hooks 예제</h1>
          <p className="text-muted-foreground">
            usehooks-ts 라이브러리의 유용한 훅들
          </p>
        </div>

        {/* useLocalStorage 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>useLocalStorage</CardTitle>
            <CardDescription>
              로컬스토리지에 상태를 저장하고 불러옵니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium">사용자명</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="사용자명을 입력하세요"
                  className="mt-2"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                입력값이 로컬스토리지에 자동으로 저장됩니다. 페이지를 새로고침해도
                유지됩니다.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* useMediaQuery 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>useMediaQuery</CardTitle>
            <CardDescription>
              화면 크기를 감지하여 반응형 UI를 제어합니다
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-muted rounded-lg">
                <p className="text-sm font-medium">
                  {isLarge ? "✓ 큰 화면" : "✗ 작은 화면"}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  현재 화면 너비: {isLarge ? "1024px 이상" : "1024px 미만"}
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                브라우저 창을 리사이즈하여 감지 상태를 확인하세요.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* useToggle 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>useToggle</CardTitle>
            <CardDescription>토글 상태를 간단하게 관리합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={toggleOpen} variant="outline">
                {isOpen ? "숨기기" : "보이기"}
              </Button>
              {isOpen && (
                <div className="p-4 bg-muted rounded-lg">
                  <p>이 콘텐츠는 토글 상태에 따라 표시됩니다!</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* useCounter 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>useCounter</CardTitle>
            <CardDescription>
              증감 기능이 있는 카운터
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-center">{count}</div>
              <div className="flex gap-2">
                <Button
                  onClick={decrement}
                  variant="outline"
                  disabled={count === 0}
                >
                  -
                </Button>
                <Button onClick={reset} variant="outline" className="flex-1">
                  초기화
                </Button>
                <Button
                  onClick={increment}
                  variant="outline"
                >
                  +
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                상태를 증가하거나 감소시킬 수 있습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
