function onReady() {

  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

  renderTheUI();

  function createNewToDo() {

    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }  // exit out if input text is empty

    toDos.push({
        title: newToDoText.value,
        complete: false
      });

    // Clear initial text input
    newToDoText.value = '';

    renderTheUI();

  }

  function renderTheUI() {

    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

    });



  }



}








window.onload = function() {
  onReady();
};
