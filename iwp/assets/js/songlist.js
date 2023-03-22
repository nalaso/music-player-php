let All_song = [
    {
      name: "Make Me Move",
      path: "assets/music/1.mp3",
      img: "assets/images/1.jpg",
      singer: "NoCopyrightSounds [NCS]"
    },
    {
      name: "Levitating",
      path: "assets/music/6.mp3",
      img: "assets/images/6.jpg",
      singer: "Dua lipa"
     },
    {
      name: "Beauz & Jvna - Crazy",
      path: "assets/music/2.mp3",
      img: "assets/images/2.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "Drivers license",
      path: "assets/music/3.mp3",
      img: "assets/images/3.jpg",
      singer: "Olivia Rodrigo"
    },
    {
      name: "Shahed -Indian Fusion",
      path: "assets/music/4.mp3",
      img: "assets/images/4.jpg",
      singer: "imshahed"
    },
    {
      name: "Syn Cole - Feel Good",
      path: "assets/music/5.mp3",
      img: "assets/images/5.jpg",
      singer: "NoCopyrightSounds"
    },
    {
      name: "Syn Cole - Feel Good",
      path: "assets/music/5.mp3",
      img: "assets/images/5.jpg",
      singer: "NoCopyrightSounds"
    }
    
 ];
  
 let tracks = document.querySelector('.tracks');
 
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };
 