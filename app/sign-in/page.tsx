import { AuthLayout } from "@/components/layout/AuthLayout";
import { AuthForm } from "@/components/shared/AuthForm";

export default function SignInPage() {
  return (
    <AuthLayout
      title="로그인"
      subtitle="계정에 접속하세요"
    >
      <AuthForm type="sign-in" />
    </AuthLayout>
  );
}
