FROM node:22-alpine

WORKDIR /app

COPY package.json .

COPY pnpm-lock.yaml .

COPY pnpm-workspace.yaml .

RUN npm install -g pnpm@latest-10

RUN pnpm install --prod

COPY . .

CMD [ "node", "src/index" ]