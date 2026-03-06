"use client";

import * as React from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ComponentsExample() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">컴포넌트 쇼케이스</h1>
          <p className="text-muted-foreground">
            shadcn UI 컴포넌트들의 다양한 사용 예제
          </p>
        </div>

        {/* Button 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Button</CardTitle>
            <CardDescription>다양한 버튼 스타일</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
              <Button size="lg">Large</Button>
              <Button size="sm">Small</Button>
            </div>
          </CardContent>
        </Card>

        {/* Badge 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Badge</CardTitle>
            <CardDescription>상태 표시 배지</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Dialog 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>모달 다이얼로그</CardDescription>
          </CardHeader>
          <CardContent>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>다이얼로그 열기</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>예제 다이얼로그</DialogTitle>
                  <DialogDescription>
                    Dialog는 중요한 정보나 확인이 필요한 내용을 표시합니다.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 justify-end">
                  <Button
                    variant="outline"
                    onClick={() => setDialogOpen(false)}
                  >
                    취소
                  </Button>
                  <Button onClick={() => setDialogOpen(false)}>확인</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Tabs 예제 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>탭 네비게이션</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">탭 1</TabsTrigger>
                <TabsTrigger value="tab2">탭 2</TabsTrigger>
                <TabsTrigger value="tab3">탭 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p>탭 1의 콘텐츠입니다.</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p>탭 2의 콘텐츠입니다.</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p>탭 3의 콘텐츠입니다.</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Card 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>Card</CardTitle>
            <CardDescription>카드 컴포넌트의 구조</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="text-lg">제목</CardTitle>
                </CardHeader>
                <CardContent>카드의 기본 내용 영역입니다.</CardContent>
              </Card>
              <Card className="bg-muted">
                <CardHeader>
                  <CardTitle className="text-lg">제목</CardTitle>
                </CardHeader>
                <CardContent>카드의 기본 내용 영역입니다.</CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
