function gameObject (){
const firstObject = {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: { 
            "Alan Anderson" : {
                "number": 0,
                "shoe": 16,
                "points": 22,
                "rebounds": 12,
                "assists": 12,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 1,
                },
            "Reggie Evans": {
                "number": 30,
                "shoe": 14,
                "points": 12,
                "rebounds": 12,
                "assists": 12,
                "steals": 12,
                "blocks": 12,
                "slamDunks": 7,
            },
            "Brook Lopez" : {
                "number": 11,
                "shoe": 17,
                "points": 17,
                "rebounds": 19,
                "assists": 10,
                "steals": 3,
                "blocks": 1,
                "slamDunks": 15,
            },
            "Mason Plumlee" : {
                "number": 1,
                "shoe": 19,
                "points": 26,
                "rebounds": 12,
                "assists": 6,
                "steals": 3,
                "blocks": 8,
                "slamDunks": 5,
            },
            "Jason Terry" : {
                "number": 31,
                "shoe": 15,
                "points": 19,
                "rebounds": 2,
                "assists": 2,
                "steals": 4,
                "blocks": 11,
                "slamDunks": 1,
            }
        }
    },
    
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien" : {
                "number": 4,
                "shoe": 18,
                "points": 10, 
                "rebounds": 1,
                "assists": 1,
                "steals": 2,
                "blocks": 7,
                "slamDunks": 2,
                },
            "Bismak Biyombo" :{
                "number": 0,
                "shoe": 16, 
                "points": 12,
                "rebounds": 4,
                "assists": 7, 
                "steals": 7,
                "blocks": 15,
                "slamDunks": 10,
            },
            "DeSagna Diop": {
                "number": 2,
                "shoe": 14,
                "points": 24,
                "rebounds": 12,
                "assists": 12,
                "steals": 4,
                "blocks": 5,
                "slamDunks": 5,
            },
            "Ben Gordon": {
                "number": 8,
                "shoe": 15,
                "points": 33,
                "rebounds": 3,
                "assists": 2,
                "steals": 1,
                "blocks": 1,
                "slamDunks": 0,
            },
            "Brendan Haywood": {
                "number": 33,
                "shoe": 15,
                "points": 6,
                "rebounds": 12,
                "assists": 12,
                "steals": 22,
                "blocks": 5,
                "slamDunks": 12,
            }
        }
    }
}
return firstObject;
}


function homeTeam() {return gameObject().home}
function awayTeam() {return gameObject().away}
function allplayers() { return Object.assign({}, homeTeam().players, awayTeam().players)}


//after walk through video
function numPointsScored(playerName){
    let scoredPoints = allplayers()[playerName].points
    return scoredPoints;
    console.log(scoredPoints)
}

//after walk through video
function shoeSize(playerName){
    let shoe = allplayers()[playerName].shoe
    return shoe
    console.log(shoe)
}

function teamColors(input){
    const game = gameObject()
    for (const team in gameObject()) {
        if (game[team].teamName === input){ 
        return game[team].colors;
        }
    }
}

function teamNames(){
    const game = gameObject();
      const  arrayOfTeamNames = Object.keys(game).map(team => game[team].teamName)
      return arrayOfTeamNames;
  }

function playerNumbers(input){
    const homeTeamPlayers = homeTeam().players
    const awayTeamPlayers = awayTeam().players
    if (homeTeam().teamName === input){
      return Object.keys(homeTeamPlayers).map(player => homeTeamPlayers[player].number)
    }
    else {
     return Object.keys(awayTeamPlayers).map(player => awayTeamPlayers[player].number)
    }
}

function playerStats(inputPlayer){
    return allPlayers()[inputPlayer]
  }

  function bigShoeRebounds() {
    let shoeResult = 0;
    let reboundsResult = 0;
    const players = allPlayers();
    for ( const player in players){
      if (players[player].shoe > shoeResult){
        shoeResult = players[player].shoe
        reboundsResult = players[player].rebounds
      }
    }
  return reboundsResult;
  }

  function mostPointsScored(){
    let pointsResult = 0;
    let mostPointsName;
    const players = allPlayers();
    for ( const player in players){
      if (players[player].points > pointsResult){
        pointsResult = players[player].points
        mostPointsName = player;
      }
    }
  return mostPointsName;
  }

  function winningTeam(){
    const homeTeamPlayers = homeTeam().players
    const awayTeamPlayers = awayTeam().players
    let pointsTotalHome = 0;
    let pointsTotalAway =  0;
    
    for (const player in homeTeamPlayers){
      pointsTotalHome += homeTeamPlayers[player].points
    }
       
    for (const player in awayTeamPlayers){
      pointsTotalAway += awayTeamPlayers[player].points
    }
   
   return pointsTotalHome > pointsTotalAway ? homeTeam().teamName : awayTeam().teamName;
    
  }

  function playerWithLongestName(){
    let length = 0;
    let longestName;
    const arrayOfNames = Object.keys(allPlayers())
    
    arrayOfNames.forEach(name => {
    if (name.length > length){
      longestName = name;
    }
  })
return longestName;
}
 
