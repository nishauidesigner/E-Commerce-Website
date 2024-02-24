// image slider for product page

let MainImg = document.getElementById("main-img")
let SmallImg = document.getElementsByClassName("sm-img");


      SmallImg[0].onclick = function () {
    MainImg.src = SmallImg[0].src;
}
        

        SmallImg[1].onclick = function () {
            MainImg.src = SmallImg[1].src;
        }


        SmallImg[2].onclick = function () {
            MainImg.src = SmallImg[2].src;
        }


        SmallImg[3].onclick = function () {
            MainImg.src = SmallImg[3].src;
        }

        SmallImg[4].onclick = function () {
            MainImg.src = SmallImg[4].src;
        }