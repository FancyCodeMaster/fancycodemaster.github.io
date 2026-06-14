/* ─────────────────────────────────────────
   main.js — Sujan Lamichhane Portfolio
   ───────────────────────────────────────── */

/* ── 1. Live Kathmandu Time ── */
function updateTime() {
  const now = new Date();
  const options = {
    timeZone: 'Asia/Kathmandu',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };
  const timeStr = now.toLocaleTimeString('en-US', options);
  document.getElementById('live-time').textContent = timeStr;
}

updateTime();
setInterval(updateTime, 1000);

/* ── 2. Tech Arsenal Carousel ── */
const techs = [
  { name: 'Python', color: '#3572A5' },
  { name: 'PyTorch', color: '#EE4C2C' },
  { name: 'TensorFlow', color: '#FF6F00' },
  { name: 'Transformers', color: '#FFD21E' },
  { name: 'LangChain', color: '#1C3C3C' },
  { name: 'FastAPI', color: '#009688' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Redis', color: '#D82C20' },
  { name: 'Celery', color: '#37814A' },
  { name: 'vLLM', color: '#7C3AED' },
  { name: 'DVC', color: '#13ADC7' },
  { name: 'MLflow', color: '#0194E2' },
  { name: 'PaddleOCR-VL', color: '#E60012' },
  { name: 'Qwen-VL', color: '#8B5CF6' },
  { name: 'Whisper', color: '#10A37F' },
  { name: 'FAISS', color: '#005571' },
  { name: 'Linux', color: '#FCC624' },
];

/**
 * Creates a single tech pill element.
 * @param {{ name: string, color: string }} tech
 * @returns {HTMLDivElement}
 */
function makePill(tech) {
  const pill = document.createElement('div');
  pill.className = 'tech-pill';

  const dot = document.createElement('span');
  dot.className = 'tech-dot';
  dot.style.background = tech.color;

  pill.appendChild(dot);
  pill.appendChild(document.createTextNode(tech.name));
  return pill;
}

/**
 * Fills a carousel row with doubled pills for seamless looping.
 * @param {string} rowId   — id of the .tech-row element
 * @param {{ name: string, color: string }[]} items
 */
function fillRow(rowId, items) {
  const row = document.getElementById(rowId);
  if (!row) return;
  // Duplicate array so the CSS animation loops seamlessly
  [...items, ...items].forEach(t => row.appendChild(makePill(t)));
}

fillRow('row1', techs.slice(0, 7));   // row 1 → first 7
fillRow('row2', techs.slice(5, 13));  // row 2 → middle 8
fillRow('row3', techs.slice(10));     // row 3 → last 8
