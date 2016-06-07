FROM nodesource/node:6.2

RUN npm install nodemon -g
RUN mkdir /src
WORKDIR /src
ADD package.json package.json  
RUN npm install