const Character = require("./Character.js");

class Mage extends Character{
    constructor(nome, pv, pAtaque, pDefesa,pm){
        super(nome, pv, pAtaque, pDefesa);
        this.pm = pm
    }


    Atacar(alvo){
        this.pAtaque+=this.pm;

        if(this.pAtaque > alvo.pDefesa){
            const dano = this.pAtaque - alvo.pDefesa;
            alvo.pv-=dano;
            console.log(`O Personagem ${alvo.nome} recebeu ${dano} de Dano e está com ${alvo.pv} de vida`)
        }else{
            console.log(`A defesa de ${alvo.nome} é maior que seu ataque`)
        }

    }

    Curar(alvo){
        const heal = this.pm *2
        alvo.pv += heal
        console.log(`Cura ativada, ${alvo.nome} recebeu ${heal} de vida e agora esta com ${alvo.pv} de vida`) 
    }
    
}

module.exports = Mage