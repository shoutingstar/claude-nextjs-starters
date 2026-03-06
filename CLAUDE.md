# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

모던 Next.js 웹 스타터킷. TypeScript, Tailwind CSS, shadcn UI, react-hook-form, zod를 기반으로 하는 완성도 높은 마케팅/대시보드 템플릿입니다.

**주요 스택:**
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- shadcn UI (Radix UI 기반)
- react-hook-form + zod (폼 검증)
- @tanstack/react-table (데이터 테이블)
- next-themes (다크 모드)
- sonner (토스트 알림)

## 개발 명령어

```bash
# 개발 서버 실행 (포트 3000)
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start

# ESLint 실행
npm run lint
```

## 아키텍처 개요

### 페이지 구조

**마케팅 (공개) 페이지:**
- `/` - 홈 (HeroSection, FeaturesSection, CTASection, StatsSection)
- `/examples/*` - 예제 섹션 (6개 카테고리)

**인증 페이지:**
- `/sign-in` - 로그인
- `/sign-up` - 회원가입

**대시보드 페이지 (보호 예정):**
- `/dashboard` - 메인 대시보드
- `/dashboard/users` - 사용자 목록 (DataTable 예제)
- `/dashboard/analytics` - 분석 대시보드 (차트, 통계)
- `/dashboard/settings` - 설정 (프로필, 보안, 알림, 위험)

### 컴포넌트 계층 구조

```
components/
├── ui/                          # shadcn UI 프리미티브 (Radix UI 래퍼)
│   ├── button, card, badge
│   ├── input, label, form
│   ├── dropdown-menu, sheet, dialog
│   ├── table, tabs, checkbox
│   └── ...기타 UI 컴포넌트
├── layout/                       # Level 1: 레이아웃 컴포넌트
│   ├── Header.tsx               # 글로벌 헤더 (스크롤 감지, 모바일 메뉴)
│   ├── Footer.tsx               # 글로벌 푸터
│   ├── Sidebar.tsx              # 대시보드 사이드바
│   ├── Container.tsx            # max-width 래퍼
│   ├── ThemeProvider.tsx        # next-themes 래퍼
│   ├── MarketingLayout.tsx      # Level 2: Header + main + Footer
│   ├── DashboardLayout.tsx      # Level 2: Sidebar + Header + main
│   └── AuthLayout.tsx           # Level 2: 중앙 정렬 카드
├── sections/                     # Level 3: 섹션 컴포넌트
│   ├── HeroSection.tsx          # 히어로 섹션
│   ├── FeaturesSection.tsx      # 6개 기능 카드
│   ├── CTASection.tsx           # 행동 유도
│   └── StatsSection.tsx         # 통계 카드
├── shared/                       # Level 4: 복합 UI 컴포넌트
│   ├── ModeToggle.tsx           # 다크/라이트 토글
│   ├── AuthForm.tsx             # 로그인/회원가입 폼
│   └── DataTable.tsx            # 데이터 테이블
└── examples/                     # 예제 섹션 컴포넌트
    └── ExamplesSidebar.tsx      # 예제 카테고리 사이드바

app/                             # Next.js App Router
├── layout.tsx                   # 루트 레이아웃 (ThemeProvider, Toaster)
├── page.tsx                     # 홈 페이지
├── sign-in/page.tsx             # 로그인
├── sign-up/page.tsx             # 회원가입
├── not-found.tsx                # 404
├── dashboard/
│   ├── page.tsx                 # 대시보드 홈
│   ├── users/page.tsx           # 사용자 목록
│   ├── analytics/page.tsx       # 분석
│   └── settings/page.tsx        # 설정
└── examples/
    ├── layout.tsx               # 예제 전용 레이아웃
    ├── page.tsx                 # 예제 홈 (카테고리 카드)
    ├── components/page.tsx      # UI 컴포넌트 예제
    ├── forms/page.tsx           # 폼 검증 예제
    ├── layouts/page.tsx         # 레이아웃 패턴
    ├── hooks/page.tsx           # Custom Hooks 예제
    ├── data-fetching/page.tsx   # 데이터 페칭
    └── optimization/page.tsx    # 최적화 기법

lib/
├── utils.ts                     # cn() - Tailwind + clsx 병합
└── validations.ts               # zod 검증 스키마 (signInSchema, signUpSchema)
```

