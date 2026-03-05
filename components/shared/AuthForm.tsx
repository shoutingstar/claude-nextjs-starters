"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Link from "next/link";
import {
  signInSchema,
  signUpSchema,
  type SignInInput,
  type SignUpInput,
} from "@/lib/validations";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type AuthFormType = "sign-in" | "sign-up";

interface AuthFormProps {
  type: AuthFormType;
}

export function AuthForm({ type }: AuthFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);

  const schema = type === "sign-in" ? signInSchema : signUpSchema;
  const form = useForm<SignInInput | SignUpInput>({
    resolver: zodResolver(schema),
    defaultValues:
      type === "sign-in"
        ? {
            email: "",
            password: "",
          }
        : {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          },
  });

  const onSubmit = async (data: SignInInput | SignUpInput) => {
    setIsLoading(true);
    try {
      // 실제 구현 전 더미 처리
      console.log("Form data:", data);
      toast.success(
        type === "sign-in"
          ? "로그인되었습니다!"
          : "회원가입이 완료되었습니다!"
      );
    } catch (error) {
      toast.error("오류가 발생했습니다");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 회원가입 - 이름 필드 */}
        {type === "sign-up" && (
          <FormField
            control={form.control}
            name="name"
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
        )}

        {/* 이메일 필드 */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>이메일</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="example@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 비밀번호 필드 */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>비밀번호</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* 회원가입 - 비밀번호 확인 필드 */}
        {type === "sign-up" && (
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="••••••" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* 제출 버튼 */}
        <Button
          type="submit"
          className="w-full"
          disabled={isLoading}
        >
          {isLoading
            ? "처리 중..."
            : type === "sign-in"
              ? "로그인"
              : "회원가입"}
        </Button>

        {/* 하단 링크 */}
        <div className="text-center text-sm">
          {type === "sign-in" ? (
            <>
              <span className="text-muted-foreground">계정이 없으신가요? </span>
              <Link href="/sign-up" className="text-primary hover:underline">
                회원가입
              </Link>
            </>
          ) : (
            <>
              <span className="text-muted-foreground">이미 계정이 있으신가요? </span>
              <Link href="/sign-in" className="text-primary hover:underline">
                로그인
              </Link>
            </>
          )}
        </div>
      </form>
    </Form>
  );
}
