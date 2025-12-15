# 尚品汇电商前端项目

## 项目简介

这是一个基于Vue 2的电商平台前端项目，模仿尚品汇商城的页面样式和功能，用于前端开发练习和学习，部分功能可能仅实现了前端页面，未连接真实的后端API。

## 技术栈

- **Vue 2**：前端框架
- **Vue Router**：路由管理
- **Vuex**：状态管理
- **Axios**：HTTP请求
- **Less**：CSS预处理器
- **Lodash**：工具函数库
- **NProgress**：页面加载进度条
- **Vue CLI**：项目构建工具

## 项目结构

```
src/
├── api/             # API请求封装
│   ├── index.js     # 接口函数
│   └── request.js   # Axios配置
├── assets/          # 静态资源
├── components/      # 公共组件
│   ├── MyFooter/    # 页脚组件
│   ├── MyHeader/    # 头部组件
│   └── TypeNav/     # 分类导航组件
├── pages/           # 页面组件
│   ├── MyHome/      # 首页
│   │   ├── Brand/   # 品牌展示
│   │   ├── Floor/   # 楼层展示
│   │   ├── Like/    # 猜你喜欢
│   │   ├── ListContainer/ # 轮播图
│   │   ├── Rank/    # 排行榜
│   │   └── Recommend/ # 推荐商品
│   ├── MyLogin/     # 登录页
│   ├── MyRegister/  # 注册页
│   └── MySearch/    # 搜索页
├── router/          # 路由配置
├── store/           # Vuex状态管理
├── App.vue          # 根组件
└── main.js          # 入口文件
```

## 主要功能

### 公共组件
- **头部导航**：包含Logo、搜索框、购物车、用户中心等
- **分类导航**：展示商品分类菜单
- **页脚信息**：包含网站信息、联系方式等

### 页面功能
- **首页**：
  - 轮播图展示
  - 品牌推荐
  - 商品楼层
  - 热门排行榜
  - 猜你喜欢
  - 限时秒杀推荐

- **登录/注册页**：用户认证功能
- **搜索页**：商品搜索功能


## 学习总结

通过这个项目的开发，我深入学习和实践了以下前端开发技能：

1. **Vue 2框架**：熟练掌握Vue的组件化开发、指令系统、生命周期等核心概念
2. **Vue Router**：实现了单页面应用的路由管理和导航守卫
3. **Vuex**：设计了合理的状态管理方案，实现了组件间的数据共享
4. **Axios**：封装了API请求，处理了请求拦截器和响应拦截器
5. **组件化开发**：将页面拆分为可复用的组件，提高了代码的可维护性
6. **响应式设计**：实现了页面在不同设备上的良好显示效果
7. **CSS预处理器**：使用Less提高了样式编写的效率和可维护性

## 项目截图
<img width="1910" height="925" alt="微信图片_20251215180357_138_6" src="https://github.com/user-attachments/assets/c47068e2-b1f5-4eba-9fc4-cfa809af8464" />
<img width="1910" height="925" alt="微信图片_20251215180357_139_6" src="https://github.com/user-attachments/assets/0567ac2d-ea51-4faf-a1f4-6560ed6c0957" />
<img width="1910" height="925" alt="微信图片_20251215180357_140_6" src="https://github.com/user-attachments/assets/168d7b9a-f431-4ba7-a441-3fc1deca0783" />
<img width="1910" height="925" alt="微信图片_20251215180357_141_6" src="https://github.com/user-attachments/assets/459226b6-4f98-4931-97e2-c114cefead4f" />


