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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function DataFetchingExample() {
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      if (!response.ok) throw new Error("데이터를 불러올 수 없습니다");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "오류가 발생했습니다");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">데이터 패칭 예제</h1>
          <p className="text-muted-foreground">
            클라이언트 사이드에서 API 데이터를 불러오기
          </p>
        </div>

        {/* useState + useEffect 패칭 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>클라이언트 사이드 패칭</CardTitle>
            <CardDescription>
              useState와 useEffect를 사용한 데이터 패칭
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button onClick={fetchPosts} disabled={isLoading}>
                {isLoading ? "로딩 중..." : "게시물 불러오기"}
              </Button>

              {error && (
                <div className="p-4 bg-destructive/10 border border-destructive rounded-lg text-destructive text-sm">
                  오류: {error}
                </div>
              )}

              {posts.length > 0 && (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>제목</TableHead>
                        <TableHead>본문</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {posts.map((post) => (
                        <TableRow key={post.id}>
                          <TableCell className="font-medium">
                            {post.id}
                          </TableCell>
                          <TableCell>{post.title}</TableCell>
                          <TableCell className="max-w-md truncate">
                            {post.body}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}

              {!isLoading && posts.length === 0 && !error && (
                <p className="text-sm text-muted-foreground text-center py-8">
                  "게시물 불러오기" 버튼을 클릭하세요.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 데이터 패칭 패턴 설명 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">패턴</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium mb-2">✓ 클라이언트 사이드 패칭</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>버튼 클릭 등 사용자 인터랙션 후 데이터 로드</li>
                  <li>로딩, 에러 상태 관리 필요</li>
                  <li>기민한 UX 제공 가능</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">✓ API 데이터</p>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    JSONPlaceholder 같은 공개 API 사용 (테스트 목적)
                  </li>
                  <li>실제 환경에서는 백엔드 API 사용</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
