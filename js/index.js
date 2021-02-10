// Your code goes here
function initFadeIns() {
  let elements;
  let windowHeight;

  function reinitialize() {
    windowHeight = window.innerHeight;
    elements = document.querySelectorAll('img');
  }

  function checkPosition() {
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const positionFromTop = elements[i].getBoundingClientRect().top;

      if (positionFromTop - windowHeight + 100 <= 0) {
        element.classList.add('fade-in-element');
        element.classList.remove('hidden');
      }
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', reinitialize);

  reinitialize();
  elements.forEach(element => element.classList.add('hidden'));
  checkPosition();
}

function initAnchorZooms() {
  const anchors = document.querySelectorAll('a');
  anchors.forEach(anchor => {
    const originalColor = anchor.style.color;
    anchor.style.transition = 'color 0.2s ease, transform 0.2s ease'
    anchor.addEventListener('mouseenter', () => {
      anchor.style.color = '#4972b3';
      anchor.style.transform = 'translate(0, -2px)';
    });
    anchor.addEventListener('mouseleave', () => {
      anchor.style.color = originalColor;
      anchor.style.transform = 'translate(0, 0)';
    });
  });
}

initFadeIns();
initAnchorZooms();