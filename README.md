## @zonst/switch-system
统一系统切换功能-弹出dialog

##使用方式

```js
pnpm install @zonst/switch-system -S

import injectSwitchSystem from '@zonst/switch-system';

// 组件加载完成后init
injectSwitchSystem.init({
  container: document.getElementById('ZonstCommonSwitchSystem')
})
```

```js
删除包 - 先修改package.json中version要删除的版本
然后执行pnpm run unpublish
```