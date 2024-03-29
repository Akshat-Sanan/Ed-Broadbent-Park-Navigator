/** @type {import('next').NextConfig} */
// https://www.youtube.com/watch?v=mJuz45RXeXY helped get the github pages deployment fixed
const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/teaching-city-broadbent-park" : "",
  distDir: './out'
};

export default nextConfig;
