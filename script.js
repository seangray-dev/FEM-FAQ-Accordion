document
  .querySelectorAll(".question-accordion")
  .forEach(function (questionAccordion) {
    questionAccordion.addEventListener("click", function (event) {
      if (
        event.target.classList.contains("question") ||
        event.target.classList.contains("accordion-open")
      ) {
        const answer = this.nextElementSibling;
        const questions = document.querySelectorAll(".question");
        const arrow = this.querySelector(".accordion-open");

        answer.classList.toggle("answer-hidden");
        questions.forEach(function (question) {
          question.classList.remove("question-active");
        });
        this.querySelector(".question").classList.add("question-active");

        if (answer.classList.contains("answer-hidden")) {
          arrow.classList.remove("rotate");
        } else {
          arrow.classList.add("rotate");
        }
      }
    });
  });
