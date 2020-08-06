//search for field and click
document.querySelector('#add-time').addEventListener('click', cloneField)


//executa uma acao
function cloneField() {
  //double fields
  const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)
  
  //pick field up
  const fields = newFieldContainer.querySelectorAll('input')
  
  //hard way to clean
  // fields[0].value = ""
  // fields[1].value = ""

  //foreach fieald: clean
  fields.forEach(field => {
    field.value = ""
  });

  //put on the page
  document.querySelector('#schedule-items').appendChild(newFieldContainer)
}