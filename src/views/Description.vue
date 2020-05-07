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
                <Login
                    :close="closeModals"
                />
                </vk-modal>

                <vk-modal :show.sync="showSignin" >
                <vk-modal-title>Sign in</vk-modal-title>
                <Signin
                    :close="closeModals"
                />
                </vk-modal>
            </div>
        </div>
        </div>

        <!-- Header -->
        <header class="w3-display-container w3-content w3-wide" style="max-width:1500px;" id="home">
        <img class="w3-image" src="../assets/header.png" alt="header" width="1500" height="800">
        <div class="w3-display-middle w3-margin-top w3-center">
            <h1 class="w3-xxlarge w3-text-white"><img class = "imagine" src = "../assets/icon.png"> <span class="w3-hide-small w3-text-light-grey">RPG Task Organizer</span></h1>
        </div>
        </header>

        <!-- Page content -->
        <div class="w3-content w3-padding" style="max-width:1564px">

        <!-- About Section -->
        <div class="w3-container w3-padding-32" id="about">
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
            <p>
                "RPG Task Organizer" is an open-source program for managing daily tasks, which treats life just like a Role-Playing-Game. With each goal achieved, the user is rewarded with gold coins. When enough coins have been collected, the user can buy access to a fight reminiscent to the RPGs of the '90s, through which he or she can disconnect from the routine and take a break. Our program is distinguished from others that aim to organize tasks due to the new and surprising RPG element. The motivation to finish our business doesn't always appear easily, therefore, our goal is to create a reason for the user to achieve small goals, and when there is a reward to strive for, things can take a drastic turn.
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
            <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Usage</h3>
            <ul>
                <li>
                    <p>
                        First things first, the Log in/Sign in functionalities are placed int the main page
                    </p>
                </li>
                <li>
                    <p>
                        After the register process, the user is greeted by the Habits, Daily Tasks and To Do tables
                    </p>
                </li>
                <li>
                    <p>
                         In the Habits table, the user can add tasks that he or she would like to have implemented in thir routine, such as gym or a better diet
                    </p>
                </li>
                <li>
                    <p>
                        The Daily table contains tasks that the user has to do every day, just like the name suggests
                    </p>
                </li>
                <li>
                    <p>
                        The last table consists of tasks that are not frequent in one's life; every accomplished task is rewarded with gold coins
                    </p>
                </li>
                <li>
                    <p>
                        When summing up a number of coins obtained from performing any type of task, you can take a break by buying a fight
                    </p>
                </li>
                <li>
                    <p>
                        The battle zone begins with a Play button that redirects to a screen that shows a short context and another Tutorial button that describes the controls of the game
                    </p>
                </li>
                <li>
                    <p>
                        In the game, we can attack the enemy who will respond with an attack, we can heal or use a special attack
                    </p>
                </li>
                <li>
                    <p>
                        Healing can be done 3 times in a row, after which it is necessary to attack, whilest the special move is loaded after 3 attacks
                    </p>
                </li>
                <li>
                    <p>

After this well-deserved break, the user is sent back to the agenda section of the application to keep on working
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
    },
    methods: {
        closeModals() {
            this.showLogin = false;
            this.showSignin = false;
        }
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
    max-width: 331px;
    max-height: 442px;

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


