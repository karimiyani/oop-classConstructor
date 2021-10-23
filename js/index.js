class Rectangle {
    // constructor() {
    //     console.log("the rectangle created");
    // }

    // constructor() {
    //     this.x = 30 ;
    //     this.y = 40 ;
    //     this.color = "blue" ;
    // }

    constructor (_x, _y, _color) {
        this.x = _x ;
        this.y = _y ;
        this.color = _color ;
    }
};

const rectangle1 = new Rectangle();
// the rectangle created


const rectangle2 = new Rectangle();
console.log(rectangle2);
// Rectangle {x: 30, y: 40, color: 'blue'}

const rectangle3 = new Rectangle(20, 25, "red");
console.log(rectangle3);
// Rectangle {x: 20, y: 25, color: '_color'}
