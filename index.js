const sliderDiv = document.querySelector("#slider");
const image = document.querySelector('img');
let counter = 2;
let timer1, timer2;
const spans = document.querySelectorAll('.slide');

const slideChanger = () => {

  image.src = `slajdy/slajd${counter}.png`;

  const currentSpan = document.getElementById(`${counter}`);
  const previousSpan = currentSpan.previousElementSibling;

  if (counter === 1) {

    document.getElementById('5').style.color = 'white';
    currentSpan.style.color = 'red';

  } else {

    currentSpan.style.color = 'red';
    previousSpan.style.color = 'white';

  }

  counter++;

  if (counter > 5) {
    counter = 1;
  }

}

timer1 = setInterval(slideChanger, 3000);

sliderDiv.addEventListener('click', (event) => {

  if (event.target.className === 'slide') {

    let id = event.target.id;

    clearInterval(timer1);
    clearInterval(timer2);

    spans.forEach((span) => {
      span.style.color = 'white';
    });

    event.target.style.color = 'red';

    image.src = `slajdy/slajd${id}.png`;

    id = parseInt(id, 10);

    counter = id + 1;

    if (counter > 5) {
      counter = 1;
    }

    if (event.target.id)

      timer2 = setInterval(slideChanger, 3000);

  }

});