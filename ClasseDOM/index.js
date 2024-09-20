import { component } from "./Component.js";
import { form } from "./Form.js";
import { input } from "./Input.js";
import { label } from "./Label.js";

const title = new component('h1', 'body', {textContent: 'olá, Mundo!'})

console.log(title)
title.renderElementoDom()

title.tag = 'h3'
title.build().renderElementoDom()
