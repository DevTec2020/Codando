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

module.exports = Character






