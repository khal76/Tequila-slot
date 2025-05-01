function spin() {
  const symbols = ["🥃", "🍸", "🍺", "🧊"];
  const slotCount = 4;
  const spinResult = [];

  for (let i = 0; i < slotCount; i++) {
    const randSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    spinResult.push(randSymbol);
  }

  document.getElementById("slots").innerText = spinResult.join(" ");

  // حساب الجائزة
  const resultDiv = document.getElementById("result");
  const tequilaCount = spinResult.filter(s => s === "🥃").length;
  const iceCount = spinResult.filter(s => s === "🧊").length;

  let message = "حظاً أوفر!";
  let bonus = 0;

  if (tequilaCount === 3) {
    message = "تهانينا! ربحت BONUS!";
    bonus = 100;
  } else if (tequilaCount === 4) {
    message = "سوبر بونص! ربحت SUPER BONUS!";
    bonus = 300;
  }

  if (iceCount > 0 && bonus > 0) {
    const multiplier = 2 + Math.floor(Math.random() * 2); // ×2 أو ×3
    bonus *= multiplier;
    message += ` ومضاعف ثلجي ×${multiplier}!`;
  }

  if (bonus > 0) {
    message += ` الجائزة: ${bonus} نقطة!`;
  }

  resultDiv.innerText = message;
}
