/***
 * Class Product
 * @class Product
 * @author Ruth
 * 
 */
class Product {// debe ser en singular por buenas practicas
    /**
     * Class constructor, el contrcutor el una funcion
     * Es una fuincion que se usa cuando se generan lo sobjetos de la clase
     * @constructor
     * 
     * @param {number} id Product id
     * @param {string} name Product name
     * @param {number} value Product Value
     * @param {number} count Product quantity
     * 
     * @example
     * const myProduct
     */
    constructor(id, name, value, picture='assets/img/default-product.jpg'){//se le puede asignar un valor y este lo tomará por defecto aun cuando en el newProduct ni siquiera lo mencionemos. como count=1
        this.id = id; //funcionalidades logicas
        this.name = name;// el ths hace referencia a lo sparametros del objeto cuando lo creemos, o se pueden dar en la clase
        this.value = value;
        this.picture = picture;
    }
    //ejemplo
    /*
    decrement(count = 1){
        this.count-=count
    }
    */

    /*
    static TOTAL = 0;//es un atributo en comun y hace referencia la clase y se aplica a todos lo sobjeto que son del mismo tipo.
    */
}
/*
//Objeto myProdcut de tipo Product
const myProdcut =new Product(1,'larry',10000, 2);

const myProdcut2 =new Product(99,'larry',10000, 2);

myProdcut.TOTAL == myProdcut2.TOTAL//true
myProdcut.TOTAL === myProdcut2.TOTAL//true
console.log(myProdcut.TOTAL)//0
myProdcut2.TOTAL=9 //9
*/


class Cart{
    static add() {}

    static remove(){}
}
