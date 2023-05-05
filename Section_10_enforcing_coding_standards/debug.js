function btnClicked() {
  document.getElementById('p1').innerHTML = 'Button 1 was clicked';
  alert('Button 1 was clicked');
}

function createString(someString) {
  document.getElementById(
    'p2'
  ).innerText = `Characters typed: ${someString.length}`;
}

function charsTyped() {
  const chars = document.getElementById('i1').ariaValueMax;

  createString(chars);
}

function btn2Clicked() {
  const main = document.getElementById('main');
  const child = document.getElementById('p3');

  main.removeChild(child);
}

document.getElementById('b2').addEventListener('click', btn2Clicked);

function valueEntered() {
  const size = document.getElementById('i2').value.length;
  document.getElementById('p4').style.fontSize = `${size} em`;
}

document.getElementById('i2').addEventListener('change', valueEntered);

btnClicked();
charsTyped();
