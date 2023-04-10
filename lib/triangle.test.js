const Triangle = require('./triangle.js');

test('properly render svg triangle', () => {
    const shape = new Triangle({
      txt: 'ZSL',
      txtColor: 'black',
      shape: 'triangle',
      shapeColor: 'white'
    });

    expect(shape.render()).toEqual(`<svg version='1.1' 
        width='300' height='200' 
        xmlns='http://www.w3.org/2000/svg'>
        <polygon points='150, 18 244, 182 56, 182' fill='white'/>
        <text x='150' y='155' font-size='55' text-anchor='middle' fill='black'>ZSL</text>
        </svg>`);
    });