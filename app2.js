// JavaScript for Basketball Game Protocol
document.addEventListener("DOMContentLoaded", () => {
    // Helper function to update fouls
    const handleFoul = (button, inputId) => {
      button.addEventListener("click", () => {
        const input = document.getElementById(inputId);
        input.value = parseInt(input.value) + 1;
      });
    };
 
    // Helper function to update scores
    const handleScore = (buttons, teamId) => {
      buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
          const scoreElement = document.querySelector(`#${teamId}-score`);
          const currentScore = parseInt(scoreElement.textContent);
          scoreElement.textContent = currentScore + (index + 1);
        });
      });
    };
 
    // Assign event listeners to fouls for both teams
    document.querySelectorAll(".team").forEach((team, teamIndex) => {
      const teamId = `team${teamIndex + 1}`;
      const players = team.querySelectorAll(".player");
 
      players.forEach((player, playerIndex) => {
        const foulButton = player.querySelector("button");
        const inputId = `player${teamIndex + 1}-${playerIndex + 1}`;
        handleFoul(foulButton, inputId);
      });
 
      // Assign event listeners to score buttons
      const scoreButtons = team.querySelectorAll(".score-buttons button");
      handleScore(scoreButtons, teamId);
 
      // Add score tracking display if not present
      if (!document.getElementById(`${teamId}-score`)) {
        const scoreDisplay = document.createElement("h3");
        scoreDisplay.id = `${teamId}-score`;
        scoreDisplay.textContent = "0";
        team.appendChild(scoreDisplay);
      }
    });
 
    // Notes functionality
    const notesInput = document.getElementById("notes");
    notesInput.addEventListener("input", () => {
      console.log("Notes updated:", notesInput.value);
    });
 
    // Period management buttons
    const finishPeriodButton = document.querySelector(".submit-buttons button:nth-child(1)");
    const newPeriodButton = document.querySelector(".submit-buttons button:nth-child(2)");
 
    finishPeriodButton.addEventListener("click", () => {
      alert("Period finished! Scores saved.");
    });
 
    newPeriodButton.addEventListener("click", () => {
      document.querySelectorAll(".team h3").forEach((score) => {
        score.textContent = "0";
      });
      document.querySelectorAll(".player input").forEach((input) => {
        input.value = "0";
      });
      notesInput.value = "";
      alert("New period started!");
    });
  });