var n = document.querySelectorAll(".drum").length;

for(var i = 0; i < n ; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", drum);
}
function drum(){

	
	var butonInnerHTML = this.innerHTML;

	makeSound(butonInnerHTML);

	buttonanimation(butonInnerHTML);
	
}

document.addEventListener("keypress", function(event){
	makeSound(event.key);
	buttonanimation(event.key);
})

function makeSound(key){
	switch (key) {
		case "w":
			var tom1 = new Audio('sounds/tom-1.mp3');//object
			tom1.play();
			break;

		case "a":
			var tom2 = new Audio('sounds/tom-2.mp3');//object
			tom2.play();
			break;

		case "s":
			var tom3 = new Audio('sounds/tom-3.mp3');//object
			tom3.play();
			break;

		case "d":
			var tom4 = new Audio('sounds/tom-4.mp3');//object
			tom4.play();
			break;

		case "j":
			var snare = new Audio('sounds/snare.mp3');//object
			snare.play();
			break;

		case "k":
			var crash = new Audio('sounds/crash.mp3');//object
			crash.play();
			break;

		case "l":
			var kick = new Audio('sounds/kick-bass.mp3');//object
			kick.play();
			break;

		default: console.log(butonInnerHTML);

	}
}

function buttonanimation(currentkey) {
	var activebutton = document.querySelector("." + currentkey);
	activebutton.classList.add("pressed");

	setTimeout(function() {
		activebutton.classList.remove("pressed")
	}, 100);
}