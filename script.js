// Menüde bulunduğumuz sayfanın düğmesini aktif (yeşil) yapar
const mevcutSayfa = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((baglanti) => {
  if (baglanti.getAttribute("href") === mevcutSayfa) {
    baglanti.classList.add("aktif");
  }
});