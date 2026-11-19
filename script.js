// Menüde bulunduğumuz sayfanın düğmesini aktif (yeşil) yapar
const mevcutSayfa = location.pathname.split("/").pop() || "index.html";

document.querySelectorAll("nav a").forEach((baglanti) => {
  if (baglanti.getAttribute("href") === mevcutSayfa) {
    baglanti.classList.add("aktif");
  }
});

const aramaKutusu = document.getElementById("arama-kutusu");

if (aramaKutusu) {
  const kartlar = document.querySelectorAll("#tarif-kartlari .tarif-karti");
  const sayiYazisi = document.getElementById("tarif-sayisi");

  function kartlariSuz() {
    const aranan = aramaKutusu.value.trim().toLocaleLowerCase("tr-TR");
    let gorunen = 0;

    kartlar.forEach((kart) => {
      const baslik = kart.querySelector("h3").textContent.toLocaleLowerCase("tr-TR");
      const uyuyor = baslik.includes(aranan);
      kart.style.display = uyuyor ? "" : "none";
      if (uyuyor) gorunen++;
    });

       if (aranan === "") {
      sayiYazisi.textContent = "";
    } else {
      sayiYazisi.textContent = gorunen === 0 ? "Aradığın tarif bulunamadı." : gorunen + " tarif";
    }
  }

  aramaKutusu.addEventListener("input", kartlariSuz);
  kartlariSuz();
}