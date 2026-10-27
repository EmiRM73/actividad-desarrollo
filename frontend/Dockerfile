FROM node:20-alpine

WORKDIR /app

# Instalar pnpm globalmente
RUN npm install -g pnpm

# Copiar configuración de dependencias
COPY package.json ./

# Instalar dependencias
RUN pnpm install

# Copiar el código fuente
COPY . .

EXPOSE 5173

CMD ["pnpm", "dev", "--host"]

