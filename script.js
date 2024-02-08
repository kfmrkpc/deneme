const categories = {
  category1: [
    { question: "Kategori 1 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 1 Sorusu 2?", answer: "Cevap 2" },
  ],
  category2: [
    { question: "Kategori 2 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 2 Sorusu 2?", answer: "Cevap 2" },
  ],
  category3: [
    { question: "Kategori 3 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 3 Sorusu 2?", answer: "Cevap 2" },
  ],
  category4: [
    { question: "Kategori 4 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 4 Sorusu 2?", answer: "Cevap 2" },
  ],
  category5: [
    { question: "Kategori 5 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 5 Sorusu 2?", answer: "Cevap 2" },
  ],
  category6: [
    { question: "Kategori 6 Sorusu 1?", answer: "Cevap 1" },
    { question: "Kategori 6 Sorusu 2?", answer: "Cevap 2" },
  ],
};

let currentCategory = "";

document.querySelectorAll('.category').forEach(item => {
  item.addEventListener('click', event => {
    selectCategory(item.id);
  });
});

function selectCategory(category) {
  currentCategory = category;
  showQuestion();
}

function showQuestion() {
  document.querySelector(".category-container").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  const randomIndex = Math.floor(Math.random() * categories[currentCategory].length);
  const question = categories[currentCategory][randomIndex].question;
  document.getElementById("question").textContent = question;
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const correctAnswer = categories[currentCategory].find(q => q.question === document.getElementById("question").textContent).answer.toLowerCase();
  if (userAnswer === correctAnswer) {
    alert("Doğru cevap!");
    showQuestion();
  } else {
    alert("Yanlış cevap. Tekrar deneyin.");
  }
}

function returnToMenu() {
  document.querySelector(".category-container").style.display = "flex";
  document.getElementById("quiz").style.display = "none";
}
