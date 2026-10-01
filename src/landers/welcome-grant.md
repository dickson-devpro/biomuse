---
title: WELCOME GRANT
slug: grant
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#0f172a">
<title>Congratulations</title>
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '948600004436271');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=948600004436271&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --bg-start: #0f172a;
    --bg-mid: #1e1b4b;
    --bg-end: #312e81;
    --card: #ffffff;
    --accent: #8b5cf6;
    --accent-dark: #7c3aed;
    --accent-soft: #ede9fe;
    --success: #22c55e;
    --success-soft: #dcfce7;
    --text: #0f172a;
    --muted: #64748b;
    --border: #e2e8f0;
    --disabled: #cbd5e1;
    --alert-bg: #fff7ed;
    --alert-border: #fed7aa;
    --alert-text: #c2410c;
  }
  html, body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }
  body {
    min-height: 100dvh;
    background: linear-gradient(165deg, var(--bg-start) 0%, var(--bg-mid) 45%, var(--bg-end) 100%);
    color: var(--text);
    font-family: "Inter", "Segoe UI", system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  button, input {
    font: inherit;
  }
  button {
    -webkit-appearance: none;
    appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  #page {
    min-height: 100dvh;
    width: 100%;
    padding: 24px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 100%;
    max-width: 420px;
    background: var(--card);
    border-radius: 32px;
    padding: 40px 28px 32px;
    box-shadow: 
      0 25px 50px -12px rgba(0, 0, 0, 0.35),
      0 0 0 1px rgba(255, 255, 255, 0.08);
    position: relative;
    overflow: hidden;
  }
  .card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #8b5cf6, #a78bfa, #c4b5fd);
  }
  .badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--accent-soft);
    color: var(--accent-dark);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 999px;
    margin: 0 auto 18px;
  }
  .badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    animation: pulse 1.6s ease-in-out infinite;
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }
  .emoji-wrap {
    text-align: center;
    margin-bottom: 14px;
  }
  .emoji {
    font-size: 52px;
    line-height: 1;
    filter: drop-shadow(0 4px 8px rgba(139, 92, 246, 0.25));
  }
  .headline {
    text-align: center;
    font-size: clamp(28px, 6.5vw, 36px);
    font-weight: 800;
    line-height: 1.15;
    letter-spacing: -0.6px;
    background: linear-gradient(135deg, #7c3aed, #4f46e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
  }
  .title {
    text-align: center;
    font-size: clamp(18px, 4.2vw, 22px);
    font-weight: 700;
    color: var(--text);
    margin-bottom: 6px;
  }
  .subtitle {
    text-align: center;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 28px;
  }
  .options {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 26px;
  }
  .option-wrap {
    position: relative;
    display: block;
    cursor: pointer;
  }
  .option-wrap input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  .option {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 18px 20px;
    border-radius: 18px;
    border: 2px solid var(--border);
    background: #fafafa;
    transition: all 0.22s ease;
  }
  .option:active {
    transform: scale(0.985);
  }
  .radio {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2.5px solid #94a3b8;
    position: relative;
    flex-shrink: 0;
    transition: border-color 0.2s ease;
  }
  .radio::after {
    content: "";
    position: absolute;
    inset: 4px;
    border-radius: 50%;
    background: transparent;
    transition: background 0.15s ease;
  }
  .amount-block {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .amount {
    font-size: 20px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.4px;
  }
  .amount-label {
    font-size: 12px;
    font-weight: 500;
    color: var(--muted);
  }
  .option-wrap input:checked + .option {
    border-color: var(--accent);
    background: var(--accent-soft);
    box-shadow: 0 0 0 4px rgba(139, 92, 246, 0.18);
  }
  .option-wrap input:checked + .option .radio {
    border-color: var(--accent);
  }
  .option-wrap input:checked + .option .radio::after {
    background: var(--accent);
  }
  .option-wrap input:checked + .option .amount {
    color: var(--accent-dark);
  }
  #continue-button {
    width: 100%;
    height: 56px;
    border: none;
    border-radius: 16px;
    background: var(--disabled);
    color: #94a3b8;
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.5px;
    cursor: not-allowed;
    transition: all 0.22s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  #continue-button:not(:disabled) {
    background: linear-gradient(135deg, #8b5cf6, #6d28d9);
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 10px 24px -6px rgba(139, 92, 246, 0.45);
  }
  #continue-button:not(:disabled):hover {
    filter: brightness(1.06);
    transform: translateY(-1px);
  }
  #continue-button:not(:disabled):active {
    transform: scale(0.98);
  }
  .alert {
    margin-top: 22px;
    padding: 13px 14px;
    background: var(--alert-bg);
    border: 1px solid var(--alert-border);
    border-radius: 14px;
    color: var(--alert-text);
    font-size: 12.5px;
    line-height: 1.55;
    text-align: center;
    font-weight: 500;
  }
  @media (max-width: 480px) {
    #page {
      padding: 16px;
      align-items: flex-start;
      padding-top: max(20px, env(safe-area-inset-top));
    }
    .card {
      padding: 32px 20px 26px;
      border-radius: 28px;
    }
    .headline {
      font-size: 28px;
    }
    .option {
      padding: 16px 18px;
    }
    .amount {
      font-size: 19px;
    }
  }
