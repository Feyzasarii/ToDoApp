// HTML elemanlarını seçiyoruz (DOM'a erişim)
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// Butona tıklanma olayını (Event) dinliyoruz
addButton.addEventListener("click", function () {
  const YeniGorev = todoInput.value;
  if (YeniGorev == "") {
    alert("Lütfen bir görev giriniz!");
    return;
  }
  // 1. Ana liste elemanını oluştur (li)
  const yeniListe = document.createElement("li");
  // 2. Metni içine koyacağımız zarfı oluştur (span)
  const gorevMetni = document.createElement("span");
  gorevMetni.textContent = YeniGorev;
  // 3. Tamamla ve Sil butonlarını oluştur
  const tamamBtn = document.createElement("button");
  tamamBtn.textContent = "Ok";

  const silBtn = document.createElement("button");
  silBtn.textContent = "Sil";

  // --- BUTONLARIN ZEKA KISMINI EKLE ---

  // Silme butonu tıklandığında ne olsun?
  silBtn.onclick = function () {
    yeniListe.remove(); // Tüm satırı siler
  };

  // Tamamla butonu tıklandığında ne olsun?
  tamamBtn.onclick = function () {
    gorevMetni.classList.toggle("completed"); // Yazının üzerini çizip/açar
  };

  // --- MONTAJ (PARÇALARI BİRLEŞTİRME) ---

  // li'nin içine önce metni, sonra butonları ekle
  yeniListe.appendChild(gorevMetni);
  yeniListe.appendChild(tamamBtn);
  yeniListe.appendChild(silBtn);

  // En son, hazırladığımız bu dolu 'li'yi sayfadaki listeye (ul) ekle
  todoList.appendChild(yeniListe);

  // Kutuyu temizle
  todoInput.value = "";
});
