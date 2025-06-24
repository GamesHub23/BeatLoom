const playlist = [
  {
    title: "Dia Delicia",
    artist: "PHONK",
    audioSrc: "music/DiaDelicia.mp3",
    coverSrc: "covers/DiaDelicia.png"
  },
  {
    title: "ACIDO",
    artist: "PHONK",
    audioSrc: "music/ACIDO.mp3",
    coverSrc: "covers/ACIDO.png"
  },
  {
    title: "Montagem Lunar Diamante",
    artist: "PHONK",
    audioSrc: "music/Diamante.mp3",
    coverSrc: "covers/Diamante.png"
  },
  {
    title: "2 Phut Hon Funk",
    artist: "PHONK",
    audioSrc: "music/2 Phut Hon Funk.mp3",
    coverSrc: "covers/2 Phut Hon Funk.png"
  },
  {
    title: "Montagem Tomada",
    artist: "PHONK",
    audioSrc: "music/Tomada.mp3",
    coverSrc: "covers/Tomada.png"
  },
  {
    title: "ESPAÇO LIMINAL",
    artist: "PHONK",
    audioSrc: "music/Espaco.mp3",
    coverSrc: "covers/Espaco.png"
  },
  {
    title: "Amor Na Praia Super Slowed",
    artist: "PHONK",
    audioSrc: "music/Amor.mp3",
    coverSrc: "covers/Amor.png"
  },
  {
    title: "Labubu",
    artist: "Familia Melimi™",
    audioSrc: "music/Labubu.mp3",
    coverSrc: "covers/Labubu.png"
  },
    {
    title: "Wiskey Cola",
    artist: "Maco Mamuko",
    audioSrc: "music/Cola.mp3",
    coverSrc: "covers/Cola.png"
  },
  {
    title: "",
    artist: "PHONK",
    audioSrc: "music/.mp3",
    coverSrc: "covers/.png"
  },
  {
    title: "",
    artist: "",
    audioSrc: "music/.mp3",
    coverSrc: "covers/.png"
  },
];


const playlistElement = document.getElementById("playlist");
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const playIcon = document.getElementById("play-icon");
const pauseIcon = document.getElementById("pause-icon");

let currentIndex = 0;
let isPlaying = false;

function loadTrack(index) {
  const track = playlist[index];
  audio.src = track.audioSrc;
  cover.src = track.coverSrc;
  trackTitle.textContent = track.title;
  trackArtist.textContent = track.artist;

  document.querySelectorAll("#playlist li").forEach((li, i) => {
    li.classList.toggle("active", i === index);
  });
}

function playTrack() {
  audio.play();
  isPlaying = true;
  playIcon.style.display = "none";
  pauseIcon.style.display = "inline";
}

function pauseTrack() {
  audio.pause();
  isPlaying = false;
  playIcon.style.display = "inline";
  pauseIcon.style.display = "none";
}

playPauseBtn.addEventListener("click", () => {
  if (isPlaying) {
    pauseTrack();
  } else {
    playTrack();
  }
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
  loadTrack(currentIndex);
  playTrack();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % playlist.length;
  loadTrack(currentIndex);
  playTrack();
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

function buildPlaylist() {
  playlist.forEach((track, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${track.coverSrc}" alt="Copertă ${track.title}" />
      <div>
        <strong>${track.title}</strong><br/>
        <small>${track.artist}</small>
      </div>
    `;
    li.addEventListener("click", () => {
      currentIndex = index;
      loadTrack(currentIndex);
      playTrack();
    });
    playlistElement.appendChild(li);
  });
}

buildPlaylist();
loadTrack(currentIndex);
