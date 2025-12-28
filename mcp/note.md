## MCP(Model Context Protocol)简介

- 一个通信协议, 用于 Agent 与工具之间的交互, 规定了 MCP Server 和 MCP Client 之间的通信格式
- 组成
  - MCP Server: 运行 Tool 的服务
  - MCP Client: 调用 MCP Server 的 Agent

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

## 创建一个 Mcp Server

```sh
# 初始化项目
uv init weather
# 新建一个虚拟环境, 防止与其他项目的依赖冲突
uv venv

# 进入虚拟环境(win)
.\.venv\Scripts\Activate.ps1
# 进入虚拟环境(mac)
source .venv/bin/activate
# 安装依赖
uv add mcp "map[cli]" httpx
```

## Function Calling

- 统一格式、规范调用
- System Prompt 的升级(从语义化描述到结构化描述)
- 缺点
  - 没有统一的标准, 每家大厂都有自己的实现方式
- 例如将每个 Tool 都使用 JSON 格式进行定义
  ```json 请求格式
  {
    "name": "calculator",
    "description": "用于计算表达式",
    "parameters": {
      "type": "object",
      "properties": {
        "expression": {
          "type": "string",
          "description": "要计算的表达式"
        }
      },
      "required": ["expression"]
    }
  }
  ```
  ```json 响应格式
  {
    "name": "calculator",
    "description": "用于计算表达式",
    "parameters": {
      "type": "object",
      "properties": {
        "result": {
          "type": "string",
          "description": "表达式的计算结果"
        }
      },
      "required": ["result"]
    }
  }
  ```

## 用户, AI Agent, MCP, 模型 之间的交互流程

- 用户输入
- AI Agent(MCP Client) 收到用户输入后, 调用 MCP Server 进行处理
  - 首先 AI Agent 将用户输入包装在 User Prompt 中
  - MCP Server 搜索对应的 Tool 的信息, 将结果返回给 MCP Server
- MCP Server 将结果返回给 AI Agent(MCP Client) , 它会将这些 Tool 的信息转换成 System Prompt 或者 Function Calling 格式, 然后和 User Prompt 合并, 作为新的 Prompt 发送给 AI 模型
- AI 模型通过普通回复或者 Function Calling 格式, 回复 AI Agent(MCP Client)
- AI Agent(MCP Client) 去调用 MCP Server, 要求它执行某个 Tool, 然后将结果返回给 AI Agent(MCP Client)
- AI Agent(MCP Client) 再转发给 AI 模型进行处理, 最终将结果返回给 AI Agent(MCP Client)
- AI Agent(MCP Client) 将结果返回给用户

## Mcp Server 与 大模型之前的通信

- xml 格式
- Function Calling 格式
