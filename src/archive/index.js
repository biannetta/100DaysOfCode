import {create} from './canvas.js';
import {draw} from './square.js';

let myCanvas = create('myCanvas', document.body, 400, 320);
let square = draw(myCanvas.ctx, 100, 50, 50, 'green');

console.log(square);