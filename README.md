# claude-web

Claude Code 的网页控制台（命令 `claude-web`）。本仓库只含构建产物（源码私有维护），公开可装、零认证。

> 版权保留（UNLICENSED）：允许安装使用；未经作者许可请勿修改、再分发或商用。

## 安装

```bash
npm install -g git+https://github.com/jkboy/claude-web-dist.git

claude-web              # http://localhost:7317
claude-web --port 8000
```

## 前置要求

- Node.js >= 22
- 已安装并登录官方 Claude Code CLI（`npm i -g @anthropic-ai/claude-code`，装完跑一次 `claude`）。使用第三方 API 渠道时，`~/.claude/settings.json` 的 env 要先配好，并确认终端里 `claude` 能正常对话。

## 更新

重跑安装命令即可。**不要在服务运行中更新**（Windows 下运行中实例会锁住原生模块，安装会 EBUSY 失败）；先停掉 claude-web 再装。
