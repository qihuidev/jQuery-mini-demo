# 移动端 webapp 适配（自适应解决方案）

## 第一步

在你的根`HTML`文件加入以下代码片段：

```js
!(function (n) {
  var e = n.document,
    t = e.documentElement,
    i = 750,
    d = i / 100,
    o = 'orientationchange' in n ? 'orientationchange' : 'resize',
    a = function () {
      var n = t.clientWidth || 375
      n > 750 && (n = 750), (t.style.fontSize = n / d + 'px')
    }
  e.addEventListener &&
    (n.addEventListener(o, a, !1),
    e.addEventListener('DOMContentLoaded', a, !1))
})(window)
```

## 第二步

书写`CSS`的时候，假设 UI 稿的宽度是 200px，那么你用这个值除以 100 就可以得出要写的`rem`值了，公式为 UI 设计稿单位值 / 100 = 结果值。

```css
.demo {
  width: 2rem;
}
```

字体大小也是一样的道理，假设 UI 设计稿某文字的字体大小为 34px，那么用这个值除以 100 得出 0.34rem，书写的时候就可以直接写 0.34rem。

```css
.demo {
  font-size: 0.34rem;
}
```
