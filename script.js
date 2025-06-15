const playlist = [
  {
    title: "Melimi, prima piesă",
    artist: "Melimi",
    audioSrc: "music/MelimiPrimaPiesă.mp3",
    coverSrc: "covers/MelimiPrimaPiesă.jpg"
  },
  {
    title: "ACIDO",
    artist: "PHONK",
    audioSrc: "music/ACIDO.mp3",
    coverSrc: "covers/ACIDO.jpg"
  },
  {
    title: "MELIMI.RO",
    artist: "Melimi",
    audioSrc: "music/melimi.ro.mp3",
    coverSrc: "covers/melimi.ro.jpg"
  }
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
