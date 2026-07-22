function loginTikTok() {

    document.getElementById("home").classList.add("hidden");

    document.getElementById("loading").classList.remove("hidden");


    setTimeout(function(){

        document.getElementById("loading").classList.add("hidden");

        document.getElementById("connected").classList.remove("hidden");


    },2000);


}



function openDashboard(){

    document.getElementById("connected").classList.add("hidden");

    document.getElementById("dashboard").classList.remove("hidden");

}

let videoEscolhido = false;

function abrirVideo(){

    document.getElementById("videoInput").click();

}

function videoSelecionado(){

    let arquivo =
    document.getElementById("videoInput").files[0];

    if(!arquivo) return;

    videoEscolhido = true;

    document.getElementById("videoNome").innerHTML =
    "🎬 " + arquivo.name;

}

function publishVideo(){

    if(!videoEscolhido){

        alert("Selecione um vídeo antes de publicar.");

        return;

    }

    document.getElementById("dashboard").classList.add("hidden");

    document.getElementById("publishing").classList.remove("hidden");


    let progress = 0;

    let bar = document.getElementById("bar");

    let status = document.getElementById("status");


    let interval = setInterval(function(){


        progress += 20;


        bar.style.width = progress + "%";


        if(progress === 20){

            status.innerHTML =
            "Preparando vídeo...";

        }


        if(progress === 40){

            status.innerHTML =
            "Enviando para o TikTok...";

        }


        if(progress === 60){

            status.innerHTML =
            "Processando arquivo...";

        }


        if(progress === 80){

            status.innerHTML =
            "Criando rascunho...";

        }


        if(progress >= 100){

            clearInterval(interval);


            status.innerHTML =
            "✔ Vídeo enviado com sucesso.<br><br>Rascunho criado no TikTok.";


        }


    },1000);


}