# 요구사항

## 프로젝트 목표

Chat GPT와 유사한 채팅 AI Application 구현하는 것입니다.

### 사용하는 기술 스택

- UI라이브러리
  - TailwindCSS: https://tailwindcss.com
  - shadcn/ui : https://ui.shadcn.com
- AI SDK
  - AI SDK: https://ai-sdk.dev/docs/introduction

## 구현 단계

1. 프로젝트 초기 설치 및 라이브러리 셋팅
   Next.js 프로젝트를 생성하고 TypeScript를 적용한다.
   TailwindCSS와 shadcn/ui를 설치 및 초기 설정한다.
   ai-sdk를 설치하고, 환경 변수 파일(.env)을 생성하여 API 키 등 민감 정보를 관리한다.
   프로젝트 구조(폴더 및 파일)를 설계한다.

2. App Router 및 API Router 핸들러 구현
   Next.js의 App Router 기능을 사용하여 라우팅 구조를 설정한다.
   /api/chat 등 API 엔드포인트를 생성한다.
   API 핸들러에서 ai-sdk를 이용해 사용자의 메시지를 AI로 전달하고, AI의 응답을 받아 반환하는 로직을 작성한다.
   에러 처리 및 예외 상황(예: API 키 누락, AI 응답 실패 등)에 대한 핸들링을 구현한다.

3. 프론트엔드와 API 연동
   채팅 입력창, 전송 버튼, 대화 내역 등 기본 UI 컴포넌트를 구현한다.
   사용자가 메시지를 입력하고 전송하면, 프론트엔드에서 API 엔드포인트로 메시지를 전송한다.
   API로부터 받은 AI의 응답을 화면에 표시한다.
   메시지 전송 중 로딩 상태를 UI에 표시한다.
   에러 발생 시 사용자에게 안내 메시지를 표시한다.

4. UI 컴포넌트 고도화 및 UX 개선
   사용자와 AI의 메시지를 시각적으로 구분(말풍선 색상, 정렬 등)한다.
   반응형 디자인을 적용하여 다양한 기기에서 사용 가능하도록 한다.
   대화 내역이 스크롤되도록 처리한다.
   shadcn/ui 컴포넌트를 활용해 UI를 개선한다.
   UI Reference: https://www.google.com/url?sa=i&url=https%3A%2F%2Ffigmaelements.com%2Fchat-app%2F&psig=AOvVaw0lKPe83M5uVAolH-SKxrYk&ust=1753344290767000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCMij7vrC0o4DFQAAAAAdAAAAABAM

5. Vercel 배포
   환경 변수 및 배포 설정을 점검한다.
   Vercel에 프로젝트를 배포한다.
   배포 후 실제 서비스에서 정상 동작하는지 테스트한다.
