export class component {
    #elementDom = null

    constructor (tag, parent, options){
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
        
    }

    getElementDom(){
        return this.#elementDom
    }

    build(){
        //cria o elemento DOM
        this.#elementDom = document.createElement(this.tag)
        //O Object.assign pega os dados do this.options e coloca no this.#elementDom
        Object.assign(this.#elementDom, this.options)
        return this
    }

    renderElementoDom(){
        //coloca o elemento em tela
        if (this.parent instanceof component){
            this.parent.getElementDom().append(this.#elementDom)
        }else {
            document.querySelector(this.parent).append(this.#elementDom)
        }
    }
}
