class Pokemon 
{
    constructor(name, attack, defense, hp, luck) {
        this.name = name;
        this.attack = attack;
        this.defense = defense;
        this.hp = hp;
        this.luck = luck;
    }

    isLucky() {
        return Math.random() <= this.luck;
    }

    attackPokemon(target) {
        if (this.isLucky()) {
            const damage = this.attack - target.defense;
            if (damage > 0) {
              target.hp -= damage;
            }
            console.log(this.name + ' attaque ' + target.name + ' et inflige ' + damage + ' dégâts.');
        } 
        else {
            console.log(this.name + ' rate son attaque contre ' + target.name);
        }
    }
}

let Gastrodon = new Pokemon("Gastrodon", 20, 35, 45, 0.65);
let Torterra = new Pokemon("Torterra", 30, 50, 50, 0.35);

while (Gastrodon.hp > 0 && Torterra.hp > 0) {
    Gastrodon.attackPokemon(Torterra);
    console.log(Torterra.name + ' a ' + Torterra.hp + ' points de vie restants.');
  
    if (Torterra.hp <= 0) {
      console.log(Torterra.name + ' est vaincu !');
      break;
    }
  
    Torterra.attackPokemon(Gastrodon);
    console.log(Gastrodon.name + ' a ' + Gastrodon.hp + ' points de vie restants.');
  
    if (Gastrodon.hp <= 0) {
      console.log(Gastrodon.name + ' est vaincu !');
      break;
    }
}
