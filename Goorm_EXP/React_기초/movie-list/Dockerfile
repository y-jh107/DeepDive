# 1. Node.js 이미지
FROM node:18-alpine

# 2. 컨테이너 작업 디렉토리
WORKDIR /app

# 3. 패키지 정보 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 나머지 소스 코드 복사
COPY . .

# 6. Next.js 포트 개방
EXPOSE 3000

# 7. Next.js 실행
CMD ["npm", "run", "dev"]
