FROM oven/bun:1.1.19

WORKDIR /my-project

# Copy the lock and package file
COPY bun.lockb . 
COPY package.json .

# Copy the config files
COPY tailwind.config.ts ./
COPY postcss.config.mjs ./
COPY next.config.mjs ./

RUN bun install

# Bundle app source
COPY . .

# RUN the build
# RUN bun build --outfile cli
# CMD ["bun", "cli"]

CMD ["bun", "run", "start"]