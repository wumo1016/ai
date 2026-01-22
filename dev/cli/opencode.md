## 安装

- [地址](https://opencode.ai/download)

```bash
npm install -g opencode-ai
# npm install -g opencode-windows-x64
# curl -fsSL https://bun.sh/install | bash
```

## 配置文件

- win: 用户/.config/opencode/opencode.json
- mac: ~/.config/opencode/opencode.json

## [安装 opencode-antigravity-auth](https://github.com/NoeFabris/opencode-antigravity-auth)

- 可以添加 antigravity 中的模型免费使用
- 打开 opencode 复制下面这一段执行即可

```sh
Install the opencode-antigravity-auth plugin and add the Antigravity model definitions to ~/.config/opencode/opencode.json by following: https://raw.githubusercontent.com/NoeFabris/opencode-antigravity-auth/dev/README.md
```

- 打开新的命令行窗口, 执行

```sh
opencode auth login
# 翻墙软件开 tun
# 选择 Google
# 选择 OAuth with Google (Altigravity) 直接回车
# 登录谷歌 将生成的 url 粘贴至刚才的命令行
# 选 n
```

## 常用命令

- 按 tab 键: 切换智能体
- `/models`: 选择模型
- `/new`: 创建一个新的 seesion, 相当于一个任务
- `/sessions`: 查看当前 sessions, 可以看到当前所有的任务
- `/share`: 可以将当前对话生成一个网页, 直接在浏览器粘贴地址打开即可
- `/unshare`: 取消分享, 地址就打不开了
- `/export`: 导出当前对话为一个文件
- `/timeline`: 查看当前对话的时间线, 可以选择将对话和修改回退到某个时间点
- `/exit`: 退出
- `/init`: 通读整个项目文件夹, 生成一个 AGENTS.md 它会作为整个系统的提示词
- `/compact`: 压缩之前的对话

## oh-my-opencode

- [地址](https://github.com/code-yeongyu/oh-my-opencode)
  - 安装后会自动使用这个智能体: Sisyphus(西西弗斯)
- 配置文件(可以修改各个智能体的默认配置)
  - win: 用户/.config/opencode/oh-my-opencode.json
  - mac: ~/.config/opencode/oh-my-opencode.json
- 常用命令
  - `@`: 选择一个智能体工作
  - `ulw`: 它会自动选择最适合的智能体工作

## 自定义命令

- 在配置的 opencode 文件夹, 新建一个 command 文件夹
- 新建一个md文件, 文件名就是命令的名称, 内容例如:

```md
---
description: Run tests with coverage
agent: build
model: opencode/glm-4.7-free
---

Run the full test suite with coverage report and show any failures.
Focus on the failing tests and suggest fixes.
```
