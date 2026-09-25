<script setup>
</script>

<template>
  <aside class="sidebar">
    <header class="sidebar-header">
      <div class="logo">
        <a href="/">
          <img src="@/assets/hzz_logo.svg" alt="Hzz Logo" />
          <h1>hzz</h1>
        </a>
      </div>
    </header>
    <nav aria-label="主导航" class="sidebar-nav">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/home" class="nav-link" active-class="nav-link-active">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/module" class="nav-link" active-class="nav-link-active">模块</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/note" class="nav-link" active-class="nav-link-active">笔记</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" active-class="nav-link-active">关于</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link" active-class="nav-link-active">联系</router-link>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
  /* 整体布局 */
  .sidebar {
    width: var(--nav-width);
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: rgba(251, 251, 253, 0.8);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }
  .logo {
    font-size: 0;
    margin-bottom: 48px;
  }

  .sidebar-nav {
    flex: 1;
  }

  .nav-list {
    list-style: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 24px;
  }

  .nav-item {
    transform: skewX(-6deg);
  }

  .nav-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 12px;
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 2px;
    transition: background 0.2s, color 0.2s;
    text-decoration: none;
    
  }

  .nav-link:hover {
    color: #fff;
    background: rgba(0, 0, 0, 0.664);
    text-decoration: none;
    box-shadow: 10px 6px 0px 1px var(--accent);
  }

  .nav-link.nav-link-active {
    color: #fff;
    background: rgba(0, 0, 0, 0.788);
    box-shadow: 10px 6px 0px 1px var(--accent);
    font-weight: 900;
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: sticky;
      top: 0;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      border-right: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      flex-wrap: wrap;
      z-index: 100;
    }

    .logo {
      margin-bottom: 0;
      margin-right: 16px;
      padding-left: 0;
      width: 100px;
    }

    .nav-list {
      display: flex;
      flex-direction: row;
      justify-content: end;
      gap: 2px;
      flex-wrap: wrap;
    }

    .nav-item {
      margin-right: 12px;
      margin-bottom: 0;
    }

    .nav-link {
      padding: 8px 10px;
      font-size: 13px;
      min-height: 44px;
      display: flex;
      align-items: center;
    }
    .nav-link.nav-link-active {
      box-shadow: 6px 4px 0 1px var(--accent);
    }
  }
</style>