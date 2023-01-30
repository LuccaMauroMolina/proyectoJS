let LMM = alert("Hola que tal, que se les ofrece, tenemos toda ropa deportiva de zapatillas, pantalon y remeras");

let remeras = "nike, adidas, puma";
let pantalon = "reebok, adidas, underground";
let zapatillas = "running, topper, nike";

let catalogo = prompt("elegir los catalogos en remeras, pantalon y zapatillas");


if(catalogo == "remeras"){
    catalogos()
}else if(catalogo == "pantalon"){
     catalogos()
}else if(catalogo == "zapatillas"){
      catalogo()
}else{
    alert("vuelva a ingresar");
}



function catalogos(remeras,pantalon,zapatillas){
    remeras = prompt("marcas que tenemos son nike, adidas y puma, selecciona alguna de esas");

    switch (remeras) {
        case "nike":
            alert("de nike tenemos del talle S al L");
        break;
        case "adidas":
               alert("de adidas tenemos del talle M al XL");
        break;
        case "puma":
             alert("tenemos todos los talles");
        break;
        default:
             alert("no esta disponible");  
        break;
    } remeras = (catalogos);

    pantalon = prompt("marcas tenemos underground, adidas y reebok");
        switch (pantalon){
            case "adidas":
                 alert("tenemos del talle S al L");
            break;   
            case "reebok":
                alert("tenemos del M al XXL");
            break;
            case "underground":
                alert("todo disponible de underground");
            break;
            default:
             alert("no esta disponible");  
            break;  
       }

       zapatillas = prompt("nos quedan de running, topper y nike, seleccione una");

       switch (zapatillas){
        case "running":
             alert("tenemos del calzado 35 al 40");
        break;   
        case "nike":
            alert("del calzado 38 al 44");
        break;
        case "topper":
            alert("del calzado 35 al 42");
        break;  
   }
   while( catalogo != "ESC"){
        prompt("si quiere volver a seleccionar pulse si o no")
   }
   switch (catalogo){
        case "si":
            catalogo();
        break;
        case "no":
             alert("muchas gracias");
        break;
        default:
             alert("no esta disponible");  
        break;
   
   }
    }

