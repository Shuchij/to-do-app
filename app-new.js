function onReady() {

  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let idValue=0;

  var i;
  for (i = 0; i < localStorage.length; i++) {
    // get item from localStorage
    localStorageString = localStorage.getItem(i);
    //parse localStorageString to convert it to object and store in toDos
    toDos[i] = JSON.parse(localStorageString);
    console.log(toDos[i]);
  }

  //renderTheUI right after you have populated toDos from localStorage
  renderTheUI();


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

    //var myJSON = JSON.stringify(toDos[idValue]);
    localStorage.setItem(idValue,JSON.stringify(toDos[idValue]));

    // Clear initial text input
    newToDoText.value = '';

    renderTheUI();
    idValue = idValue + 1;  // incrementing the ID for every new text input object created
  }

  function renderTheUI() {

    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

    toDos.forEach(function(toDo) {

      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      const deleteButton = document.createElement('input');

      deleteButton.type="button";
      deleteButton.value="Delete";
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;
      newLi.id = toDo.id;


      // Dynamically add function for onclick event
      deleteButton.onclick = function(){
          var node = this.parentNode;
          toDos = toDos.filter(e => e.id != node.id);
          renderTheUI();
     };

    // Dynamically add listener for checkbox onchange event
     checkbox.onchange = function(){
         if (this.checked) {          // if checkbox is checked
           this.complete = true;
         } else {                    // if checkbox is not checked
           this.complete = false;
         }
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
