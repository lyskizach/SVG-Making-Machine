class Triangle {
    constructor(data) {
        this.txt = data.txt;
        this.txtColor = data.txtColor;
        this.shapeColor = data.shapeColor;
    };

    render() {
        return `<svg version='1.1' 
        width='300' height='200' 
        xmlns="http://www.w3.org/2000/svg">
        <polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}'/>
        <text x="150" y="155" font-size="55" text-anchor="middle" fill="${this.txtColor}">${this.txt}</text>
        </svg>`
    };
};

module.exports = Triangle;