// Global variables --------------------------------------------------------

var iph8specH,
    iph8priceH,
    iphxspecH,
    timer = null,
    iphxpriceH;

window.onload = function(){

    createMainMenu();
    mySlider();
};

// Functions -------------------------------------------------------------

function mySlider() {


    var arr_tables = document.getElementsByTagName("TABLE");

    for(var i=0;i<arr_tables.length;i++){
        if(arr_tables[i].id == "iph8-spec" ) {
            iph8specH = arr_tables[i].offsetHeight;
        }
        else if(arr_tables[i].id == "iph8-price" ) {
                iph8priceH = arr_tables[i].offsetHeight;

             }
            else if(arr_tables[i].id == "iphx-spec" ) {
                    iphxspecH = arr_tables[i].offsetHeight;
                 }
                else if(arr_tables[i].id == "iphx-price" ) {
                        iphxpriceH = arr_tables[i].offsetHeight;

                    }


    }

    var buttons = document.getElementsByClassName("slide-button");

    for(var i=0;i<buttons.length;i++){
        buttons[i].addEventListener("click",buttonClicked());
    }
}

function buttonClicked() {
    clearInterval(timer);


}

function createMainMenu()
{
    var mainMenuHTML = `
        <ul>
            <li><a href="#"> Home </a></li>
            <li><a href="#"> About </a></li>
            <li><a href="#"> Iphone 8 </a></li>
            <li><a href="#"> Iphone 8 Plus </a></li>
            <li><a href="#"> Iphone X </a></li>
        </ul>
    `

    var menu = document.getElementById("main-menu");
    menu.innerHTML = mainMenuHTML;
}

function getTables(children){
    var arr = new Array();
    for(;children;children=children.nextSibbling)
        if(children.tagName == "TABLE")
            arr.push(children);
    return arr;
}