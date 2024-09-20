class Character {
    constructor(nome, pv, pAtaque, pDefesa){
        this.nome = nome
        this.pv = pv
        this.pAtaque = pAtaque
        this.pDefesa = pDefesa
    }

    Atacar(alvo){
        if(this.pAtaque > alvo.pDefesa){
            const dano = this.pAtaque - alvo.pDefesa;
            alvo.pv-=dano;
            console.log(`O Personagem ${alvo.nome} recebeu ${dano} de Dano e está com ${alvo.pv} de vida`)
        }else{
            console.log(`A defesa de ${alvo.nome} é maior que seu ataque`)
        }
    }
}

class Thief extends Character{
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

class Mage extends Character{
    
}


const Leo = new Thief('Leo', '10', '3', '5');
const Anderson = new Character('Anderson', '10', '4', '2');

Leo.Atacar(Anderson)



