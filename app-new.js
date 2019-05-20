function onReady() {

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let idValue=0;


  addToDoForm.addEventListener('submit', event => {
      event.preventDefault();
      createNewToDo();
    });

  function createNewToDo() {

    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }  // exit out if input text is empty


    toDos.push({
        title: newToDoText.value,
        complete: false,
        id: idValue
      });

    // Clear initial text input
    newToDoText.value = '';

    renderTheUI();
    idValue = idValue + 1;  // incrementing the ID for every new text input object created

    //console.log(toDos['idValue'].id);

  }

  function renderTheUI() {

    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');

      deleteButton.type="button";
      deleteButton.value="Delete";
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      newLi.id = toDo.id;


      // Dynamically add function for onclick event
      deleteButton.onclick = function(){
          var node = this.parentNode;
          console.log(node.id);
          toDos = toDos.filter(e => e.id !== node.id);
          console.log(toDos);

          renderTheUI();


      //     //alert("Deleting "+ title); This will echo the item text getting deleted
      //   //  node.parentNode.removeChild(node);  // Get the list item of the button, pass it to list container, call removeChild
     };


      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

    });



  }



}








window.onload = function() {
  onReady();
};
