(function(){
    document.querySelector("body").style.marginTop = window.innerHeight + "px";

    window.onload = function() {
        // Code here
        mySliderInit();             // Elements Slider core
        createMainMenu();
        startSlideShow();

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
        <label for="drop" class="toggle"><span id="hamburgher-icon">&#9776</span></label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li>
                    <!-- First Tier Drop Down -->
                    <label for="drop-1" class="toggle">iPhone 8 +</label>
                    <a href="#">iPhone 8 +</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li><a href="#">Specifications</a></li>
                        <li><a href="#">Price</a></li>
                    </ul> 

                </li>
                <li>

                <!-- First Tier Drop Down -->
                <label for="drop-2" class="toggle">iPhone X +</label>
                <a href="#">iPhone X +</a>
                <input type="checkbox" id="drop-2"/>
                <ul>
                    <li><a href="#">Specifications</a></li>
                    <li><a href="#">Price</a></li>
                </ul>
                </li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
            </ul>
        `;

        var menu = document.getElementById("main-menu");
        menu.innerHTML = mainMenuHTML;
    }
})();