# 프로젝트 코드 리뷰 메모리

## 프로젝트 개요
- **프레임워크**: Next.js 16.1.6 (App Router)
- **상태**: 완성도 높은 스타터킷 (프로덕션 레디)
- **주요 기능**: 마케팅 페이지 + 인증 UI + 대시보드 (예제)

## 발견된 아키텍처 패턴

### 강점
1. **명확한 계층 구조**: UI → 섹션 → 레이아웃 → 페이지로 잘 구성됨
2. **Server/Client Component 적절한 분리**:
   - 레이아웃 & 섹션: Server Components (기본)
   - 인터랙티브 요소: Client Components ("use client" 명시)
3. **타입 안전성 우수**: TypeScript strict 모드, zod 검증 스키마
4. **일관된 디자인 시스템**: Tailwind CSS + shadcn UI 통합
5. **폼 검증 완벽**: react-hook-form + zod 패턴

## 발견된 문제점

### 심각한 문제
1. **Tailwind 클래스 하드코딩**:
   - `dashboard/page.tsx`: getStatusColor(), getRoleColor() 함수에서 하드코딩된 클래스 사용
   - 반응성 낮음, 유지보수 어려움

2. **타입 안전성 부족**:
   - AuthForm: `SignInInput | SignUpInput` 유니온 타입으로 각 필드 구분 불명확
   - DataTable: 제네릭은 있지만 실제 사용 시 타입 검증 미흡
   - 대시보드 페이지들에서 상태 타입이 string으로만 정의됨

3. **인덱스 키 사용**:
   - FeaturesSection, StatsSection, 각 대시보드 페이지에서 map의 인덱스를 key로 사용
   - 동적 추가/삭제 시 버그 유발 가능

4. **폼 검증 미흡**:
   - SettingsPage: 폼이 검증 없이 기본 HTML form으로 작성
   - 대시보드 pages: 더미 데이터만 있고 실제 상태 관리 없음

### 개선 권고

1. **CSS 클래스 추상화**:
   - 상태별 스타일을 상수나 객체로 관리할 것
   - 예: `const STATUS_STYLES = { 완료: "...", 대기: "...", ... }`

2. **타입 정의 강화**:
   - Union 타입을 구체적 타입으로 분리
   - 대시보드 상태들을 enum으로 정의

3. **Key prop 수정**:
   - 고유 ID 필드 사용 (없으면 uuid 추가)
   - 인덱스는 마지막 수단으로만 사용

4. **폼 상태 관리 통일**:
   - 모든 폼을 react-hook-form으로 통합
   - SettingsPage도 폼 검증 추가

## 성능 최적화 기회

1. 대시보드 테이블들: @tanstack/react-table 활용 가능 (현재는 수동 테이블)
2. 이미지 최적화: next/image 고려 (로고 등)
3. 컴포넌트 메모이제이션: Header 네비게이션 아이템 (현재 부분적)

## Tailwind CSS 사용 패턴

모든 파일에서 일관적으로 다음 패턴 사용:
- `cn()` 함수로 조건부 클래스 병합
- 반응형: `md:` `lg:` 프리픽스 활용
- 다크 모드: `dark:` 프리픽스 활용 (globals.css에 oklch 색상 정의)

## 코딩 스타일 준수 상황

✅ 2칸 들여쓰기: 100% 준수
✅ TypeScript: 전수
✅ Tailwind CSS: 100% 활용
✅ shadcn UI: 적절히 활용
✅ react-hook-form + zod: 폼 검증에만 사용 (확장 필요)
⚠️ 파일명: 대부분 준수하지만 일부 확인 필요

## 다음 리뷰 시 확인사항

1. 새로운 페이지 추가 시 Server/Client Component 분리 확인
2. 상태 스타일은 항상 추상화된 형태로 관리
3. Map key는 인덱스 대신 고유 ID 사용
4. 폼 추가 시 react-hook-form + zod 필수 적용
