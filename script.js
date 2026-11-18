// Menüde bulunduğumuz sayfanın düğmesini aktif (yeşil) yapar
const mevcutSayfa = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((baglanti) => {
  if (baglanti.getAttribute("href") === mevcutSayfa) {
    baglanti.classList.add("aktif");
  }
});

// Tüm tarifler sayfasında: arama kutusuna yazılana göre kartları süzer
const aramaKutusu = document.getElementById("arama-kutusu");

if (aramaKutusu) {
  const kartlar = document.querySelectorAll("#tarif-kartlari .tarif-karti");

  aramaKutusu.addEventListener("input", () => {
    const aranan = aramaKutusu.value.trim().toLocaleLowerCase("tr-TR");

    kartlar.forEach((kart) => {
      const baslik = kart.querySelector("h3").textContent.toLocaleLowerCase("tr-TR");
      kart.style.display = baslik.includes(aranan) ? "" : "none";
    });
  });
}