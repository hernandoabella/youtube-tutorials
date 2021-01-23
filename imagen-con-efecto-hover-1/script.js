var hover = [].slice.call(document.querySelectorAll('.hover'));
if (hover.length) {
  hover.forEach(function (hover) {
    hover.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}
