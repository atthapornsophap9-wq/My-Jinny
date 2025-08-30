// login1.js
document.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.container');
  if (!box) return;

  const target = box.getAttribute('data-target') || 'index.html';
  const fallbackDelay = 3000; // ms: เผื่อไม่มี event animationend ก็จะไปภายในเวลานี้

  let redirected = false;
  const go = () => {
    if (redirected) return;
    redirected = true;
    window.location.href = target;
  };

  // คลิกเพื่อเริ่มแอนิเมชัน
  box.addEventListener('click', () => {
    box.classList.add('active');
    // Fallback กันพลาด
    setTimeout(go, fallbackDelay);
  });

  // ถ้ามีแอนิเมชัน/ทรานซิชันให้จบแล้วไป
  ['animationend', 'transitionend'].forEach(evt => {
    box.addEventListener(evt, go);
  });
});
