
var windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var widnowHeigth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var mobileDeviceSize = 720;

(function(){
    document.querySelector("body").style.marginTop = window.innerHeight + "px";


    window.onresize = function() {
        this.windowWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        this.widnowHeigth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


        //handleNav();

    }

    window.onload = function() {
        // Code here
        createMainMenu();
        startSlideShow();
        mySliderInit();             // Elements Slider core
        handleNav();

    };

    // Functions -------------------------------------------------------------

    function startSlideShow(){
        var arr_slideDivs = document.getElementsByClassName("slide-img");
        var i = 0;
        var direction = 1;
        var newOpacity = 1;

        arr_slideDivs[0].style.opacity = 1;

        timer = setInterval(function(){
            if(i ==  arr_slideDivs.length-1) {
                direction = -1;
                newOpacity = 0;
            }
            else if (i == 0) {
                direction = 1;
                newOpacity = 1;
            }
        
            // Make changes

            arr_slideDivs[i].style.opacity = newOpacity;
            i+=direction;

        }, 2500);
    }

    function handleNav() {
        
        // Nav handler
        var arr_buttons = document.querySelector("nav").getElementsByClassName("slide-button");
        var arr_slides = document.querySelector("nav").getElementsByClassName("slide");

        if(this.windowWidth <= this.mobileDeviceSize) {

            console.log(arr_slides);

            for (let i = 0; i < arr_slides.length; i++) {
                arr_slides[i].setAttribute("data-maxheight" ,  arr_slides[i].offsetHeight);
                
                if(!arr_slides[i].classList.contains("closed"))
                    arr_slides[i].className += " closed";

                arr_slides[i].style.height = 0 + "px";
            }


            for(let i = 0; i<arr_buttons.length;i++) 
                if(arr_buttons[i])
                    arr_buttons[i].addEventListener("click", slideButtonClicked);
            

        } else {

            for(let i = 0; i<arr_buttons.length;i++) 
                if(arr_buttons[i])
                    arr_buttons[i].removeEventListener("click", slideButtonClicked);
            
        }
    }

    function mySliderInit() {
        var arr_slides = document.querySelector("main").getElementsByClassName("slide");

        for (let i = 0; i < arr_slides.length; i++) {
            arr_slides[i].setAttribute("data-maxheight" ,  arr_slides[i].offsetHeight);
            arr_slides[i].className += " closed";
            arr_slides[i].style.height = 0 + "px";
        }

        // Now we get all the slide buttons and add click events to them

        var arr_slideButtons = document.querySelector("main").getElementsByClassName("slide-button");

        for(let i = 0; i<arr_slideButtons.length;i++) {
            arr_slideButtons[i].addEventListener("click", slideButtonClicked);
        }


    }

    function slideButtonClicked(event) {
        var actionOnID = event.target.getAttribute("data-action");
        console.log(actionOnID);
        var element = document.getElementById(actionOnID);
        console.log(element);
        if(element.classList.contains("closed")) {
            // We open
            element.classList.remove("closed");
            element.classList.add("open");
            element.style.height = element.getAttribute("data-maxheight") + "px";
            //element.style.display = "block";

            
        } else {
            // We close
            element.classList.remove("open");
            element.classList.add("closed");
            element.style.height = 0 + "px";
            //element.style.display = "none";
        }
    }

    function createMainMenu() {
        var mainMenuHTML = `
            <ul>
                <li><a href="#"> Home </a></li>
                <li><a href="#"> About </a></li>

                <li class="has-dropdown slide-button" data-action="sub1">
                    <a href="#"> Iphone 8<span class="arrow-head">&#9660</span></a>
                    <ul id="sub1" class="sub-menu slide">
                        <li> <a href="#">Specifications </a> </li>
                        <li> <a href="#"> Price </a> </li>
                    </ul> 
                </li>

                <li class="has-dropdown slide-button" data-action="sub2">
                    <a href="#"> Iphone 8 Plus<span class="arrow-head">&#9660</span></a>
                    <ul id="sub2" class="sub-menu slide">
                        <li> <a href="#">Specifications</a> </li>
                        <li> <a href="#"> Price </a> </li>
                    </ul> 
                </li>

                <li class="has-dropdown slide-button" data-action="sub3">
                    <a href="#"> Iphone X <span class="arrow-head">&#9660</span></a>
                    <ul id="sub3" class="sub-menu slide">
                        <li> <a href="#"> Specifications </a> </li>
                        <li> <a href="#"> Price </a> </li>
                    </ul> 
                </li>
            </ul>
        `;

        var menu = document.getElementById("menu-items");
        menu.innerHTML = mainMenuHTML;
    }
})();