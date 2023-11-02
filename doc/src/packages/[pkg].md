---
title: Docs with VitePress
editLink: true
---

<script setup>
import { ref } from 'vue'
import {useData } from 'vitepress'
const count = ref(0)

const { page } = useData()
</script>
<pre>{{ page }}</pre>

<el-button>123213</el-button>

## Markdown Content

The count is: {{ count }}

<button class="button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>

## Markdown Content

[[toc]]

# Using custom anchors

## 1

## 2

```js
export default {
  name: 'MyComponent', // [!code focus]
  // ...
}
```

```ts {2-5}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
const line3 = 'This is line 3'
const line3 = 'This is line 3'
const line3 = 'This is line 3'
```

```ts:line-numbers
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

[test.json](/test2.json)

<!--@include: /test.json-->
