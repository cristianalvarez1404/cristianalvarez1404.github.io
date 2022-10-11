const d = document;

d.addEventListener('click',e => {
  if(e.target.matches('.btn-hambugar > *') || e.target.matches('.btn-hambugar') ){
    d.body.classList.toggle('active')
  }
  
  if(e.target.matches('.btn-close > *') || e.target.matches('.btn-close')){
    d.body.classList.toggle('active')
  }

  if(e.target.matches('body.active .nav-bar > a')){
    d.body.classList.remove('active');
  }
})

