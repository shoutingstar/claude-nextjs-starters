"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-4 md:p-8 max-w-2xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">설정</h1>
          <p className="text-muted-foreground mt-2">
            계정 및 애플리케이션 설정을 관리합니다.
          </p>
        </div>

        {/* 프로필 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>프로필 설정</CardTitle>
            <CardDescription>
              계정 정보를 업데이트합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">이름</Label>
                <Input
                  id="name"
                  placeholder="이름을 입력하세요"
                  defaultValue="김철수"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">이메일</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  defaultValue="chulsu@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">전화번호</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  defaultValue="010-1234-5678"
                  autoComplete="tel"
                />
              </div>

              <Separator />

              <div className="pt-2">
                <Button type="submit">변경사항 저장</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 보안 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>보안 설정</CardTitle>
            <CardDescription>
              계정 보안을 관리합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">현재 비밀번호</Label>
                <Input
                  id="current-password"
                  type="password"
                  placeholder="현재 비밀번호를 입력하세요"
                  autoComplete="current-password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="new-password">새 비밀번호</Label>
                <Input
                  id="new-password"
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  autoComplete="new-password"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirm-password">비밀번호 확인</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="비밀번호를 다시 입력하세요"
                  autoComplete="new-password"
                />
              </div>

              <Separator />

              <div className="pt-2">
                <Button type="submit">비밀번호 변경</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 알림 설정 */}
        <Card>
          <CardHeader>
            <CardTitle>알림 설정</CardTitle>
            <CardDescription>
              알림 수신 방식을 선택합니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted/50">
              <Checkbox id="email-notifications" defaultChecked />
              <div className="flex-1">
                <Label htmlFor="email-notifications" className="cursor-pointer font-medium">
                  이메일 알림
                </Label>
                <p className="text-sm text-muted-foreground">
                  중요한 업데이트는 이메일로 받습니다.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted/50">
              <Checkbox id="marketing-emails" defaultChecked />
              <div className="flex-1">
                <Label htmlFor="marketing-emails" className="cursor-pointer font-medium">
                  마케팅 이메일
                </Label>
                <p className="text-sm text-muted-foreground">
                  새로운 기능 소식 및 특별 혜택을 받습니다.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted/50">
              <Checkbox id="push-notifications" />
              <div className="flex-1">
                <Label htmlFor="push-notifications" className="cursor-pointer font-medium">
                  푸시 알림
                </Label>
                <p className="text-sm text-muted-foreground">
                  브라우저 푸시 알림을 활성화합니다.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-muted/50">
              <Checkbox id="activity-notifications" defaultChecked />
              <div className="flex-1">
                <Label htmlFor="activity-notifications" className="cursor-pointer font-medium">
                  활동 알림
                </Label>
                <p className="text-sm text-muted-foreground">
                  계정 활동 관련 알림을 받습니다.
                </p>
              </div>
            </div>

              <Separator />

              <div className="pt-2">
                <Button type="submit">알림 설정 저장</Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* 위험 구역 */}
        <Card className="border-red-200 bg-red-50/30">
          <CardHeader>
            <CardTitle className="text-red-700">위험 구역</CardTitle>
            <CardDescription>
              계정 관련 위험한 작업입니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-red-700 mb-2">계정 삭제</h4>
              <p className="text-sm text-muted-foreground mb-4">
                이 작업은 되돌릴 수 없습니다. 계정을 삭제하면 모든 데이터가 영구적으로 삭제됩니다.
              </p>
              <Button variant="destructive">계정 삭제</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
