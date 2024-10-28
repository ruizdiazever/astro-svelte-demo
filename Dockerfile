FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN apt-get update && apt-get upgrade -y && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN apt-get install curl -y

SHELL ["/bin/bash", "--login", "-i", "-c"]
RUN curl -fsSL https://bun.sh/install | bash

RUN bun install --force
RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=4322
EXPOSE 4322

CMD ["node", "./dist/server/entry.mjs"]
