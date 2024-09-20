const Character = require("./Character.js");

class Warrior extends Character{
    constructor(nome, pv, pAtaque, pDefesa,escudo){
        super(nome, pv, pAtaque, pDefesa);
        this.escudo = escudo
        this.posicao = 'Ataque'
    }

    Atacar(alvo){
        if(this.posicao==="Ataque"){
            super.Atacar(alvo)
        }else{
            console.log("Você não está em posição de Ataque, assim não pode atacar")
            
        }
    }

    MudaPosition(){
        if (this.posicao === "Ataque"){
            this.posicao = "Defesa"
            this.pDefesa += this.escudo
            console.log("Posição foi trocada para Defesa")
        }else{
            this.posicao = "Ataque"
            this.pDefesa -= this.escudo
            console.log("Posição foi trocada para Ataque")
        }   


    }
}

module.exports = Warrior