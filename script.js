// const questions = document.querySelectorAll(".question").forEach((question) => {
//   question.addEventListener("click", (e) => {
//     question.classList.toggle("question-active");
//   });
// });

// const arrows = document.querySelectorAll(".accordion-open").forEach((arrow) => {
//   arrow.addEventListener("click", (e) => {
//     const answers = document.querySelectorAll(".answer");
//     for (answer of answers) {
//       answer.classList.toggle("answer-hidden");
//     }
//   });
// });

const questions = document.querySelectorAll(".question").forEach((question) => {
  question.addEventListener("click", (e) => {
    question.classList.toggle("question-active");
  });
});

const arrows = document.querySelectorAll(".accordion-open").forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const current = e.currentTarget;
      const answers = document.querySelectorAll(".answer");
      for (answer of answers) {
        answer.classList.toggle("answer-hidden");
      }
  });
});
