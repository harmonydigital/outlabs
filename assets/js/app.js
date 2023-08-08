const app = document.getElementById('app')

console.log(app)


if(app){
    app.innerHTML=`
       
        <main>  
        
            <div class="content-text">
                <h1>
                    grupo VIP de r$97 por zer0 até hoje as 23:59
                </h1>
            </div>

            <div class='cover'>
                 <img src='assets/img/cover-mb.png'>
            </div>

            <div class='container'> 
                <h2>
                clique no botão abaixo e receba o seu acesso imediato a comunidade vip agora no telegram

                </h2>
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                acessar comunidade vip telegram
              </a>
                          <div class='telegram'>
                            <img style="  width: 80px;  " src='assets/img/telegram.png'>
                 
                        </div>
             </div>





            <div class='section-half'> 
                <div>
                   <h3>oque você vai receber?</h3>
                </div> 
            </div>

            <div>
                <h4> Sinais gratuitamente todos os dias </h4>
            </div>

            <div class='display'>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide"> <img src='assets/img/img1.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img2.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img3.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img4.jpeg'></div>
                
                </div>
                <div class="swiper-pagination"></div>
            </div>
            </div>






        </main>
        <footer>
             Copyright 2023® - Manauara  Termos de Uso | Políticas de Privacidade
        </footer>
    `
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop:true,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });