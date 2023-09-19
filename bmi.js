const form = document.querySelector('form');
//here we will not pick the height and weight input using query slector becouse it gives an empty value due to page refresh
form.addEventListener('submit',function(e){
  e.preventDefault(); //this stops it to perform the defalut actin of a form like submiting the data etc
  const height = parseInt(document.querySelector('#height').value); //parse int coz js takes the input in the form of a string
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`please give a valid height ${height}`;

  }
  else if(weight==='' || weight < 0 || isNaN(weight)){
    results.innerHTML=`please enter a valid weight ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

  }

});