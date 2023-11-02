<script setup>
// import { NGrid, NGi, NA } from 'naive-ui'


import * as pkg from 'naive-ui';
const { NGrid, NA, NGi } = pkg;
</script>
<template>
  <div>
    <div class="my-footer">
      <n-grid x-gap="12" cols="2 xs:1 s:2" responsive="screen">
        <n-gi>
          <div class="container">
            <div class="pacman"></div>
            <div class="path-contianer">
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
              <div class="path"></div>
            </div>
          </div>
        </n-gi>
        <n-gi style="display: flex;justify-content: center;align-items: center;">
          <span>This blog is powered by&nbsp;&nbsp;</span>
          <n-a href="https://vitepress.dev/">
            VitePress
          </n-a>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<style scoped>
.my-footer {
  padding: 0 28px 28px;
  text-align: center;
  color: var(--vp-c-text-2);
  font-size: 14px;
  max-width: 1152px;
  --during-time: .8s;
  margin: 0 auto;
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
}

.path-contianer {
  display: flex;
  flex-direction: row;
  flex: 1;
  overflow: hidden;
}

.pacman {
  position: relative;
  background: transparent;
  z-index: 1;

  &::before,
  &::after {
    position: absolute;
    top: -24px;
    display: block;
    border-radius: 50%;
    content: "";
    height: 0px;
    width: 0px;
    left: -4px;
  }

  &::before {
    animation: chunk-top var(--during-time) ease infinite;
    border: 24px solid #FFCC00;
    border-left-color: transparent;
    border-bottom-color: transparent;
  }

  &::after {
    animation: chunk-bottom var(--during-time) ease infinite;
    border: 24px solid #FFCC00;
    border-right-color: transparent;
    border-top-color: transparent;
  }

}

.path {
  display: flex;
  justify-content: space-around;
  animation: eating-path var(--during-time) linear infinite;
  width: 100%;


  &::before {
    background: var(--vp-c-text-1);
    border-radius: 50%;
    content: "";
    height: 12px;
    width: 12px;
  }
}

@keyframes chunk-top {

  0%,
  100% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(-80deg);
  }
}

@keyframes chunk-bottom {

  0%,
  100% {
    transform: rotate(-40deg);
  }

  50% {
    transform: rotate(0deg);
  }
}

@keyframes eating-path {
  0% {
    transform: translateX(50%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>