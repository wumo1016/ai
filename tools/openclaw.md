## 安装

- [地址](https://openclaw.ai/)
- 环境要求
  - node22+
- [skills市场](https://clawhub.ai/skills)

## 初始化

- 启动 `openclaw onboard`

## 常用命令

- `openclaw gateway`: 启动主程序
  - `打开浏览器`: `http://127.0.0.1:18789/overview`
- `openclaw gateway stop`: 停止主程序

## 主要配置(.openclaw)

- workspace
  - AGENTS.md: 工作规范
  - HEARTBEAT.md: 心跳机制
  - IDENTITY.md: 自我认知
  - USER.md: 对用户的认知
  - TOOLS.md: 工具调用知识
  - MEMORY.md: 长期记忆
  - memory(文件夹): 短期记忆

## 关联飞书

- 打开飞书创建应用
  - [地址](https://open.feishu.cn/app)
  - 创建自用应用
- 安装插件
  - `openclaw plugins install @m1heng-clawd/feishu`
- 配置 AppId
  - `openclaw config set channels.feishu.appId "[appId]"`
- 配置 AppSecret
  - `openclaw config set channels.feishu.appSecret "[appSecret]"`
- 开启飞书 Channels
  - `openclaw config set channels.feishu.enabled true`
- 将通信方式设置为 WebSocket
  - `openclaw config set channels.feishu.connectionMode websocket`
- 重启主程序
  - `openclaw gateway`
