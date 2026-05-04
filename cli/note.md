## 工具

- [CLI-Anything](https://github.com/HKUDS/CLI-Anything/blob/main/README_CN.md)
- [opencli](https://github.com/jackwener/opencli/blob/main/README.zh-CN.md)

## MCP vs CLI 对比

|            | MCP                       | CLI                               |
| ---------- | ------------------------- | --------------------------------- |
| 上下文占用 | 高                        | 低                                |
| 适用方     | Agent专用协议<br>难以调试 | 同时对人类跟Agent友好<br>方便调试 |
| 可组合性   | 差                        | 支持管道符                        |
| 安装规范   | 标准化安装包              | 无                                |
| 鉴权规范   | 有                        | 无                                |
| 安全性     | 更可控, 更安全            | 无                                |

## 工具

- [playwright](https://playwright.dev/)
  - 简介: 用于浏览器自动化, 实无头浏览器操作
  - 安装: `npm install -g @playwright/cli@latest`
  - 参数:
    - `--headed`: 有头浏览器
    - `--persistent`: 保持持久化, 将登录信息保存到本地磁盘等
  - 常用命令:
    - `playwright-cli open google.com --headed --persistent`: 打开有头浏览器
    - `playwright-cli install --skills`: 在指定文件夹下安装 skills