## 주요 설계 패턴

### 1. 폼 검증 (react-hook-form + zod)

**위치:** `lib/validations.ts`

```typescript
// zod 스키마 정의
export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

type SignInInput = z.infer<typeof signInSchema>;
```

**사용:** `components/shared/AuthForm.tsx`에서 `useForm` + zod 리졸버로 폼 검증.

### 2. Tailwind + clsx 병합

**위치:** `lib/utils.ts`

```typescript
export const cn = (...classes: (string | undefined)[]) => {
  return clsx(classes);
};
```

모든 컴포넌트에서 클래스 이름 병합 시 사용.

### 3. 다크 모드 (next-themes)

**위치:** `components/layout/ThemeProvider.tsx`

- `app/layout.tsx`에서 `<ThemeProvider>`로 감싸기
- `<ModeToggle />` 컴포넌트로 토글 UI 제공
- Tailwind의 `dark:` 클래스로 스타일 적용

### 4. 데이터 테이블 (@tanstack/react-table)

**위치:** `components/shared/DataTable.tsx`

- 컬럼 정의, 정렬, 필터링, 페이지네이션 지원
- 제네릭을 이용한 타입 안전 테이블
- 사용 예: `app/dashboard/users/page.tsx`

### 5. 섹션 기반 페이지 구성

마케팅 페이지는 재사용 가능한 섹션 컴포넌트로 조립:
- HeroSection (배너)
- FeaturesSection (기능 카드)
- StatsSection (통계)
- CTASection (행동 유도)

## TypeScript & 코딩 규칙

- **들여쓰기:** 2칸
- **파일명:** PascalCase (컴포넌트), camelCase (유틸리티)
- **변수/함수명:** camelCase (영어)
- **타입 정의:** 명시적 타입 지정 권장
- **주석:** 필요시 한국어로 작성

## Tailwind CSS 사용

**핵심 패턴:**

```tsx
// 기본
<div className="flex items-center gap-4 p-4">

// 반응형
<div className="flex flex-col md:flex-row lg:grid-cols-3">

// 다크 모드
<div className="bg-white dark:bg-slate-900 text-black dark:text-white">

// cn() 함수로 조건부 클래스
<button className={cn("px-4 py-2", isActive && "bg-blue-500")}>
```

**유색 palette:**
- Primary: `blue-*` (주로 500-600)
- Secondary: `slate-*`
- Error: `red-*`
- Success: `green-*`

## shadcn UI 컴포넌트 추가

새 컴포넌트가 필요한 경우:

```bash
npx shadcn@latest add <component-name>
```

현재 추가된 컴포넌트 목록은 `components/ui/` 참조.

## ESLint 설정

- `eslint-config-next` 기반
- TypeScript ESLint 규칙 적용
- `npm run lint`로 검사

## 주의사항

1. **Server/Client Component:** App Router에서 기본은 Server Component. 필요시 `"use client"` 선언.
2. **이미지 최적화:** `next/image` 사용 권장 (automatic optimization).
3. **폰트:** `next/font`로 최적화된 폰트 로딩 (현재 Geist).
4. **API 라우트:** 아직 구현되지 않음. 필요시 `app/api/` 디렉토리에 추가.
5. **인증:** 현재 더미 UI만 있음. 실제 인증 로직 구현 시 JWT/session 선택 필요.

## 참고 자료

- [Next.js 공식 문서](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [react-hook-form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [@tanstack/react-table](https://tanstack.com/table)
- [next-themes](https://github.com/pacocoursey/next-themes)
