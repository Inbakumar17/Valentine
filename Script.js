 const captions = [
    "Hey mine, I think that was a mis-touch 😏", "System glitch… Try again 💻😂", "Error 609: 'No' is currently on vacation 🏖️",
    "No button is clearly broken 😌", "Plot twist: You meant YES 💖", "Nice try, but destiny says yes ✨",
    "Are you sure? I think your fingers are drunk 🍺", "Your finger tapped wrong ❤️", "Your finger slipped… again 😏",
    "I’ll forgive this one… tap again 💕", "Stop teasing me and say yes 😘"
  ];

  let noCount = 0;
  const yesBtn = document.getElementById('yesBtn');
  const noBtn = document.getElementById('noBtn');
  const mainQuestion = document.getElementById('mainQuestion');
  const result = document.getElementById('result');
  const buttonRow = document.getElementById('buttonRow');
  const caption = document.getElementById('caption');
  const nextBtn = document.getElementById('nextBtn');
  const letterPage = document.getElementById('letterPage');

  function triggerLimitedRain() {
    const emojis = ["💖", "❤️", "✨", "🌸", "💌", "😍", "😘", "💘", "💝", "💗"];
    
    // Create a burst of emojis
    let count = 0;
    const maxEmojis = 40; // Total number of emojis that will fall
    
    const interval = setInterval(() => {
      const emoji = document.createElement('div');
      emoji.className = 'falling-emoji';
      emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      emoji.style.left = Math.random() * 100 + 'vw';
      emoji.style.fontSize = Math.random() * 20 + 20 + 'px';
      emoji.style.animationDuration = Math.random() * 2 + 3 + 's';
      document.body.appendChild(emoji);
      
      // Cleanup individual emoji
      setTimeout(() => emoji.remove(), 5000);
      
      count++;
      if (count > maxEmojis) clearInterval(interval); // STOP the rain
    }, 100);
  }

  yesBtn.addEventListener('click', () => {
    mainQuestion.style.display = 'none';
    buttonRow.style.display = 'none';
    caption.style.display = 'none';
    result.style.display = 'block';
    triggerLimitedRain();
  });

  noBtn.addEventListener('click', () => {
    caption.textContent = captions[noCount % captions.length];
    noCount++;
    const nodes = Array.from(buttonRow.children);
    buttonRow.append(nodes[0]); 
    yesBtn.classList.add('highlight-yes');
    setTimeout(() => yesBtn.classList.remove('highlight-yes'), 350);
  });

  nextBtn.addEventListener('click', () => {
    document.getElementById('mainContainer').style.display = "none";
    letterPage.style.display = "flex";
  });