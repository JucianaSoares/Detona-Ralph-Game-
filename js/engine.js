const state = {
  view: {
    squares: document.querySelectorAll(".square"),
    timeLeft: document.querySelector("#time-left"),
    score: document.querySelector("#score"),
    listaPontos: document.querySelector("#lista-pontos"),
    highScore: document.querySelector("#high-score"),
    ranking: document.querySelector("#ranking tbody"),
    playerNameInput: document.querySelector("#player-name"),
    painelMensagem: document.getElementById("painel-mensagem"),
    toggleMusicBtn: document.getElementById("toggle-music"),
  },
  values: {
    gameVelocity: 1000,
    hitPosition: null,
    result: 0,
    currentTime: 120,
    scoreList: JSON.parse(localStorage.getItem("scoreList")) || [],
    highScore: JSON.parse(localStorage.getItem("highScore")) || 0,
    gameOver: false,
  },
  actions: {
    timerId: null,
    countDownTimerId: null,
  },
};

let musicPlaying = false;
let backgroundMusic = new Audio("assets/BackgroundMusic.mp3");
backgroundMusic.loop = true;
backgroundMusic.volume = 0.3;

const audioHit = new Audio("assets/audio_hit.m4a");
const audioGameOver = new Audio("assets/gameOver.mp3");

/* 🎵 Música */
function startBackgroundMusic() {
  backgroundMusic.play().then(() => {
    musicPlaying = true;
    state.view.toggleMusicBtn.textContent = "🎵 Música";
  }).catch(() => { console.log("Clique para iniciar a música."); });
}

function stopBackgroundMusic() {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  musicPlaying = false;
  state.view.toggleMusicBtn.textContent = "🔇 Música";
}

function toggleMusic() {
  musicPlaying ? stopBackgroundMusic() : startBackgroundMusic();
}

/* 🔊 Função para tocar som de acerto */
function playSound() {
  audioHit.currentTime = 0;
  audioHit.play().catch(e => console.log("Som bloqueado:", e));
}


/* 🎮 Jogo */
function startGame() {
  novoJogo();
  if (!musicPlaying) startBackgroundMusic();
  document.getElementById("start-game").style.display = "none";
}

document.getElementById("start-game").addEventListener("click", startGame);

function randomSquare() {
  state.view.squares.forEach(sq => sq.classList.remove("enemy"));
  const randomSquare = state.view.squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("enemy");
  state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
  clearInterval(state.actions.timerId);
  state.actions.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox() {
  state.view.squares.forEach(square => {
    square.addEventListener("mousedown", () => {
      if (square.id === state.values.hitPosition) {
        state.values.result++;
        atualizarPlacar();
        state.values.hitPosition = null;
        playSound()
      }
    });
  });
}

function atualizarPlacar() {
  state.view.score.textContent = state.values.result;
}

function countDown() {
  state.values.currentTime--;
  state.view.timeLeft.textContent = state.values.currentTime;
  if (state.values.currentTime <= 0) endGame();
}

/* 🏆 Fim de jogo */
function endGame() {
  clearInterval(state.actions.countDownTimerId);
  clearInterval(state.actions.timerId);
  stopBackgroundMusic();
  
  if (!state.values.gameOver) {
    state.values.gameOver = true;
    const playerName = state.view.playerNameInput.value || "Anônimo";
    const dataPartida = new Date().toLocaleString("pt-BR");
    const resultado = { nome: playerName, pontos: state.values.result, data: dataPartida };
    state.values.scoreList.push(resultado);

    if (state.values.result > state.values.highScore) {
      state.values.highScore = state.values.result;
      localStorage.setItem("highScore", JSON.stringify(state.values.highScore));
    }
    localStorage.setItem("scoreList", JSON.stringify(state.values.scoreList));

    audioGameOver.play();
    mostrarListaPontos();
    mostrarHighScore();
    mostrarRanking();
  }
}

/* 🔊 Sons e Medalhas */
function playMedalSound(position) {
  const files = ["assets/ouro.mp3", "assets/prata.mp3", "assets/bronze.mp3"];
  if (files[position]) {
    new Audio(files[position]).play();
  }
}

/* 📊 Placar e Ranking */
function mostrarListaPontos() {
  const lista = state.values.scoreList.map(item => `${item.nome}: ${item.pontos}`);
  state.view.listaPontos.textContent = "Histórico: " + lista.join(" | ");
}

function mostrarHighScore() {
  state.view.highScore.textContent = "Maior: " + state.values.highScore;
}

function mostrarRanking() {
  let ranking = [...state.values.scoreList].sort((a, b) => b.pontos - a.pontos).slice(0, 3);
  state.view.ranking.innerHTML = "";
  ranking.forEach((item, index) => {
    const row = document.createElement("tr");
    row.classList.add(["ouro", "prata", "bronze"][index]);
    row.innerHTML = `<td>${index + 1}</td><td>${item.nome}</td><td>${item.pontos}</td>`;
    state.view.ranking.appendChild(row);
    playMedalSound(index);
  });
}

/* ⚙️ Configurações */
function setDifficulty(level) {
  const configs = { facil: [1000, 150], medio: [700, 120], dificil: [400, 90] };
  [state.values.gameVelocity, state.values.currentTime] = configs[level];
  state.view.painelMensagem.textContent = `Nível: ${level.toUpperCase()}`;
}

function novoJogo() {
  Object.assign(state.values, { result: 0, currentTime: 120, gameOver: false });
  atualizarPlacar();
  state.view.timeLeft.textContent = state.values.currentTime;
  clearInterval(state.actions.timerId);
  clearInterval(state.actions.countDownTimerId);
  moveEnemy();
  state.actions.countDownTimerId = setInterval(countDown, 1000);
}

/* Inicialização */
function initialize() {
  addListenerHitBox();
  mostrarListaPontos();
  mostrarHighScore();
  mostrarRanking();
}

document.getElementById("limpar-historico").addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

document.getElementById("novo-jogo").addEventListener("click", novoJogo);
state.view.toggleMusicBtn.addEventListener("click", toggleMusic);
document.getElementById("facil").addEventListener("click", () => setDifficulty("facil"));
document.getElementById("medio").addEventListener("click", () => setDifficulty("medio"));
document.getElementById("dificil").addEventListener("click", () => setDifficulty("dificil"));

initialize();

      



