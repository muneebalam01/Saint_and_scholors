function setInt() {
    clearInterval(int);
    int = setInterval(function() {
      var btns = document.getElementsByName("carousel");
      for(var i = 0; i < btns.length; i++) {
        if(btns[i].checked) {
          btns[i].checked = false;
          if(i + 1 == btns.length) {
            btns[0].checked = true;
          }
          else {
            btns[i + 1].checked = true;
          }
          return;
        }
      }
    }, 5000); 
  }
  setInt();

  
  let slideIndex = 1;
showSlide(slideIndex);

function slide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("testimonial-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active-slide");
  }
  slides[slideIndex-1].classList.add("active-slide");
}
