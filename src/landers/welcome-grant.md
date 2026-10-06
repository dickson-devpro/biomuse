---
title: WELCOME GRANT
slug: grant/
---

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
<meta name="theme-color" content="#f0f7ff">
<title>Congratulations</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
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
fbq('init', '1412969120243958');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1412969120243958&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --blue: #0ea5e9;
    --blue-dark: #0284c7;
    --blue-deep: #0369a1;
    --blue-soft: #e0f2fe;
    --teal: #14b8a6;
    --teal-soft: #ccfbf1;
    --text: #0f172a;
    --muted: #64748b;
    --border: #cbd5e1;
    --disabled: #e2e8f0;
    --alert: #ef4444;
    --page: #f0f7ff;
    --white: #ffffff;
  }
  html,
  body {
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
  }
  body {
    min-height: 100dvh;
    background: linear-gradient(180deg, #e0f2fe 0%, #f0f7ff 40%, #f8fafc 100%);
    color: var(--text);
    font-family: "Plus Jakarta Sans", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }
  button,
  input {
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
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .card {
    width: 100%;
    max-width: 760px;
    background: var(--white);
    border-radius: 42px;
    padding: 54px 36px 45px;
    box-shadow:
      0 20px 50px -12px rgba(14, 165, 233, 0.12),
      0 8px 20px -8px rgba(15, 23, 42, 0.06);
  }
  .headline {
    color: var(--blue-deep);
    text-align: center;
    font-size: clamp(42px, 8vw, 76px);
    line-height: 0.98;
    font-weight: 800;
    letter-spacing: -2.8px;
    margin-bottom: 42px;
  }
  .title {
    color: var(--text);
    text-align: center;
    font-size: clamp(28px, 4.3vw, 39px);
    line-height: 1.15;
    font-weight: 700;
    letter-spacing: -1.1px;
    margin-bottom: 18px;
  }
  .subtitle {
    color: var(--muted);
    text-align: center;
    font-size: clamp(17px, 2.8vw, 26px);
    line-height: 1.35;
    font-weight: 500;
    margin-bottom: 40px;
  }
  .options {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
    margin-bottom: 36px;
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
    min-height: 150px;
    border: 4px solid var(--border);
    border-radius: 32px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    padding: 18px 14px;
    transition:
      border-color .16s ease,
      background-color .16s ease,
      box-shadow .16s ease,
      transform .12s ease;
  }
  .option:active {
    transform: scale(.992);
  }
  .radio {
    position: relative;
    width: 40px;
    height: 40px;
    flex: 0 0 40px;
    border: 4px solid #94a3b8;
    border-radius: 50%;
    background: #fff;
    transition: border-color .15s ease;
  }
  .radio::after {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: transparent;
    transition: background .15s ease;
  }
  .amount {
    font-size: clamp(24px, 4vw, 34px);
    line-height: 1;
    font-weight: 800;
    white-space: nowrap;
    letter-spacing: -0.7px;
    color: #0f172a;
  }
  .option-wrap input:checked + .option {
    border-color: var(--teal);
    background: var(--teal-soft);
    box-shadow: 0 0 0 5px rgba(20, 184, 166, 0.15);
  }
  .option-wrap input:checked + .option .radio {
    border-color: var(--teal);
  }
  .option-wrap input:checked + .option .radio::after {
    background: var(--teal);
  }
  .option-wrap input:checked + .option .amount {
    color: #0f766e;
  }
  #continue-button {
    width: 100%;
    min-height: 120px;
    border: 0;
    border-radius: 36px;
    background: var(--disabled);
    color: #94a3b8;
    font-size: clamp(24px, 4vw, 32px);
    line-height: 1;
    font-weight: 800;
    letter-spacing: 1px;
    cursor: not-allowed;
    transition:
      background-color .16s ease,
      color .16s ease,
      box-shadow .16s ease,
      transform .12s ease;
  }
  #continue-button:not(:disabled) {
    background: linear-gradient(135deg, var(--blue) 0%, var(--blue-dark) 100%);
    color: #ffffff;
    cursor: pointer;
    box-shadow: 0 12px 28px -6px rgba(14, 165, 233, 0.4);
  }
  #continue-button:not(:disabled):hover {
    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue-deep) 100%);
  }
  #continue-button:not(:disabled):active {
    transform: scale(.992);
  }
  .alert {
    margin-top: 28px;
    color: var(--alert);
    text-align: center;
    font-size: clamp(14px, 2.2vw, 18px);
    line-height: 1.5;
    font-weight: 500;
    letter-spacing: .15px;
    padding: 0 4px;
  }
  /* ===== Mobile ===== */
  @media (max-width: 640px) {
    #page {
      padding: 12px;
      align-items: flex-start;
      padding-top: max(12px, env(safe-area-inset-top));
      padding-bottom: max(12px, env(safe-area-inset-bottom));
    }
    .card {
      max-width: 100%;
      border-radius: 28px;
      padding: 32px 16px 28px;
      margin-top: 8px;
    }
    .headline {
      font-size: clamp(36px, 11vw, 52px);
      letter-spacing: -1.8px;
      margin-bottom: 24px;
    }
    .title {
      font-size: clamp(24px, 6.5vw, 32px);
      margin-bottom: 12px;
    }
    .subtitle {
      font-size: clamp(15px, 4.2vw, 20px);
      margin-bottom: 28px;
    }
    .options {
      grid-template-columns: 1fr;
      gap: 12px;
      margin-bottom: 24px;
    }
    .option {
      min-height: 88px;
      border-radius: 22px;
      border-width: 3px;
      gap: 16px;
      padding: 16px 18px;
      justify-content: flex-start;
    }
    .radio {
      width: 28px;
      height: 28px;
      flex-basis: 28px;
      border-width: 3px;
    }
    .radio::after {
      width: 12px;
      height: 12px;
    }
    .amount {
      font-size: clamp(22px, 6vw, 28px);
    }
    #continue-button {
      min-height: 72px;
      border-radius: 22px;
      font-size: clamp(20px, 5.5vw, 26px);
    }
    .alert {
      margin-top: 20px;
      font-size: clamp(13px, 3.6vw, 16px);
      line-height: 1.45;
    }
  }
  /* Very small phones */
  @media (max-width: 380px) {
    .card {
      padding: 26px 12px 24px;
      border-radius: 22px;
    }
    .headline {
      font-size: 34px;
      margin-bottom: 20px;
    }
    .title {
      font-size: 22px;
    }
    .subtitle {
      font-size: 15px;
      margin-bottom: 22px;
    }
    .option {
      min-height: 80px;
      padding: 14px 14px;
      border-radius: 18px;
    }
    .radio {
      width: 26px;
      height: 26px;
      flex-basis: 26px;
    }
    .radio::after {
      width: 11px;
      height: 11px;
    }
    .amount {
      font-size: 20px;
    }
    #continue-button {
      min-height: 68px;
      border-radius: 18px;
      font-size: 19px;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .option,
    #continue-button {
      transition: none;
    }
  }
