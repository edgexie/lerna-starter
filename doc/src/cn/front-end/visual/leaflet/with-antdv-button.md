<script setup>
import WithAntdvButton from './WithAntdvButton.vue'
</script>

示例是在`leaflet->marker-popup`中使用 antdv 的 button 组件。核心是使用`createApp`挂载一个组件。

在所有的第三方库中，但给某个字段传入 html 参数的时候，都可以参考这个方案。

## 效果

<WithAntdvButton />

## 代码参考

地图渲染组件

<<< ./WithAntdvButton.vue

弹出框组件

<<< ./PopupContent.vue
