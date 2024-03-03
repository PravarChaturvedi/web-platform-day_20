// Challenge 1
window.onload = function () {
  document.getElementById('user').innerHTML = 'Pravar';
};

// Challenge 2
document.getElementById('btn-click').onclick = function () {
  this.style.backgroundColor = 'green';
};

// Challenge 3
function makeSentence() {
  var noun = document.getElementById('noun').value;
  var verb = document.getElementById('verb').value;
  var adverb = document.getElementById('adverb').value;

  var sentence = noun + ' ' + verb + ' ' + adverb;
  document.getElementById('statement').innerHTML = sentence;
}

document.getElementById('build-button').addEventListener('click', makeSentence);

// Challenge 4.1 (Using event bubbling)
document.getElementById('child').addEventListener('click', function () {
  console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', function () {
  console.log('Parent clicked');
});

document.getElementById('grandparent').addEventListener('click', function () {
  console.log('Grandparent clicked');
});

// Challenge 4.2 (Using event capturing)
document.getElementById('grandparent').addEventListener(
  'click',
  function () {
    console.log('Grandparent clicked');
  },
  true
);

document.getElementById('parent').addEventListener(
  'click',
  function () {
    console.log('Parent clicked');
  },
  true
);

document.getElementById('child').addEventListener(
  'click',
  function () {
    console.log('Child clicked');
  },
  true
);

// Challenge 5 (Event delegation)
document.getElementById('category').addEventListener('click', function (event) {
  if (event.target.id === 'blazers') {
    console.log('blazers');
  }
});
