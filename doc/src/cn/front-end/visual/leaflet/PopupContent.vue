<template>
  <a-button type="primary" size="small">{{ btnName }}</a-button>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue';
import { Button as AButton } from 'ant-design-vue';

const props = defineProps<{
  btnName: string;
}>();
const { btnName } = props;
</script>
