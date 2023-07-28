var totalbuttons = document.querySelectorAll(".drum").length;

setTimeout(function(){
  for (i=0;i<totalbuttons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var key =this.innerHTML;
      makeSound(key);
      animationButton(key);
    })
  };
},200);
for (i=0;i<totalbuttons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var key =this.innerHTML;
    makeSound(key);
    animationButton(key);
  })
};


  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    animationButton(event.key);
  });


function makeSound(key){
  switch(key){
    case 'w':
    var crash=new Audio('./sounds/crash.mp3');
    crash.play();
    break;

    case 'a':
    var kick=new Audio('./sounds/kick-bass.mp3');
    kick.play();
    break;

    case 's':
    var snare=new Audio('./sounds/snare.mp3');
    snare.play();
    break;

    case 'd':
    var tom1=new Audio('./sounds/tom-1.mp3');
    tom1.play();
    break;

    case 'j':
    var tom2=new Audio('./sounds/tom-2.mp3');
    tom2.play();
    break;

    case 'k':
    var tom3=new Audio('./sounds/tom-3.mp3');
    tom3.play();
    break;

    case 'l':
    var tom4=new Audio('./sounds/tom-4.mp3');
    tom4.play();
    break;

    default:
    console.log(key);

  }

}

function animationButton(keypress){
  var button=document.querySelector("." + keypress);
  button.classList.add("pressed");

  setTimeout( function(){
    button.classList.remove("pressed")
  },100);

}
