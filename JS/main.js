window.addEventListener("load", main);

function main() {
  addEventListeners();
  startCalender();
  todo();
  
}

function addEventListeners() {
  const previousMonthBtn = document.getElementById("previousMonthBtn");
  const nextMonthButton = document.getElementById("nextMonthBtn");

  previousMonthBtn.addEventListener("click", previous);
  nextMonthButton.addEventListener("click", next);

  const changeInCalender = document.getElementById("month");

  changeInCalender.addEventListener("change", jump);

  form.addEventListener("submit", addTodo);

  color.addEventListener("input", updateFirst, false);
  color.addEventListener("change", updateAll, false);

  li.addEventListener("click", removeTodo);
}
