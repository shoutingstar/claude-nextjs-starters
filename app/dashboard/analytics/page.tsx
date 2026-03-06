"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// 통계 카드 데이터
const stats = [
  {
    title: "월 방문자",
    value: "12,543",
    description: "지난달 대비 +2.5%",
    color: "text-blue-600",
  },
  {
    title: "전환율",
    value: "3.24%",
    description: "지난달 대비 +0.8%",
    color: "text-green-600",
  },
  {
    title: "평균 세션 시간",
    value: "4m 32s",
    description: "지난달 대비 -0.3%",
    color: "text-purple-600",
  },
  {
    title: "총 수익",
    value: "$45,231.89",
    description: "지난달 대비 +12.3%",
    color: "text-orange-600",
  },
];

// 일별 트래픽 데이터
const trafficData = [
  { date: "3월 1일", visits: "2,841", users: "1,234", bounceRate: "24.5%" },
  { date: "3월 2일", visits: "2,934", users: "1,456", bounceRate: "23.8%" },
  { date: "3월 3일", visits: "3,120", users: "1,678", bounceRate: "22.1%" },
  { date: "3월 4일", visits: "3,045", users: "1,543", bounceRate: "24.2%" },
  { date: "3월 5일", visits: "3,267", users: "1,789", bounceRate: "21.5%" },
  { date: "3월 6일", visits: "3,512", users: "1,923", bounceRate: "20.8%" },
];

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8 p-4 md:p-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">분석</h1>
          <p className="text-muted-foreground mt-2">
            웹사이트의 성과를 분석하고 모니터링합니다.
          </p>
        </div>

        {/* 통계 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 일별 트래픽 */}
        <Card>
          <CardHeader>
            <CardTitle>일별 트래픽</CardTitle>
            <CardDescription>
              최근 6일간의 방문자 및 세션 통계입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>날짜</TableHead>
                    <TableHead>방문 수</TableHead>
                    <TableHead>사용자 수</TableHead>
                    <TableHead>이탈율</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {trafficData.map((data, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{data.date}</TableCell>
                      <TableCell>{data.visits}</TableCell>
                      <TableCell>{data.users}</TableCell>
                      <TableCell>
                        <Badge variant="outline">
                          {data.bounceRate}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* 인사이트 */}
        <Card>
          <CardHeader>
            <CardTitle>인사이트</CardTitle>
            <CardDescription>
              데이터 기반 권장사항
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-3 rounded-md bg-blue-50 border border-blue-200">
              <p className="text-sm font-medium text-blue-900">
                📈 트래픽 증가 추세
              </p>
              <p className="text-sm text-blue-700 mt-1">
                지난 6일 동안 일일 방문자가 23% 증가했습니다. 이는 마케팅 캠페인의 긍정적 효과입니다.
              </p>
            </div>
            <div className="p-3 rounded-md bg-amber-50 border border-amber-200">
              <p className="text-sm font-medium text-amber-900">
                ⚠️ 이탈율 개선 권장
              </p>
              <p className="text-sm text-amber-700 mt-1">
                평균 이탈율이 23%입니다. 페이지 로딩 속도 최적화를 통해 개선할 수 있습니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
