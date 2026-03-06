import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 정적 내보내기 (Static Export) 활성화
  output: "export",

  // 이미지 최적화 비활성화 (정적 배포에서 next/image 최적화 불가)
  images: {
    unoptimized: true,
  },

  // GitHub Pages 프로젝트 페이지 배포용 basePath
  basePath: "/claude-nextjs-starters",
};

export default nextConfig;
