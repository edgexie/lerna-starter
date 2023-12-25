<script setup>
import { useRoute } from 'vitepress'
import { watch, ref } from 'vue'
import { getUrl } from '/utils'
const route = useRoute()
const count = ref('')

watch(() => route.path, (newPath) => {
  fetch(getUrl('/analysis/visit-count?path=') + newPath)
    .then(res => res.json())
    .then(res =>
      count.value = res.data.count
    )
}, { immediate: true })

</script>

<template>
  <div class="visit-count">本页访问量：{{ count }}</div>
</template>
<style scope>
.visit-count {
  font-size: 12px;
  opacity: .67;
  max-width: 1104px;
  margin: 0 auto 16px;
}
</style>