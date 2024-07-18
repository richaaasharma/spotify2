console.log("welcome to spotify")

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay')
let myProgressBar =document.getElementById('myProgressBar');
let song =[
    {songName:"salam-e-ishq",filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName:"salam-e-ishq",filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
]

// audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');




    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    //update seekbar
})