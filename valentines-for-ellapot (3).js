// 💘 A Valentine's Gift for Ellapot from Adrean 💘
// Generated on Valentine's Day 2026

class HeartBeat {
  constructor(person) {
    this.person = person;
    this.love = Infinity;
    this.moments = [];
  }

  addMemory(memory) {
    this.moments.push(memory);
    console.log(`💕 ${memory}`);
  }

  expressLove() {
    return `To my LOML ${this.person}... You mean everything to me. ❤️`;
  }

  createHeartAnimation() {
    const heart = `
      💗 💗 💗 💗 💗
      💗       💗
      💗     💗
      💗   💗
      💗 💗
      💗
    `;
    return heart;
  }
}

// Initialize the love
const valentine = new HeartBeat("Ellapot");

// Add special memories and reasons
valentine.addMemory("Your smile lights up my entire world");
valentine.addMemory("Every moment with you feels like a dream");
valentine.addMemory("You're my forever person");
valentine.addMemory("Forever grateful for you in my life");

// Display the love
console.log("\n" + valentine.createHeartAnimation());
console.log("\n" + valentine.expressLove());
console.log("\nHappy Valentine's Day! 💑\nWith all my love,\nAdrean\n");

// Generate a romantic message
const romanticMsg = () => {
  const reasons = [
    "Because you're kind",
    "Because you're beautiful",
    "Because you make me laugh",
    "Because you're my home",
    "Because I choose you, every single day"
  ];
  
  console.log("Reasons I love you:");
  reasons.forEach((reason, index) => {
    console.log(`${index + 1}. ${reason} 💕`);
  });
};

romanticMsg();

// Final message
console.log("\n🌹 You are my greatest adventure. Forever yours. 🌹");