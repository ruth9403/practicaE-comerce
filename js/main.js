let products;
function setAddCartListener(button){//
    button.addEventListener('click', function(){
        const product = products[button.getAttribute('data-product')]
        alert(`${product.name} añadido al carrito`);
    });
};
//window.addEventListener('event_name', callback) el callback es una funcion que captura un evento, ede definir como una funcion anonima como function, o sino con un nombre y armarla apartesito  (declarada).
window.addEventListener('load', function(){
    products = [
        new Product(0,'labial mate rojo', 25000),
        new Product(1,'base luminosa beige', 50000),
        new Product(2,'pestañina cafe a prueba de agua', 25000),
        new Product(3,'primer siliconado', 150000),
        new Product(4,'paleta de rubores mate', 80000),
        new Product(5,'pestañas Odashi-divo', 25000),
        new Product(6,'iluminador champaña', 50000),
        new Product(7,'Corrector cobertura alta', 45000),
        new Product(8,'Pomada de cejas Anastasia', 95000),
        new Product(9,'delineador negro de katbondi', 95000),
        new Product(10,'Paleta de sombras Mercury Retrograde', 300000),
        new Product(11,'Set de 24 brochas marca Atenea', 189000),
        new Product(12,'Glosses', 20000),
        new Product(13,'Fijador Brillitos MAC', 110000),
        new Product(14,'Beauty Blender', 10000),
        new Product(15,'N.Y.M.P.H. Not. Your. Mama Luna', 220000),
        new Product(16,'Contorno en crema', 30000),
        new Product(17,'Crema contorno de ojos', 40000),
        new Product(18,'Crema hidratante super hidratante', 60000),
        new Product(19,'polvo translúcido color banana', 60000),
    ];

    //se puede con products.forEach(function (product))-- ojo recorre desde la pos 0 hasta el ultimo, no sirve solo para recorrer un pedazo.
    /*
    
    
    */ 

    let html = '';
    for(let i=0; i < products.length; i++){
        const product = products[i];
        html += `<div class="card">
                    <img src="${product.picture}" alt="${product.name}">
                    <h2>#${product.id + 1} - ${product.name} </h2>
                    <h3>${product.value}</h3>
                    <button class="btn cart-add" data-product="${product.id}"> Añadir al carrito</button>
                </div>`;// Vamos a crear los productos que tenmos al html
    }

    document.getElementById('products').innerHTML = html; //saco el main y hago sus hijos
    document.querySelectorAll('.cart-add').forEach(setAddCartListener);
});


