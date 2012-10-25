function main () {
'use strict';

  var
  front     = document.getElementById('button-front'),
  back      = document.getElementById('button-back'),
  right     = document.getElementById('button-right'),
  left      = document.getElementById('button-left'),
  top       = document.getElementById('button-top'),
  bottom    = document.getElementById('button-bottom'),
  textOne   = document.getElementById('desc-one'),
  textTwo   = document.getElementById('desc-two'),
  textThree = document.getElementById('desc-three'),
  textFour  = document.getElementById('desc-four'),
  textFive  = document.getElementById('desc-five'),
  textSix   = document.getElementById('desc-six'),
  previousText = textOne;

  front.onclick = function () {
    if (textOne.getAttribute('class') === 'hidden') {
      textOne.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textOne;
    }
  };

  back.onclick = function () {
    if (textTwo.getAttribute('class') === 'hidden') {
      textTwo.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textTwo;
    }
  };

  right.onclick = function () {
    if (textThree.getAttribute('class') === 'hidden') {
      textThree.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textThree;
    }
  };

  left.onclick = function () {
    if (textFour.getAttribute('class') === 'hidden') {
      textFour.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textFour;
    }
  };

  top.onclick = function () {
    if (textFive.getAttribute('class') === 'hidden') {
      textFive.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textFive;
    }
  };

  bottom.onclick = function () {
    if (textSix.getAttribute('class') === 'hidden') {
      textSix.setAttribute('class', 'visible');
      previousText.setAttribute('class', 'hidden');
      previousText = textSix;
    }
  };

  function scrollTo(hash) {
    location.hash = "#" + hash;
	};


}

window.onload = function () {
'use strict';

  main();

};
