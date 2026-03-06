import { Container } from "@/components/layout/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LayoutsExample() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-2">레이아웃 예제</h1>
          <p className="text-muted-foreground">
            CSS Grid와 Flexbox를 사용한 다양한 레이아웃
          </p>
        </div>

        {/* Grid 2열 레이아웃 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grid 2열 레이아웃</CardTitle>
            <CardDescription>grid-cols-2를 사용한 2열 그리드</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 1
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 2
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 3
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 4
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Grid 3열 레이아웃 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Grid 3열 레이아웃</CardTitle>
            <CardDescription>
              md:grid-cols-3을 사용한 반응형 3열 그리드
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 1
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 2
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 3
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 4
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 5
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg h-32 flex items-center justify-center">
                아이템 6
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 비대칭 레이아웃 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>비대칭 레이아웃</CardTitle>
            <CardDescription>col-span을 사용한 다양한 크기</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-2 bg-purple-100 dark:bg-purple-900 p-4 rounded-lg h-32 flex items-center justify-center">
                크기 2 (col-span-2)
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg h-32 flex items-center justify-center">
                크기 1
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-lg h-32 flex items-center justify-center">
                크기 1
              </div>
              <div className="col-span-2 bg-purple-100 dark:bg-purple-900 p-4 rounded-lg h-32 flex items-center justify-center">
                크기 2 (col-span-2)
              </div>
              <div className="col-span-2 bg-purple-100 dark:bg-purple-900 p-4 rounded-lg h-32 flex items-center justify-center">
                크기 2 (col-span-2)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Flexbox 레이아웃 */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Flexbox 레이아웃</CardTitle>
            <CardDescription>flex를 사용한 유연한 배치</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* 행 정렬 */}
              <div>
                <p className="text-sm font-medium mb-2">행 정렬 (justify-between)</p>
                <div className="flex justify-between gap-4">
                  <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg flex-1 h-20 flex items-center justify-center">
                    좌측
                  </div>
                  <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-lg flex-1 h-20 flex items-center justify-center">
                    우측
                  </div>
                </div>
              </div>

              {/* 열 정렬 */}
              <div>
                <p className="text-sm font-medium mb-2">열 정렬 (flex-col)</p>
                <div className="flex flex-col gap-2">
                  <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg h-16 flex items-center justify-center">
                    상단
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg h-16 flex items-center justify-center">
                    중단
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900 p-4 rounded-lg h-16 flex items-center justify-center">
                    하단
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 반응형 레이아웃 */}
        <Card>
          <CardHeader>
            <CardTitle>반응형 레이아웃</CardTitle>
            <CardDescription>화면 크기에 따라 변하는 레이아웃</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg h-24 flex items-center justify-center">
                1열
              </div>
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg h-24 flex items-center justify-center">
                2열
              </div>
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg h-24 flex items-center justify-center">
                3열
              </div>
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-lg h-24 flex items-center justify-center">
                4열
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              모바일(1열) → 태블릿(2열) → 데스크톱(4열)으로 변환됩니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
