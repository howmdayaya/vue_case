<template>
  <section id="view-home">
    <div class="hero">
      <h1>简洁高效的<br>一站式解决方案</h1>
      <p class="sub">这是一段示例描述文本，用于展示页面布局与排版效果，请替换为实际内容。</p>
      <div class="hero-actions">
        <router-link to="/module">了解详情</router-link>
        <router-link to="/contact">立即开始</router-link>
      </div>
    </div>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <h3>示例特性 A</h3>
        <p>这是一段占位说明文字，描述该特性的核心内容，可根据实际需求进行替换。</p>
      </div>
      <div class="feature-card">
        <div class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
        </div>
        <h3>示例特性 B</h3>
        <p>这是一段占位说明文字，描述该特性的核心内容，可根据实际需求进行替换。</p>
      </div>
      <div class="feature-card">
        <div class="icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3" />
            <path
              d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
          </svg>
        </div>
        <h3>示例特性 C</h3>
        <p>这是一段占位说明文字，描述该特性的核心内容，可根据实际需求进行替换。</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .hero {
    text-align: center;
    padding: 60px 0 80px;
  }

  .hero h1 {
    font-size: 56px;
    font-weight: 600;
    letter-spacing: -1.2px;
    line-height: 1.07;
    margin-bottom: 20px;
  }

  .hero .sub {
    font-size: 21px;
    color: var(--text-secondary);
    max-width: 680px;
    margin: 0 auto 32px;
    line-height: 1.4;
  }

  .hero-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
  }

  .hero-actions a {
    display: inline-block;
    padding: 12px 28px;
    border-radius: 980px;
    font-size: 15px;
    font-weight: 500;
    transition: all 0.2s;
    text-decoration: none;
  }

  .hero-actions a:first-child {
    background: var(--text-primary);
    color: #fff;
  }

  .hero-actions a:first-child:hover {
    background: #000;
  }

  .hero-actions a:last-child {
    background: var(--accent);
    color: var(--text-primary);
  }

  .hero-actions a:last-child:hover {
    background: var(--accent-hover);
  }

  .feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 60px;
  }

  .feature-card {
    background: #fff;
    border: 1px solid var(--text-primary);
    border-radius: var(--radius);
    padding: 36px 28px;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    background: var(--text-primary);
    color: #fff;
    box-shadow: 6px 6px 0 0 var(--accent);
  }

  .feature-card:hover h3 {
    color: var(--accent);
  }

  .feature-card:hover p {
    color: rgba(255, 255, 255, 0.75);
  }

  .feature-card:hover .icon {
    background: var(--accent);
    color: var(--text-primary);
  }

  .feature-card .icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: var(--accent);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: background 0.2s, color 0.2s;
  }

  .feature-card h3 {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 8px;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  .feature-card p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
    transition: color 0.2s;
  }

  @media (max-width: 768px) {
    .hero h1 {
      font-size: 32px;
    }

    .hero .sub {
      font-size: 16px;
    }

    .hero-actions {
      flex-direction: column;
      align-items: center;
    }

    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
</style>