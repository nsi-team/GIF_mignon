
function controle(){
var saisie =document.getElementById("input").value;
if (saisie == "anime" || "animé" || "Anime" || "Animé"){
  document.location.href="https://nsi-team.github.io/Anime/";
  }
if (saisie == "jeux vidéos" || "jeu vidéos" || "jeu vidéo" || "jeu videos" || "jeu video" || "jeux vidéo" || "jeux videos" || "jeux video"){
    document.location.href="https://nsi-team.github.io/Jeux_Videos/";
  }
if(saisie == "pixel art" || "Pixel Art" || "pixelart" || "Pixeart" || "PixelArt"){
  document.location.href="https://nsi-team.github.io/Pixel_Art/";
}
if(saisie == "marrant" || "Marrant"){
  document.location.href="https://nsi-team.github.io/Marrant/";
}
if(saisie == "chat" || "Chat"){
  document.location.href="https://nsi-team.github.io/Chat/";
}

}
