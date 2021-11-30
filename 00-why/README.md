# Why
## 模块化方案对比



```js
// add.js
export const add = (a, b) => a + b

// index.js
import {add} from './add.js'
console.log(add(1,2))
```

webpack

```bash
npx webpack ./index.js
```

测试index.html

```
<script src="./dist/main.js"></script>
```



体验浏览器支持es模块

```
<script src="./index.js"></script>
```



