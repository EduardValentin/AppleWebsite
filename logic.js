


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
    
    arr_slideDivs[0].style.opacity = 1;

    timer = setInterval(function(){
        if(i ==  arr_slideDivs.length-1) {
            for(var j=0;j<arr_slideDivs;j++) {
                arr_slideDivs[j].style.opacity = 0;     // Reset
            }

            i = 0;
            arr_slideDivs[i].style.opacity = 1;
        }
        else {
            i++;
            arr_slideDivs[i].style.opacity = 1;
        }
    
    }, 3500);
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
            <li><a href="#"> Iphone 8 </a></li>
            <li><a href="#"> Iphone 8 Plus </a></li>
            <li><a href="#"> Iphone X </a></li>
        </ul>
    `;

    var menu = document.getElementById("main-menu");
    menu.innerHTML = mainMenuHTML;
}