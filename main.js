var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("goldMinerSave", JSON.stringify(gameData))
  }, 15000)

  var savegame = JSON.parse(localStorage.getItem("goldMinerSave"))
  if (savegame !== null) {
    gameData = savegame
  }

var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerClickCost: 10
    update:
  }
  
  var mainGameLoop = window.setInterval(function() {
    mineGold()
  }, 1000)

  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
    }
  }

  function buyGoldPerClick() {
    if (gameData.gold >= gameData.goldPerClickCost) {
      gameData.gold -= gameData.goldPerClickCost
      gameData.goldPerClick += 1
      gameData.goldPerClickCost *= 2
      document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"
      document.getElementById("perClickUpgrade").innerHTML = "Upgrade Pickaxe (Currently Level " + gameData.goldPerClick + ") Cost: " + gameData.goldPerClickCost + " Gold"
    }
  }

  function mineGold() {
    gameData.gold += gameData.goldPerClick

    document.getElementById("goldMined").innerHTML = gameData.gold + " Gold Mined"

  }