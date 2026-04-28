const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    "postcss-mobile-forever": {
      viewportWidth: 375, // 设计稿宽度
      propList: ['*'],     // 转换所有属性
    },
  },
};

export default config;
