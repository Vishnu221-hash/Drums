for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function() {
        var x = this.innerHTML;
        makeSound(x);
        activateButton(x);
    });
}





// audio is a constructor therefor A)

function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play()
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play()
            break;


        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play()
            break;


        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play()
            break;


        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play()
            break;


        case "k":
            var audio = new Audio("sounds/crasj.mp3");
            audio.play()
            break;


        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play()
            break;


        default:
            console.log(x);
    }
}


//keyboard press
document.addEventListener("keypress", function(event) {
    makeSound(event.key);
    activateButton(event.key);
})


function activateButton(currentKey) {
    var a = document.querySelector('.' + currentKey);
    a.classList.add("pressed");

    var y = setTimeout(function() {
        a.classList.remove("pressed");
    }, 100);

}