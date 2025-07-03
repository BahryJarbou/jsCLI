const args = process.argv.slice(2);
const choices = ["rock", "paper", "scissors"];

if (args.length !== 1) {
  console.error("Please enter exactly one of rock, papers or scissors");
  return;
}
const playerChoice = args[0].toLowerCase();
if (!choices.includes(playerChoice)) {
  console.error("invalid choice, please choose one of rock, paper or scissors");
  return;
}

choiceIndex = Math.floor(Math.random() * 3);
computerChoice = choices[choiceIndex];

switch (playerChoice) {
  case "rock":
    switch (computerChoice) {
      case "rock":
        printResults(playerChoice, computerChoice, "tie");
        break;
      case "paper":
        printResults(playerChoice, computerChoice, "loss");
        break;
      default:
        printResults(playerChoice, computerChoice, "win");
        break;
    }
    break;
  case "paper":
    switch (computerChoice) {
      case "rock":
        printResults(playerChoice, computerChoice, "win");
        break;
      case "paper":
        printResults(playerChoice, computerChoice, "tie");
        break;
      default:
        printResults(playerChoice, computerChoice, "loss");
        break;
    }
    break;
  default:
    switch (computerChoice) {
      case "rock":
        printResults(playerChoice, computerChoice, "loss");
        break;
      case "paper":
        printResults(playerChoice, computerChoice, "win");
        break;
      default:
        printResults(playerChoice, computerChoice, "tie");
        break;
    }
    break;
}

function printResults(playerChoice, computerChoice, result) {
  console.log(
    `Player chose: ${playerChoice}, Computer chose: ${computerChoice}`
  );
  switch (result) {
    case "win":
      console.log("player won!");
      break;
    case "loss":
      console.log("player lost :(");
      break;
    case "tie":
      console.log("it's a tie");
      break;
    default:
      console.log("Unknown format");
  }
}
