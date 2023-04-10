const Square = require('./square.js');

test('properly render svg square', () => {
    const shape = new Square({
        txt: 'ZSL',
        txtColor: 'black',
        shape: 'square',
        shapeColor: 'white'
    });

    expect(shape.render()).toEqual(`<svg version='1.1' 
        width='300' height='200' 
        xmlns='http://www.w3.org/2000/svg'>
        <rect x='10' y='0' width='200' height='200' fill='white'/>
        <text x='110' y='110' font-size='85' text-anchor='middle' fill='black'>ZSL</text>
        </svg>`);
});