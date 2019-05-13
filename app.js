function onReady() {

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
       let title = newToDoText.value;

        // create a new li
       let newLi = document.createElement('li');

       // create a new input
       let checkbox = document.createElement('input');

       // create a new delete button
       let deleteButton = document.createElement('input');
       deleteButton.type="button";
       deleteButton.value="Delete";

      // Dynamically add function for onclick event
      deleteButton.onclick = function(){
          var node = this.parentNode;
          //alert("Deleting "+ title); This will echo the item text getting deleted
          node.parentNode.removeChild(node);  // Get the list item of the button, pass it to list container, call removeChild
        };


       // set the input's type to checkbox
       checkbox.type = "checkbox";

       // set the title
       newLi.textContent = title;

       // attach the checkbox to the li
       newLi.appendChild(checkbox);
       newLi.appendChild(deleteButton);

       // attach the li to the ul
      toDoList.appendChild(newLi);
      //empty the input
      newToDoText.value = '';

 });


}

window.onload = function() {
   onReady();
};
