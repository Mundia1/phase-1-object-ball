function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  function numPointsScored(playerName) {
    let game = gameObject();
    if (playerName in game.home.players) return game.home.players[playerName].points;
    if (playerName in game.away.players) return game.away.players[playerName].points;
    return null;
  }
  
  function shoeSize(playerName) {
    let game = gameObject();
    if (playerName in game.home.players) return game.home.players[playerName].shoe;
    if (playerName in game.away.players) return game.away.players[playerName].shoe;
    return null;
  }
  
  function teamColors(teamName) {
    let game = gameObject();
    if (game.home.teamName === teamName) return game.home.colors;
    if (game.away.teamName === teamName) return game.away.colors;
    return null;
  }
  
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  function playerNumbers(teamName) {
    let game = gameObject();
    let team = game.home.teamName === teamName ? game.home : game.away.teamName === teamName ? game.away : null;
    if (!team) return null;
    return Object.values(team.players).map(player => player.number);
  }
  
  function playerStats(playerName) {
    let game = gameObject();
    if (playerName in game.home.players) return game.home.players[playerName];
    if (playerName in game.away.players) return game.away.players[playerName];
    return null;
  }
  
  function bigShoeRebounds() {
    let game = gameObject();
    let allPlayers = { ...game.home.players, ...game.away.players };
    let maxShoePlayer = null;
    let maxShoeSize = 0;
  
    for (let playerName in allPlayers) {
      let shoeSize = allPlayers[playerName].shoe;
      if (shoeSize > maxShoeSize) {
        maxShoeSize = shoeSize;
        maxShoePlayer = playerName;
      }
    }
  
    return allPlayers[maxShoePlayer].rebounds;
  }
  
  function mostPointsScored() {
    let game = gameObject();
    let allPlayers = { ...game.home.players, ...game.away.players };
    let maxPointsPlayer = null;
    let maxPoints = 0;
  
    for (let playerName in allPlayers) {
      let points = allPlayers[playerName].points;
      if (points > maxPoints) {
        maxPoints = points;
        maxPointsPlayer = playerName;
      }
    }
  
    return maxPointsPlayer;
  }
  
  function winningTeam() {
    let game = gameObject();
    let homePoints = Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0);
    let awayPoints = Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0);
    return homePoints > awayPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    let game = gameObject();
    let allPlayers = { ...game.home.players, ...game.away.players };
    let longestName = null;
    let maxLength = 0;
  
    for (let playerName in allPlayers) {
      if (playerName.length > maxLength) {
        maxLength = playerName.length;
        longestName = playerName;
      }
    }
  
    return longestName;
  }
  
  function doesLongNameStealATon() {
    let game = gameObject();
    let allPlayers = { ...game.home.players, ...game.away.players };
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let maxStealsPlayer = null;
  
    for (let playerName in allPlayers) {
      let steals = allPlayers[playerName].steals;
      if (steals > maxSteals) {
        maxSteals = steals;
        maxStealsPlayer = playerName;
      }
    }
  
    return longestName === maxStealsPlayer;
  }

// Test suite for JavaScript Objectball assignment
console.log("Starting Objectball tests...");

// Test gameObject structure
console.log("Testing gameObject structure:");
const game = gameObject();
console.log("gameObject output:", game);
debugger;

// Test numPointsScored
console.log("\nTesting numPointsScored:");
console.log("Points for Alan Anderson:", numPointsScored("Alan Anderson")); // Expected: 22
console.log("Points for Ben Gordon:", numPointsScored("Ben Gordon")); // Expected: 33
console.log("Points for non-existent player:", numPointsScored("John Doe")); // Expected: null
debugger;

// Test shoeSize
console.log("\nTesting shoeSize:");
console.log("Shoe size for Mason Plumlee:", shoeSize("Mason Plumlee")); // Expected: 19
console.log("Shoe size for Jeff Adrien:", shoeSize("Jeff Adrien")); // Expected: 18
console.log("Shoe size for non-existent player:", shoeSize("John Doe")); // Expected: null
debugger;

// Test teamColors
console.log("\nTesting teamColors:");
console.log("Colors for Brooklyn Nets:", teamColors("Brooklyn Nets")); // Expected: ["Black", "White"]
console.log("Colors for Charlotte Hornets:", teamColors("Charlotte Hornets")); // Expected: ["Turquoise", "Purple"]
console.log("Colors for non-existent team:", teamColors("Boston Celtics")); // Expected: null
debugger;

// Test teamNames
console.log("\nTesting teamNames:");
console.log("Team names:", teamNames()); // Expected: ["Brooklyn Nets", "Charlotte Hornets"]
debugger;

// Test playerNumbers
console.log("\nTesting playerNumbers:");
console.log("Jersey numbers for Brooklyn Nets:", playerNumbers("Brooklyn Nets")); // Expected: [0, 30, 11, 1, 31]
console.log("Jersey numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets")); // Expected: [4, 0, 2, 8, 33]
console.log("Jersey numbers for non-existent team:", playerNumbers("Boston Celtics")); // Expected: null
debugger;

// Test playerStats
console.log("\nTesting playerStats:");
console.log("Stats for Alan Anderson:", playerStats("Alan Anderson")); // Expected: { number: 0, shoe: 16, points: 22, ... }
console.log("Stats for Brendan Haywood:", playerStats("Brendan Haywood")); // Expected: { number: 33, shoe: 15, points: 6, ... }
console.log("Stats for non-existent player:", playerStats("John Doe")); // Expected: null
debugger;

// Test bigShoeRebounds
console.log("\nTesting bigShoeRebounds:");
console.log("Rebounds for player with largest shoe:", bigShoeRebounds()); // Expected: 12 (Mason Plumlee)
debugger;

// Test bonus functions
console.log("\nTesting bonus functions:");

// Test mostPointsScored
console.log("Player with most points:", mostPointsScored()); // Expected: "Ben Gordon" (33 points)
debugger;

// Test winningTeam
console.log("Winning team:", winningTeam()); // Expected: "Brooklyn Nets" (96 vs. 85)
debugger;

// Test playerWithLongestName
console.log("Player with longest name:", playerWithLongestName()); // Expected: "Brendan Haywood" (14 chars)
debugger;

// Test doesLongNameStealATon (Super Bonus)
console.log("Does longest name have most steals?", doesLongNameStealATon()); // Expected: true (Brendan Haywood has 22 steals)
debugger;

console.log("All tests completed!");