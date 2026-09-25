<script setup>
  import sideBar from './components/sideBar.vue'
</script>

<template>
  <div class="hzz_container">
    <!-- 侧边栏 -->
    <sideBar />
    <!-- 主内容区域 -->
    <main class="main">
      <router-view v-slot="{Component}">
        <transition name="slide" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </main>

    <footer class="app-footer">© 2026 Hzz All Rights Reserved.</footer>
  </div>
</template>
<style scoped>
  .hzz_container {
    display: flex;
    min-height: 100vh;
    min-width: 480px;
  }

  .main {
    margin-left: var(--nav-width);
    flex: 1;
    padding: 80px 60px 60px 60px;
    max-width: calc(100vw - var(--nav-width));
  }

  /* 标题 */
  .section-title {
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.8px;
    line-height: 1.1;
    margin-bottom: 16px;
  }
  .section-sub {
    font-size: 21px;
    color: var(--text-secondary);
    line-height: 1.4;
    max-width: 600px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    .hzz_container {
      flex-direction: column;
    }

    .main {
      margin-left: 0;
      padding: 40px 20px 60px 20px;
      max-width: 100%;
      width: 100%;
    }

    .view {
      max-width: 100%;
    }

    .section-title {
      font-size: 28px;
    }

    .section-sub {
      font-size: 17px;
    }
  }

  .app-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--bg);
    border-top: 1px solid var(--border);
    text-align: center;
    padding: 10px 16px;
    font-size: 12px;
    color: var(--text-secondary);
    z-index: 99;
  }

  /* 路由过渡动画 */
  .slide-enter-active,
  .slide-leave-active {
    transition:
      opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1),
      transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .slide-enter-from {
    opacity: 0;
    transform: translateY(24px);
  }

  .slide-leave-to {
    opacity: 0;
    transform: translateY(-24px);
  }
</style>