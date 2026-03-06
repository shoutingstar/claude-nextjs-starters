"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// 더미 데이터
const users = [
  {
    id: "1",
    name: "김철수",
    email: "chulsu@example.com",
    role: "관리자",
    status: "활성",
    joinDate: "2024-01-15",
  },
  {
    id: "2",
    name: "이영희",
    email: "younghee@example.com",
    role: "사용자",
    status: "활성",
    joinDate: "2024-02-20",
  },
  {
    id: "3",
    name: "박민준",
    email: "minjun@example.com",
    role: "에디터",
    status: "비활성",
    joinDate: "2024-03-10",
  },
  {
    id: "4",
    name: "정수현",
    email: "suhyun@example.com",
    role: "사용자",
    status: "활성",
    joinDate: "2024-01-25",
  },
  {
    id: "5",
    name: "최지은",
    email: "jieun@example.com",
    role: "관리자",
    status: "활성",
    joinDate: "2024-02-05",
  },
  {
    id: "6",
    name: "한우진",
    email: "woojin@example.com",
    role: "사용자",
    status: "활성",
    joinDate: "2024-03-01",
  },
];

const getRoleColor = (role: string) => {
  switch (role) {
    case "관리자":
      return "bg-purple-100 text-purple-800";
    case "에디터":
      return "bg-blue-100 text-blue-800";
    case "사용자":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "활성":
      return "bg-green-100 text-green-800";
    case "비활성":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function UsersPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-4 md:p-8">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">사용자 관리</h1>
            <p className="text-muted-foreground mt-2">
              시스템의 모든 사용자를 관리하고 모니터링합니다.
            </p>
          </div>
          <Button>새 사용자 추가</Button>
        </div>

        {/* 사용자 테이블 */}
        <Card>
          <CardHeader>
            <CardTitle>사용자 목록</CardTitle>
            <CardDescription>
              총 {users.length}명의 사용자가 등록되어 있습니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>이름</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>역할</TableHead>
                    <TableHead>상태</TableHead>
                    <TableHead>가입 날짜</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">
                        {user.name}
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {user.joinDate}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
