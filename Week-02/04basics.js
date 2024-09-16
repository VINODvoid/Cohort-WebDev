// Classes 

class Rectangle{
    constructor (height,width)
    {
        this.height = height;
        this.width = width;
    }
    area()
    {
        console.log('Area of given rectangle is: ',this.height*this.width);
    }
    details()
    {
        console.log("The Dimensions of the rectangle is : "+this.height + " height "+this.width+" width.");
        
    }
}

const rec = 
new Rectangle(2,4)
rec.area()
rec.details()