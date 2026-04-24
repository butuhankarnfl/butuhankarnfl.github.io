// ════════════════════════════════════════
//  Hafta 7 — JavaScript Etkileşimleri
// ════════════════════════════════════════

// ── 1) TEMA DEĞİŞTİRME ──────────────────
const temaButon = document.getElementById("temaButon");

temaButon.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  const isLight = document.body.classList.contains("light-theme");
  temaButon.textContent = isLight ? "🌙 Karanlık Tema" : "☀️ Aydınlık Tema";
  temaButon.classList.toggle("btn-outline-light", !isLight);
  temaButon.classList.toggle("btn-outline-dark", isLight);
});

// ── 2) FORM — BAŞVURU ÖZETİ ──────────────
const basvuruFormu = document.getElementById("basvuruFormu");
const uyariAlani  = document.getElementById("uyariAlani");
const sonucAlani  = document.getElementById("sonucAlani");

basvuruFormu.addEventListener("submit", function (event) {
  event.preventDefault();          // Sayfa yenilenmesin

  // Değerleri al
  const ad       = document.getElementById("ad").value.trim();
  const email    = document.getElementById("email").value.trim();
  const bolum    = document.getElementById("bolum").value;
  const etkinlik = document.getElementById("etkinlik").value.trim();
  const kvkk     = document.getElementById("kvkk").checked;

  // Eksik alan kontrolü
  if (!ad || !email || !bolum || !etkinlik || !kvkk) {
    uyariAlani.style.display = "block";
    sonucAlani.style.display = "none";
    uyariAlani.textContent =
      "⚠️ Lütfen tüm alanları doldurun ve KVKK onayını işaretleyin.";
    return;
  }

  // E-posta basit format kontrolü
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    uyariAlani.style.display = "block";
    sonucAlani.style.display = "none";
    uyariAlani.textContent = "⚠️ Lütfen geçerli bir e-posta adresi girin.";
    return;
  }

  // Başarı — özet kartı oluştur
  uyariAlani.style.display = "none";
  sonucAlani.style.display = "block";

  const simdi = new Date().toLocaleString("tr-TR");

  sonucAlani.innerHTML = `
    <div class="ozet-kart">
      <h5 class="mb-3 fw-bold">✅ Başvurunuz Alındı!</h5>
      <table class="table table-borderless table-sm mb-0" style="color:inherit">
        <tbody>
          <tr><th scope="row" style="width:140px">Ad Soyad</th><td>${escapeHtml(ad)}</td></tr>
          <tr><th scope="row">E-posta</th><td>${escapeHtml(email)}</td></tr>
          <tr><th scope="row">Bölüm</th><td>${escapeHtml(bolum)}</td></tr>
          <tr><th scope="row">Etkinlik</th><td>${escapeHtml(etkinlik)}</td></tr>
          <tr><th scope="row">Başvuru Tarihi</th><td>${simdi}</td></tr>
        </tbody>
      </table>
    </div>
  `;

  // Formu temizle
  basvuruFormu.reset();

  // Sonuç alanına kaydır
  sonucAlani.scrollIntoView({ behavior: "smooth", block: "start" });
});

// XSS önlemi için yardımcı fonksiyon
function escapeHtml(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}