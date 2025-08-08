# 使用 Node 官方长期支持版本
FROM node:20

# 设置工作目录
WORKDIR /app

# 先复制依赖文件（加快构建速度）
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目所有文件
COPY . .

# 暴露 Vite 默认端口
EXPOSE 5173

# 启动 Vite 开发服务器（监听所有主机，方便跨设备访问）
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
