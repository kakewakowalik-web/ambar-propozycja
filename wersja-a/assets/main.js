// Menu mobilne, podświetlenie podnawigacji, formularz demonstracyjny
(function(){
  var b=document.querySelector('.burger'), n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
    n.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){n.classList.remove('open');b.setAttribute('aria-expanded',false)})});}
  var links=[].slice.call(document.querySelectorAll('.subnav a'));
  if(links.length&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
    links.forEach(function(l){var s=document.querySelector(l.getAttribute('href'));if(s)io.observe(s)});
  }
  var f=document.getElementById('formularz');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form__msg');
    if(!f.checkValidity()){m.style.color='#b42318';m.textContent='Uzupełnij wymagane pola i zaznacz zgodę.';return;}
    m.style.color='';m.textContent='Dziękujemy! (Wersja demonstracyjna – formularz nie jest jeszcze podłączony do poczty.)';f.reset();});}
})();
