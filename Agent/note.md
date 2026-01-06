## AI Agent

- 即一个智能体(Agent), 它可以根据用户输入, 调用不同的模型, 完成不同的任务
- 负责用户、工具(Agent Tool)、模型之间的交互
- 缺点
  - 虽然告诉了它要返回什么格式的结果, 但它毕竟是一个概率模型, 还是可能返回格式不对(如果发现返回的结果不符合要求, 会尝试重新请求)

## Agent Tool

- 即一个工具(Tool), 它可以帮助 Agent 完成特定的任务

## Agent Skill

- 简介: 大模型可以随时翻阅的说明文档
  - 例如
    - 智能客服 Skill
      - 回答时请注意
        - 必须先安抚用户
        - 不得随意承诺
    - 会议总结 Skill
      - 请将会议总结为以下几点
        - 会议时间
        - 会议地点
        - 会议参与人员
        - 会议内容
- 渐进式披露
  - 元数据层: 包含名称、描述, 始终被加载
  - 指令层: 除了元数据层的内容, 按需加载
  - 资源层: Reference、Script
- 高级用法
  - Reference: 按需加载, 提及(引用) 其他 Skill, 会被读取与用户问题一起发送给模型
  - Script: 代码只会被执行, 不会被读取
- 与 MCP 的区别
  - MCP: 给大模型提供数据
  - Agent Skill: 教大模型如何处理数据

## A2A 协议

- 即 Agent 与 Agent 之间沟通的规范
- 示例
  - 调度 Agent(A2A Client)(Client Agent)
    - 调度 Agent 负责协调其他 Agent 的工作
    - 它会根据用户输入, 调用不同的 Agent, 完成不同的任务
  - 天气 Agent(A2A Server)(Server Agent)
    - 天气 Agent 负责查询天气
    - 它会根据用户输入的城市, 查询该城市的天气
  - 翻译 Agent(A2A Server)(Server Agent)
    - 翻译 Agent 负责翻译文本
    - 它会根据用户输入的文本, 翻译为目标语言
