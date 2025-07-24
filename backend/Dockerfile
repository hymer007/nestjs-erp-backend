FROM node:18
WORKDIR /app
COPY package*.json ./
# Installiere Nest CLI zusätzlich
RUN npm install -g @nestjs/cli && npm install
COPY . .
RUN npm run build
EXPOSE 3001
CMD ["npm", "run", "start"]
