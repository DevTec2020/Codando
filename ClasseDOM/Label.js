import { component } from "./Component.js";

export class label extends component{
    constructor(text, parent, options){
        super('label', parent, Object.assign({}, options, { textContent: text}))
    }

}