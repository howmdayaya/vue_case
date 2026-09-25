<template>
  <section id="view-module">
    <h1 class="section-title">模块展示</h1>
    <p class="section-sub">这是一段示例描述文本，用于展示页面布局与排版效果，请替换为实际内容。</p>
    <div class="module-grid">
      <div class="module-card" onclick="showToast('详情即将上线')">
        <span class="tag">标签 A</span>
        <h3>示例卡片一</h3>
        <p>这是一段占位说明文字，用于描述卡片内容，请替换为您的实际文案。</p>
        <span class="link">查看详情 ›</span>
      </div>
      <div class="module-card" onclick="showToast('详情即将上线')">
        <span class="tag">标签 B</span>
        <h3>示例卡片二</h3>
        <p>这是一段占位说明文字，用于描述卡片内容，请替换为您的实际文案。</p>
        <span class="link">查看详情 ›</span>
      </div>
      <div class="module-card" onclick="showToast('详情即将上线')">
        <span class="tag">标签 C</span>
        <h3>示例卡片三</h3>
        <p>这是一段占位说明文字，用于描述卡片内容，请替换为您的实际文案。</p>
        <span class="link">查看详情 ›</span>
      </div>
      <div class="module-card" onclick="showToast('详情即将上线')">
        <span class="tag">标签 D</span>
        <h3>示例卡片四</h3>
        <p>这是一段占位说明文字，用于描述卡片内容，请替换为您的实际文案。</p>
        <span class="link">查看详情 ›</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .module-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 40px;
  }

  .module-card {
    background: #fff;
    border: 1px solid var(--text-primary);
    border-radius: var(--radius);
    padding: 40px 32px;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
    cursor: pointer;
  }

  .module-card:hover {
    transform: translateY(-4px);
    background: var(--text-primary);
    color: #fff;
    box-shadow: 8px 8px 0 0 var(--accent);
  }

  .module-card:hover h3 {
    color: var(--accent);
  }

  .module-card:hover p {
    color: rgba(255, 255, 255, 0.75);
  }

  .module-card:hover .link {
    color: var(--accent);
  }

  .module-card .tag {
    display: inline-block;
    font-size: 12px;
    color: var(--text-primary);
    background: var(--accent);
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .module-card h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
    letter-spacing: -0.3px;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  .module-card p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
    margin-bottom: 20px;
    transition: color 0.2s;
  }

  .module-card .link {
    font-size: 15px;
    font-weight: 500;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  @media (max-width: 768px) {
    .module-grid {
      grid-template-columns: 1fr;
    }
  }
</style>