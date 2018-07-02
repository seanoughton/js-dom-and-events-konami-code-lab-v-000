const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const input = document.body;

input.addEventListener('keydown', init(e) );

let index = 0;


function init(e) {
  // Write your JavaScript code inside the init() function
  const key = parseInt(e.detail || e.which);

  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert('Awesome!')
    }
  } else {
    index = 0;
  };

}
