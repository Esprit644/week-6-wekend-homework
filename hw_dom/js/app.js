document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleForm);

  const deleteButton = document.querySelector('#button');
  deleteButton.addEventListener('click', handleDelete);

})

const handleForm = function(event){
  event.preventDefault();
  
  const retrieveInput = document.createElement('li');

  const itemFirstname = document.createElement('h3');
  itemFirstname.textContent = (`${event.target.firstname.value} `);
  retrieveInput.appendChild(itemFirstname);

  const itemLastName = document.createElement('h3');
  itemLastName.textContent = (`${event.target.lastname.value}`);
  retrieveInput.appendChild(itemLastName);

  const itemSuperhero = document.createElement('h2');
  itemSuperhero.textContent = (`${event.target.superherolist.value}`);
  retrieveInput.appendChild(itemSuperhero);


  const list = document.querySelector(`#hero-list`);
  list.appendChild(retrieveInput);



  event.target.reset();
}

const handleDelete = function (){
  const deleteList = document.getElementById('hero-list');
  while (deleteList.firstChild) {
    deleteList.removeChild(deleteList.firstChild);
  }
}
