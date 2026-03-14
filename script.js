// 1. ADIM: Elemanları Seçme
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

// 2. ADIM: Veriyi Hafızadan Çekme
// Tarayıcı hafızasında "gorevler" diye bir şey varsa onu al (metinden listeye çevir), yoksa boş bir liste başlat.
let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

// Sayfa ilk açıldığında hafızada görev varsa ekrana bas
sayfayiCiz();

// 3. ADIM: Yeni Görev Ekleme
addButton.addEventListener("click", function () {
  const metin = todoInput.value.trim();

  if (metin === "") {
    alert("Lütfen bir görev giriniz!");
    return;
  }

  // Yeni bir görev objesi oluşturuyoruz (Hafıza için)
  const yeniGorevObjesi = {
    id: Date.now(), // Her göreve benzersiz bir kimlik veriyoruz
    metin: metin,
    tamamlandi: false,
  };

  // Listemize ekle
  gorevler.push(yeniGorevObjesi);

  // Hafızayı güncelle ve ekranı tekrar çiz
  hafizayaKaydet();
  sayfayiCiz();

  todoInput.value = "";
});

// 4. ADIM: Hafızaya Kaydetme Fonksiyonu
function hafizayaKaydet() {
  // Listeyi metne çevirip (JSON) tarayıcı hafızasına yazıyoruz
  localStorage.setItem("gorevler", JSON.stringify(gorevler));
}

// 5. ADIM: Ekrana Çizme Fonksiyonu (Senin eski 'li' oluşturma kodun burada yaşıyor)
function sayfayiCiz() {
  todoList.innerHTML = ""; // Önce listeyi temizle ki eski görevler tekrar etmesin

  gorevler.forEach(function (gorev) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = gorev.metin;

    // Eğer görev tamamlandıysa stilini ekle
    if (gorev.tamamlandi) {
      span.classList.add("completed");
    }

    const tamamBtn = document.createElement("button");
    tamamBtn.textContent = gorev.tamamlandi ? "Geri Al" : "Ok";

    const silBtn = document.createElement("button");
    silBtn.textContent = "Sil";

    // --- BUTONLARIN ZEKA KISMI ---

    silBtn.onclick = function () {
      // Bu ID dışındakileri tut diyerek silmiş oluyoruz
      gorevler = gorevler.filter((g) => g.id !== gorev.id);
      hafizayaKaydet();
      sayfayiCiz();
    };

    tamamBtn.onclick = function () {
      // Görevin durumunu tersine çeviriyoruz (true ise false yap)
      gorev.tamamlandi = !gorev.tamamlandi;
      hafizayaKaydet();
      sayfayiCiz();
    };

    li.appendChild(span);
    li.appendChild(tamamBtn);
    li.appendChild(silBtn);
    todoList.appendChild(li);
  });
}
