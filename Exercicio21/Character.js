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

class Warrior extends Character{
    constructor(nome, pv, pAtaque, pDefesa,escudo,posicao){
        super(nome, pv, pAtaque, pDefesa);
        this.escudo = escudo
        this.posicao = posicao
    }

    Atacar(alvo){
        if(this.posicao==="ataque"){
            if(this.pAtaque > alvo.pDefesa){
                const dano = this.pAtaque - alvo.pDefesa;
                alvo.pv-=dano;
                console.log(`O Personagem ${alvo.nome} recebeu ${dano} de Dano e está com ${alvo.pv} de vida`)
                
            }else{
                console.log(`A defesa de ${alvo.nome} é maior que seu ataque`)
                
            }
        }else{
            console.log("Você não está em posição de Ataque, assim não pode atacar")
            
        }
    }

    MudaPosition(){
        if (this.posicao === "ataque"){
            this.posicao = "defesa"
            console.log("Posição foi trocada para Defesa")
        }else{
            this.posicao = "ataque"
            console.log("Posição foi trocada para Ataque")
        }   

    }
}

const Leo = new Warrior('Leo', 6, 3, 5, 2, "Defesa");

const Susu = new Character('Susu', 10, 4, 2);

Leo.MudaPosition(Leo.posicao)
Leo.Atacar(Susu)

Leo.MudaPosition(Leo.posicao)
Leo.Atacar(Susu)




