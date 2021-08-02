// Entidades

class Pedido {
    constructor(numeroPedido, nombre, apellido, email, tipo, tamano, precio){
        this.numeroPedido = numeroPedido;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipo = tipo;
        this.tamano = tamano;
        this.precio = precio;
    }
}

// Variables

let pedidos = [];
let precio = 0;
let boton1 = document.getElementById("boton1");
let botonEnviar = document.getElementById("botonEnviar");
let tipoIlustracion = document.getElementById("tipoIlustracion");
let tamano1 = document.getElementById("tamano");

// Funciones

function guardarPedido() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let tipo = document.getElementById("tipoIlustracion").value;
    let tamano = document.getElementById("tamano").value;
    
    switch (tipo) {
        case "Artesanal":
            if ((tamano == "A4") || (tamano == "a4")) {
                precio = 6000;
            }
            else {
                alert("Solo viene en tamaño A4 y su precio es 6000");
                tamano = "A4";
                precio = 6000;
            }
            break;
        
        case "Digital":
            if ((tamano == "A4") || (tamano == "a4") || (tamano == "20x30")) {
                precio = 4000;
            }
            else if (tamano == "30x40") {
                precio = 5000;
            }
            else {
                alert("Refresque el navegador y vuelva a ingresar los datos, exactamente como está la información entre paréntesis");
            }
            break;
        
        default:
            alert("Refresque el navegador y vuelva a ingresar los datos, exactamente como está la información entre paréntesis");
    }

    let listaPedidos = JSON.parse(localStorage.getItem("pedidos"));

    if (localStorage.getItem("pedidos") != null) {
        let numeroPedido = listaPedidos.length + 1;
        let pedido = new Pedido(numeroPedido, nombre, apellido, email, tipo, tamano, precio);
        listaPedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(listaPedidos));

    } else {
        localStorage.clear();
        let numeroPedido = 1;
        let pedido = new Pedido(numeroPedido, nombre, apellido, email, tipo, tamano, precio);
        pedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    }
}

function imprimirPedido() {

    let imprimir = JSON.parse(localStorage.getItem("pedidos"));

    if (imprimir != null) {

        imprimir.forEach(elemento => {

            let td = document.createElement("td");
            td.setAttribute("class", "col-2");
            td.textContent = `${elemento.numeroPedido}`;

            let td1 = document.createElement("td");
            td1.setAttribute("class", "col-2");
            td1.textContent = `${elemento.nombre}`;

            let td2 = document.createElement("td");
            td2.setAttribute("class", "col-2");
            td2.textContent = `${elemento.apellido}`;
            
            let td3 = document.createElement("td");
            td3.setAttribute("class", "col-2");
            td3.textContent = `${elemento.email}`;

            let td4 = document.createElement("td");
            td4.setAttribute("class", "col-2");
            td4.textContent = `${elemento.tipo}`;

            let td5 = document.createElement("td");
            td5.setAttribute("class", "col-2");
            td5.textContent = `${elemento.tamano}`;

            let td6 = document.createElement("td");
            td6.setAttribute("class", "col-2");
            td6.textContent = `${elemento.precio}`;

            let tr = document.createElement("tr");
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);

            let impresion = document.getElementById("tabla");
            impresion.appendChild(tr);
        }

    )} else {
        console.log("El Array está vacío");
    }
    refTamano.style.display = "none";
}
  
function desplegarTexto() {

    efecto.style.display = "block";   
    refTipo.style.display = "none";
    refTamano.style.display = "none"; 
    boton1.style.display = "none";
}

function mostrarRefTipo() {
    refTipo.style.display = "block";
}

function ocultarRefTipo() {
    refTipo.style.display = "none";
}

function mostrarRefTamano() {
    refTamano.style.display = "block";
}

function ocultarRefTamano() {
    refTamano.style.display = "none";
}

// Eventos
boton1.addEventListener("click", desplegarTexto);
botonEnviar.addEventListener("click", guardarPedido);

tipoIlustracion.addEventListener("focus", mostrarRefTipo);
tipoIlustracion.addEventListener("blur", ocultarRefTipo);

tamano1.addEventListener("focus", mostrarRefTamano);

imprimirPedido();




