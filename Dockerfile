# 베이스 이미지
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /jejutravel-front

# package.json 복사
COPY package*.json ./

# npm 캐시 설정 후 의존성 설치
RUN npm config set cache /tmp/npm-cache --global \
    && npm install --legacy-peer-deps

# 소스 복사
COPY . .

# Vite 포트 노출
EXPOSE 5173

# 실행 명령
CMD ["npm", "run", "dev"]
