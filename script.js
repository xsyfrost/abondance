
function playSounds() {
  const binaural = document.getElementById('binauralSelect').value;
  const voice = document.getElementById('voiceSelect').value;

  const binauralAudio = document.getElementById('binauralAudio');
  const voiceAudio = document.getElementById('voiceAudio');

  binauralAudio.src = 'assets/binaural/' + binaural;
  voiceAudio.src = 'assets/voices/' + voice;

  binauralAudio.play();
  voiceAudio.play();
}
