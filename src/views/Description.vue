<template>
    <div class = "description" style="background-color: white">
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <!-- Navbar (sit on top) -->
        <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
            <img src="../assets/icon.png" class="w3-bar-item">
          <!-- Float links to the right. Hide them on small screens -->
            <div class="w3-right w3-hide-small">
                <vk-button type="text" @click="showLogin = true" class="w3-bar-item buton buton uk-width-1-2@m uk-margin-auto ">Log in</vk-button>
                <vk-button type="text" @click="showSignin = true" class="w3-bar-item buton uk-width-1-2@m uk-margin-auto">Sign in</vk-button>
                <vk-modal :show.sync="showLogin" >
                <vk-modal-title>Log in</vk-modal-title>
                <Login /><!--
                <p class="uk-text-right">
                    <vk-button class="uk-margin-small-right">Next</vk-button>
                </p>-->
                </vk-modal>

                <vk-modal :show.sync="showSignin" >
                <vk-modal-title>Sign in</vk-modal-title>
                <Signin />
                    <!--
                <p class="uk-text-right">
                    <vk-button class="uk-margin-small-right">Next</vk-button>
                </p>-->
                </vk-modal>
            </div>
        </div>
        </div>

        <!-- Header -->
        <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image" src="../assets/header.png" alt="header" width="1500" height="800">
        <div class="w3-display-middle w3-margin-top w3-center">
            <h1 class="w3-xxlarge w3-text-white"><img class = "imagine" src = "../assets/icon.png"></span> <span class="w3-hide-small w3-text-light-grey">RPG Task Organizer</span></h1>
        </div>
        </header>

        <!-- Page content -->
        <div class="w3-content w3-padding" style="max-width:1564px">

        <!-- About Section -->
        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>
                “RPG Task Organizer” este un program open-source de management al treburilor zilnice, ce trateaza viata ca pe un joc de tip Role-Playing-Game. Cu fiecare obiectiv atins, utilizatorul este recompensat cu monede de aur. Atunci cand s-au strans destule monede, utilizatorul poate cumpara accesul la o lupta in spiritual celor RPG din anii ’90, prin intermediul careia sa se deconecteze de la rutina si sa ia o pauza. Programul nostru se distinge de altele ce au ca scop organizarea treburilor prin elementul nou si surpinzator RPG. Motivatia de a ne termina treburile nu apare intotdeauna usor. Scopul nostru este de a crea un motiv pentru a ne atinge micile obiective, iar cand exista o recompensa spre care sa se tinda, lucrurile pot lua o intorsatura drastica.
            </p>
        </div>

        <!-- End page content -->
        </div>

        <!-- devider -->
        <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image devider" src="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_1200/https://www.provencelife.net/wp-content/uploads/2019/03/lavenderfield_leonard-cotte-300248-unsplash-e1555255851984-1200x563.jpg" alt="header" width="1500" height="400">
        <div class="w3-display-middle w3-margin-top w3-center">
            <h1 class="w3-xxlarge w3-text-white"><span class="w3-hide-small w3-text-light-grey">"A better future is one that has been planed in advanced"</span></h1>
        </div>
        </header>
        <!-- Page content -->
        <div class="w3-content w3-padding" style="max-width:1564px">

        <!-- Usage Section -->

        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Utilizare</h3>
            <ul>
                <li>
                    <p>
                        Ecranul principal este reprezentat de functionalitatea de Log in/Sign in
                    </p>
                </li>
                <li>
                    <p>
                        In urma procesului de inregistrare, utilizatorul este inatmpinat de tabelele de Habits, Daily Tasks si To Do
                    </p>
                </li>
                <li>
                    <p>
                         In tabela te Habits, utilizatorul poate adauga task-uri pe care doreste sa le adauge in rutina sa, precum mersul la sala sau consumulde 2 litrii de apa pe zi
                    </p>
                </li>
                <li>
                    <p>
                        Tabela de Daily este data de task-urile care fac deja parte din rutina utilizatorului
                    </p>
                </li>
                <li>
                    <p>
                        Ultima tabela cuprinde task-uri ce nu sunt frecvente in viata utilizatorului; acestea pot primi un grad de dificultate in functie de care se calculeaza recompense in monede la indeplinirea task-ului; doar aceste task-uri au ca recompense un numar variabil de monede
                    </p>
                </li>
                <li>
                    <p>
                        La insumarea unui numar de monede obtinut din ineplinirea oricarui tip de task, se poate inta in pauza, prin cumpararea unei lupte
                    </p>
                </li>
                <li>
                    <p>
                        Zona de lupta incepe cu un buton de Play ce trimite la un ecran ce prezinta un scurt context si, ulterior la lupta, si un alt buton de Tutorial in care este descris controlul jocului
                    </p>
                </li>
                <li>
                    <p>
                        In joc, putem ataca inamicul care va raspunde la randul sau cu un atac, putem sa ne vindecam sau sa folosim un atac special.
                    </p>
                </li>
                <li>
                    <p>
                        Vindecarea se poate realiza de 3 ori consecutiv, dupa care este necesar sa atacam, iar miscarea speciala se incarca dupa 3 atacuri
                    </p>
                </li>
                <li>
                    <p>
                        Dupa aceasta pauza bine meritata, utilizatorul este trimis inapoi la sectiunea de agenda a aplicatiei pentru a-si continua treburile
                    </p>
                </li>
            </ul>
        </div>
         <!-- End page content -->
        </div>

        <!-- devider -->
        <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image devider" src="https://www.hellomagazine.com/imagenes/travel/2019080976309/best-lavender-fields-in-london/0-370-94/lavender-fields-t.jpg?filter=w600&interpolation=lanczos-normal&downsize=0.75xw:*&output-format=progressive-jpeg&output-quality=70" alt="header" width="1500" height="400">
        <div class="w3-display-middle w3-margin-top w3-center">
        <h1 class="w3-xxlarge w3-text-white"><span class="w3-hide-small w3-text-light-grey">"Discipline is the bridge between goals and accomplishment"</span></h1>
        </div>
        </header>



        <!-- Page content -->
        <div class="w3-content w3-padding" style="max-width:1564px">
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Developers</h3>
        <vk-grid class="w3-grayscale uk-child-width-1-2@m">
            <div class = "w3-center">
            <img src="../assets/alex.jpeg" alt="Alex" class = "imag">
            <h3>Andone Alexandru</h3>
            <p class="w3-opacity">Backend & Data Base</p>
            </div>
            <div class = "w3-center">
            <img src="../assets/dragos.jpeg" alt="Dragos" class = "imag">
            <h3>Ciofalau Dragos</h3>
            <p class="w3-opacity">Frontend & Assets</p>
            </div>
        </vk-grid>

        <!-- End page content -->
        </div>

        <!-- Footer -->
        <footer class="w3-center w3-padding-16 footerDescription">
        <p>Powered by Andone Alexandru & Ciofalau Dragos</p>
        </footer>
    </div>
</template>

<script>

import Login from '../components/Login'
import Signin from '../components/Signin'

export default {
    name: "description",
    data() {
            return {
                showLogin: false,
                showSignin: false
            }
        },
    components: {
            Login,
            Signin
        }
}
</script>

<style>
.imagine{
    width: 80px;
    height: 80px;
    image-rendering: pixelated;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
}
.imag{
    width: 331px;
    height: 442px;

}
.ul{
    list-style-type: square;
}
.devider{
    -webkit-filter: blur(2px) brightness(0.2);
  -moz-filter: blur(2px) brightness(0.2);
  -ms-filter: blur(2px) brightness(0.2);
  -o-filter: blur(2px) brightness(0.2);
  filter: blur(2px) brightness(0.2);
}
.footerDescription{
    background-color: #1d1223;
    color: #dfdde0;
}
</style>


