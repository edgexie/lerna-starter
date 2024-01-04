<script setup>
import { useRoute } from 'vitepress'
import { watch, ref } from 'vue'
import { getUrl } from '/utils'
import { theme } from 'ant-design-vue';
import { useData } from 'vitepress'
const route = useRoute()
const count = ref('')
const visible = ref(false)
const activeKey = ref([]);
const { isDark } = useData()
const ipInfo = ref({})
watch(() => route.path, (newPath) => {
  fetch(getUrl('/analysis/visit-count?path=') + newPath)
    .then(res => res.json())
    .then(res => {
      count.value = res.data.visitCountInfo.count
      ipInfo.value = res.data.ipInfo
    }

    )
}, { immediate: true })

</script>

<template>
  <div class="container">
    <a-config-provider :theme="{
      algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }">
      <a-collapse v-model:activeKey="activeKey" ghost expand-icon-position="end" class="visit-count ">
        <a-collapse-panel key="1">
          <template #header style="padding:0">本页访问量：{{ count }}</template>
          <p>IP地址 {{ ipInfo.ip }}</p>
          <p>位置：{{ ipInfo.city ? `${ipInfo.country}，${ipInfo.region}，${ipInfo.city}` : '未知' }}</p>
        </a-collapse-panel>
      </a-collapse>

      <!-- <a-row class="visit-count">
      <a-col :span="12" style="  opacity: .67;">本页访问量：{{ count }}</a-col>
      <a-col :span="12">
        <a-popover v-model:open="visible" title="Title" trigger="click">
          <template #content>
          </template>
          <a-button type="primary" size="small">本次访问信息</a-button>
        </a-popover>
      </a-col>
    </a-row> -->
    </a-config-provider>
  </div>
</template>
<style scope>
.visit-count {
  font-size: 12px;
  max-width: 1104px;
  margin: 0 auto 4px;
}
</style>
<style>
.ant-collapse-header {
  padding: 0 !important
}
</style>