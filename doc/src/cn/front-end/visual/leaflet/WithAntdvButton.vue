<template>
  <div class="my-map" ref="myMap"></div>
  <div id="myDomContainer"></div>
</template>
<script lang="ts" setup>
import 'leaflet/dist/leaflet.css';
import { ref, onMounted, createApp } from 'vue';
import PopupContent from './PopupContent.vue';

const myMap = ref();

const latLng = [37.6978, 112.70788];

onMounted(() => {
  import('leaflet').then((L) => {
    const popupContent = createApp(PopupContent, {
      onClick() {
        console.log('我被点了');
      },
      btnName: 'a-button',
    }).mount('#myDomContainer');
    const map = L.map(myMap.value, {
      center: latLng,
      zoom: 10,
    });
    // 使用高德地图瓦片
    L.tileLayer(
      'https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=4&style=8&x={x}&y={y}&z={z}',
      {
        subdomains: '1234',
        maxZoom: 21,
        minZoom: 3,
        coordType: 'gcj02',
      }
    ).addTo(map);

    const popup = L.popup().setContent(popupContent.$el);
    L.marker(latLng).bindPopup(popup).addTo(map).openPopup();
  });
});
</script>
<style>
.my-map {
  height: 400px;
  width: 100%;
  transform: scale(1); /* 根据需要调整缩放比例 */
  color: black;
}
</style>
