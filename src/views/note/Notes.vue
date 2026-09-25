<template>
  <section id="view-note">
    <h1 class="section-title">笔记列表</h1>
    <p class="section-sub">这是一段示例描述文本，用于展示页面布局与排版效果，请替换为实际内容。</p>
    <div class="note-list">
      <div class="note-item" onclick="showToast('详情即将上线')">
        <div class="note-date">2026.09.12</div>
        <div class="note-cat">分类示例</div>
        <div class="note-content">
          <h3>示例文章标题一</h3>
          <p>这是一段占位摘要文字，用于描述文章核心内容，请替换为您的实际文案。</p>
        </div>
      </div>
      <div class="note-item" onclick="showToast('详情即将上线')">
        <div class="note-date">2026.08.28</div>
        <div class="note-cat">分类示例</div>
        <div class="note-content">
          <h3>示例文章标题二</h3>
          <p>这是一段占位摘要文字，用于描述文章核心内容，请替换为您的实际文案。</p>
        </div>
      </div>
      <div class="note-item" onclick="showToast('详情即将上线')">
        <div class="note-date">2026.08.10</div>
        <div class="note-cat">分类示例</div>
        <div class="note-content">
          <h3>示例文章标题三</h3>
          <p>这是一段占位摘要文字，用于描述文章核心内容，请替换为您的实际文案。</p>
        </div>
      </div>
      <div class="note-item" onclick="showToast('详情即将上线')">
        <div class="note-date">2026.07.22</div>
        <div class="note-cat">分类示例</div>
        <div class="note-content">
          <h3>示例文章标题四</h3>
          <p>这是一段占位摘要文字，用于描述文章核心内容，请替换为您的实际文案。</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .note-list {
    margin-top: 40px;
  }

  .note-item {
    display: grid;
    grid-template-columns: 120px 100px 1fr;
    gap: 32px;
    padding: 28px 24px;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--border);
    border-radius: 12px;
    align-items: start;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s, transform 0.2s;
  }

  .note-item:hover {
    border-color: var(--text-primary);
    background: var(--accent);
    transform: translateX(4px);
  }

  .note-item:hover .note-date {
    color: var(--text-primary);
  }

  .note-item:hover .note-content h3 {
    color: var(--text-primary);
  }

  .note-item:hover .note-content p {
    color: rgba(0, 0, 0, 0.65);
  }

  .note-date {
    font-size: 14px;
    color: var(--text-secondary);
    padding-top: 3px;
    transition: color 0.2s;
  }

  .note-cat {
    font-size: 12px;
    color: var(--text-primary);
    background: var(--accent);
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 100px;
    display: inline-block;
    padding-top: 5px;
  }

  .note-content h3 {
    font-size: 19px;
    font-weight: 600;
    margin-bottom: 6px;
    letter-spacing: -0.2px;
    transition: color 0.2s;
  }

  .note-content p {
    font-size: 15px;
    color: var(--text-secondary);
    line-height: 1.5;
    transition: color 0.2s;
  }

  @media (max-width: 768px) {
    .note-item {
      grid-template-columns: 1fr;
      gap: 6px;
      padding: 24px 0;
    }
  }
</style>