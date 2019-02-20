# next-weapp-refresher
> Refresher for weapp

## install:
```bash
npm install -S afeiship/next-weapp-refresher --registry=https://registry.npm.taobao.org
```

## apis:
| api   | description            |
|-------|------------------------|
| start | 开始下拉刷新           |
| stop  | 停止当前页面下拉刷新。 |

## usage:
```js
import NxWeappRefresher from 'next-weapp-refresher';

// promise:
NxWeappRefresher.start();
NxWeappRefresher.stop();
```

## resources:
- https://developers.weixin.qq.com/miniprogram/dev/api/wx.startPullDownRefresh.html
