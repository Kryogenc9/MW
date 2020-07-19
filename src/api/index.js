
export function save(product) {
    fetch('http://localhost:5000/NewProduct', {
        method: 'POST',
        body: JSON.stringify({
            id_producto: product.Code,
            nombre_producto: product.Product,
            precio: product.Price
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    alert("El producto se ha añadido satisfactoriamente");
}