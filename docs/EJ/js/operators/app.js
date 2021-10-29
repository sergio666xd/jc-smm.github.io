function enviar(){

    const pizza = 15000;
    const bebida = 1000;
    
    let cantpizza = 0;
    let cantbebida = 0;

    cantpizza = document.getElementById('cantpizza').value;
    cantbebida = document.getElementById('cantbebida').value;
    
    let total = 0;
    
    total = (pizza * cantpizza) + (bebida * cantbebida);
    
    console.log('          RESTAURANTE ITALIANO');
    console.log('        ------------------------');
    console.log('Cuenta de cobro');
    console.log('N°  |  Nombre  |  Precio  |  Cantidad');
    console.log(' 1  | Pizza    | $', pizza, ' | ', cantpizza, '');
    console.log(' 2  | Bebida   | $', bebida, '  | ', cantbebida, '');
    console.log('_____________________________________');
    console.log('          Total: $', total);
}