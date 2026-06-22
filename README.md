# Desafio-do-Projeto-Jogo-Detona-Ralph
🎮 Whac-A-Ralph (Jogo Retrô)

!Status
!License
!Made with
!CSS
!HTML

Um jogo estilo Whac-A-Mole desenvolvido em JavaScript, HTML e CSS, com visual retrô inspirado em fliperamas. O objetivo é acertar o inimigo (Ralph) nos quadrados antes que o tempo acabe, acumulando pontos e disputando o ranking.

---

🚀 Funcionalidades

- Início do jogo com botão Start e música de fundo.
- Três níveis de dificuldade (Fácil, Médio, Difícil) com velocidade e tempo diferentes.
- Placar em tempo real mostrando pontuação atual.
- Ranking animado com medalhas (🥇🥈🥉), cores e efeitos sonoros.
- Histórico de partidas salvo em localStorage.
- Mensagens animadas de início, novo jogo e Game Over com efeitos visuais.
- Controle de música (ligar/desligar).
- Feedback sonoro para acertos, Game Over e conquistas.

---

🛠️ Tecnologias utilizadas

- HTML5 para estrutura.
- CSS3 para estilo retrô, animações e transições.
- JavaScript (ES6) para lógica do jogo, controle de tempo, placar e ranking.
- LocalStorage para salvar histórico e maior pontuação.
- Áudios em formato .mp3 e .m4a para efeitos sonoros.

---

📂 Estrutura do projeto

`
/SRC
 ├── Imagens/
 │    ├── wall.png
 │    └── ralph.png
 ├── Audios/
 │    ├── BackgroundMusic.mp3
 │    ├── audio_hit.m4a
 │    ├── gameOver.mp3
 │    ├── ouro.mp3
 │    ├── prata.mp3
 │    └── bronze.mp3
 ├── main.css
 ├── index.html
 └── engine.js
`

---

▶️ Como jogar

1. Abra o arquivo index.html em um navegador moderno.
2. Clique em Start Game para iniciar.
3. Escolha a dificuldade (Fácil, Médio ou Difícil).
4. Clique nos quadrados para acertar o Ralph e ganhar pontos.
5. Acompanhe seu desempenho no placar e no ranking.
6. Ao final, veja sua posição no pódio e tente bater o High Score.

---

📊 Ranking e Histórico

- O ranking mostra os 3 melhores jogadores com medalhas e cores distintas.
- O histórico guarda todas as partidas jogadas.
- É possível limpar o histórico clicando no botão correspondente.

---

🎨 Destaques visuais

- Painel de mensagens muda de cor conforme a dificuldade.
- Ranking com animações de entrada (fade-in) e saída (fade-out).
- Mensagens de início e Game Over com efeitos pulsantes e piscando.
- Botões estilizados com animações retrô.

---

🤝 Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:  
   `bash
   git checkout -b minha-feature
   `
3. Commit suas alterações:  
   `bash
   git commit -m "Adiciona nova feature"
   `
4. Push para a branch:  
   `bash
   git push origin minha-feature
   `
5. Abra um Pull Request.

---

📜 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se livre para usar, modificar e compartilhar.

---

👩‍💻 Autor

Projeto desenvolvido pelo professor Felipe Aguiar do curso de: Hi Happy front end do Zero da Plataforma de cursos da Dio, com foco em aprendizado de JavaScript, manipulação de DOM e criação de jogos retrô.
Dei uns ajustes finais para ficar com mais cara de Jogo.

[Link do jogo aqui](https://jucianasoares.github.io/Detona-Ralph-Game-/)
. Divirta-se.

