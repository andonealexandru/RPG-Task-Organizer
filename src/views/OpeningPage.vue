<template>
  <div style="background-color: white">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <!-- Navbar (sit on top) -->
        <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
            <img src="../assets/icon.png" class="w3-bar-item">
          <!-- Float links to the right. Hide them on small screens -->
            <div class="w3-right w3-hide-small">
                <vk-button type="text" @click="showLogin = true" class="w3-bar-item buton buton uk-width-1-2@m uk-margin-auto">Log in</vk-button>
                <vk-button type="text" @click="showSignin = true" class="w3-bar-item buton uk-width-1-2@m uk-margin-auto">Sign up</vk-button>
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
      <!--

    <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">

      <
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-awesome fas fa-bars"></span>
        <span class="navbar-toggler-awesome fas fa-times"></span>
      </button>


      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#header">HOME <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#intro">INTRO</a>
          </li>
          <li class="nav-item">
            <a class="nav-link page-scroll" href="#services">SERVICES</a>
          </li>
        </ul>
      </div>
    </nav>

-->

    <!-- Header -->
    <header id="header" class="header">
      <div class="header-content">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-container">
                <h1>RPG <span id="js-rotating">ORGANIZER, GAME, AGENDA</span></h1>
                <p class="p-heading p-large">RPG Task Organizer is your personal agenda in which you can manage your daily tasks, as well as play video games for a break.</p>
                <a class="btn-solid-lg page-scroll" href="#intro">DISCOVER</a>
              </div>
            </div> <!-- end of col -->
          </div> <!-- end of row -->
        </div> <!-- end of container -->
      </div> <!-- end of header-content -->
    </header> <!-- end of header -->
    <!-- end of header -->


    <!-- Intro -->
    <div id="intro" class="basic-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-5">
            <div class="text-container">
              <div class="section-title">INTRO</div>
              <h2>We Offer Some Of The Best Business Growth Services In Town</h2>
              <p>
                "RPG Task Organizer" is an open-source program for managing daily tasks, which treats life just like a Role-Playing-Game. With each goal achieved, the user is rewarded with gold coins. When enough coins have been collected, the user can buy access to a fight reminiscent to the RPGs of the '90s, through which he or she can disconnect from the routine and take a break.
              </p>
              <p class="testimonial-text">
                "A better future is one that has been planed in advanced"
              </p>
            </div> <!-- end of text-container -->
          </div> <!-- end of col -->
          <div class="col-lg-7">
            <div class="image-container">
              <img class="img-fluid" src="../assets/images/Screenshot1.jpg" alt="alternative">
            </div> <!-- end of image-container -->
          </div> <!-- end of col -->
        </div> <!-- end of row -->
      </div> <!-- end of container -->
    </div> <!-- end of basic-1 -->
    <!-- end of intro -->


    <!-- Description -->
    <div class="cards-1">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">

            <!-- Card -->
            <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-binoculars fa-stack-1x"></i>
                        </span>
              <div class="card-body">
                <h4 class="card-title">Originality</h4>
                <p>Our program distinguishes itself from others that aim to organize tasks due to the new and surprising RPG element.</p>
              </div>
            </div>
            <!-- end of card -->

            <!-- Card -->
            <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-list-alt fa-stack-1x"></i>
                        </span>
              <div class="card-body">
                <h4 class="card-title">Motivation</h4>
                <p>The motivation to finish our business doesn't always appear easily, therefore, our goal is to create a reason for the user to achieve small goals, and when there is a reward to strive for, things can take a drastic turn.</p>
              </div>
            </div>
            <!-- end of card -->

            <!-- Card -->
            <div class="card">
                        <span class="fa-stack">
                            <span class="hexagon"></span>
                            <i class="fas fa-chart-pie fa-stack-1x"></i>
                        </span>
              <div class="card-body">
                <h4 class="card-title">Technologies</h4>
                <p>The engine in which we have created the turn-based game is Unity 3D. WebGL has been used to integrate the game into our website.</p>
              </div>
            </div>
            <!-- end of card -->

          </div> <!-- end of col -->
        </div> <!-- end of row -->
      </div> <!-- end of container -->
    </div> <!-- end of cards-1 -->
    <!-- end of description -->


    <!-- Services -->
    <div id="services" class="cards-2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-title">SERVICES</div>
            <h2>Info on how to use<br> RPG Task Organizer</h2>
          </div> <!-- end of col -->
        </div> <!-- end of row -->
        <div class="row">
          <div class="col-lg-12">

            <!-- Card -->
            <div class="card">
              <div class="card-image">
                <img class="img-fluid" src="../assets/images/Screenshot2.jpg" alt="alternative">
              </div>
              <div class="card-body">

                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">First things first, the Log in/Sign in functionalities are placed int the main page</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">After the register process, the user is greeted by the Habits, Daily Tasks and To Do tables</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">All 3 sections will be empty at first. To add a task, press on the plus button and a popup will apear which will conatin a form with a title and a description</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of card -->

            <!-- Card -->
            <div class="card">
              <div class="card-image">
                <img class="img-fluid" src="../assets/images/Screenshot3.jpg" alt="alternative">
              </div>
              <div class="card-body">
                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">The To Do table consists of tasks that are not frequent in one's life; every accomplished task is rewarded with gold coins</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">The Daily table contains tasks that the user has to do every day</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">In the Habits table, the user can add tasks that he or she would like to have implemented in thir routine</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of card -->

            <!-- Card -->
            <div class="card">
              <div class="card-image">
                <img class="img-fluid" src="../assets/images/Screenshot4.jpg" alt="alternative">
              </div>
              <div class="card-body">

                <ul class="list-unstyled li-space-lg">
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">After gaining the amount o coins required, you can take a break from completing tasks by buying a fight</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">The user will be redirected to a WebGL page where the game can be played.</div>
                  </li>
                  <li class="media">
                    <i class="fas fa-square"></i>
                    <div class="media-body">The game is similar in mechanics to the 90' RPGs, the player having to wait until the action time bar (ATB) fills up before attacking.</div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- end of card -->

          </div> <!-- end of col -->
        </div> <!-- end of row -->
      </div> <!-- end of container -->
    </div> <!-- end of cards-2 -->
    <!-- end of services -->


    <!-- Details 1 -->
    <div id="details" class="accordion">
      <div class="area-1">
      </div><!-- end of area-1 on same line and no space between comments to eliminate margin white space --><div class="area-2">

      <!-- Accordion -->
      <div class="accordion-container" id="accordionOne">
        <h2>Accelerate Your Rithm And Get The Most Out Of Your Time</h2>
        <div class="item">
          <div id="headingOne">
                        <span data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" role="button">
                            <span class="circle-numbering">1</span><span class="accordion-title">How is this web application better than others?</span>
                        </span>
          </div>
          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionOne">
            <div class="accordion-body">
              The manner in which the tables are organized, as well as the topics they describe help improve the amount of work done by catalogating it in habits, to dos or daily tasks.
            </div>
          </div>
        </div> <!-- end of item -->

        <div class="item">
          <div id="headingTwo">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" role="button">
                            <span class="circle-numbering">2</span><span class="accordion-title">Why agendas and video games?</span>
                        </span>
          </div>
          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionOne">
            <div class="accordion-body">
              Video games have been proved to increase one's attention span, therefore making them the perfect tool for helping the users become more efficient in finishing tasks.
            </div>
          </div>
        </div> <!-- end of item -->

        <div class="item">
          <div id="headingThree">
                        <span class="collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" role="button">
                            <span class="circle-numbering">3</span><span class="accordion-title">Future updates?</span>
                        </span>
          </div>
          <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionOne">
            <div class="accordion-body">
              Yes! We plan on adding more functionalities to the boards so that our tool becomes a stronger competitor on the market.
            </div>
          </div>
        </div> <!-- end of item -->
      </div> <!-- end of accordion-container -->
      <!-- end of accordion -->

    </div> <!-- end of area-2 -->
    </div> <!-- end of accordion -->
    <!-- end of details 1 -->


    <!-- Details 2 -->
    <div class="tabs">
      <div class="area-1">
        <div class="tabs-container">

          <!-- Tabs Links -->
          <ul class="nav nav-tabs" id="ariaTabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" id="nav-tab-1" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true"><i class="fas fa-th"></i> Premise</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-tab-2" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-2" aria-selected="false"><i class="fas fa-th"></i> Ideology</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" id="nav-tab-3" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="false"><i class="fas fa-th"></i> Quality</a>
            </li>
          </ul>
          <!-- end of tabs links -->

          <!-- Tabs Content -->
          <div class="tab-content" id="ariaTabsContent">

            <!-- Tab -->
            <div class="tab-pane fade show active" id="tab-1" role="tabpanel" aria-labelledby="tab-1">
              <h4>Finding and expanding your ways</h4>
              <p>RPG Task Organizer provides the most innovative and ambitious web agenda on the market. The possilities one can find while using the <a class="green page-scroll" href="#services">services</a> our app has to offer are endless. Drag, create or edit tasks, you name it!</p>

            </div> <!-- end of tab-pane -->
            <!-- end of tab -->

            <!-- Tab -->
            <div class="tab-pane fade" id="tab-2" role="tabpanel" aria-labelledby="tab-2">
              <ul class="list-unstyled li-space-lg first">
                <li class="media">
                  <div class="media-bullet">1</div>
                  <div class="media-body"><strong>High quality</strong> is on top of our list when it comes to the user's experience here</div>
                </li>
                <li class="media">
                  <div class="media-bullet">2</div>
                  <div class="media-body"><strong>Maximum impact</strong> on the market is what we are looking for</div>
                </li>
                <li class="media">
                  <div class="media-bullet">3</div>
                  <div class="media-body"><strong>Quality standards</strong> are important but meant to be exceeded</div>
                </li>
              </ul>
              <ul class="list-unstyled li-space-lg last">
                <li class="media">
                  <div class="media-bullet">4</div>
                  <div class="media-body"><strong>We're always looking</strong> for the user's satisfaction and feedback</div>
                </li>
                <li class="media">
                  <div class="media-bullet">5</div>
                  <div class="media-body"><strong>Feedback</strong> is the key aspect of evolving our web app</div>
                </li>
                <li class="media">
                  <div class="media-bullet">6</div>
                  <div class="media-body"><strong>A hard-working</strong> attitude is what brings quality to our project</div>
                </li>
              </ul>
            </div> <!-- end of tab-pane -->
            <!-- end of tab -->

            <!-- Tab -->
            <div class="tab-pane fade" id="tab-3" role="tabpanel" aria-labelledby="tab-3">
              <p><strong>We strive to achieve</strong> 100% customer satisfaction. It might not be an easy to achive such a prospect but we did put our task in the Daily table.</p>
              <p><strong>Our goal is to help</strong> people become more productive by alternating between focusing on their tasks and relaxing. Video games are known to increase:</p>
              <ul class="list-unstyled li-space-lg">
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">attention span</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">the habit of becoming more organized</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">power of multi-tasking</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">focus on prospects and goals</div>
                </li>
                <li class="media">
                  <i class="fas fa-square"></i>
                  <div class="media-body">memory and agility</div>
                </li>
              </ul>
            </div> <!-- end of tab-pane -->
            <!-- end of tab -->

          </div> <!-- end of tab-content -->
          <!-- end of tabs content -->

        </div> <!-- end of tabs-container -->
      </div><!-- end of area-1 on same line and no space between comments to eliminate margin white space --><div class="area-2"></div> <!-- end of area-2 -->
    </div> <!-- end of tabs -->
    <!-- end of details 2 -->

    <!-- Footer -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footerdiv" style="text-align: center; margin-left: auto; margin-right: auto;">
            <p class="white">Powered by Andone Alexandru & Ciofalau Dragos</p>
          </div>

        </div> <!-- end of row -->
      </div> <!-- end of container -->
    </div> <!-- end of footer -->
    <!-- end of footer -->
  </div>
</template>

<script>

    import Login from '../components/Login'
    import Signin from '../components/Signin'
    export default {
        name: "OpeningPage",
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
        },
        mounted() {
            this.$loadScript("js/jquery.min.js");
            this.$loadScript("js/popper.min.js");
            this.$loadScript("js/bootstrap.min.js");
            this.$loadScript("js/jquery.easing.min.js");
            this.$loadScript("js/swiper.min.js");
            this.$loadScript("js/jquery.magnific-popup.js");
            this.$loadScript("js/morphext.min.js");
            this.$loadScript("js/isotope.pkgd.min.js");
            this.$loadScript("js/scripts.js");
        }
    }
</script>

<style>
  @import "https://fonts.googleapis.com/css?family=Montserrat:500,700&display=swap&subset=latin-ext";
  @import "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600&display=swap&subset=latin-ext";
  @import "../assets/css/bootstrap.css";
  @import "../assets/css/fontawesome-all.css";
  @import "../assets/css/swiper.css";
  @import "../assets/css/styles.css";
  @import "../assets/css/magnific-popup.css";
</style>