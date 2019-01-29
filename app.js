
  function onReady() {

  const addToDoForm = document.getElementById('addToDoForm').style.color = "blue";
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList').style.fontSize = "normal";
  const deleteButton = document.getElementById('deleteButton');
  const label = document.getElementById('label1');


  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    // get the text
        let title = newToDoText.value;

        // create a new li
       let newLi = document.createElement('li');

       // create a new input
       let checkbox = document.createElement('input');

       // set the input's type to checkbox
       checkbox.type = "checkbox";

       // set the title
       newLi.textContent = title;

       // attach the checkbox to the li
       newLi.appendChild(checkbox);

       // attach the li to the ul
      toDoList.appendChild(newLi);

      //empty the input
      newToDoText.value = '';

 });

 deleteButton.addEventListener('click', () => {

  // Get list of ALL checkboxes that are checked
  var checked = document.querySelectorAll('input:checked').style.fontFamily = "Roboto";

// looping through each checked element using an for array for loop and checking the length of the array
  for (i = 0; i < checked.length; ++i) {
    parentLi = checked[i].parentNode;    // loop checks each checked line item and then remove the checked text and the checkbox.
    toDoList.removeChild(parentLi);
}

 });

 }


 window.onload = function() {
   onReady();
 };
