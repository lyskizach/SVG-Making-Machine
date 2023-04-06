const Circle = require('./circle.js');

test('properly render svg circle', () => {
    const shape = new Circle({
        txt: 'ZSL',
        txtColor: 'black',
        shape: 'circle',
        shapeColor: 'white'
    });
  
    expect(shape.render()).toEqual(`<svg version='1.1' 
    width='300' height='200' 
    xmlns='http://www.w3.org/2000/svg'>
    <circle cx='150' cy='100' r='80' fill='white'/>
    <text x='150' y='120' font-size='60' text-anchor='middle' fill='black'>ZSL</text>
    </svg>`);
  });