console.log('oi');
{
  const frases = document.querySelectorAll('.servico-frase')
  const textos = document.querySelectorAll('.servico-texto')

  const hideTextos = (index) => {
    textos.forEach(e => e.classList.remove('show'))
    textos[index].classList.add('show');
  }
  const clickFrase = (index) => {
    frases.forEach(e => e.classList.remove('click'))
    frases[index].classList.add('click');
  }


  frases.forEach((element,index) => {
    element.addEventListener('click', () => {
      hideTextos(index)
      clickFrase(index)

      const top = document.querySelector('.servico-bloco').offsetTop
      var testes = document.querySelector('.section-servicos')
      testes.scrollTop = 0

      // console.log(testes);

    })
  })
}
   
window.addEventListener('click',function(){ 
  // document.getElementById("myDIV").scrollTop = 20; 
  document.getElementById("js-scroll").scrollTo = 20; 
})
