
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
    }) .then(response => {
        if (!response.ok) {
            alert("Rellene los campos correctamente");
        }else{
            alert("El producto se ha añadido satisfactoriamente");
        }

    });

}
export function updat(codes) {


    fetch('http://localhost:5000/Change/'+codes.Code2, {
        method: 'PATCH',
        body: JSON.stringify({
            id_producto: codes.Code

        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if(!response.ok)
            {
                alert("El producto ingresado no existe o los datos ingresados son invalidos");

            }else{
                alert("Cambios guardados satisfactoriamente");
            }



        })


}