</style>
</head>
<body>
  <div id="page">
    <main class="card">
      <h1 class="headline">Congratulations</h1>
      <h2 class="title">How much do you need?</h2>
      <p class="subtitle">Choose below And Continue:</p>
      <div class="options" role="radiogroup" aria-label="Choose an amount">
        <label class="option-wrap">
          <input type="radio" name="amount" value="50000">
          <span class="option">
            <span class="radio" aria-hidden="true"></span>
            <span class="amount">₦50,000</span>
          </span>
        </label>
        <label class="option-wrap">
          <input type="radio" name="amount" value="100000">
          <span class="option">
            <span class="radio" aria-hidden="true"></span>
            <span class="amount">₦100,000</span>
          </span>
        </label>
      </div>
      <button id="continue-button" type="button" disabled>
        CONTINUE
      </button>
      <p class="alert">
        ALERT: Choose an amount, stay on the next page until you see a
        message asking for account number, or scroll down.
      </p>
    </main>
  </div>
<script>
(function () {
  var links = [
"https://enter.biomuse.com.ng/relocating-to-melbourne-tech-salary-2026",
"https://enter.biomuse.com.ng/relocating-to-melbourne-tech-salary-2026",
"https://enter.biomuse.com.ng/relocating-to-melbourne-tech-salary-2026",
"https://enter.biomuse.com.ng/best-brokerage-accounts-for-non-resident-aliens-in-the-usa-2026",
"https://enter.biomuse.com.ng/best-brokerage-accounts-for-non-resident-aliens-in-the-usa-2026",
"https://enter.biomuse.com.ng/best-brokerage-accounts-for-non-resident-aliens-in-the-usa-2026",
"https://enter.biomuse.com.ng/short-term-rentals-vs-serviced-apartments-on-arrival",
"https://enter.biomuse.com.ng/short-term-rentals-vs-serviced-apartments-on-arrival",
"https://enter.biomuse.com.ng/short-term-rentals-vs-serviced-apartments-on-arrival",
"https://enter.biomuse.com.ng/how-to-get-a-us-employer-identification-number-in-2026",
"https://enter.biomuse.com.ng/how-to-get-a-us-employer-identification-number-in-2026",
"https://enter.biomuse.com.ng/how-to-get-a-us-employer-identification-number-in-2026",
"https://enter.biomuse.com.ng/how-immigrants-can-buy-a-house-in-the-us",
"https://enter.biomuse.com.ng/deposit-requirements-by-loan-type",
"https://enter.biomuse.com.ng/care-support-roles-that-sponsor-overseas-workers",
"https://enter.biomuse.com.ng/cost-of-living-comparison-before-you-accept-offer",
"https://enter.biomuse.com.ng/filing-us-business-taxes-non-resident-owner",
"https://enter.biomuse.com.ng/first-time-renters-guide-new-arrivals-us"
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