//use this function in next doesLongNameStealATon()
function mostSteals(){
    let stealsResult = 0;
    let mostStealsName;
    const players = allPlayers();
    for ( const player in players){
      if (players[player].steals > stealsResult){
        stealsResult = players[player].steals
        mostStealsName = player;
      }
    }
  return mostStealsName;
  }


//function that returns true if the player with the longest name had the most steals
function doesLongNameStealATon(){
  return playerWithLongestName() === mostSteals()
}


// what i did first ughhh: 
// function numPointsScored(playerName) {
//     const game = gameObject();
//     for (const gameKey in game) {
      
//       const teamObj = game[gameKey]
//       for (const teamKey in teamObj) {
        
//         const playerObj = teamObj.players        
//         for (const playerKey in playerObj) {
            
//             if (playerKey === playerName){
//             return playerObj[playerKey].points;    
//             //console.log (playerObj[playerKey].points);
//           }
//         }
//       }
//     }
//   }

//function shoeSize(playerName) {
//     const game = gameObject();
//     for (const gameKey in game) {
     
//       const teamObj = game[gameKey]
//       for (const teamKey in teamObj) {
        
//         const playerObj = teamObj.players        
//         for (const playerKey in playerObj) {
            
//             if (playerKey === playerName){
//             return playerObj[playerKey].shoe;    
//             console.log (playerObj[playerKey].shoe);
//           }
//         }
//       }
//     }
//   }

//   function teamColors(nameLookUp){
//     const game = gameObject();
//     for (const gameKey in game) { //rotation home/away
//         if (game[gameKey].teamName === nameLookUp){ //checking if value og team name is equal look Up Name
//          return game[gameKey].colors;
//         }
//     }
//   }   

//   function teamNames(){
//     const teamsList= [];
//     const game = gameObject();
//     for (const gameKey in game) { //rotation home/away
//         teamsList.push(game[gameKey].teamName);
//       } 
//     return teamsList;
//     console.log(teamsList);
// }
//another way(try to figure it out)
//const teamNames = () => {
//const game = gameObject()
//return Object.keys(game).map(gameKey => game[gameKey].teamName)
//}

// function playerNumbers(teamLookUp){
//     const listOfPlayersNumbers = [];
//     const game = gameObject();
//     for (const gameKey in game) {
//       const teamObj = game[gameKey]
//       if (teamObj.teamName === teamLookUp){
//           const playerObj = teamObj.players
//           for (const playerKey in playerObj) {
//            listOfPlayersNumbers.push(playerObj[playerKey].number) 
//           }
//         }
//     }
//     return listOfPlayersNumbers;
//     console.log(listOfPlayersNumbers)
//   }

// another way (figure out how)
//function playerNumbers (name) {
//     const data = gameObject()
//     const team = Object.keys(data).find(t => data[t].teamName === name)
//     const listOfPlayers = Object.keys(data[team].players)
//     return listOfPlayers.map(player => data[team].players[player].number)
// }

//   function playerStats(playersName){
//     const game = gameObject();
//     for (const gameKey in game) {
//       const teamObj = game[gameKey]
//       for (const teamKey in teamObj) {
//         const playerObj = teamObj.players
//         for (const playerKey in playerObj) {
//           if (playerKey === playersName){
//           return playerObj[playerKey];
//           console.log (playerObj[playerKey]);
//           }
//         }
//       }
//     }
//   } 

//   function bigShoeRebounds(){
//     const game = gameObject();
//     const result = {"shoe": 0, "rebounds": 0}
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         for (const teamKey in teamObj) {
//           const playerObj = teamObj.players
//           for (const playerKey in playerObj) {
//             const playerInfo = playerObj[playerKey];
//             if (playerInfo.shoe > result.shoe){
//               result.shoe = playerInfo.shoe;
//               result.rebounds = playerInfo.rebounds;
//             }
            
//           }
//         }
//       }
//     return result.rebounds
//     console.log(result)
//   }

//   function mostPointsScored(){
//     const game = gameObject();
//     const result = {"points": 0, "name": 0}
//     for (const gameKey in game) {
//         const teamObj = game[gameKey]
//         for (const teamKey in teamObj) {
//           const playerObj = teamObj.players
//           for (const playerKey in playerObj) {
//             const playerInfo = playerObj[playerKey];
//             if (playerInfo.points > result.points){
//               result.points = playerInfo.points;
//               result.name = playerKey;
//             }
            
//           }
//         }
//       }
//     return result.name
// }


