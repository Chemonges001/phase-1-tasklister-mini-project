document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => { 
    e.preventDefault()
    myToDoList(document.getElementById("new-task-description").value)
  })
  form.reset()
});

function myToDoList(todo){
  const li = document.createElement ('li')
  const btn = document.createElement ('button')
  btn.addEventListener('click', deleteTasks)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
}

function deleteTasks (e){
e.target.parentNode.remove()
}