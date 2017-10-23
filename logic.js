


document.querySelector("body").style.marginTop = window.innerHeight + "px";

window.onload = function() {
    // Code here
    
    startSlideShow();
    createMainMenu();
    mySlider();             // Elements Slider core

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

function mySlider() {

    var arr_tables = document.getElementsByClassName("slide");

    for (var i = 0; i < arr_tables.length; i++) {
        if (arr_tables[i].id == "iph8-spec") {
            arr_tables[i].setAttribute("data-maxheight" ,  arr_tables[i].offsetHeight);
        } else if (arr_tables[i].id == "iph8-price") {
            arr_tables[i].setAttribute("data-maxheight" ,  arr_tables[i].offsetHeight);
        } else if (arr_tables[i].id == "iphx-spec") {
            arr_tables[i].setAttribute("data-maxheight" ,  arr_tables[i].offsetHeight);
        } else if (arr_tables[i].id == "iphx-price") {
            arr_tables[i].setAttribute("data-maxheight" ,  arr_tables[i].offsetHeight);
        }
    }

    // After we calculate the heights we set the closed class to tables

    var arr_slides = document.getElementsByClassName("slide");
    for(let i =0;i<arr_slides.length;i++) {
        arr_slides[i].className += " closed";
        arr_slides[i].style.height = 0 + "px";
        //arr_slides[i].style.visibility = "hidden";
    }

    // Now we get all the slide buttons and add click events to them

    var arr_slideButtons = document.getElementsByClassName("slide-button");
    for(let i = 0; i<arr_slides.length;i++) {
        arr_slideButtons[i].addEventListener("click", slideButtonClicked);
    }

}

function slideButtonClicked(event) {
    var actionOnID = event.target.getAttribute("data-action");
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

            <li class="has-dropdown">
                <a href="#"> Iphone 8<span class="arrow-head">&#9660</span></a>
                <ul class="sub-menu">
                    <li> <a href="#">Specifications </a> </li>
                    <li> <a href="#"> Price </a> </li>
                </ul> 
            </li>
            <li class="has-dropdown">
                <a href="#"> Iphone 8 Plus<span class="arrow-head">&#9660</span></a>
                <ul class="sub-menu">
                    <li> <a href="#">Specifications</a> </li>
                    <li> <a href="#"> Price </a> </li>
                </ul> 
            </li>
            <li class="has-dropdown">

                <a href="#"> Iphone X <span class="arrow-head">&#9660</span></a>
                <ul class="sub-menu">
                    <li> <a href="#"> Specifications </a> </li>
                    <li> <a href="#"> Price </a> </li>
                </ul> 
            </li>
        </ul>
    `;

    var menu = document.getElementById("main-menu");
    menu.innerHTML = mainMenuHTML;
}