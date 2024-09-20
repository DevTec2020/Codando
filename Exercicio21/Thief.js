const Character = require("./Character.js");

class Trief extends Character{
    Atacar(alvo){
        if(this.pAtaque > alvo.pDefesa){
            const dano = (this.pAtaque - alvo.pDefesa)*2;
            alvo.pv-=dano;
            console.log(`O Personagem ${alvo.nome} recebeu ${dano} de Dano e está com ${alvo.pv} de vida`)
        }else{
            console.log(`A defesa de ${alvo.nome} é maior que seu ataque`)
        }        
    }
}

module.exports = Trief