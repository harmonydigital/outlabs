const app = document.getElementById('app')

console.log(app)


if(app){
    app.innerHTML=`
       
        <main>  
        
            <div class='flex-container'>
                <div class="content-text">
                    <h1 class="animate__animated animate__fadeIn ">
                        grupo VIP de <span class="line-price">r$97</span> por <span class='flag-green'>zero</span> até hoje às 23:59
                    </h1>
                </div>

                <div class='cover  animate__animated animate__fadeIn '>
                    <img src='assets/img/cover-mb.png'>
                </div>

            </div>


            <div class='container'> 
                <h2 class=' animate__animated animate__backInRight'>
                Clique no botão abaixo e receba seu acesso 100% grátuito a comunidade vip no telegram
                </h2>
                <a class=' animate__animated animate__pulse' href="https://t.me/ComunidadeCassinoMilionario">
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
                    <h4> Sinais ao vivo todos os dias </h4> 
                </div> 
            </div>

            

            <div class='display'>
            <div>
                <h4> Resultado de alguns alunos da comunidade vip</h4>
            </div>
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                <div class="swiper-slide"> <img src='assets/img/img1.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img2.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img3.jpeg'></div>
                <div class="swiper-slide"> <img src='assets/img/img4.jpeg'></div>
                
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            </div>






        </main>
        <footer>
             Copyright 2023® - Manauara 
        </footer>
    `
}