</style>
</head>
<body>
  <div id="page">
    <main class="card">
      <div style="text-align:center">
        <span class="badge">
          <span class="badge-dot"></span>
          Limited Offer
        </span>
      </div>
      <div class="emoji-wrap">
        <div class="emoji">🎉</div>
      </div>
      <h1 class="headline">Congratulations!</h1>
      <h2 class="title">How much do you need?</h2>
      <p class="subtitle">Select an amount below to continue</p>
      <div class="options" role="radiogroup" aria-label="Choose an amount">
        <label class="option-wrap">
          <input type="radio" name="amount" value="50000">
          <span class="option">
            <span class="radio" aria-hidden="true"></span>
            <span class="amount-block">
              <span class="amount">₦50,000</span>
              <span class="amount-label">Quick support</span>
            </span>
          </span>
        </label>
        <label class="option-wrap">
          <input type="radio" name="amount" value="100000">
          <span class="option">
            <span class="radio" aria-hidden="true"></span>
            <span class="amount-block">
              <span class="amount">₦100,000</span>
              <span class="amount-label">Full support</span>
            </span>
          </span>
        </label>
      </div>
      <button id="continue-button" type="button" disabled>
        CONTINUE
      </button>
      <p class="alert">
        ALERT: Choose an amount, stay on the next page until you see a message asking for account number, or scroll down.
      </p>
    </main>
  </div>
<script>
(function () {
  var links = [
    "https://open.dishalulla.com/us-tax-reporting-obligations-non-residents-2026",
    "https://open.dishalulla.com/best-ways-to-send-money-home-from-the-usa/",
    "https://open.dishalulla.com/us-income-tax-brackets-and-rates-explained-2026/",
    "https://open.dishalulla.com/how-to-file-us-business-taxes-as-a-non-resident-owner-in-2026-form-5472-1120-and-penalties-explained/"
  ];
  var radios = document.querySelectorAll('input[name="amount"]');
  var button = document.getElementById('continue-button');
  function getRandomUrl() {
    return links[Math.floor(Math.random() * links.length)];
  }
  function updateButton() {
    var selected = document.querySelector('input[name="amount"]:checked');
    button.disabled = !selected;
  }
  radios.forEach(function (radio) {
    radio.addEventListener('change', updateButton);
  });
  button.addEventListener('click', function () {
    if (button.disabled) return;
    var selected = document.querySelector('input[name="amount"]:checked');
    var destination = getRandomUrl();
    if (typeof fbq === 'function') {
      fbq('trackCustom', 'SupportContinueClicked', {
        content_name: 'Relief Support',
        amount: selected ? selected.value : ''
      });
    }
    setTimeout(function () {
      if (destination) {
        window.location.href = destination;
      }
    }, 150);
  });
  updateButton();
})();
</script>
</body>
</html>
