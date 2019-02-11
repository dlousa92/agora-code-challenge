window.onload = function () {
  console.log('js connected')

  // debounce function makes sure checkSlide only runs every 20 milliseconds
  function debounce (func, wait = 20, immediate = true) {
    var timeout
    return function () {
      var context = this, args = arguments
      var later = function () {
        timeout = null
        if (!immediate) func.apply(context, args)
      };
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  };

  const sliderSections = document.querySelectorAll('.slide-in')
  console.log(sliderSections)

  function checkSlide (e) {
    sliderSections.forEach(sliderSection => {
      // sets pixel height we want to slide in at
      const slideInAt = (window.scrollY + window.innerHeight) - 200

      // checks if section is ready to slide in, if it is add the active class list which will transition section in
      const readyToSlide = slideInAt > sliderSection.offsetTop;
      if (readyToSlide) {
        sliderSection.classList.add('active')
      }
    })
  }

  window.addEventListener('scroll', debounce(checkSlide))
}
