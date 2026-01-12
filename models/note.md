## 大语言模型 LLM

- 大模型的任务就是计算在给定 token 序列后, 应当续写哪些 token
- 计算的过程:

  - 大模型会一个 token 一个 token 的算
  - 每次计算会把新生成的 token 添加到原有入的 token 序列中
  - 再投入模型中, 算出下一个 token, 再加入 token 序列中, 如此往复, 直到生成结束
  - 所以本质是在不断续写 token 串

- 自回归(根据前面的 token 预测下一个 token)
- 语义空间(例如：所有汉字组合的含义)

## 主要大模型

- OpenAI
  - chatgpt
  - codex
- 谷歌
  - Gemini
- x
  - Gork
- Anthropic
  - claude
- deepseek
  - deepseek
- 字节
  - 豆包
- 阿里
  - 通义千问
- 智普
  - GLM
- 月之暗面
  - Kimi
- 海螺
  - MiniMax
- 腾讯
  - 元宝

## 原理

- 生成分数(Logits)
- 转换概率(softmax 函数)
  - Temperature
  - 概率很低的词被称为“长尾词”(Tail Words)
- 加权采样(https://www.douyin.com/video/7578100067626781979)
  - 通过概率生成预测值的过程
  - 生成一个随机数看落在什么位置上
  - Top-p(Top Cumulative Probability 最高累加概率)
    - 假如设置为 0.9, 则只考虑概率最高的 90% 的词, 其他词的概率被设为 0
  - 问题 - 概率低的只要尝试次数足够多，就会被选中

## LLaMA-Factory 大模型微调框架
