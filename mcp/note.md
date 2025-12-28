## MCP(Model Context Protocol)简介

### MCP Host

- 能调用 MCP 的软件
  - Cline
  - Cursor
  - Cherry Studio

### Cline

- 基础配置
  - 选择 Bring my own API key
  - 选择 [OpenRouter](https://openrouter.ai/) 去获取 key
  - 然后选择模型 deepseek-chat-v3-0324
  - OpenRouter 中必须先充值, 否则无法使用, 因为 Cline 会携带大量内置提示词超过免费模型的限制
- 配置 Mcp Server
  - Mcp Server => Configure => Configure MCP Servers

### Mcp Server

- 配置示例

```json
{
  "mcpServers": {
    "weather": {
      "disabled": false, // 是否禁用
      "timeout": 60, // 超时时间, 单位秒
      "command": "uv", // 命令
      // 运行命令的参数
      "args": [
        "--directory",
        "E:/wumo/ai/mcp/map-servers/weather",
        "run",
        "index.py"
      ],
      "transportType": "stdio" // 客户端与 Mcp Server 通信方式, 可选值: stdio, sse
    }
  }
}
```

- 启动命令
  - uvx
    - `uv run tool` 的缩写
    - windows 可能找不到命令, 需要写成这样 `C:\\Users\\wumo\\.local\\bin\\uvx.exe`
    - 首次安装一个 tool 可能会比较慢, 可以先手动安装, 比如 `uvx mcp-server-fetch`
  - npx
