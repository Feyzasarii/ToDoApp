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
  // 1. Yeni bir 'li' (liste elemanı) oluşturuyoruz
  const yeniListe = document.createElement("li");
  // 2. İçine kullanıcının yazdığı metni koyuyoruz
  yeniListe.textContent = YeniGorev;
  // 3. Bu yeni elemanı sayfadaki 'ul' içine ekliyoruz
  todoList.appendChild(yeniListe);

  // Kutuyu temizle
  todoInput.value = "";
});
