## 安装

```bash
npm install -g @anthropic-ai/claude-code
```

## 设置秘钥

- 打开(创建)以下文件添加一下内容
  - win: 用户/.claude/settings.json
  - mac: ~/.claude/settings.json

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://api.code-relay.com/",
    "ANTHROPIC_AUTH_TOKEN": "你的API_KEY"
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
