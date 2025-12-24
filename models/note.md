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
