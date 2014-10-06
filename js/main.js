//Variables:
var imageNumb = 0; //Image number the scroller starts on. (set up the first image in CSS.)

//Change these variables depending on your setup
var imagePath = "images/";
var imageName = "img";
var imageExt = ".jpg";
var ammount = 2; //This would give a total ammount of 3 slides

//Main Function (Will run once page has loaded)
$(document).ready(function () {

   $("#previous").click(function(){
   		if (imageNumb<=0) {
   			imageNumb = ammount;
   			$("#image").css("background","url("+imagePath+imageName+imageNumb+imageExt+")");
   		}
   		else{
   			imageNumb--;
   			$("#image").css("background","url("+imagePath+imageName+imageNumb+imageExt+")");
   		}

   });
   $("#next").click(function(){
   		if (imageNumb>=ammount) {
   			imageNumb = 0;
   			$("#image").css("background","url("+imagePath+imageName+imageNumb+imageExt+")");
   		}
   		else{
   			imageNumb++;
   			$("#image").css("background","url("+imagePath+imageName+imageNumb+imageExt+")");
   		};
   });

});