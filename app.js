const form = document.getElementById('form');
const topTextInput = document.getElementById('topText');
const bottomTextInput = document.getElementById('bottomText');
const img = document.getElementById('img');
const addMeme = document.getElementById('addBtn');
const section = document.querySelector('section');

//Meme Form submission
form.addEventListener('submit', function(e) {
  e.preventDefault();

  //Call a getInfo function
  createMeme();
})

//createMeme function to create a meme
function createMeme(topText, bottomText, imgURL) {

  //Retrieving users inputs
  topText = topTextInput.value;
  bottomText = bottomTextInput.value;
  imgURL = img.value;

  //Creating new elements
  const top = document.createElement('p');
  const bottom = document.createElement('p');
  const imageDiv = document.createElement('img');
  const removeBtn = document.createElement('button');

  //Update top text with retrieved text and add the class
  top.innerText = topText;
  top.classList.add('topBottomText');

  //Update bottom text with retrieved text and add the class
  bottom.innerText = bottomText;
  bottom.classList.add('topBottomText');

  //Conecting img src with user URL and add the class
  imageDiv.setAttribute('src', imgURL);
  imageDiv.classList.add('imageDiv');

  removeBtn.innerText = 'Delete';
  removeBtn.classList.add('removeBtn');

  //Create a new div and add the class
  const newDiv = document.createElement('div');
  newDiv.classList.add('newDiv');

  //Append everything to new div
  newDiv.append(top);
  newDiv.append(removeBtn);
  newDiv.append(bottom);
  newDiv.append(imageDiv);
  section.append(newDiv);

  //Reset all Users Inputs
  topTextInput.value = '';
  bottomTextInput.value = '';
  img.value = '';

  //Event listener for Dlete button
  removeBtn.addEventListener('click', function() {
    newDiv.remove();
  })

}
