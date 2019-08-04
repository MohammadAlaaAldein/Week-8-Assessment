// Question 1

function Animal(animalName,type){
    this.animalName=animalName;
    this.type=type;

    this.getAnimalName = function(){
        return this.animalName;
    }
 
var newAnimal = new Animal("Lussy","Dog");
}
document.getElementById("q1").innerHTML= newAnimal;   




// Qusetion 2

class shape{
    constructor (height,lenght,area){
        this.height=height;
        this.lenght=lenght;
        this.area=area;

        this.getarea=()=>{
            return area;
        }
    }
}
var newShape = new shape(13,12,265);

document.getElementById("q2").innerHTML=newShape;


// Question 3

class food{
    constructor (array){
        this.array=array;

        this.arrayFilter=()=>{
            for (i=0 ; i<array.lenght; i++){
            if (array[i].lenght<4){
                
            }
            }
        }    
    }
}


["Food","Pasta","Pizza","Eat"]