let taskInput = document.getElementById('taskInput');
let taskList = document.getElementById('taskList');
let add = document.getElementById('add');

console.log(add);
//to add an item
function addTask() {
  let mainDiv = document.createElement('div');
  mainDiv.classList.add('mainDiv');

  let p = document.createElement('p');
  p.textContent = taskInput.value;
  //create div for buttons
  let div = document.createElement('div');
  div.classList.add('innerDiv');
 
  //delete button
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete';
  deleteButton.addEventListener('click', deleteTask);
  deleteButton.style.backgroundColor = 'rgb(238, 34, 34)';
  div.appendChild(deleteButton);

  //edit button
  let editButton = document.createElement('button');
  editButton.addEventListener('click', editTask);
  let editTxt = document.createTextNode('Edit');
  editButton.appendChild(editTxt);
  editButton.classList.add('edit');
  div.appendChild(editButton);

  //complete button
  let completeButton = document.createElement('button');
  completeButton.addEventListener('click', completeTask);
  completeButton.innerHTML = 'Completed';
  div.appendChild(completeButton);

  mainDiv.append(p, div);
  taskList.appendChild(mainDiv);

  //clear the input field
  //   taskInput.value = '';
  if (add.innerHTML === 'Add Task') {
    taskInput.value = '';
  } else {
    add.innerHTML = 'Add Task';
    taskInput.value = '';
  }
}

function deleteTask() {
  this.parentElement.parentElement.remove();
}
function editTask() {
  let selectedIndex = this.parentElement.parentElement;
  taskInput.value = selectedIndex.firstElementChild.innerHTML;
  add.innerHTML = 'Update';
  selectedIndex.remove();
}

function completeTask() {
  let selectedIndex = this.parentElement.parentElement;
  let completedIndex = selectedIndex.firstElementChild;
  completedIndex.classList.toggle('lineThrough');
}

taskInput.addEventListener('keyup', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    addTask();
  }
});
