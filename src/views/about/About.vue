<template>
  <section id="view-about">
    <div class="about-hero">
      <h1 class="section-title">关于我们</h1>
      <p class="lead">这是一段示例段落，用于展示页面的排版风格与段落间距。请将此文本替换为您的实际介绍内容。</p>
    </div>
    <div class="stats-row">
      <div class="stat-item">
        <div class="num">100+</div>
        <div class="label">示例数据</div>
      </div>
      <div class="stat-item">
        <div class="num">50+</div>
        <div class="label">示例数据</div>
      </div>
      <div class="stat-item">
        <div class="num">99%</div>
        <div class="label">示例数据</div>
      </div>
    </div>
    <h2 style="font-size:28px; font-weight:600; margin-bottom:8px;">模块标题示例</h2>
    <div class="values-grid">
      <div class="value-item">
        <h4>示例一</h4>
        <p>这是一段占位描述文字，用于填充模块内容，请替换为您的实际文案。</p>
      </div>
      <div class="value-item">
        <h4>示例二</h4>
        <p>这是一段占位描述文字，用于填充模块内容，请替换为您的实际文案。</p>
      </div>
      <div class="value-item">
        <h4>示例三</h4>
        <p>这是一段占位描述文字，用于填充模块内容，请替换为您的实际文案。</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .about-hero {
    padding: 40px 0 60px;
  }

  .about-hero p.lead {
    font-size: 24px;
    line-height: 1.5;
    color: var(--text-primary);
    max-width: 760px;
    margin-top: 24px;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 60px 0;
  }

  .stat-item {
    background: #fff;
    border: 1px solid var(--text-primary);
    border-radius: var(--radius);
    padding: 32px 24px;
    text-align: center;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
  }

  .stat-item:hover {
    transform: translateY(-4px);
    background: var(--text-primary);
    box-shadow: 6px 6px 0 0 var(--accent);
  }

  .stat-item:hover .num {
    color: var(--accent);
  }

  .stat-item:hover .label {
    color: rgba(255, 255, 255, 0.7);
  }

  .stat-item .num {
    font-size: 48px;
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  .stat-item .label {
    font-size: 14px;
    color: var(--text-secondary);
    margin-top: 4px;
    font-weight: 500;
    transition: color 0.2s;
  }

  .values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    margin-top: 40px;
  }

  .value-item {
    border-left: 4px solid var(--accent);
    padding: 24px 28px;
    background: #fff;
    border-radius: var(--radius);
    border-top: 1px solid var(--border);
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  }

  .value-item:hover {
    transform: translateX(4px);
    background: var(--accent);
    box-shadow: 4px 4px 0 0 var(--text-primary);
  }

  .value-item:hover h4 {
    color: var(--text-primary);
  }

  .value-item:hover p {
    color: rgba(0, 0, 0, 0.7);
  }

  .value-item h4 {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--text-primary);
    transition: color 0.2s;
  }

  .value-item p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
    transition: color 0.2s;
  }

  @media (max-width: 768px) {
    .values-grid {
      grid-template-columns: 1fr;
    }

    .stats-row {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      padding: 32px 0;
    }

    .stat-item .num {
      font-size: 28px;
    }
  }
</style>