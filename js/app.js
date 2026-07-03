/* ============================================================
   CHARMIE SPIRITUS — Application Logic
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ============ 1 · FLOATING PARTICLES (MOTES) ============
  (() => {
    const host = document.getElementById('motes');
    if (!host) return;
    for (let i = 0; i < 20; i++) {
      const m = document.createElement('span');
      m.className = 'mote';
      m.style.left = `${Math.random() * 100}%`;
      m.style.bottom = `${Math.random() * 60}%`;
      m.style.animationDuration = `${6 + Math.random() * 7}s`;
      m.style.animationDelay = `${Math.random() * 8}s`;
      m.style.opacity = String(0.2 + Math.random() * 0.5);
      const s = (1 + Math.random() * 2.2).toFixed(1);
      m.style.width = `${s}px`;
      m.style.height = `${s}px`;
      host.appendChild(m);
    }
  })();

  // ============ 2 · MOBILE NAV BURGER TOGGLE ============
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links) {
    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      links.classList.toggle('active');
      if (links.classList.contains('active')) {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '100%';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'var(--indigo)';
        links.style.padding = '20px';
        links.style.borderBottom = '1px solid var(--line)';
        links.style.gap = '16px';
        links.style.zIndex = '999';
      } else {
        links.style.display = '';
      }
    });
  }

  // Close mobile nav when clicking on a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (links.classList.contains('active')) {
        links.classList.remove('active');
        links.style.display = '';
      }
    });
  });

  // ============ 3 · WEB AUDIO API TIMER SOUND SYNTHESIS ============
  let audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  }

  function playTick() {
    try {
      const ctx = getAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.warn("AudioContext blocked or uninitialized:", e);
    }
  }

  function playChime() {
    try {
      const ctx = getAudioContext();
      const now = ctx.currentTime;
      
      // Warm chord chime (C5, E5, G5)
      [523.25, 659.25, 783.99].forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        
        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.12, now + i * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + i * 0.08 + 0.6);
        
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.65);
      });
    } catch (e) {
      console.warn("AudioContext error playing chime:", e);
    }
  }

  // ============ 4 · INGREDIENT SUBSTITUTION MAP ============
  const SUBSTITUTIONS = {
    "triple_sec": { alt: ["cointreau", "grand_marnier"], label: "Cointreau hoặc Grand Marnier" },
    "lime": { alt: ["lemon"], label: "Chanh vàng" },
    "lemon": { alt: ["lime"], label: "Chanh xanh" },
    "syrup": { alt: ["honey_syrup", "maple_syrup"], label: "Mật ong / Syrup phong" },
    "soda": { alt: ["tonic", "sparkling_water"], label: "Nước khoáng có ga / Tonic" },
    "ginger_beer": { alt: ["ginger_ale"], label: "Ginger Ale" }
  };

  function getIngredientName(val) {
    const element = document.querySelector(`.cab-checkbox[value="${val}"]`);
    if (element && element.nextElementSibling) {
      return element.nextElementSibling.textContent;
    }
    const names = {
      "gin": "Gin",
      "whiskey": "Whiskey (Bourbon)",
      "rum": "Rum",
      "vodka": "Vodka",
      "tequila": "Tequila",
      "campari": "Campari",
      "vermouth_sweet": "Sweet Vermouth",
      "vermouth_dry": "Dry Vermouth",
      "triple_sec": "Triple Sec",
      "lime": "Chanh xanh",
      "lemon": "Chanh vàng",
      "syrup": "Syrup đường",
      "bitters": "Angostura Bitters",
      "mint": "Bạc hà tươi",
      "tonic": "Nước Tonic",
      "soda": "Club Soda",
      "espresso": "Cà phê Espresso",
      "kahlua": "Kahlua / Rượu cà phê",
      "ginger_beer": "Bia gừng (Ginger Beer)",
      "absinthe": "Absinthe",
      "cognac": "Cognac / Brandy",
      "champagne": "Champagne / Vang sủi",
      "egg_white": "Lòng trắng trứng",
      "raspberry_syrup": "Syrup mâm xôi"
    };
    return names[val] || val;
  }

  // ============ 5 · CABINET EXPLORER & MATCHING LOGIC ============
  function updateCabinetMatches() {
    const checkedValues = Array.from(document.querySelectorAll('.cab-checkbox:checked')).map(cb => cb.value);
    const container = document.getElementById('cabinetMatches');
    if (!container) return;

    if (checkedValues.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 30px; color: var(--muted-3);">
          <svg width="40" height="40" style="stroke: var(--muted-3); fill: none; margin-bottom: 12px; stroke-width: 1.5; margin-left: auto; margin-right: auto; display: block;"><use href="#scBottle"/></svg>
          <p style="font-size: 14px; margin-top: 8px;">Hãy tích chọn những nguyên liệu bạn có ở bên trái để xem công thức phù hợp.</p>
        </div>
      `;
      return;
    }

    const readyMatches = [];
    const substituteMatches = [];
    const missingOneMatches = [];

    RECIPES.forEach(recipe => {
      // Find directly missing ingredients
      const missing = recipe.ingredients.filter(ing => !checkedValues.includes(ing));
      
      if (missing.length === 0) {
        // Fully ready, no substitutes needed
        readyMatches.push(recipe);
      } else {
        // For each missing ingredient, check if we have a checked alternative in SUBSTITUTIONS
        let canSubstituteAll = true;
        const subDetails = [];
        const absoluteMissing = [];

        missing.forEach(mIng => {
          const subInfo = SUBSTITUTIONS[mIng];
          if (subInfo) {
            // Find if any alternative is checked
            const activeAlt = subInfo.alt.find(altIng => checkedValues.includes(altIng));
            if (activeAlt) {
              subDetails.push({ required: mIng, substitutedBy: activeAlt });
            } else {
              canSubstituteAll = false;
              absoluteMissing.push(mIng);
            }
          } else {
            canSubstituteAll = false;
            absoluteMissing.push(mIng);
          }
        });

        if (canSubstituteAll && missing.length > 0) {
          substituteMatches.push({ recipe, substitutions: subDetails });
        } else if (absoluteMissing.length === 1) {
          missingOneMatches.push({ recipe, missingIngredient: absoluteMissing[0] });
        }
      }
    });

    let html = '';

    if (readyMatches.length === 0 && substituteMatches.length === 0 && missingOneMatches.length === 0) {
      html = `
        <div style="text-align: center; padding: 30px; color: var(--muted-2);">
          <p style="font-size: 14px;">Không tìm thấy công thức nào phù hợp. Hãy thử chọn thêm nguyên liệu hoặc rượu nền khác.</p>
        </div>
      `;
    } else {
      // 1. Fully ready matches
      if (readyMatches.length > 0) {
        html += `<div style="font-family: var(--ui); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); margin-bottom: 10px; font-weight: 600;">Sẵn sàng pha chế (${readyMatches.length})</div>`;
        readyMatches.forEach(r => {
          html += `
            <div class="rec-item ready" data-recipe-id="${r.id}" style="cursor: pointer; border-left: 3.5px solid var(--teal);">
              <div class="name">${r.name}</div>
              <div class="desc">${r.desc}</div>
              <div style="font-size: 11px; color: var(--teal); margin-top: 6px; font-weight: 500;">✓ Có đủ nguyên liệu chuẩn</div>
            </div>
          `;
        });
      }

      // 2. Ready with substitutions
      if (substituteMatches.length > 0) {
        const titleMargin = readyMatches.length > 0 ? 'margin-top: 20px;' : '';
        html += `<div style="font-family: var(--ui); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: #83B8B6; ${titleMargin} margin-bottom: 10px; font-weight: 600;">Sẵn sàng với nguyên liệu thay thế (${substituteMatches.length})</div>`;
        substituteMatches.forEach(m => {
          const subsText = m.substitutions.map(s => `Dùng ${getIngredientName(s.substitutedBy)} thay ${getIngredientName(s.required)}`).join(', ');
          html += `
            <div class="rec-item ready-sub" data-recipe-id="${m.recipe.id}" style="cursor: pointer; border-left: 3.5px solid var(--teal); opacity: 0.95;">
              <div class="name">${m.recipe.name}</div>
              <div class="desc">${m.recipe.desc}</div>
              <div style="font-size: 11px; color: #83B8B6; margin-top: 6px; font-weight: 500;">✦ Khả thi: ${subsText}</div>
            </div>
          `;
        });
      }

      // 3. Missing exactly one ingredient
      if (missingOneMatches.length > 0) {
        const titleMargin = (readyMatches.length > 0 || substituteMatches.length > 0) ? 'margin-top: 20px;' : '';
        html += `<div style="font-family: var(--ui); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); ${titleMargin} margin-bottom: 10px; font-weight: 600;">Thiếu 1 nguyên liệu (${missingOneMatches.length})</div>`;
        missingOneMatches.forEach(m => {
          const ingLabel = getIngredientName(m.missingIngredient);
          const subInfo = SUBSTITUTIONS[m.missingIngredient];
          let subHint = '';
          if (subInfo) {
            subHint = ` (hoặc thay thế bằng: ${subInfo.label})`;
          }
          html += `
            <div class="rec-item missing" data-recipe-id="${m.recipe.id}" style="cursor: pointer; border-left: 3.5px solid var(--gold);">
              <div class="name">${m.recipe.name}</div>
              <div class="desc">${m.recipe.desc}</div>
              <div style="font-size: 11px; color: var(--gold); margin-top: 6px; font-weight: 500;">+ Cần thêm: ${ingLabel}${subHint}</div>
            </div>
          `;
        });
      }
    }

    container.innerHTML = html;

    // Bind click listeners to recipe matches
    container.querySelectorAll('.rec-item').forEach(item => {
      item.addEventListener('click', () => {
        const rId = item.getAttribute('data-recipe-id');
        const recipe = RECIPES.find(r => r.id === rId);
        if (recipe) {
          openRecipeModal(recipe);
        }
      });
    });
  }

  // Bind Cabinet checkbox changes
  document.querySelectorAll('.cab-checkbox').forEach(cb => {
    cb.addEventListener('change', updateCabinetMatches);
  });
  updateCabinetMatches(); // Initial rendering

  // ============ 6 · RECIPE LIBRARY WITH FLAVOR & ABV FILTERS ============
  let activeFlavorFilter = 'all';
  let activeAbvFilter = 'all';

  function renderLibrary() {
    const grid = document.getElementById('libraryGrid');
    if (!grid) return;

    const filtered = RECIPES.filter(recipe => {
      const flavorMatch = activeFlavorFilter === 'all' || recipe.flavor === activeFlavorFilter;
      const abvMatch = activeAbvFilter === 'all' || recipe.strength === activeAbvFilter;
      return flavorMatch && abvMatch;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--muted-2);">
          Không tìm thấy công thức cocktail nào khớp với bộ lọc hiện tại.
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(r => {
      const abvLabels = { "low": "Nhẹ", "balanced": "Vừa phải", "strong": "Mạnh" };
      const flavorLabels = { "citrus": "Chua thanh", "sweet": "Ngọt ngào", "bitter": "Đắng", "aromatic": "Thơm nồng", "dry": "Khô ráo" };
      
      const abvLabel = abvLabels[r.strength] || r.strength;
      const flavorLabel = flavorLabels[r.flavor] || r.flavor;
      
      const radarSvgStr = drawMiniRadarSvg(r.flavorProfile || [3, 3, 3, 3, 3]);

      return `
        <div class="card art" data-recipe-id="${r.id}" style="cursor: pointer;">
          <div class="thumb" style="display: flex; align-items: center; justify-content: center; height: 130px; position: relative;">
            ${radarSvgStr}
            <div style="position: absolute; bottom: 8px; right: 8px; display: flex; gap: 4px;">
              <span class="rec-badge" style="background: rgba(214,162,74,0.1); border: 1px solid rgba(214,162,74,0.3); color: var(--gold); padding: 2px 6px; font-size: 9px;">${abvLabel}</span>
              <span class="rec-badge" style="background: rgba(138,92,199,0.1); border: 1px solid rgba(138,92,199,0.3); color: var(--lilac); padding: 2px 6px; font-size: 9px;">${flavorLabel}</span>
            </div>
          </div>
          <div class="body">
            <h3 style="font-size: 20px; font-family: var(--display); margin-bottom: 6px;">${r.name}</h3>
            <p style="font-size: 13px; color: var(--muted-2); margin: 0; line-height: 1.5; height: 60px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical;">${r.desc}</p>
            <div class="meta" style="margin-top: 12px; color: var(--gold); font-size: 11px;">Pha chế · ${r.details.time}</div>
          </div>
        </div>
      `;
    }).join('');

    // Bind click to library cards
    grid.querySelectorAll('.card.art').forEach(card => {
      card.addEventListener('click', () => {
        const rId = card.getAttribute('data-recipe-id');
        const recipe = RECIPES.find(r => r.id === rId);
        if (recipe) {
          openRecipeModal(recipe);
        }
      });
    });
  }

  // Bind Library Filter Button Click Events
  document.querySelectorAll('[data-filter-flavor]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-filter-flavor]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeFlavorFilter = this.getAttribute('data-filter-flavor');
      renderLibrary();
    });
  });

  document.querySelectorAll('[data-filter-abv]').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('[data-filter-abv]').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      activeAbvFilter = this.getAttribute('data-filter-abv');
      renderLibrary();
    });
  });

  renderLibrary(); // Initial rendering of the library

  // ============ 7 · MODALS SYSTEM LOGIC ============
  const articleModal = document.getElementById('articleModal');
  const tastingModal = document.getElementById('tastingModal');
  const articleContainer = document.getElementById('articleContainer');
  let activeTimers = [];

  function clearAllTimers() {
    activeTimers.forEach(t => clearInterval(t.interval));
    activeTimers = [];
  }

  function openArticleModal(data) {
    if (!articleModal || !articleContainer) return;
    clearAllTimers();
    articleContainer.innerHTML = `
      <div class="eyebrow" style="color: var(--gold); margin-bottom: 12px;">${data.category} · ${data.time || 'Đọc chi tiết'}</div>
      <h2 class="h2" style="font-family: var(--display); margin-bottom: 24px; color: var(--cream); font-size: clamp(24px, 4vw, 36px);">${data.title}</h2>
      <div class="article-body" style="font-family: var(--body); font-size: 16px; line-height: 1.75; color: var(--muted-2);">
        ${data.content}
      </div>
    `;
    articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function printRecipeCard(recipe) {
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
      alert("Vui lòng cho phép popup để mở bản in thẻ công thức.");
      return;
    }

    const rawRadar = drawRadarSvg(recipe.flavorProfile || [3,3,3,3,3], 130);
    // Replace CSS variables with solid hex colors suitable for printing on light paper
    const printRadar = rawRadar
      .replace(/var\(--amethyst\)/g, '#8A5CC7')
      .replace(/var\(--muted-2\)/g, '#5C5870')
      .replace(/var\(--gold\)/g, '#D6A844')
      .replace(/var\(--teal\)/g, '#1A7A73');

    const stepsList = recipe.steps || [];
    const stepsHtml = stepsList.map(s => `<li>${s.text}</li>`).join('');

    printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Thẻ Công Thức: \${recipe.name} - Charmie Spiritus</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Outfit:wght@300;400;600&display=swap" rel="stylesheet">
  <style>
    body {
      background-color: #FDFBF7;
      color: #2D2926;
      font-family: 'Outfit', sans-serif;
      margin: 0;
      padding: 20px;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .card-container {
      width: 100%;
      max-width: 650px;
      margin: 0 auto;
      border: 2px dashed #C5A880;
      border-radius: 12px;
      padding: 30px;
      background-color: #FCFAF5;
      box-shadow: 0 4px 15px rgba(0,0,0,0.03);
      position: relative;
      box-sizing: border-box;
    }
    .card-header {
      border-bottom: 1px solid #EAE2D5;
      padding-bottom: 15px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .app-brand {
      font-family: 'Outfit', sans-serif;
      font-size: 10px;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #8C8775;
      margin-bottom: 4px;
    }
    .recipe-title {
      font-family: 'Playfair Display', serif;
      font-size: 28px;
      font-weight: 700;
      color: #1E1A17;
      margin: 0;
    }
    .recipe-meta {
      font-size: 12px;
      color: #8C8270;
      margin-top: 6px;
      font-weight: 500;
    }
    .card-body {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 30px;
    }
    .col-left {
      border-right: 1px solid #EAE2D5;
      padding-right: 20px;
    }
    .col-right {
      padding-left: 10px;
    }
    h3, h4 {
      font-family: 'Playfair Display', serif;
      color: #1E1A17;
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 16px;
      border-bottom: 1px solid #F0EAE1;
      padding-bottom: 4px;
    }
    p, li {
      font-size: 13.5px;
      line-height: 1.6;
      color: #4A453F;
    }
    ul, ol {
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 15px;
    }
    .radar-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      background: #F5EFE4;
      border-radius: 8px;
      padding: 12px;
    }
    .radar-labels {
      font-size: 9px;
      letter-spacing: 0.1em;
      color: #8C8270;
      margin-top: 6px;
      font-weight: 600;
    }
    .notes-section {
      margin-top: 25px;
      border-top: 1px dashed #D6CBB8;
      padding-top: 15px;
    }
    .notes-title {
      font-family: 'Playfair Display', serif;
      font-size: 12px;
      font-weight: bold;
      color: #8C8270;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .note-line {
      border-bottom: 1px dotted #C5A880;
      height: 24px;
      margin-bottom: 4px;
    }
    .print-btn-bar {
      text-align: center;
      margin-bottom: 20px;
    }
    .print-btn {
      background-color: #8A5CC7;
      color: #fff;
      border: none;
      padding: 10px 24px;
      font-family: 'Outfit', sans-serif;
      font-size: 14px;
      font-weight: 600;
      border-radius: 30px;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(138, 92, 199, 0.2);
      transition: background 0.2s;
    }
    .print-btn:hover {
      background-color: #7446B0;
    }
    @media print {
      .print-btn-bar {
        display: none;
      }
      body {
        background-color: #fff;
        padding: 0;
      }
      .card-container {
        border: 2px dashed #C5A880;
        box-shadow: none;
        max-width: 100%;
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="print-btn-bar">
    <button class="print-btn" onclick="window.print()">In Thẻ Này</button>
  </div>
  <div class="card-container">
    <div class="card-header">
      <div>
        <div class="app-brand">Charmie Spiritus · Thẻ Học Pha Chế</div>
        <h2 class="recipe-title">\${recipe.name}</h2>
        <div class="recipe-meta">\${recipe.details.category} · \${recipe.details.time}</div>
      </div>
    </div>
    <div class="card-body">
      <div class="col-left">
        \${recipe.details.content}
        <div class="notes-section">
          <div class="notes-title">Ghi chú nếm thử (Tasting Notes)</div>
          <div class="note-line"></div>
          <div class="note-line"></div>
          <div class="note-line"></div>
        </div>
      </div>
      <div class="col-right">
        <div class="radar-box">
          <svg width="130" height="130" viewBox="0 0 130 130" style="display: block;">
            \${printRadar}
          </svg>
          <div class="radar-labels">MẠNH · NGỌT · CHUA · ĐẮNG · THƠM</div>
        </div>
        <h3>Các Bước Thực Hiện</h3>
        <ol style="padding-left: 15px; margin-bottom: 0;">
          \${stepsHtml}
        </ol>
      </div>
    </div>
  </div>
  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 500);
    };
  <\/script>
</body>
</html>
    `);
    printWindow.document.close();
  }

  function openRecipeModal(recipe) {
    if (!articleModal || !articleContainer) return;
    clearAllTimers();
    
    // Parse steps with timers
    let stepsHtml = '';
    if (recipe.steps && recipe.steps.length > 0) {
      stepsHtml += `<h3 class="step-guide-title">Hướng dẫn pha chế từng bước</h3>`;
      stepsHtml += `<div class="step-list">`;
      recipe.steps.forEach((step, idx) => {
        let timerWidget = '';
        if (step.timer) {
          timerWidget = `
            <div class="step-timer-box" data-step-id="${recipe.id}-${idx}">
              <div class="timer-digits">00:${String(step.timer).padStart(2, '0')}</div>
              <button class="timer-ctrl-btn timer-play-btn" data-time="${step.timer}" title="Bắt đầu">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </button>
              <button class="timer-ctrl-btn timer-reset-btn" data-time="${step.timer}" title="Đặt lại" style="display: none;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0-.57-8.38l5.67-5.67"></path></svg>
              </button>
            </div>
          `;
        }
        stepsHtml += `
          <div class="step-card">
            <div class="step-num-badge">${idx + 1}</div>
            <div class="step-desc">${step.text}</div>
            ${timerWidget}
          </div>
        `;
      });
      stepsHtml += `</div>`;
    }

    const radarSvgStr = drawRadarSvg(recipe.flavorProfile || [3,3,3,3,3], 150);

    articleContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 20px; flex-wrap: wrap; margin-bottom: 20px;">
        <div>
          <div class="eyebrow" style="color: var(--gold); margin-bottom: 10px;">${recipe.details.category} · ${recipe.details.time}</div>
          <h2 class="h2" style="font-family: var(--display); color: var(--cream); font-size: clamp(24px, 4vw, 36px); margin-bottom: 12px;">${recipe.details.title}</h2>
          <button class="btn btn-ghost" id="printRecipeBtn" style="display: inline-flex; align-items: center; gap: 8px; font-size: 13px; padding: 6px 12px; border-color: rgba(197, 168, 128, 0.3); color: var(--gold); border-radius: 4px; cursor: pointer;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>
            In thẻ công thức (A6)
          </button>
        </div>
        <div style="background: rgba(14, 10, 28, 0.4); border: 1px solid var(--line-soft); border-radius: 8px; padding: 10px; display: flex; flex-direction: column; align-items: center;">
          <svg width="150" height="150" viewBox="0 0 150 150" class="radar-svg" style="display: block;">
            ${radarSvgStr}
          </svg>
          <div style="font-family: var(--ui); font-size: 8px; color: var(--muted-2); letter-spacing: 0.05em; margin-top: 4px;">M · N · CH · Đ · TH</div>
        </div>
      </div>
      <div class="article-body" style="font-family: var(--body); font-size: 16px; line-height: 1.75; color: var(--muted-2);">
        ${recipe.details.content}
        ${stepsHtml}
      </div>
    `;

    // Bind print button
    const printBtn = document.getElementById('printRecipeBtn');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        printRecipeCard(recipe);
      });
    }

    // Bind interactive timers
    articleContainer.querySelectorAll('.step-timer-box').forEach(timerBox => {
      const playBtn = timerBox.querySelector('.timer-play-btn');
      const resetBtn = timerBox.querySelector('.timer-reset-btn');
      const digits = timerBox.querySelector('.timer-digits');
      const totalTime = parseInt(playBtn.getAttribute('data-time'));
      let timeLeft = totalTime;
      let interval = null;
      let isRunning = false;

      const timerId = timerBox.getAttribute('data-step-id');

      const timerObj = {
        id: timerId,
        interval: null,
        stop: () => {
          clearInterval(interval);
          isRunning = false;
          playBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        }
      };
      activeTimers.push(timerObj);

      playBtn.addEventListener('click', () => {
        if (!isRunning) {
          // Play state
          isRunning = true;
          playBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
          resetBtn.style.display = 'inline-flex';
          
          interval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
              clearInterval(interval);
              digits.textContent = "00:00";
              digits.style.color = "var(--teal)";
              digits.style.textShadow = "0 0 10px var(--teal)";
              playBtn.style.display = 'none';
              playChime();
            } else {
              digits.textContent = `00:${String(timeLeft).padStart(2, '0')}`;
              playTick();
            }
          }, 1000);
          timerObj.interval = interval;
        } else {
          // Pause state
          timerObj.stop();
        }
      });

      resetBtn.addEventListener('click', () => {
        clearInterval(interval);
        timeLeft = totalTime;
        isRunning = false;
        digits.textContent = `00:${String(timeLeft).padStart(2, '0')}`;
        digits.style.color = "";
        digits.style.textShadow = "";
        playBtn.style.display = 'inline-flex';
        playBtn.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
        resetBtn.style.display = 'none';
      });
    });

    articleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    clearAllTimers();
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }

  // Bind close button click
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  // Close modals when clicking on background overlay
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeAllModals();
      }
    });
  });

  // Close on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAllModals();
    }
  });

  // Bind article card click triggers globally
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-article-id]');
    if (!trigger) return;
    
    // Prevent default anchor jumping if it has article-id
    e.preventDefault();
    const id = trigger.getAttribute('data-article-id');
    
    // Find in articles or recipes
    if (ARTICLES[id]) {
      openArticleModal(ARTICLES[id]);
    } else {
      const recipe = RECIPES.find(r => r.id === id);
      if (recipe) {
        openRecipeModal(recipe);
      }
    }
  });


  // ============ 8 · TASTING JOURNAL WIDGET LOGIC ============
  const btnNewTasting = document.getElementById('btnNewTasting');
  const tastingForm = document.getElementById('tastingForm');
  const userTastingGrid = document.getElementById('userTastingGrid');
  const userTastingSection = document.getElementById('userTastingSection');
  
  let editingIndex = null; // Track if we are editing an existing note
  let currentRating = 5;   // Track note satisfaction rating (1-5 stars)

  // 1. Radar points calculator
  function getRadarPoints(values, cx, cy, maxRadius) {
    const points = [];
    for (let i = 0; i < 5; i++) {
      const val = values[i];
      const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
      const r = (val / 5) * maxRadius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    return points.join(' ');
  }

  // 2. Draw full SVG radar
  function drawRadarSvg(values, size = 220) {
    const cx = size / 2;
    const cy = size / 2;
    const maxRadius = (size / 2) - 25;
    
    let html = '';
    
    // Draw pentagon grids (values 1 to 5)
    for (let g = 1; g <= 5; g++) {
      const gridPoints = [];
      for (let i = 0; i < 5; i++) {
        const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
        const r = (g / 5) * maxRadius;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        gridPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
      }
      const strokeOpacity = g === 5 ? 0.35 : 0.15;
      html += `<polygon points="${gridPoints.join(' ')}" fill="none" stroke="var(--amethyst)" stroke-opacity="${strokeOpacity}" stroke-width="0.8" />`;
    }
    
    // Draw 5 axes lines & Labels
    const labels = ["M", "N", "Ch", "Đ", "Th"];
    const labelOffsets = [
      {x: 0, y: -12},   // Top (Mạnh)
      {x: 10, y: 3},    // Right Top (Ngọt)
      {x: 8, y: 12},    // Right Bottom (Chua)
      {x: -8, y: 12},   // Left Bottom (Đắng)
      {x: -10, y: 3}    // Left Top (Thơm)
    ];
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
      const x = cx + maxRadius * Math.cos(angle);
      const y = cy + maxRadius * Math.sin(angle);
      
      html += `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" stroke="var(--amethyst)" stroke-opacity="0.15" stroke-width="0.8" />`;
      
      const lx = cx + (maxRadius + 14) * Math.cos(angle) + (labelOffsets[i].x || 0);
      const ly = cy + (maxRadius + 14) * Math.sin(angle) + (labelOffsets[i].y || 0);
      html += `<text x="${lx.toFixed(1)}" y="${ly.toFixed(1)}" text-anchor="middle" dominant-baseline="middle" font-family="var(--ui)" font-size="10.5px" font-weight="600" fill="var(--muted-2)">${labels[i]}</text>`;
    }
    
    // Draw data polygon
    const dataPoints = getRadarPoints(values, cx, cy, maxRadius);
    html += `<polygon points="${dataPoints}" fill="rgba(138, 92, 199, 0.28)" stroke="var(--amethyst)" stroke-width="2" />`;
    
    // Draw points dots
    for (let i = 0; i < 5; i++) {
      const val = values[i];
      const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
      const r = (val / 5) * maxRadius;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      html += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3" fill="var(--gold)" />`;
    }
    
    return html;
  }

  // 3. Draw mini SVG radar
  function drawMiniRadarSvg(values) {
    const size = 90;
    const cx = 45;
    const cy = 45;
    const maxRadius = 35;
    let html = `<svg width="90" height="90" viewBox="0 0 90 90" style="display: block; margin: auto;">`;
    
    // Grid 5
    const gridPoints = [];
    for (let i = 0; i < 5; i++) {
      const angle = -Math.PI / 2 + i * (2 * Math.PI / 5);
      const x = cx + maxRadius * Math.cos(angle);
      const y = cy + maxRadius * Math.sin(angle);
      gridPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    html += `<polygon points="${gridPoints.join(' ')}" fill="none" stroke="var(--amethyst)" stroke-opacity="0.2" stroke-width="0.6" />`;
    
    // Data polygon
    const dataPoints = getRadarPoints(values, cx, cy, maxRadius);
    html += `<polygon points="${dataPoints}" fill="rgba(214, 162, 74, 0.22)" stroke="var(--gold)" stroke-width="1.2" />`;
    
    html += '</svg>';
    return html;
  }

  // 4. Interactive slider controls in tasting form
  const sliders = ['Strength', 'Sweet', 'Sour', 'Bitter', 'Aroma'];
  function updateModalRadar() {
    const vals = sliders.map(s => parseFloat(document.getElementById('val' + s).value));
    const radarContainer = document.getElementById('modalRadarSvg');
    if (radarContainer) {
      radarContainer.innerHTML = drawRadarSvg(vals, 220);
    }
  }

  sliders.forEach(s => {
    const input = document.getElementById('val' + s);
    const label = document.getElementById('lbl' + s);
    if (input) {
      input.addEventListener('input', () => {
        if (label) label.textContent = input.value;
        updateModalRadar();
      });
    }
  });

  // 5. Satisfaction Stars Input Logic
  const starInputs = document.querySelectorAll('#ratingStarsContainer .star-input');
  starInputs.forEach(star => {
    star.addEventListener('click', function() {
      const val = parseInt(this.getAttribute('data-rating'));
      currentRating = val;
      starInputs.forEach(s => {
        const sVal = parseInt(s.getAttribute('data-rating'));
        if (sVal <= val) {
          s.classList.add('active');
          s.textContent = '★';
        } else {
          s.classList.remove('active');
          s.textContent = '☆';
        }
      });
    });
  });

  function setStarsInput(rating) {
    currentRating = rating;
    starInputs.forEach(s => {
      const sVal = parseInt(s.getAttribute('data-rating'));
      if (sVal <= rating) {
        s.classList.add('active');
        s.textContent = '★';
      } else {
        s.classList.remove('active');
        s.textContent = '☆';
      }
    });
  }

  // 6. Reset form inputs
  function resetTastingForm() {
    if (tastingForm) tastingForm.reset();
    editingIndex = null;
    document.querySelector('#tastingModalSubmitBtn').textContent = "Lưu ghi chép";
    setStarsInput(5);
    sliders.forEach(s => {
      const label = document.getElementById('lbl' + s);
      const input = document.getElementById('val' + s);
      if (input) {
        if (s === 'Strength') input.value = 3;
        else if (s === 'Sweet') input.value = 2;
        else if (s === 'Sour') input.value = 1;
        else if (s === 'Bitter') input.value = 0.5;
        else if (s === 'Aroma') input.value = 4;
      }
      if (label && input) label.textContent = input.value;
    });

    // Reset emoji picker to default
    document.querySelectorAll('#emojiSelectorRow .emoji-opt').forEach(opt => {
      opt.classList.remove('active');
      if (opt.getAttribute('data-emoji') === '🥃') {
        opt.classList.add('active');
      }
    });
    const tasteEmojiInput = document.getElementById('tasteEmoji');
    if (tasteEmojiInput) tasteEmojiInput.value = '🥃';

    // Reset aroma tags
    document.querySelectorAll('#aromaTagsPicker .aroma-picker-tag').forEach(tag => {
      tag.classList.remove('active');
    });
  }

  // 7. Local storage management
  function getSavedTastings() {
    try {
      const data = localStorage.getItem('charmie_tastings');
      return data ? JSON.parse(data) : [];
    } catch(e) {
      return [];
    }
  }

  function saveTasting(note) {
    const list = getSavedTastings();
    if (editingIndex !== null) {
      list[editingIndex] = note;
    } else {
      list.unshift(note);
    }
    localStorage.setItem('charmie_tastings', JSON.stringify(list));
  }

  function deleteTasting(index) {
    const list = getSavedTastings();
    list.splice(index, 1);
    localStorage.setItem('charmie_tastings', JSON.stringify(list));
    renderTastings();
  }

  // 8. Render Saved Cards
  function renderTastings() {
    const list = getSavedTastings();
    if (!userTastingGrid || !userTastingSection) return;
    
    if (list.length === 0) {
      userTastingSection.style.display = 'none';
      return;
    }
    
    userTastingSection.style.display = 'block';
    let html = '';
    list.forEach((note, index) => {
      const values = [note.strength, note.sweet, note.sour, note.bitter, note.aroma];
      const radarSvgStr = drawMiniRadarSvg(values);
      
      // Star rating display
      const starsStr = '★'.repeat(note.rating || 5) + '☆'.repeat(5 - (note.rating || 5));
      
      // Extended fields
      const colorText = note.color ? `<div style="font-size: 13.5px; color: var(--muted-2); margin-top: 6px;"><b>Màu sắc:</b> ${note.color}</div>` : '';
      const finishText = note.finish ? `<div style="font-size: 13.5px; color: var(--muted-2); margin-top: 2px;"><b>Hậu vị:</b> ${note.finish}</div>` : '';

      // Emojis and Aroma tags
      const emojiIcon = note.emoji || '🥃';
      let aromasHtml = '';
      if (note.aromas && note.aromas.length > 0) {
        aromasHtml = '<div class="t-aromas-container">';
        note.aromas.forEach(a => {
          let tagWithEmoji = a;
          if (a === 'Bách xù') tagWithEmoji = '🌲 ' + a;
          else if (a === 'Cam chanh') tagWithEmoji = '🍋 ' + a;
          else if (a === 'Gỗ sồi') tagWithEmoji = '🪵 ' + a;
          else if (a === 'Mật ong') tagWithEmoji = '🍯 ' + a;
          else if (a === 'Cà phê') tagWithEmoji = '☕ ' + a;
          else if (a === 'Thảo mộc') tagWithEmoji = '🍂 ' + a;
          else if (a === 'Khói đất') tagWithEmoji = '💨 ' + a;
          else if (a === 'Quả mọng') tagWithEmoji = '🍇 ' + a;
          else if (a === 'Socola') tagWithEmoji = '🍫 ' + a;
          else if (a === 'Gia vị') tagWithEmoji = '🌶️ ' + a;
          
          aromasHtml += `<span class="t-aroma-badge">${tagWithEmoji}</span>`;
        });
        aromasHtml += '</div>';
      }

      html += `
        <div class="tasting-note-card">
          <div class="info">
            <div class="t-date">${note.category} · ${note.date}</div>
            <h4 class="t-name" style="display: flex; align-items: center; gap: 8px;">
              <span class="t-emoji" style="font-size: 24px; line-height: 1;">${emojiIcon}</span>
              <span>${note.name}</span>
            </h4>
            <div class="t-rating" style="margin-top: 4px;" title="Đánh giá: ${note.rating || 5} sao">${starsStr}</div>
            ${aromasHtml}
            ${colorText}
            ${finishText}
            <p class="t-text" style="white-space: pre-line; margin-top: 10px; margin-bottom: 30px;">${note.notes || 'Không có mô tả chi tiết.'}</p>
          </div>
          <div class="t-chart">
            ${radarSvgStr}
          </div>
          <div class="t-actions">
            <button class="t-btn t-edit" onclick="editTastingNote(${index}); event.stopPropagation();">Sửa</button>
            <button class="t-btn t-delete" onclick="removeTastingNote(${index}); event.stopPropagation();">Xóa</button>
          </div>
        </div>
      `;
    });
    
    userTastingGrid.innerHTML = html;
  }

  // 9. Bind click events for Tasting Card Buttons
  window.removeTastingNote = function(index) {
    if (confirm('Bạn có chắc chắn muốn xóa ghi chép nếm rượu này không?')) {
      deleteTasting(index);
    }
  };

  window.editTastingNote = function(index) {
    const list = getSavedTastings();
    const note = list[index];
    if (!note) return;

    editingIndex = index;
    
    // Populate form
    document.getElementById('tasteName').value = note.name;
    document.getElementById('tasteCategory').value = note.category;
    document.getElementById('tasteNotes').value = note.notes || '';
    document.getElementById('tasteColor').value = note.color || '';
    document.getElementById('tasteFinish').value = note.finish || '';
    
    setStarsInput(note.rating || 5);
    
    document.getElementById('valStrength').value = note.strength;
    document.getElementById('valSweet').value = note.sweet;
    document.getElementById('valSour').value = note.sour;
    document.getElementById('valBitter').value = note.bitter;
    document.getElementById('valAroma').value = note.aroma;
    
    // Refresh labels
    sliders.forEach(s => {
      const input = document.getElementById('val' + s);
      const label = document.getElementById('lbl' + s);
      if (input && label) label.textContent = input.value;
    });

    // Populate emoji
    const activeEmoji = note.emoji || '🥃';
    document.getElementById('tasteEmoji').value = activeEmoji;
    document.querySelectorAll('#emojiSelectorRow .emoji-opt').forEach(opt => {
      if (opt.getAttribute('data-emoji') === activeEmoji) {
        opt.classList.add('active');
      } else {
        opt.classList.remove('active');
      }
    });

    // Populate aroma tags
    const activeAromas = note.aromas || [];
    document.querySelectorAll('#aromaTagsPicker .aroma-picker-tag').forEach(tag => {
      const tagVal = tag.getAttribute('data-tag');
      if (activeAromas.includes(tagVal)) {
        tag.classList.add('active');
      } else {
        tag.classList.remove('active');
      }
    });

    updateModalRadar();
    document.querySelector('#tastingModalSubmitBtn').textContent = "Cập nhật ghi chép";
    
    tastingModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  // Upgraded interactive inputs for tasting journal (emoji & aroma tag picker, quick templates)
  document.querySelectorAll('#emojiSelectorRow .emoji-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('#emojiSelectorRow .emoji-opt').forEach(x => x.classList.remove('active'));
      opt.classList.add('active');
      const val = opt.getAttribute('data-emoji');
      document.getElementById('tasteEmoji').value = val;
    });
  });

  document.querySelectorAll('#aromaTagsPicker .aroma-picker-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      tag.classList.toggle('active');
    });
  });

  // Quick Templates mapping data
  const TASTING_TEMPLATES = {
    negroni: {
      name: "Negroni",
      category: "Cocktail",
      emoji: "🥃",
      sliders: { Strength: 4.5, Sweet: 3, Sour: 1, Bitter: 4.5, Aroma: 4.5 },
      color: "Đỏ hồng ngọc sáng",
      finish: "Đắng ngọt kéo dài thảo mộc, ấm cồn nhẹ",
      rating: 5,
      aromas: ["Cam chanh", "Thảo mộc", "Gia vị"]
    },
    martini: {
      name: "Dry Martini",
      category: "Cocktail",
      emoji: "🍸",
      sliders: { Strength: 5, Sweet: 0.5, Sour: 0.5, Bitter: 1, Aroma: 4.5 },
      color: "Trong suốt tinh khiết",
      finish: "Khô ráo, sạch sẽ, thơm lừng bách xù và cồn sắc",
      rating: 5,
      aromas: ["Bách xù", "Thảo mộc"]
    },
    sour: {
      name: "Whiskey Sour",
      category: "Cocktail",
      emoji: "🥃",
      sliders: { Strength: 3.5, Sweet: 2.5, Sour: 3, Bitter: 0.5, Aroma: 4 },
      color: "Vàng chanh nhạt, bọt mịn trắng",
      finish: "Chua thanh dịu ngọt mượt mà sồi Bourbon",
      rating: 5,
      aromas: ["Cam chanh", "Gỗ sồi"]
    },
    espresso: {
      name: "Espresso Martini",
      category: "Cocktail",
      emoji: "☕",
      sliders: { Strength: 3.5, Sweet: 3.5, Sour: 0.5, Bitter: 3, Aroma: 4.5 },
      color: "Nâu sẫm cafe đen, lớp Crema dày",
      finish: "Đắng thơm nồng cafe rang, ngọt ngào liqueur",
      rating: 5,
      aromas: ["Cà phê", "Socola"]
    },
    wine: {
      name: "Vang Đỏ Bordeaux",
      category: "Vang",
      emoji: "🍷",
      sliders: { Strength: 2.5, Sweet: 1, Sour: 2, Bitter: 2, Aroma: 4.5 },
      color: "Đỏ ruby đậm đà",
      finish: "Chát nhẹ, kéo dài nốt nho khô và gỗ sồi",
      rating: 4,
      aromas: ["Gỗ sồi", "Quả mọng"]
    }
  };

  document.querySelectorAll('.btn-template').forEach(btn => {
    btn.addEventListener('click', () => {
      const templateKey = btn.getAttribute('data-template');
      const data = TASTING_TEMPLATES[templateKey];
      if (!data) return;

      // Fill name & category
      document.getElementById('tasteName').value = data.name;
      document.getElementById('tasteCategory').value = data.category;
      document.getElementById('tasteColor').value = data.color;
      document.getElementById('tasteFinish').value = data.finish;
      
      // Rating stars
      setStarsInput(data.rating);

      // Emoji picker
      document.querySelectorAll('#emojiSelectorRow .emoji-opt').forEach(opt => {
        if (opt.getAttribute('data-emoji') === data.emoji) {
          opt.classList.add('active');
        } else {
          opt.classList.remove('active');
        }
      });
      document.getElementById('tasteEmoji').value = data.emoji;

      // Sliders
      for (const [key, val] of Object.entries(data.sliders)) {
        const input = document.getElementById('val' + key);
        const label = document.getElementById('lbl' + key);
        if (input) input.value = val;
        if (label) label.textContent = val;
      }

      // Aroma tags
      document.querySelectorAll('#aromaTagsPicker .aroma-picker-tag').forEach(tag => {
        const tagVal = tag.getAttribute('data-tag');
        if (data.aromas.includes(tagVal)) {
          tag.classList.add('active');
        } else {
          tag.classList.remove('active');
        }
      });

      // Update radar chart in modal
      updateModalRadar();
    });
  });

  if (btnNewTasting) {
    btnNewTasting.addEventListener('click', () => {
      if (tastingModal) {
        resetTastingForm();
        updateModalRadar();
        tastingModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  // 10. Handle Form Submit
  if (tastingForm) {
    tastingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('tasteName').value.trim();
      const category = document.getElementById('tasteCategory').value;
      const notes = document.getElementById('tasteNotes').value.trim();
      const color = document.getElementById('tasteColor').value.trim();
      const finish = document.getElementById('tasteFinish').value.trim();
      
      const strength = parseFloat(document.getElementById('valStrength').value);
      const sweet = parseFloat(document.getElementById('valSweet').value);
      const sour = parseFloat(document.getElementById('valSour').value);
      const bitter = parseFloat(document.getElementById('valBitter').value);
      const aroma = parseFloat(document.getElementById('valAroma').value);

      // Extract emoji
      const emoji = document.getElementById('tasteEmoji').value || '🥃';

      // Extract aromas
      const aromas = [];
      document.querySelectorAll('#aromaTagsPicker .aroma-picker-tag.active').forEach(tag => {
        aromas.push(tag.getAttribute('data-tag'));
      });
      
      let dateStr = '';
      if (editingIndex !== null) {
        const list = getSavedTastings();
        dateStr = list[editingIndex].date; // Keep original date
      } else {
        const now = new Date();
        dateStr = now.getDate().toString().padStart(2, '0') + '/' + (now.getMonth() + 1).toString().padStart(2, '0') + '/' + now.getFullYear();
      }
      
      const tastingNote = {
        name,
        category,
        rating: currentRating,
        color,
        finish,
        strength,
        sweet,
        sour,
        bitter,
        aroma,
        notes,
        emoji,
        aromas,
        date: dateStr
      };
      
      saveTasting(tastingNote);
      closeAllModals();
      renderTastings();
      
      // Auto-scroll to notes grid
      setTimeout(() => {
        userTastingSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 300);
    });
  }

  // ============ 9 · IMPORT / EXPORT TASTING JOURNAL ============
  const btnExport = document.getElementById('btnExportTasting');
  const fileImport = document.getElementById('fileImportTasting');

  if (btnExport) {
    btnExport.addEventListener('click', () => {
      const list = getSavedTastings();
      if (list.length === 0) {
        alert("Nhật ký trống, không có ghi chép nào để xuất!");
        return;
      }
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(list, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `charmie_tastings_export.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }

  if (fileImport) {
    fileImport.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function(evt) {
        try {
          const importedList = JSON.parse(evt.target.result);
          if (!Array.isArray(importedList)) {
            alert("Lỗi cấu trúc tệp! Dữ liệu nhập phải là một danh sách các ghi chép.");
            return;
          }
          
          // Basic structure validation
          const isValid = importedList.every(note => note.name && note.category && note.strength !== undefined);
          if (!isValid) {
            alert("Lỗi dữ liệu! Một số ghi chép thiếu các trường thông tin cốt yếu (tên, phân loại, chỉ số vị).");
            return;
          }

          if (confirm(`Bạn có muốn nhập ${importedList.length} ghi chép nếm rượu? Tác vụ này sẽ hợp nhất dữ liệu mới vào nhật ký hiện tại.`)) {
            const currentList = getSavedTastings();
            const mergedList = [...importedList, ...currentList];
            
            // Deduplicate by name + date + category
            const seen = new Set();
            const dedupedList = mergedList.filter(note => {
              const hash = `${note.name}-${note.date}-${note.category}`;
              if (seen.has(hash)) return false;
              seen.add(hash);
              return true;
            });

            localStorage.setItem('charmie_tastings', JSON.stringify(dedupedList));
            renderTastings();
            alert(`Nhập nhật ký thành công! Đã thêm/hợp nhất các ghi chép.`);
          }
        } catch(err) {
          alert("Lỗi đọc tệp! Vui lòng chọn tệp JSON hợp lệ.");
          console.error(err);
        }
        // Reset input value
        fileImport.value = '';
      };
      reader.readAsText(file);
    });
  }


  // ============ 10 · ARTICLE SEARCH FILTER ============
  const articleSearchInput = document.getElementById('articleSearchInput');
  if (articleSearchInput) {
    articleSearchInput.addEventListener('input', function(e) {
      const query = e.target.value.trim().toLowerCase();
      const featCard = document.querySelector('.feat');
      const articleCards = document.querySelectorAll('.grid.g4 .card.art');
      const matches = (text) => text && text.toLowerCase().includes(query);
      
      // Filter featured card
      if (featCard) {
        const featId = featCard.querySelector('[data-article-id]')?.getAttribute('data-article-id');
        const featArticle = ARTICLES[featId];
        const featTitle = featCard.querySelector('h3')?.textContent || '';
        const featDesc = featCard.querySelector('p')?.textContent || '';
        const featCat = featCard.querySelector('.eyebrow')?.textContent || '';
        
        let hasMatch = matches(featTitle) || matches(featDesc) || matches(featCat);
        if (featArticle) {
          hasMatch = hasMatch || matches(featArticle.title) || matches(featArticle.content) || matches(featArticle.category);
        }
        featCard.style.display = hasMatch ? '' : 'none';
      }
      
      // Filter regular article cards
      articleCards.forEach(card => {
        const cardId = card.getAttribute('data-article-id');
        const cardArticle = ARTICLES[cardId];
        const cardTitle = card.querySelector('h3')?.textContent || '';
        const cardCat = card.querySelector('.eyebrow')?.textContent || '';
        
        let hasMatch = matches(cardTitle) || matches(cardCat);
        if (cardArticle) {
          hasMatch = hasMatch || matches(cardArticle.title) || matches(cardArticle.content) || matches(cardArticle.category);
        }
        card.style.display = hasMatch ? '' : 'none';
      });
    });
  }

  // ============ 11 · TASTE MATCHING QUIZ LOGIC ============
  (() => {
    let currentStep = 1;
    const selections = { strength: '', flavor: '', mood: '' };
    
    const quizStepIndicator = document.getElementById('quizStepIndicator');
    const quizProgressBar = document.getElementById('quizProgressBar');
    const quizBtnPrev = document.getElementById('quizBtnPrev');
    const quizContainer = document.getElementById('quizContainer');
    
    function bindQuizOptionEvents(container) {
      container.querySelectorAll('.quiz-step .quiz-option').forEach(option => {
        option.addEventListener('click', function() {
          const step = parseInt(this.closest('.quiz-step').id.replace('quizStep', ''));
          const val = this.getAttribute('data-val');
          
          if (step === 1) selections.strength = val;
          else if (step === 2) selections.flavor = val;
          else if (step === 3) selections.mood = val;
          
          this.closest('.quiz-options').querySelectorAll('.quiz-option').forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
          
          setTimeout(() => {
            if (step < 3) {
              goToStep(step + 1);
            } else {
              showQuizResults();
            }
          }, 350);
        });
      });
    }
    
    if (quizBtnPrev) {
      quizBtnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
          goToStep(currentStep - 1);
        }
      });
    }
    
    function goToStep(step) {
      currentStep = step;
      document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
      const activeStep = document.getElementById(`quizStep${step}`);
      if (activeStep) activeStep.classList.add('active');
      
      if (quizStepIndicator) quizStepIndicator.textContent = `Câu hỏi ${step}/3`;
      if (quizProgressBar) {
        const percent = Math.round((step / 3) * 100);
        quizProgressBar.style.width = `${percent}%`;
      }
      if (quizBtnPrev) {
        quizBtnPrev.style.visibility = step > 1 ? 'visible' : 'hidden';
      }
    }
    
    function showQuizResults() {
      let bestMatch = null;
      let highestScore = -1;
      
      RECIPES.forEach(recipe => {
        let score = 0;
        if (recipe.strength === selections.strength) score += 40;
        if (recipe.flavor === selections.flavor) score += 40;
        if (recipe.mood === selections.mood) score += 20;
        
        if (score > highestScore) {
          highestScore = score;
          bestMatch = recipe;
        }
      });
      
      if (!bestMatch) {
        bestMatch = RECIPES[0];
        highestScore = 50;
      }
      
      const progressContainer = document.querySelector('.quiz-progress-container');
      const progressBarWrapper = document.querySelector('.quiz-progress');
      if (progressContainer) progressContainer.style.display = 'none';
      if (progressBarWrapper) progressBarWrapper.style.display = 'none';
      
      document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
      if (quizBtnPrev) quizBtnPrev.style.display = 'none';
      
      if (!quizContainer) return;
      
      let expText = "";
      if (selections.strength === 'low') {
        expText += "Bạn tìm kiếm một ly nhẹ nhàng và sảng khoái tối nay. ";
      } else if (selections.strength === 'balanced') {
        expText += "Bạn muốn trải nghiệm sự cân bằng hoàn hảo chuẩn mực cocktail kinh điển. ";
      } else {
        expText += "Bạn muốn nhâm nhi một ly rượu mạnh đậm đà, nồng ấm trong không gian riêng tư. ";
      }
      
      if (selections.flavor === 'citrus') {
        expText += "Cùng với vị chua thanh sảng khoái và tươi tắn đặc trưng từ cam chanh tươi. ";
      } else if (selections.flavor === 'sweet') {
        expText += "Hòa quyện với vị ngọt dịu êm dịu, dễ chịu và dễ thưởng thức. ";
      } else if (selections.flavor === 'bitter') {
        expText += "Xen lẫn nốt đắng thảo mộc đằm thắm kích thích mọi giác quan. ";
      } else {
        expText += "Mang hậu vị khô ráo, sâu lắng đầy mê hoặc của gỗ sồi và thảo mộc. ";
      }
      
      expText += `Thức uống tương hợp nhất với bạn chính là <strong>${bestMatch.name}</strong>.`;
      
      const radarSvgStr = drawMiniRadarSvg(bestMatch.flavorProfile || [3,3,3,3,3]);
      
      quizContainer.innerHTML = `
        <div class="quiz-result">
          <div>
            <div class="quiz-result-match">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span>${highestScore}% Tương thích vị giác</span>
            </div>
            <h4 class="quiz-result-title">${bestMatch.name}</h4>
            <p class="quiz-result-desc">${expText}</p>
            <p style="font-size: 14.8px; color: var(--muted-2); margin-bottom: 24px; font-family: var(--body); line-height: 1.6;">${bestMatch.desc}</p>
            <div style="display: flex; gap: 14px; flex-wrap: wrap;">
              <button class="btn btn-gold" id="quizBtnOpenRecipe" data-recipe-id="${bestMatch.id}">Xem công thức & pha chế</button>
              <button class="btn btn-ghost" id="quizBtnReset">Làm lại hành trình</button>
            </div>
          </div>
          <div class="quiz-result-radar">
            <div style="font-family: var(--ui); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 14px;">Bản đồ hương vị</div>
            ${radarSvgStr}
            <div style="display: flex; justify-content: space-around; width: 100%; margin-top: 14px; font-family: var(--ui); font-size: 9px; color: var(--muted-2); letter-spacing: 0.05em;">
              <span>MẠNH</span>
              <span>NGỌT</span>
              <span>CHUA</span>
              <span>ĐẮNG</span>
              <span>THƠM</span>
            </div>
          </div>
        </div>
      `;
      
      document.getElementById('quizBtnOpenRecipe').addEventListener('click', function() {
        const recipeId = this.getAttribute('data-recipe-id');
        const recipe = RECIPES.find(r => r.id === recipeId);
        if (recipe) {
          openRecipeModal(recipe);
        }
      });
      
      document.getElementById('quizBtnReset').addEventListener('click', resetQuiz);
    }
    
    function resetQuiz() {
      selections.strength = '';
      selections.flavor = '';
      selections.mood = '';
      
      if (!quizContainer) return;
      
      quizContainer.innerHTML = `
        <div class="quiz-progress-container">
          <span>Tiến trình khám phá</span>
          <span id="quizStepIndicator">Câu hỏi 1/3</span>
        </div>
        <div class="quiz-progress">
          <div class="quiz-progress-bar" id="quizProgressBar" style="width: 33%;"></div>
        </div>

        <!-- Step 1 -->
        <div class="quiz-step active" id="quizStep1">
          <h4 style="font-family: var(--display); font-size: 20px; color: var(--cream); margin-bottom: 16px;">1. Độ mạnh (nồng độ cồn) bạn mong muốn tối nay?</h4>
          <div class="quiz-options">
            <div class="quiz-option" data-val="low">
              <div class="opt-title">Nhẹ nhàng (Low ABV)</div>
              <div class="opt-desc">Dễ chịu, nhiều nước pha sủi tăm, nồng độ cồn rất thấp để thư giãn kéo dài.</div>
            </div>
            <div class="quiz-option" data-val="balanced">
              <div class="opt-title">Cân bằng (Medium ABV)</div>
              <div class="opt-desc">Tỷ lệ hài hòa giữa rượu mạnh và nước chanh/syrup ngọt, chuẩn mực cocktail kinh điển.</div>
            </div>
            <div class="quiz-option" data-val="strong">
              <div class="opt-title">Mạnh mẽ (Spirit-Forward)</div>
              <div class="opt-desc">Hương cồn đậm đà, sâu lắng, đậm chất rượu nguyên bản thích hợp nhâm nhi chậm rãi.</div>
            </div>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="quiz-step" id="quizStep2">
          <h4 style="font-family: var(--display); font-size: 20px; color: var(--cream); margin-bottom: 16px;">2. Nốt hương vị chủ đạo nào làm bạn tò mò lúc này?</h4>
          <div class="quiz-options">
            <div class="quiz-option" data-val="citrus">
              <div class="opt-title">Chua thanh & Tươi mát</div>
              <div class="opt-desc">Vị chua tự nhiên từ chanh tươi, mang cảm giác sáng sủa và giải nhiệt.</div>
            </div>
            <div class="quiz-option" data-val="sweet">
              <div class="opt-title">Ngọt ngào & Êm dịu</div>
              <div class="opt-desc">Vị ngọt dễ chịu của trái cây, đường syrup hoặc rượu mùi cam mượt mà.</div>
            </div>
            <div class="quiz-option" data-val="bitter">
              <div class="opt-title">Đắng nhẹ & Thảo mộc</div>
              <div class="opt-desc">Hương thơm phức tạp từ các loại vỏ cây, rễ cây thảo mộc tinh tế.</div>
            </div>
            <div class="quiz-option" data-val="dry">
              <div class="opt-title">Khô ráo & Sâu lắng</div>
              <div class="opt-desc">Đậm mùi gỗ sồi, không đường ngọt hoặc rất ít, hậu vị sắc sảo tinh tế.</div>
            </div>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="quiz-step" id="quizStep3">
          <h4 style="font-family: var(--display); font-size: 20px; color: var(--cream); margin-bottom: 16px;">3. Không gian hoặc tâm trạng của bạn lúc này thế nào?</h4>
          <div class="quiz-options">
            <div class="quiz-option" data-val="solitary">
              <div class="opt-title">Yên tĩnh một mình</div>
              <div class="opt-desc">Không gian tĩnh lặng, đọc sách hoặc suy ngẫm trầm mặc trong đêm muộn.</div>
            </div>
            <div class="quiz-option" data-val="refreshing">
              <div class="opt-title">Cần nạp năng lượng</div>
              <div class="opt-desc">Bừng tỉnh tinh thần sau một ngày làm việc mệt mỏi, sảng khoái mát lạnh.</div>
            </div>
            <div class="quiz-option" data-val="social">
              <div class="opt-title">Ấm cúng chia sẻ</div>
              <div class="opt-desc">Trò chuyện cởi mở cùng người thân thiết hoặc tận hưởng nhịp điệu êm dịu.</div>
            </div>
          </div>
        </div>

        <!-- Quiz Navigation -->
        <div class="quiz-nav">
          <button class="btn btn-ghost" id="quizBtnPrev" style="visibility: hidden;">Quay lại</button>
          <div style="font-family: var(--ui); font-size: 12px; color: var(--muted-2);">Lựa chọn sẽ tự động chuyển trang</div>
        </div>
      `;
      
      const newStepIndicator = document.getElementById('quizStepIndicator');
      const newProgressBar = document.getElementById('quizProgressBar');
      const newBtnPrev = document.getElementById('quizBtnPrev');
      
      bindQuizOptionEvents(quizContainer);
      
      newBtnPrev.addEventListener('click', () => {
        if (currentStep > 1) {
          bindStepRefsAndGo(currentStep - 1);
        }
      });
      
      function bindStepRefsAndGo(step) {
        currentStep = step;
        document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
        document.getElementById(`quizStep${step}`).classList.add('active');
        
        newStepIndicator.textContent = `Câu hỏi ${step}/3`;
        newProgressBar.style.width = `${Math.round((step / 3) * 100)}%`;
        newBtnPrev.style.visibility = step > 1 ? 'visible' : 'hidden';
      }
      
      currentStep = 1;
    }
    
    if (quizContainer) {
      bindQuizOptionEvents(quizContainer);
    }
  })();

  // ============ 12 · INTERACTIVE FLAVOR WHEEL LOGIC ============
  (() => {
    const svg = document.getElementById('flavorWheelSvg');
    const infoPanel = document.getElementById('flavorInfoPanel');
    if (!svg || !infoPanel) return;

    // Helper functions for SVG sector math
    function polarToCartesian(cx, cy, r, angleInDegrees) {
      const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
      return {
        x: cx + (r * Math.cos(angleInRadians)),
        y: cy + (r * Math.sin(angleInRadians))
      };
    }

    function describeSector(cx, cy, rInner, rOuter, startAngle, endAngle) {
      const startInner = polarToCartesian(cx, cy, rInner, startAngle);
      const endInner = polarToCartesian(cx, cy, rInner, endAngle);
      const startOuter = polarToCartesian(cx, cy, rOuter, startAngle);
      const endOuter = polarToCartesian(cx, cy, rOuter, endAngle);
      
      const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
      
      return [
        "M", startInner.x, startInner.y,
        "L", startOuter.x, startOuter.y,
        "A", rOuter, rOuter, 0, largeArc, 1, endOuter.x, endOuter.y,
        "L", endInner.x, endInner.y,
        "A", rInner, rInner, 0, largeArc, 0, startInner.x, startInner.y,
        "Z"
      ].join(" ");
    }

    const cx = 200;
    const cy = 200;

    // Data definition for sectors
    const innerSectors = [
      { id: "botanical", start: 180, end: 270, label: "Thảo Mộc", color: "rgba(138, 92, 199, 0.28)", hoverColor: "var(--amethyst)" },
      { id: "fruity", start: 270, end: 360, label: "Trái Cây", color: "rgba(186, 58, 92, 0.25)", hoverColor: "var(--oxblood)" },
      { id: "warm", start: 0, end: 90, label: "Ấm Áp", color: "rgba(214, 162, 74, 0.28)", hoverColor: "var(--gold)" },
      { id: "spicy_smoky", start: 90, end: 180, label: "Khói Cay", color: "rgba(94, 140, 138, 0.28)", hoverColor: "var(--teal)" }
    ];

    const outerSectors = [
      { id: "juniper", start: 180, end: 225, label: "Bách Xù", color: "rgba(138, 92, 199, 0.42)" },
      { id: "bitter_herbs", start: 225, end: 270, label: "Mộc Đắng", color: "rgba(138, 92, 199, 0.55)" },
      
      { id: "citrus", start: 270, end: 315, label: "Cam Chanh", color: "rgba(186, 58, 92, 0.42)" },
      { id: "berries_grapes", start: 315, end: 360, label: "Mọng & Nho", color: "rgba(186, 58, 92, 0.55)" },
      
      { id: "vanilla_oak", start: 0, end: 45, label: "Vani & Gỗ", color: "rgba(214, 162, 74, 0.42)" },
      { id: "coffee_nuts", start: 45, end: 90, label: "Cà Phê", color: "rgba(214, 162, 74, 0.55)" },
      
      { id: "spice_ginger", start: 90, end: 135, label: "Gia Vị Gừng", color: "rgba(94, 140, 138, 0.42)" },
      { id: "peat_smoke", start: 135, end: 180, label: "Khói Bùn", color: "rgba(94, 140, 138, 0.55)" }
    ];

    // Build the SVG elements
    let svgHtml = '';

    // Draw inner sectors (radius 50 to 110)
    innerSectors.forEach(sec => {
      const d = describeSector(cx, cy, 50, 110, sec.start, sec.end);
      
      // Calculate text position (centroid)
      const midAngle = (sec.start + sec.end) / 2;
      const textPos = polarToCartesian(cx, cy, 78, midAngle);
      
      // Determine text rotation
      let rotateAngle = midAngle;
      if (midAngle > 90 && midAngle < 270) {
        rotateAngle += 180;
      }

      svgHtml += `
        <path d="${d}" class="wheel-sector inner-sector" data-flavor="${sec.id}" fill="${sec.color}" style="color: ${sec.hoverColor};" />
        <g transform="translate(${textPos.x}, ${textPos.y}) rotate(${rotateAngle})">
          <text class="wheel-label" text-anchor="middle" dominant-baseline="middle" y="0">${sec.label}</text>
        </g>
      `;
    });

    // Draw outer sectors (radius 113 to 175)
    outerSectors.forEach(sec => {
      const d = describeSector(cx, cy, 113, 175, sec.start, sec.end);
      
      // Calculate text position
      const midAngle = (sec.start + sec.end) / 2;
      const textPos = polarToCartesian(cx, cy, 142, midAngle);
      
      // Determine text rotation
      let rotateAngle = midAngle;
      if (midAngle > 90 && midAngle < 270) {
        rotateAngle += 180;
      }

      svgHtml += `
        <path d="${d}" class="wheel-sector outer-sector" data-flavor="${sec.id}" fill="${sec.color}" style="color: var(--gold);" />
        <g transform="translate(${textPos.x}, ${textPos.y}) rotate(${rotateAngle})">
          <text class="wheel-label" style="font-size: 6.5px;" text-anchor="middle" dominant-baseline="middle" y="0">${sec.label}</text>
        </g>
      `;
    });

    // Draw decorative lines/grids
    svgHtml += `<circle cx="${cx}" cy="${cy}" r="175" fill="none" stroke="var(--line-soft)" stroke-width="0.8" />`;
    svgHtml += `<circle cx="${cx}" cy="${cy}" r="110" fill="none" stroke="var(--line-soft)" stroke-width="0.8" />`;
    svgHtml += `<circle cx="${cx}" cy="${cy}" r="50" fill="none" stroke="var(--line-soft)" stroke-width="0.8" />`;

    // Center Circle decoration
    svgHtml += `
      <circle cx="${cx}" cy="${cy}" r="46" fill="var(--indigo)" stroke="var(--line)" stroke-width="1" style="filter: drop-shadow(0 0 10px rgba(138, 92, 199, 0.15));" />
      <text x="${cx}" y="${cy}" class="wheel-center-text">HƯƠNG VỊ</text>
    `;

    svg.innerHTML = svgHtml;

    // Interactive details mapping
    const FLAVOR_DETAILS = {
      "botanical": {
        name: "Thảo Mộc & Cỏ Cây",
        parent: "Nhóm hương vị lớn",
        desc: "Hương vị tươi mới, thanh sạch và giàu nốt hương tự nhiên. Đại diện chính là mùi quả bách xù giòn tan, ngải cứu sâu lắng hay các loại hoa cỏ đồng nội.",
        tips: "Nhóm hương này tạo nền tảng sắc sảo, thích hợp để nhấp nháp khai vị hoặc thưởng thức thư giãn.",
        spirits: [
          { id: "spirit-gin", name: "Gin" },
          { id: "spirit-vermouth", name: "Vermouth" }
        ],
        recipes: [
          { id: "martini", name: "Dry Martini" },
          { id: "negroni", name: "Negroni" },
          { id: "tom_collins", name: "Tom Collins" },
          { id: "french_75", name: "French 75" },
          { id: "bees_knees", name: "Bee's Knees" }
        ]
      },
      "juniper": {
        name: "Quả Bách Xù (Juniper)",
        parent: "Thảo Mộc & Cỏ Cây",
        desc: "Nốt hương xương sống bắt buộc của dòng rượu Gin. Mang mùi lá thông tươi, tinh dầu lá kim khô ráo và vị cay nhẹ của thảo mộc tự nhiên.",
        tips: "Khi khuấy lạnh sâu trong ly Dry Martini, tinh dầu bách xù sẽ bung tỏa tinh khiết nhất.",
        spirits: [{ id: "spirit-gin", name: "Gin" }],
        recipes: [
          { id: "martini", name: "Dry Martini" },
          { id: "negroni", name: "Negroni" },
          { id: "tom_collins", name: "Tom Collins" },
          { id: "french_75", name: "French 75" },
          { id: "bees_knees", name: "Bee's Knees" }
        ]
      },
      "bitter_herbs": {
        name: "Thảo Mộc Đắng (Bitter Herbs)",
        parent: "Thảo Mộc & Cỏ Cây",
        desc: "Vị đắng đằm thắm quyến rũ từ các loại rễ cây đắng, vỏ quýt khô, đinh hương và quế ngâm ủ trong Vermouth hoặc rượu mùi Campari.",
        tips: "Vị đắng nhẹ giúp kích thích dịch vị dạ dày, cực kỳ lý tưởng để mở đầu một bữa tiệc ấm cúng.",
        spirits: [
          { id: "spirit-vermouth", name: "Vermouth" },
          { id: "spirit-liqueur", name: "Liqueur" }
        ],
        recipes: [
          { id: "negroni", name: "Negroni" },
          { id: "sazerac", name: "Sazerac" },
          { id: "paper_plane", name: "Paper Plane" }
        ]
      },
      "fruity": {
        name: "Trái Cây & Quả Mọng",
        parent: "Nhóm hương vị lớn",
        desc: "Sự tươi tắn ngọt ngào của trái cây tươi chín mọng hoặc vị chua rực rỡ của cam chanh giúp cân bằng hoàn hảo độ cồn ấm nóng của rượu mạnh.",
        tips: "Có mặt trong hầu hết các ly cocktail dạng 'Sour' sảng khoái và cực kỳ dễ tiếp cận cho người mới.",
        spirits: [
          { id: "spirit-brandy", name: "Brandy / Cognac" },
          { id: "spirit-rum", name: "Rum" }
        ],
        recipes: [
          { id: "daiquiri", name: "Daiquiri" },
          { id: "clover_club", name: "Clover Club" },
          { id: "sidecar", name: "Sidecar" },
          { id: "moscow_mule", name: "Moscow Mule" },
          { id: "paper_plane", name: "Paper Plane" }
        ]
      },
      "citrus": {
        name: "Cam Chanh (Citrus)",
        parent: "Trái Cây & Quả Mọng",
        desc: "Vị chua bừng sáng đầy năng lượng từ chanh xanh, chanh vàng hoặc tinh dầu quýt sủi bọt. Nó đóng vai trò trung hòa vị cồn và giữ ly rượu mát lành.",
        tips: "Bartender chuyên nghiệp luôn dùng nước cốt chanh tươi vắt tay thay vì nước đóng chai sẵn.",
        spirits: [
          { id: "spirit-gin", name: "Gin" },
          { id: "spirit-rum", name: "Rum" },
          { id: "spirit-brandy", name: "Brandy" }
        ],
        recipes: [
          { id: "daiquiri", name: "Daiquiri" },
          { id: "sidecar", name: "Sidecar" },
          { id: "tom_collins", name: "Tom Collins" },
          { id: "french_75", name: "French 75" },
          { id: "bees_knees", name: "Bee's Knees" },
          { id: "penicillin", name: "Penicillin" }
        ]
      },
      "berries_grapes": {
        name: "Quả Mọng & Nho (Berries & Grapes)",
        parent: "Trái Cây & Quả Mọng",
        desc: "Nốt mâm xôi ngọt chua êm dịu hoặc hương thơm nho khô chín sẫm từ thùng chưng cất vang nho lâu năm Cognac/Brandy.",
        tips: "Sử dụng lòng trắng trứng khi shake sẽ tạo ra lớp bọt mịn mềm mượt để nâng đỡ nốt hương mâm xôi mượt mà.",
        spirits: [{ id: "spirit-brandy", name: "Brandy / Cognac" }],
        recipes: [
          { id: "clover_club", name: "Clover Club" },
          { id: "sidecar", name: "Sidecar" }
        ]
      },
      "warm": {
        name: "Ấm Áp & Ngọt Ngào",
        parent: "Nhóm hương vị lớn",
        desc: "Các nốt hương đằm thắm của vani sồi ủ, caramel mật mía, hạt rang béo bùi và cà phê đậm đà. Mang lại trải nghiệm ôm ấp, thư thái vào đêm muộn.",
        tips: "Thích hợp nhất cho những không gian yên tĩnh trầm mặc, thưởng thức chậm rãi bên cuốn sách hay bên điệu nhạc jazz.",
        spirits: [
          { id: "spirit-whiskey", name: "Whisky (Bourbon/Rye)" },
          { id: "spirit-rum", name: "Rum" },
          { id: "spirit-liqueur", name: "Liqueur" }
        ],
        recipes: [
          { id: "old_fashioned", name: "Old Fashioned" },
          { id: "espresso_martini", name: "Espresso Martini" },
          { id: "sazerac", name: "Sazerac" }
        ]
      },
      "vanilla_oak": {
        name: "Vani & Gỗ Sồi (Vanilla & Oak)",
        parent: "Ấm Áp & Ngọt Ngào",
        desc: "Chất vanillin tự nhiên ngấm ra từ thớ gỗ sồi Mỹ nướng cháy của các thùng ủ whiskey lâu năm. Mang nốt vani gỗ ngọt nhẹ, dịu êm.",
        tips: "Có thể nhận thấy rõ rệt nhất trong các ly đậm chất rượu nền (spirit-forward) như Old Fashioned.",
        spirits: [
          { id: "spirit-whiskey", name: "Whisky" },
          { id: "spirit-rum", name: "Rum" }
        ],
        recipes: [
          { id: "old_fashioned", name: "Old Fashioned" },
          { id: "sazerac", name: "Sazerac" }
        ]
      },
      "coffee_nuts": {
        name: "Cà Phê & Hạt (Coffee & Nuts)",
        parent: "Ấm Áp & Ngọt Ngào",
        desc: "Mùi hương nồng, đắng bùi quyến rũ của cà phê rang xay đậm đà kết hợp với kết cấu mịn màng của các dòng liqueur hạt cacao, hạnh nhân.",
        tips: "Thêm một chút muối nhỏ vào ly Espresso Martini sẽ làm giảm độ đắng gắt và tôn vinh nốt béo ngọt của cà phê.",
        spirits: [{ id: "spirit-liqueur", name: "Rượu mùi (Liqueur)" }],
        recipes: [{ id: "espresso_martini", name: "Espresso Martini" }]
      },
      "spicy_smoky": {
        name: "Cay & Khói Đất",
        parent: "Nhóm hương vị lớn",
        desc: "Nét cá tính gai góc, sắc sảo đầy mê hoặc. Bao gồm vị cay nồng của bia gừng tươi, hương thảo mộc nồng và khói gỗ sồi than bùn sâu thẳm.",
        tips: "Dành riêng cho những ai ưa thích sự phá cách mạnh mẽ, những nốt hương lưu luyến rất lâu trên vòm họng.",
        spirits: [
          { id: "spirit-whiskey", name: "Whisky" },
          { id: "spirit-tequila", name: "Tequila" }
        ],
        recipes: [
          { id: "moscow_mule", name: "Moscow Mule" },
          { id: "sazerac", name: "Sazerac" },
          { id: "old_fashioned", name: "Old Fashioned" },
          { id: "penicillin", name: "Penicillin" }
        ]
      },
      "spice_ginger": {
        name: "Gừng & Gia Vị (Ginger & Spice)",
        parent: "Cay & Khói Đất",
        desc: "Vị cay ấm, tê rần sảng khoái trên đầu lưỡi từ gừng tươi được lên men, hòa quyện với vị cay khô của lúa mạch Rye trong whiskey.",
        tips: "Chút gas sủi tăm từ bia gừng giúp vị cay lan tỏa đều hơn trong khoang miệng.",
        spirits: [{ id: "spirit-whiskey", name: "Whisky (Rye)" }],
        recipes: [
          { id: "moscow_mule", name: "Moscow Mule" },
          { id: "sazerac", name: "Sazerac" },
          { id: "penicillin", name: "Penicillin" }
        ]
      },
      "peat_smoke": {
        name: "Khói Than Bùn (Peat Smoke)",
        parent: "Cay & Khói Đất",
        desc: "Mùi hương độc bản trầm mặc tựa khói đất ẩm ấm áp, bắt nguồn từ quá trình sấy mạch nha bằng khói than bùn tự nhiên của Scotch Whisky.",
        tips: "Đây là nốt hương kén người nhưng một khi đã phải lòng, bạn sẽ say mê nốt trầm sâu lắng không dòng rượu nào có được.",
        spirits: [{ id: "spirit-whiskey", name: "Whisky" }],
        recipes: [
          { id: "old_fashioned", name: "Old Fashioned" },
          { id: "penicillin", name: "Penicillin" }
        ]
      }
    };

    // Show details handler
    function showFlavorDetails(id) {
      const data = FLAVOR_DETAILS[id];
      if (!data) return;

      // Build tags
      let spiritsHtml = '';
      if (data.spirits && data.spirits.length > 0) {
        spiritsHtml = `
          <div class="flavor-tags-group">
            <div class="flavor-tags-label">Dòng rượu nền tương thích</div>
            <div class="flavor-tags">
              ${data.spirits.map(s => `<span class="flavor-tag spirit-tag" data-spirit-id="${s.id}">${s.name}</span>`).join('')}
            </div>
          </div>
        `;
      }

      let recipesHtml = '';
      if (data.recipes && data.recipes.length > 0) {
        recipesHtml = `
          <div class="flavor-tags-group">
            <div class="flavor-tags-label">Ly cocktail tiêu biểu</div>
            <div class="flavor-tags">
              ${data.recipes.map(r => `<span class="flavor-tag recipe-tag" data-recipe-id="${r.id}">✦ ${r.name}</span>`).join('')}
            </div>
          </div>
        `;
      }

      infoPanel.innerHTML = `
        <div class="flavor-info-content">
          <div class="flavor-info-parent">${data.parent}</div>
          <h3 class="flavor-info-title">${data.name}</h3>
          <p class="flavor-info-desc">${data.desc}</p>
          <div class="flavor-info-tips">
            <strong>Gợi ý cảm vị:</strong> ${data.tips}
          </div>
          ${spiritsHtml}
          ${recipesHtml}
        </div>
      `;

      // Bind tag click events
      infoPanel.querySelectorAll('.spirit-tag').forEach(tag => {
        tag.addEventListener('click', function() {
          const sId = this.getAttribute('data-spirit-id');
          // Find the actual DOM element and click it
          const trigger = document.querySelector(`[data-article-id="${sId}"]`);
          if (trigger) {
            trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a temporary glow effect
            trigger.style.outline = "2px solid var(--gold)";
            trigger.style.boxShadow = "0 0 20px rgba(214,162,74,0.4)";
            setTimeout(() => {
              trigger.style.outline = "";
              trigger.style.boxShadow = "";
              trigger.click();
            }, 600);
          }
        });
      });

      infoPanel.querySelectorAll('.recipe-tag').forEach(tag => {
        tag.addEventListener('click', function() {
          const rId = this.getAttribute('data-recipe-id');
          const recipe = RECIPES.find(r => r.id === rId);
          if (recipe) {
            openRecipeModal(recipe);
          }
        });
      });
    }

    // Handle SVG path clicks
    svg.querySelectorAll('.wheel-sector').forEach(sector => {
      sector.addEventListener('click', function() {
        // Toggle active class
        svg.querySelectorAll('.wheel-sector').forEach(s => s.classList.remove('active'));
        this.classList.add('active');

        // Play subtle sound if available
        playTick();

        const flavorId = this.getAttribute('data-flavor');
        showFlavorDetails(flavorId);
      });
    });
  })();

  // Initialize and Render Tasting Notes on Startup
  renderTastings();
});
