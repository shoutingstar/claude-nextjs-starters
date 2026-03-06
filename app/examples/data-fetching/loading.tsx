import { Container } from "@/components/layout/Container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl">
        <div className="mb-12">
          <div className="h-10 w-48 bg-muted rounded-lg animate-pulse" />
          <div className="h-5 w-96 bg-muted rounded-lg animate-pulse mt-4" />
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="h-6 w-40 bg-muted rounded-lg animate-pulse" />
            <div className="h-4 w-60 bg-muted rounded-lg animate-pulse mt-3" />
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="h-4 w-32 bg-muted rounded-lg animate-pulse" />
              <div className="h-32 w-full bg-muted rounded-lg animate-pulse" />
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
