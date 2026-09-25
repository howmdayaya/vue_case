<template>
  <section id="view-contact">
    <h1 class="section-title">联系我们</h1>
    <p class="section-sub">无论是产品咨询还是商务合作，我们都期待听到你的声音。</p>
    <div class="contact-layout">
      <div class="contact-info">
        <h4>联系方式</h4>
        <p>hello@example.com</p>
        <h4>所在位置</h4>
        <p>示例地址，请替换为您的实际信息</p>
        <!-- Leaflet 地图 使用高德瓦片源 -->
        <div class="map-wrapper">
          <l-map ref="map" v-model:zoom="zoom" :center="[23.451012, 113.495497]">
            <l-tile-layer
              url="https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}"
              subdomains="1234" layer-type="base" name="高德地图" />
          </l-map>
        </div>
      </div>
      <form id="contactForm">
        <div class="form-group">
          <label for="name">姓名</label>
          <input type="text" id="name" required placeholder="请输入您的姓名">
        </div>
        <div class="form-group">
          <label for="email">邮箱</label>
          <input type="email" id="email" required placeholder="your@example.com">
        </div>
        <div class="form-group">
          <label for="message">留言</label>
          <textarea id="message" required placeholder="请描述您的需求或问题"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">提交咨询</button>
      </form>
    </div>
  </section>
</template>
<script setup>
  import { ref } from 'vue';
  import { LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
  import 'leaflet/dist/leaflet.css';

  const zoom = ref(16);

</script>


<style scoped>
  .contact-layout {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 40px;
    margin-top: 40px;
  }

  .contact-info {
    background: #fff;
    border: 1px solid var(--text-primary);
    border-radius: var(--radius);
    padding: 36px 28px;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  }

  .contact-info:hover {
    transform: translateY(-4px);
    background: var(--text-primary);
    color: #fff;
    box-shadow: 6px 6px 0 0 var(--accent);
  }

  .contact-info:hover h4 {
    color: var(--accent);
  }

  .contact-info:hover p {
    color: rgba(255, 255, 255, 0.85);
  }

  .contact-info h4 {
    font-size: 13px;
    font-weight: 700;
    margin: 24px 0 8px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.2s;
  }

  .contact-info h4:first-child {
    margin-top: 0;
  }

  .contact-info p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.6;
    transition: color 0.2s;
  }

  .map-wrapper {
    height: 400px;
    width: 100%;
    margin-top:12px;
    border-radius: var(--radius);
    overflow: hidden;
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 6px;
  }

  .form-group input,
  .form-group textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--text-primary);
    border-radius: 12px;
    font-size: 15px;
    font-family: inherit;
    background: #fff;
    transition: border-color 0.2s, box-shadow 0.2s;
    outline: none;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: var(--text-primary);
    box-shadow: 0 0 0 3px var(--accent);
  }

  .form-group textarea {
    resize: vertical;
    min-height: 120px;
  }

  .btn-primary {
    background: var(--accent);
    color: var(--text-primary);
    border: none;
    padding: 12px 32px;
    border-radius: 980px;
    font-size: 15px;
    font-weight: 700;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s;
  }

  .btn-primary:hover {
    background: var(--text-primary);
    color: #fff;
    box-shadow: 4px 4px 0 0 var(--accent);
  }

  @media (max-width: 768px) {
    .contact-layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    input,
    textarea {
      font-size: 16px !important;
    }
  }
</style>