import { component } from "./Component.js";

export class form extends component{
    constructor(parent, options){
        super('form', parent, options)
    }

    addChildren(...children){
        children.forEach(child => {
            this.getElementDom().appendChild(child.getElementDom())
        })
    }
}