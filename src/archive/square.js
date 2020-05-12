const name = 'square';

function draw(context, length, x, y, colour) {
  context.fillStyle = colour;
  context.fillRect(x, y, length, length);
  
  return {
    length: length,
    x: x,
    y: y,
    colour: colour
  }
}

export {name, draw}