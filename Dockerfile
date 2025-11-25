# 1️⃣ Build Stage (M1 → EC2 호환)
FROM --platform=linux/amd64 node:20-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# package.json과 lock 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install --legacy-peer-deps

# 소스 복사 후 빌드
COPY . .
RUN npm run build


# 2️⃣ Serve Stage (빌드된 정적 파일 서빙)
FROM --platform=linux/amd64 node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# serve 패키지 전역 설치
RUN npm install -g serve

# builder에서 빌드된 결과만 복사
COPY --from=builder /app/dist ./dist

# Vite 기본 포트
EXPOSE 5173

# 정적 파일 실행 명령
CMD ["serve", "-s", "dist", "-l", "5173"]
