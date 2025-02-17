# Use imagem base
FROM node:18-alpine3.20

# Definindo diretório dentro da vm container
WORKDIR /usr/src/app

# Copiando arquivos necessários
COPY . .

# Instalando dependências
RUN npm install

# Convertendo ts para js
RUN npm run build

# Mostrando a porta que a aplicação vai usar
EXPOSE 3333

# Comando para dodar a aplicação
CMD ["npm", "start"]