// Wersja B: nagłówek przy przewijaniu, animacje wejścia, podgląd oferty, menu, formularz demo
(function(){
  var hd=document.getElementById('hd');
  function onS(){hd.classList.toggle('scrolled',window.scrollY>40)}
  onS();window.addEventListener('scroll',onS,{passive:true});
  var b=document.querySelector('.burger'),n=document.getElementById('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
  var els=[].slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});
    els.forEach(function(e,i){e.style.transitionDelay=(Math.min(i%4,3)*80)+'ms';io.observe(e)});
  } else els.forEach(function(e){e.classList.add('in')});
  // podgląd zdjęcia kategorii
  var img=document.getElementById('offerImg');
  if(img){document.querySelectorAll('.orow').forEach(function(r){r.addEventListener('mouseenter',function(){
    document.querySelectorAll('.orow').forEach(function(x){x.classList.remove('on')});r.classList.add('on');
    var s=r.getAttribute('data-img');if(img.getAttribute('src')===s)return;img.classList.add('fade');
    setTimeout(function(){img.src=s;img.onload=function(){img.classList.remove('fade')}},200);});});}
  // indeks oferty
  var links=[].slice.call(document.querySelectorAll('.oidx a[href^="#"]'));
  if(links.length&&'IntersectionObserver' in window){
    var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-40% 0px -55% 0px'});
    links.forEach(function(l){var s=document.querySelector(l.getAttribute('href'));if(s)io2.observe(s)});
  }
  var f=document.getElementById('formularz');
  if(f){f.addEventListener('submit',function(e){e.preventDefault();var m=f.querySelector('.form__msg');
    if(!f.checkValidity()){m.style.color='#b42318';m.textContent='Uzupełnij wymagane pola i zaznacz zgodę.';return;}
    m.style.color='';m.textContent='Dziękujemy! (Wersja demonstracyjna – formularz nie jest jeszcze podłączony do poczty.)';f.reset();});}
})();
