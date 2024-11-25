
const zodiacInfo = {
  Aries: {
    description: "You are energetic, bold, and courageous. You love taking the lead and are always up for a challenge.",
    element: "Fire",
    rulingPlanet: "Mars",
    traits: ["Energetic", "Bold", "Adventurous"],
    compatibility: "Best matches: Leo, Sagittarius."
  },
  Taurus: {
    description: "You are reliable, patient, and practical. You love comfort and luxury, and are known for your determination.",
    element: "Earth",
    rulingPlanet: "Venus",
    traits: ["Reliable", "Patient", "Practical"],
    compatibility: "Best matches: Virgo, Capricorn."
  },
  Gemini: {
    description: "You are adaptable, curious, and quick-witted. You have a deep need for variety and change in your life.",
    element: "Air",
    rulingPlanet: "Mercury",
    traits: ["Adaptable", "Curious", "Witty"],
    compatibility: "Best matches: Libra, Aquarius."
  },
  Cancer: {
    description: "You are emotional, nurturing, and empathetic. You deeply care about your loved ones and your home is your sanctuary.",
    element: "Water",
    rulingPlanet: "Moon",
    traits: ["Emotional", "Nurturing", "Empathetic"],
    compatibility: "Best matches: Scorpio, Pisces."
  },
  Leo: {
    description: "You are confident, creative, and dramatic. You love being the center of attention and are natural leaders.",
    element: "Fire",
    rulingPlanet: "Sun",
    traits: ["Confident", "Creative", "Dramatic"],
    compatibility: "Best matches: Aries, Sagittarius."
  },
  Virgo: {
    description: "You are practical, intelligent, and meticulous. You strive for perfection and pay attention to every detail.",
    element: "Earth",
    rulingPlanet: "Mercury",
    traits: ["Practical", "Intelligent", "Meticulous"],
    compatibility: "Best matches: Taurus, Capricorn."
  },
  Libra: {
    description: "You are diplomatic, charming, and fair-minded. You seek balance and harmony in all areas of life.",
    element: "Air",
    rulingPlanet: "Venus",
    traits: ["Diplomatic", "Charming", "Fair-minded"],
    compatibility: "Best matches: Gemini, Aquarius."
  },
  Scorpio: {
    description: "You are intense, mysterious, and passionate. You are deeply intuitive and can be fiercely protective of those you love.",
    element: "Water",
    rulingPlanet: "Pluto",
    traits: ["Intense", "Mysterious", "Passionate"],
    compatibility: "Best matches: Cancer, Pisces."
  },
  Sagittarius: {
    description: "You are adventurous, independent, and philosophical. You love to explore new ideas and places.",
    element: "Fire",
    rulingPlanet: "Jupiter",
    traits: ["Adventurous", "Independent", "Philosophical"],
    compatibility: "Best matches: Aries, Leo."
  },
  Capricorn: {
    description: "You are disciplined, responsible, and ambitious. You value structure and hard work, and you aim high in life.",
    element: "Earth",
    rulingPlanet: "Saturn",
    traits: ["Disciplined", "Responsible", "Ambitious"],
    compatibility: "Best matches: Taurus, Virgo."
  },
  Aquarius: {
    description: "You are innovative, idealistic, and independent. You love to think outside the box and embrace change.",
    element: "Air",
    rulingPlanet: "Uranus",
    traits: ["Innovative", "Idealistic", "Independent"],
    compatibility: "Best matches: Gemini, Libra."
  },
  Pisces: {
    description: "You are compassionate, creative, and intuitive. You are deeply in touch with your emotions and have a strong spiritual side.",
    element: "Water",
    rulingPlanet: "Neptune",
    traits: ["Compassionate", "Creative", "Intuitive"],
    compatibility: "Best matches: Cancer, Scorpio."
  }
};

function getZodiacSign(month, day) {
  const zodiacDates = {
    Aries: { start: [3, 21], end: [4, 19] },
    Taurus: { start: [4, 20], end: [5, 20] },
    Gemini: { start: [5, 21], end: [6, 20] },
    Cancer: { start: [6, 21], end: [7, 22] },
    Leo: { start: [7, 23], end: [8, 22] },
    Virgo: { start: [8, 23], end: [9, 22] },
    Libra: { start: [9, 23], end: [10, 22] },
    Scorpio: { start: [10, 23], end: [11, 21] },
    Sagittarius: { start: [11, 22], end: [12, 21] },
    Capricorn: { start: [12, 22], end: [1, 19] },
    Aquarius: { start: [1, 20], end: [2, 18] },
    Pisces: { start: [2, 19], end: [3, 20] }
  };

  for (const sign in zodiacDates) {
    const { start, end } = zodiacDates[sign];
    if (
      (month === start[0] && day >= start[1]) ||
      (month === end[0] && day <= end[1]) ||
      (month > start[0] && month < end[0])
    ) {
      return sign;
    }
  }
  return null;
}

function displayZodiac() {
  const name = document.getElementById('name').value;
  const dob = document.getElementById('dob').value;

  if (!name || !dob) {
    alert('Please enter your name and date of birth');
    return;
  }

  const birthDate = new Date(dob);
  const month = birthDate.getMonth() + 1;
  const day = birthDate.getDate();

  const zodiacSign = getZodiacSign(month, day);
  if (zodiacSign) {
    const info = zodiacInfo[zodiacSign];
    document.getElementById('zodiac-title').textContent = `${name}, your zodiac sign is ${zodiacSign}!`;
    document.getElementById('zodiac-desc').innerHTML = `
      <p>${info.description}</p>
      <p><strong>Element:</strong> ${info.element}</p>
      <p><strong>Ruling Planet:</strong> ${info.rulingPlanet}</p>
      <p><strong>Traits:</strong> ${info.traits.join(', ')}</p>
      <p><strong>Compatibility:</strong> ${info.compatibility}</p>
    `;
  } else {
    document.getElementById('zodiac-title').textContent = 'Error';
    document.getElementById('zodiac-desc').textContent = 'Unable to calculate your zodiac sign.';
  }
}

document.getElementById('submit-btn').addEventListener('click', displayZodiac);

function generateStars() {
  const starryBackground = document.querySelector('.starry-background');
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    starryBackground.appendChild(star);
  }
}
generateStars();
