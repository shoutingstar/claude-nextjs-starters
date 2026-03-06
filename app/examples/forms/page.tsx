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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

// 폼 검증 스키마
const exampleFormSchema = z.object({
  fullName: z.string().min(2, "이름은 최소 2자 이상이어야 합니다"),
  email: z.string().email("유효한 이메일을 입력하세요"),
  message: z.string().min(10, "메시지는 최소 10자 이상이어야 합니다"),
  subscribe: z.boolean(),
  terms: z.boolean().refine((val) => val === true, "약관에 동의해야 합니다"),
});

type ExampleFormValues = z.infer<typeof exampleFormSchema>;

export default function FormsExample() {
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<ExampleFormValues>({
    resolver: zodResolver(exampleFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      subscribe: false,
      terms: false,
    },
  });

  async function onSubmit(data: ExampleFormValues) {
    setIsLoading(true);
    // API 호출 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    toast.success("폼이 성공적으로 제출되었습니다!");
    setIsLoading(false);
    form.reset();
  }

  return (
    <Container className="py-12">
      <div className="max-w-2xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">폼 예제</h1>
          <p className="text-muted-foreground">
            react-hook-form과 zod를 사용한 폼 검증
          </p>
        </div>

        {/* 기본 폼 예제 */}
        <Card>
          <CardHeader>
            <CardTitle>연락처 폼</CardTitle>
            <CardDescription>
              여러 필드 타입과 검증 규칙을 포함하는 폼 예제
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* 이름 필드 */}
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이름</FormLabel>
                      <FormControl>
                        <Input placeholder="홍길동" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 이메일 필드 */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="example@email.com"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 메시지 필드 */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>메시지</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="메시지를 입력하세요"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        메시지는 최소 10자 이상이어야 합니다.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* 구독 체크박스 */}
                <FormField
                  control={form.control}
                  name="subscribe"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">
                        뉴스레터 구독
                      </FormLabel>
                    </FormItem>
                  )}
                />

                {/* 약관 동의 */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-center gap-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="!mt-0 cursor-pointer">
                        약관에 동의합니다
                      </FormLabel>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" disabled={isLoading} className="w-full">
                  {isLoading ? "제출 중..." : "제출"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* 폼 구조 설명 */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">구조</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                <strong>useForm:</strong> react-hook-form 훅으로 폼 상태 관리
              </p>
              <p>
                <strong>zodResolver:</strong> zod 스키마를 resolver로 사용
              </p>
              <p>
                <strong>FormField:</strong> 각 필드를 컨트롤러로 감싼 컴포넌트
              </p>
              <p>
                <strong>검증:</strong> 실시간 검증 및 에러 메시지 표시
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
