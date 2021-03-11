/* using selectors inside the element */

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    questions.forEach((otherQuestion) => {
      if (question !== otherQuestion) {
        otherQuestion.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });

  const answers = question.querySelectorAll("li");
  answers.forEach((answer) => {
    answer.addEventListener("click", () => {
      if (answer.classList.contains("false")) {
        answer.classList.toggle("false-anim");
        // answer.style.textDecoration = "line-through red wavy";
        // answer.style.color = "red";
      } else {
        answer.classList.toggle("correct-anim");
        // answer.style.textDecoration = "underline";
        // answer.style.color = "green";
      }
      const child = answer.querySelector(".icon");
      child.classList.toggle("hide-icon");
    });
  });
});

/* traversing the dom */
// const btns = document.querySelectorAll(".question-btn");
// const answers = document.querySelectorAll("li");

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const currentQuestion = e.currentTarget.parentElement.parentElement;

//     btns.forEach((item) => {
//       const otherQuestion = item.parentElement.parentElement;
//       if (otherQuestion !== currentQuestion) {
//         otherQuestion.classList.remove("show-text");
//       }
//     });

//     currentQuestion.classList.toggle("show-text");
//   });
// });

// answers.forEach((answer) => {
//   answer.addEventListener("click", () => {
//     if (answer.classList.contains("false")) {
//       answer.classList.toggle("false-anim");
//       // answer.style.textDecoration = "line-through red wavy";
//       // answer.style.color = "red";
//     } else {
//       answer.classList.toggle("correct-anim");
//       // answer.style.textDecoration = "underline";
//       // answer.style.color = "green";
//     }
//     const child = answer.querySelector(".icon");
//     child.classList.toggle("hide-icon");
//   });
// });
