import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Container } from "@/components/layout/Container";
import { StatsSection } from "@/components/sections/StatsSection";
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

// 더미 데이터
const recentTransactions = [
  {
    id: "1",
    user: "김철수",
    email: "chulsu@example.com",
    amount: "$100",
    status: "완료",
  },
  {
    id: "2",
    user: "이영희",
    email: "younghee@example.com",
    amount: "$230",
    status: "대기",
  },
  {
    id: "3",
    user: "박민준",
    email: "minjun@example.com",
    amount: "$540",
    status: "완료",
  },
  {
    id: "4",
    user: "정수현",
    email: "suhyun@example.com",
    amount: "$350",
    status: "실패",
  },
  {
    id: "5",
    user: "최지은",
    email: "jieun@example.com",
    amount: "$120",
    status: "완료",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "완료":
      return "bg-green-100 text-green-800";
    case "대기":
      return "bg-yellow-100 text-yellow-800";
    case "실패":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-4 md:p-8">
        {/* 통계 섹션 */}
        <StatsSection />

        {/* 최근 거래 */}
        <Card>
          <CardHeader>
            <CardTitle>최근 거래</CardTitle>
            <CardDescription>
              최근 거래 내역을 확인하세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>사용자</TableHead>
                    <TableHead>이메일</TableHead>
                    <TableHead>금액</TableHead>
                    <TableHead>상태</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">
                        {transaction.user}
                      </TableCell>
                      <TableCell>{transaction.email}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={getStatusColor(transaction.status)}>
                          {transaction.status}
                        </Badge>
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
