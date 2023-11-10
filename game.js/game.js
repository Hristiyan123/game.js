class GameManager {
    constructor() {
        this.battleManager = new BattleManager();
        this.fightMechanicsMap = {
            Warrior: WarriorFightMechanics,
            Rogue: RogueFightMechanics,
            Mage: MageFightMechanics,
            Archer: ArcherFightMechanics,
        };
    }

    setGameStart(classType) {
        this.currentClassType = classType;
        const player = this.battleManager.resetPlayer(classType);
        this.battleManager.startFight(classType);
        UIManager.removeInterfaceElements(classType);
        UIManager.updatePlayerInfo(player);


        const FightMechanics = this.fightMechanicsMap[classType];
        if (FightMechanics) {
            const fightMechanics = new FightMechanics(player);
        } else {
            console.error(`Invalid class type: ${classType}`);
        }
    }
}


class UIManager {

    static removeInterfaceElements() {
        let interfaceElements = document.querySelectorAll(".interface");
        interfaceElements.forEach((element) => {
            element.remove();
        });
    }

    static updateHeader(text) {
        const getHeader = document.querySelector(".header");
        getHeader.innerHTML = `<p>${text}</p>`;
    }

    static updateAttackButton(enemy) {
        const getATTACK = document.querySelector(".ATTACK");
        getATTACK.innerHTML = `<a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack(${enemy})">Attack</a>`;
    }

    static updateEnemyInfo(enemy) {
        const getEnemy = document.querySelector(".enemy");
        getEnemy.innerHTML = `
            <img src="enemy/${enemy.enemyType.toLowerCase()}.png" alt="${enemy.enemyType}" class="img-avatar">
            <div>
                <h3>${enemy.enemyType}</h3>
                <p class="health-enemy">Health: ${enemy.health}</p>
                <p>Mana: ${enemy.mana}</p>
                <p>Strength: ${enemy.strength}</p>
                <p>Agility: ${enemy.agility}</p>
                <p>Speed: ${enemy.speed}</p>
            </div>
        `;
    }


    static updatePlayerInfo(player) {
        const playerInfo = document.querySelector(".player");
        playerInfo.innerHTML = `
            <img src="Hero/${player.classType.toLowerCase()}.png" alt="${player.classType}" class="img-avatar">
            <div>
                <h3>${player.classType}</h3>
                <p class="health-player">Health: ${player.health}</p>
                <p>Mana: ${player.mana}</p>
                <p>Strength: ${player.strength}</p>
                <p>Agility: ${player.agility}</p>
                <p>Speed: ${player.speed}</p>
            </div>
        `;
    }
}

class BattleManager {
    constructor() {
        this.enemies = [
            new Enemy("Voidfire", 1000, 400, 900, 100, 100),
            new Enemy("Necronoid", 800, 200, 700, 500, 750),
        ];
    }


    startFight(classType) {
        const player = this.resetPlayer(classType);
        const randomEnemy = this.getRandomEnemy();

        UIManager.updateHeader("Choose your move");
        UIManager.updateAttackButton(randomEnemy);
        UIManager.updateEnemyInfo(randomEnemy);
    }

    resetPlayer(classType) {
        switch (classType) {  //Health, mana, strengh, agility, speed
            case "Warrior":
                return new Player(classType, 900, 200, 700, 300, 400);
            case "Rogue":
                return new Player(classType, 650, 300, 600, 700, 700);
            case "Mage":
                return new Player(classType, 550, 800, 200, 400, 500);
            case "Archer":
                return new Player(classType, 600, 300, 600, 900, 550);
            default:
                return null;
        }
    }

    getRandomEnemy() {
        const randomIndex = Math.floor(Math.random() * this.enemies.length);
        return this.enemies[randomIndex];
    }
}

class WarriorFightMechanics {
    constructor(player) {
        this.player = player;
        this.initializeStats();
    }

    initializeStats() {
        console.log(this.player.classType)

    }

    //calculateAttackDamage() {
    //    if (gameManager.currentClassType === "Warrior") {

    //        return this.player.strength;
      //  }
    //}

    //performSpecialAbility() {
      //  if (gameManager.currentClassType === "Warrior") {

        //}
   // }
}

class RogueFightMechanics {
    constructor(player) {
        this.player = player;
        this.initializeStats();
    }

    initializeStats() {
        if (gameManager.currentClassType === "Rogue") {

            console.log(this.player.classType)

        }
    }

   // calculateAttackDamage() {
     //   if (gameManager.currentClassType === "Rogue") {

       //     return this.player.strength;
        //}
    //}

  //  performSpecialAbility() {
    //    if (gameManager.currentClassType === "Rogue") {
            
      //  }
   // }
}

class ArcherFightMechanics {
    constructor(player) {
        this.player = player;
        this.initializeStats();
    }

    initializeStats() {
        if (gameManager.currentClassType === "Archer") {
           
            console.log(this.player.classType)

        }
    }

   // calculateAttackDamage() {
     //   if (gameManager.currentClassType === "Archer") {

       //     return this.player.strength;
  //      }
    //}

 //   performSpecialAbility() {
   //     if (gameManager.currentClassType === "Archer") {

     //   }
    //}
}


class MageFightMechanics {
    constructor(player) {
        this.player = player;
        this.initializeStats();
    }

    initializeStats() {
        if (gameManager.currentClassType === "Mage") {

            console.log(this.player.classType)

        }
    }

 //   calculateAttackDamage() {
   //     if (gameManager.currentClassType === "Mage") {

     //       return this.player.strength;
       // }
   // }

    //performSpecialAbility() {
      //  if (gameManager.currentClassType === "Mage") {

        //}
    //}
}

const gameManager = new GameManager();
