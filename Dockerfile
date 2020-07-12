FROM node:12.18.0-alpine3.10

# 设置时区
RUN rm -rf /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

#RUN npm config set registry https://registry.npm.taobao.org

WORKDIR /opt/bin/dc-pool-cms-servicer

# install dependencies
#COPY package.json .
#COPY package-lock.json .
#RUN npm install

COPY . .
EXPOSE 7001
CMD [ "npm", "start" ]
