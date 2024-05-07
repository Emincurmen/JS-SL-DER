// let slidersA = document.querySelectorAll('slide');
// let i = 0;
// console.log(slidersA.length)
// const nextSlide = () =>{
  // const ActiveSlide = document.querySelector('.active')
  // ActiveSlide.classList.remove('active')
  // if(ActiveSlide.nextElementSibling){
  //   ActiveSlide.nextElementSibling.classList.add('active')
  // }
  // else if(ActiveSlide.nextElementSibling === false){
  //   slidersA[0].classList.add('active')
  // }


const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const circles = document.querySelectorAll('.cir');
    const cir1 = document.querySelectorAll('.one');
    const cir2 = document.querySelectorAll('.two');
    const cir3 = document.querySelectorAll('.tree');

    //index numaramızı atadık
    let currentSlide = 0;


    //64 ve 65. satırda htmlde slide ve circle classına sahip tüm etiketlerden active ve on classlarını kaldırıyoruz
    ///nextSlide ve prevSlide fonksiyonlarımızdan gelen değişkenin içerisindeki indeks numaramızla birlikte göstermek istediğimiz img etiketine ve dairemize active ve on classlarını ekliyoruz 
    function showSlide(n) {
      slides.forEach(slide => slide.classList.remove('active'));
      circles.forEach(slide => slide.classList.remove('on'));
      slides[n].classList.add('active');
      circles[n].classList.add('on');
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    function first(){
      currentSlide = 0;
      showSlide(currentSlide)
    }
    function second(){
      currentSlide = 1;
      showSlide(currentSlide)
    }
    function third(){
      currentSlide = 2;
      showSlide(currentSlide)
    }


    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);