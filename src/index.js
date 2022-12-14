document.addEventListener("DOMContentLoaded", () => {

  const input = document.getElementById("new-task-description");
  const form = document.querySelector("form");
  form.addEventListener('submit', (e) => {
    let newtask = input.value
    e.preventDefault();
    if (newtask.length === 0) {
      alert('Task cannot be empty')
    } else {
      handleToDo(newtask);
    }
    form.reset()
  })
});


function handleToDo(newtask) {
  let listItem = document.createElement("li");
  let btn = document.createElement('button')


  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X Remove'
  listItem.innerText = `${newtask}`;
  listItem.appendChild(btn)
  document.querySelector("#tasks").appendChild(listItem);
}

function handleDelete(e) {
  e.target.parentNode.remove()
}