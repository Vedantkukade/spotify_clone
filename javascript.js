console.log("Welcome to Javascript");
var songIndex=0;
var audioElement=new Audio('songs/1.mp3');
var musicplay=document.getElementById("play1");
var progressbar=document.getElementById("progressbar");
var gif=document.getElementById("gif");
var mastersongname=document.getElementById("mastersongname");
var songitems=Array.from(document.getElementsByClassName("songItem"));
var songtime=Array.from(document.getElementsByClassName("timespan"));

songs=[
    {songname:"Blinding_Lights_By_Weeknd",filepath:"songs/1.mp3",coverpath:"imglogo/blinding lights.png"},
    {songname:"Call_Out_My_Name",filepath:"songs/2.mp3",coverpath:"imglogo/call out my name.jpg"},
    {songname:"Dandelions_",filepath:"songs/3.mp3",coverpath:"imglogo/dandelions.jpg"},
    {songname:"Heat_Waves_Glass_Animals",filepath:"songs/4.mp3",coverpath:"imglogo/heat waves.jpeg"},
    {songname:"Night_Changes_One_Direction",filepath:"songs/5.mp3",coverpath:"imglogo/night changes.jpg"},
    {songname:"Save_Your_Tears_Weeknd",filepath:"songs/6.mp3",coverpath:"imglogo/save your tears.jpeg"},
    {songname:"Starboy_Weeknd",filepath:"songs/7.mp3",coverpath:"imglogo/starboy.jpg"},
]

musicplay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        musicplay.classList.remove("fa-circle-play");
        musicplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    }else{
        audioElement.pause();
        musicplay.classList.remove("fa-circle-pause");
        musicplay.classList.add("fa-circle-play");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt(audioElement.currentTime/audioElement.duration*100);
    progressbar.value=progress;

})
var winWidth = window.innerWidth;
var timer = setInterval(function(){
    progressbar.style.width = player.currentTi/player.duration*winWidth +'px';
},100);

progressbar.addEventListener('ended',function(){
   clearInterval(timer);
});

progressbar.addEventListener("change",()=>{
    audioElement.currentTime=progressbar.value*audioElement.duration/100;
})

songitems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songname")[0].innerHTML=songs[i].songname;
})
var makeallplays=()=>{
        Array.from(document.getElementsByClassName('songicon')).forEach((element)=>{
            element.classList.remove("fa-circle-pause");
            element.classList.add("fa-circle-play");
        })
}
Array.from(document.getElementsByClassName('songicon')).forEach((ele)=>{
    ele.addEventListener("click",(e)=>{
        makeallplays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = (`songs/${songIndex+1}.mp3`);
        mastersongname.innerText=songs[songIndex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        musicplay.classList.remove("fa-circle-play");
        musicplay.classList.add("fa-circle-pause");
        gif.style.opacity=1;
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=0;
    }else{
        songIndex+=1;
    }
    audioElement.src = (`songs/${songIndex+1}.mp3`);
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    musicplay.classList.remove("fa-circle-play");
    musicplay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }else{
        songIndex-=1;
    }
    audioElement.src = (`songs/${songIndex+1}.mp3`);
    mastersongname.innerText=songs[songIndex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    musicplay.classList.remove("fa-circle-play");
    musicplay.classList.add("fa-circle-pause");
    gif.style.opacity=1;
})

songtime.innerHTML=audioElement.duration;