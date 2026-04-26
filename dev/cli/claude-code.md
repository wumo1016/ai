## 安装

```bash
# 先卸载
npm uninstall -g @anthropic-ai/claude-code
npm install -g @anthropic-ai/claude-code
```

## 设置秘钥

- 打开(创建)以下文件添加一下内容
  - win: 用户/.claude/settings.json
  - mac: ~/.claude/settings.json
- 配置注释
  - env
    - ANTHROPIC_BASE_URL: 模型 api 地址
    - ANTHROPIC_AUTH_TOKEN: 从 bigmodel.cn 获取的 api key
    - ANTHROPIC_DEFAULT_HAIKU_MODEL: Haiku 是 Claude 系列中速度最快、成本最低的轻量级模型，通常用于处理简单任务
    - ANTHROPIC_DEFAULT_SONNET_MODEL: Sonnet 是 Claude 的“主力”模型，平衡了智能与速度
    - ANTHROPIC_DEFAULT_OPUS_MODEL: Opus 是 Claude 系列中最强大、最智能的模型，用于处理复杂推理任务
    - ANTHROPIC_MAX_TOKENS: 模型单次回复的最大生成长度
    - ANTHROPIC_TIMEOUT_MS: 请求的超时时间，单位是毫秒
    - CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC: 禁用非必要的流量
- 配置文件示例(不可以有注释)

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://open.bigmodel.cn/api/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "你的 api key",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "glm-5.1",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "glm-5.1",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "glm-5.1",
    "ANTHROPIC_MAX_TOKENS": "3200000",
    "ANTHROPIC_TIMEOUT_MS": "3000000",
    "CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC": "1"
  }
}
```

## 修改配置跳过 claude code 的登录

- 打开以下文件以下内容
  - win: 用户/.claude.json
  - mac: ~/.claude.json

```json
{
  "hasCompletedOnboarding": true
}
```

## 启动

- `claude`
  - 参数
    - `--dangerously-skip-permissions`: 跳过权限检测
    - `-c`: 启动并自动恢复上一次的对话
    - `-p [问题]`: 一次性问答

## 三种模式(shift + tab 切换模式)

- 默认模式
  - `? for shortcuts`
  - 修改文件前会询问用户
- 自动模式
  - `accept edits on`
  - 不会询问用户, 直接修改文件
- 规划模式
  - `plan mode on`
  - 只讨论, 不会修改文件

## 常用命令

- `/init`: 通读整个项目文件夹, 生成一个 CLAUDE.md 它会作为整个系统的提示词
- `/status`: 查看当前状态
- `!`: 进入 bash 模式
- `/compact`: 压缩之前的对话
  - 后面可以添加压缩的需求, 例如: 重点保护用户的需求
- `/clear`: 清空之前的对话上下文
- `/tasks`: 查看当前任务
- `/rewind`: 回滚到上一个任务
  - 按两次 `Esc` 可以指定回滚到哪个任务
  - 回滚选项
    - 回滚 会话+代码
    - 回滚 会话
    - 回滚 代码
    - 放弃
- `/ide`: 将终端与编辑器连接(首先需要在编辑器中安装 `claude-code` 插件)
  - 编辑器中选择的代码会显示在终端中
  - 它修改代码时可以将变更显示在编辑器中
- `/resume`: 回到之前的对话
- `/mcp`: 查看安装的 mcp
- `/memory`: 编辑规则文件
- `/hooks`: 一些 hook 函数
- `/agents`
  - `Create new agent`: 创建一个新的智能体
- `/[Skill 名称] [参数]`: 调用一个 skill
- `/plugin`: 插件相关
- `/permissions`
  - `Allow`: 允许一些权限
  - `Deny`: 拒绝一些权限
- `/export`: 导出当前对话

## mcp

- `claude mcp add [mcp名称] -- npx [mcp包名]`: 添加一个 mcp
- `claude mcp remove [mcp名称]`: 移除一个 mcp

## hooks

<!-- .claude/settings.json -->

```json
{
  "hooks": {
    // PreToolUse: 工具使用前触发
    // PostToolUse: 工具使用后触发
    // Notification: 通知时触发
    "PostToolUse": [
      "matcher": "Edit|MultiEdit|Write",
      "hooks": [
        "type": "command",
        "command": "npx prettier --check ."
      ]
    ]
  }
}
```

## Sub Agent

## plugin

- 将 map、hook、skill、sub agent 等能力打包成一个插件, 安装插件可以直接使用它的所有能力

## 自定义命令

## 开发技巧

- 添加选择的文件/代码到当前对话
  - win: Ctrl+Alt+K
  - mac: Cmd+Alt+K
