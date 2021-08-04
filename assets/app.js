// Entidades

class Pedido {
    constructor(numeroPedido, nombre, apellido, email, tipo, tamano, precio, lugar, fecha){
        this.numeroPedido = numeroPedido;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipo = tipo;
        this.tamano = tamano;
        this.precio = precio;
        this.lugar = lugar;
        this.fecha = fecha;
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
    let lugar = document.getElementById("lugar").value;
    let fecha = document.getElementById("fecha").value;

    let listaPedidos = JSON.parse(localStorage.getItem("pedidos"));

    switch (tipo) {
        case "Artesanal":
            if (tamano === "A4") {
                precio = 6000;
            }
            else {
                alert("La ilustración artesanal sólo viene en tamaño A4, ingresar A4");
                nombre = "Invalido";
                apellido = "Invalido";
                email = "Invalido";
                tipo = "Invalido"
                tamano = "Invalido";
                precio = 0;
                lugar = "Inválido";
                fecha = "Inválido";
            }
            break;
        
        case "Digital":
            if ((tamano === "A4") || (tamano === "20x30")) {
                precio = 4000;
            }
            else {
                precio = 5000;
            }
            break;
        
        default:
            alert("Ingrese de nuevo todos los datos que faltan por favor");
            nombre = "Invalido";
            apellido = "Invalido";
            email = "Invalido";
            tipo = "Invalido"
            tamano = "Invalido";
            precio = 0;
            lugar = "Inválido";
            fecha = "Inválido";
    }

    if (localStorage.getItem("pedidos") != null) {
        let numeroPedido = listaPedidos.length + 1;
        let pedido = new Pedido(numeroPedido, nombre, apellido, email, tipo, tamano, precio, lugar, fecha);
        listaPedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(listaPedidos));

    } else {
        localStorage.clear();
        let numeroPedido = 1;
        let pedido = new Pedido(numeroPedido, nombre, apellido, email, tipo, tamano, precio, lugar, fecha);
        pedidos.push(pedido);
        localStorage.setItem("pedidos", JSON.stringify(pedidos));
    }
}

function imprimirPedido() {

    let imprimir = JSON.parse(localStorage.getItem("pedidos"));

    if (imprimir != null) {

        imprimir.forEach(elemento => {

            let td = document.createElement("td");
            td.setAttribute("class", "col-1");
            td.textContent = `${elemento.numeroPedido}`;

            let td1 = document.createElement("td");
            td1.setAttribute("class", "col-1");
            td1.textContent = `${elemento.nombre}`;

            let td2 = document.createElement("td");
            td2.setAttribute("class", "col-1");
            td2.textContent = `${elemento.apellido}`;
            
            let td3 = document.createElement("td");
            td3.setAttribute("class", "col-1");
            td3.textContent = `${elemento.email}`;

            let td4 = document.createElement("td");
            td4.setAttribute("class", "col-1");
            td4.textContent = `${elemento.tipo}`;

            let td5 = document.createElement("td");
            td5.setAttribute("class", "col-1");
            td5.textContent = `${elemento.tamano}`;

            let td6 = document.createElement("td");
            td6.setAttribute("class", "col-1");
            td6.textContent = `${elemento.precio}`;

            let td7 = document.createElement("td");
            td7.setAttribute("class", "col-1");
            td7.textContent = `${elemento.lugar}`;

            let td8 = document.createElement("td");
            td8.setAttribute("class", "col-1");
            td8.textContent = `${elemento.fecha}`;

            let tr = document.createElement("tr");
            tr.appendChild(td);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);
            tr.appendChild(td8);

            let impresion = document.getElementById("tabla");
            impresion.appendChild(tr);
        }

    )} else {
        console.log("El Array está vacío");
    }
    refTamano.style.display = "none";
}

function desplegarTexto(e) {

    e.preventDefault()

    efecto.style.display = "block";   
    refTamano.style.display = "none"; 
}

function mostrarRefTamano() {
    refTamano.style.display = "block";
}

function ocultarBoton1() {
    boton1.style.display = "none";
}

// Eventos
boton1.addEventListener("click", desplegarTexto);
boton1.addEventListener("mouseup", ocultarBoton1)
botonEnviar.addEventListener("click", guardarPedido);

tamano1.addEventListener("focus", mostrarRefTamano);

imprimirPedido();