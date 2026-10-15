#!/usr/bin/env node
const major = Number(process.versions.node.split('.')[0]);
if (major < 22) {
  console.error(`claude-web needs Node.js >= 22 (current: ${process.versions.node})`);
  process.exit(1);
}
const args = process.argv.slice(2);
const portIdx = args.indexOf('--port');
if (portIdx >= 0 && args[portIdx + 1]) process.env.CLAUDE_WEB_PORT = args[portIdx + 1];
if (args.includes('--version') || args.includes('-v')) {
  const { readFileSync } = await import('node:fs');
  console.log(JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')).version);
  process.exit(0);
}
if (args.includes('--help') || args.includes('-h')) {
  console.log('用法: claude-web [--port 7317]\n环境变量: CLAUDE_WEB_PORT / CLAUDE_WEB_DATA_DIR / CLAUDE_WEB_CLI_PATH / CLAUDE_WEB_MAX_LIVE');
  process.exit(0);
}
await import(new URL('../server/index.js', import.meta.url));
