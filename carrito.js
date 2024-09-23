// Menu
const pizzaBasica = 5;
const pizza2ing = 10;
const pizza3ing = 12;
const refrescoChico = 2;  
const refrescoGrande = 3;
let descuento = 0;

// Carrito - Puedes modificar estos valores para probar diferentes combinaciones
const carrito = {
    pizzaBasica: 2,    // 2 pizzas básicas
    pizza2ing: 0,      // 0 pizzas con 2 ingredientes
    pizza3ing: 1,      // 1 pizza con 3 ingredientes
    refrescoChico: 1,  // 1 refresco chico
    refrescoGrande: 1  // 1 refresco grande
};

// Calcular el subtotal
const Subtotal = (carrito.pizzaBasica * pizzaBasica) + 
                 (carrito.pizza2ing * pizza2ing) + 
                 (carrito.pizza3ing * pizza3ing) + 
                 (carrito.refrescoChico * refrescoChico) + 
                 (carrito.refrescoGrande * refrescoGrande);

// Verificación de promociones
if (carrito.pizza3ing >= 1 && carrito.refrescoGrande >= 1) {
    // 20% de descuento para pizza con 3 ingredientes y refresco grande
    descuento = 0.20;  
} else if (carrito.pizza2ing >= 1 && carrito.refrescoChico >= 1) {
    // 15% de descuento para pizza con 2 ingredientes y refresco chico
    descuento = 0.15;  
} else if (carrito.pizzaBasica >= 1 && carrito.refrescoChico >= 1) {
    // 10% de descuento para pizza básica y refresco chico
    descuento = 0.10;  
}

// Calcular el total con descuento aplicado
const Total = Subtotal - (Subtotal * descuento);

console.log(`Subtotal: $${Subtotal.toFixed(2)}`);
console.log(`Descuento aplicado: ${descuento * 100}%`);
console.log(`Total a pagar: $${Total.toFixed(2)}`);


//print descargar imagenes open {imagen_name}