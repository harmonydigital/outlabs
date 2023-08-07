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

            <div>

                <h2>
                clique no botão abaixo e receba o seu acesso imediato a comunidade vip agora no telegram

                </h2>
                
                <a href="https://t.me/ComunidadeCassinoMilionario" class="btn neon-button">quero entrar na </br> comunidade vip agora</a>
                <div class='telegram'>
                     <img style="
                     width: 80px;
                 " src='assets/img/telegram.png'>
                </div>
                </div>

        </main>
        <footer>
             Copyright 2023® - Manauara  Termos de Uso | Políticas de Privacidade
        </footer>
    `
}