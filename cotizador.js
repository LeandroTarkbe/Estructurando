/*----------LOGIN DEL MODAL----------*/
const modal = document.getElementById("loginModal")
const SignIn = document.getElementById("signIn")
let usuario = document.getElementById("user")
let contraseña = document.getElementById("password")
const signUp = document.getElementById("signUp")

let usuarios = [{nombre: "Leandro", contraseña: "1234"}]

window.onload = function() {
    modal.style.display = "block"
}

signUp.addEventListener("click", () => {
    let nuevoUsuario = usuario.value;
    let nuevaContraseña = contraseña.value;
    let usuarioExistente = usuarios.find(usuario => usuario.nombre === nuevoUsuario)

    if(nuevoUsuario.trim() === "" || nuevaContraseña.trim() === ""){
        alert ("Los campos usuario y contraseña no pueden estar vacíos, reintente")
        return
    } if(nuevaContraseña.length < 4){
        alert ("La contraseña debe tener al menos 4 dígitos")
        return
    } if(usuarioExistente){
        alert ("El nombre de usuario ya se encuentra registrado, reintente")
        return
    }

    usuarios.push({nombre: nuevoUsuario, contraseña: nuevaContraseña})
    alert ("Registro Exitoso, ahora puede iniciar sesión")
})

signIn.addEventListener("click", (e) => {
    e.preventDefault()
    let usuarioValue = usuario.value;
    let contraseñaValue = contraseña.value;
    let usuarioExistente = usuarios.find(usuario => usuario.nombre === usuarioValue && usuario.contraseña === contraseñaValue)

    if(usuarioValue.trim() === ""){
        alert ("El campo Usuario no puede estar vacío")
        return
    } if(contraseñaValue.trim() === ""){
        alert ("El campo Contraseña no puede estar vacío")
        return
    } if(contraseñaValue.length < 4){
        alert ("La contraseña no puede tener menos de 4 caracteres")
        return
    } if(usuarioExistente){
        alert ("Bienvenido a Estructurando! Te ayudaremos a cotizar tu proyecto")
        modal.style.display = "none"
        return
    } else {
        alert ("Usuario o contraseña incorrectos, por favor reintente")
    }
})


/*----------INICIO DEL PROGRAMA----------*/
const ubicacion = document.getElementById("ubicacion")
let ladrilloSeleccionado = null
let ubicacioSeleccionada = null

const ubicacionesPosibles = [
    {
        id:1,
        nombre:"Interior-Interior",
        img:"./img/ubicacion.png"
    },
    {
        id:2,
        nombre:"Interior-Exterior",
        img:"./img/ubicacion.png"
    },
    {
        id:3,
        nombre:"Exterior-Exterior",
        img:"./img/ubicacion.png"
    },
]

ubicacionesPosibles.forEach((element) => {
    let div = document.createElement("div")
    div.classList.add("ubicacion")

    div.innerHTML = `
    <img src=${element.img}>
    <h4>${element.nombre}</h4>
    <button>Seleccionar</button>
    `

    div.querySelector("button").addEventListener("click", () => {
        console.log("Ubicación Seleccionada")
        ubicacioSeleccionada = element;
        div.classList.add("selected")
    })

    ubicacion.appendChild(div)
});

const tipologia = document.getElementById("tipologia")

const tiposDeLadrillos = [
    {
        id:1,
        nombre:"Ladrillo Hueco del 8",
        descripcion:"Ladrillo cerámico para muros interiores no portantes",
        dimensiones:"8x18x33",
        img:"./img/ladrilloHuecoDel8.jpg", 
        precio:312,
        rendimiento:15,
    },
    {
        id:2,
        nombre:"Ladrillo Hueco del 12",
        descripcion:"Ladrillo cerámico para muros interiores y exteriores no portantes",
        dimensiones:"12x18x33",
        img:"./img/ladrilloHuecoDel12.png", 
        precio:434,
        rendimiento:16,
    },
    {
        id:3,
        nombre:"Ladrillo Hueco del 18",
        descripcion:"Ladrillo cerámico para muros exteriores no portantes",
        dimensiones:"18x18x33",
        img:"./img/ladrilloHuecoDel18.jpg",
        precio:690,
        rendimiento:16,
    },
    {
        id:4,
        nombre:"Ladrillo Común",
        descripcion:"Ladrillo de arcilla cocida en muros de 30 cm., portante",
        dimensiones:"5x10x25",
        img:"./img/ladrilloComun.jpg",
        precio:222,
        rendimiento:60,
    },
]

tiposDeLadrillos.forEach((element) => {
    let div = document.createElement("div")
    div.classList.add("tipologia")

    div.innerHTML = `
    <img src=${element.img}>
    <h4>${element.nombre}</h4>
    <h5>${element.descripcion}</h5>
    <h5>${element.dimensiones}</h5>
    <button>Seleccionar</button>
    `

    div.querySelector("button").addEventListener("click", () => {
        console.log("Ladrillo Seleccionado")
        ladrilloSeleccionado = element
        div.classList.add("selected")
    })

    tipologia.appendChild(div)    
})

/*----------DESARROLLO DEL CÁLCULO----------*/
let alto = document.getElementById("alto")
let largo = document.getElementById("largo")
let precioCemento = 7206
let precioCal = 3934
let precioArena = 22314
let precioManoDeObra = 5500
let costoLadrillo
let costoAridos
let costoManoDeObra
let costoTotal
let gastosGenerales = document.getElementById("gG")
let beneficio = document.getElementById("benef")
let costoFinanciero = document.getElementById("cF")
let impuestos = document.getElementById("imp")
let totalPorMetro
let totalFinal

let confirmarIngreso = document.getElementById("confirmarIngreso")

confirmarIngreso.addEventListener("click", () => {
    console.log("Botón Confirmar Ingreso presionado")
    let altoValue = parseFloat(alto.value)
    let largoValue = parseFloat(largo.value)
    let gastosGeneralesValue = parseFloat(gastosGenerales.value)
    let beneficioValue = parseFloat(beneficio.value)
    let costoFinancieroValue = parseFloat(costoFinanciero.value)
    let impuestosValue = parseFloat(impuestos.value)

    if (isNaN(altoValue) || isNaN(largoValue) || !ladrilloSeleccionado || !ubicacioSeleccionada) {
        alert("Por favor, complete todos los campos y seleccione un ladrillo")
        return
    }

    const totalSuperficie = altoValue * largoValue

    costear(totalSuperficie)
    presupuestar(totalSuperficie, costoTotal)

    function costear(totalSuperficie){
        if (ladrilloSeleccionado.id === 1){
            costoLadrillo = totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento
            costoAridos = ((totalSuperficie * precioArena * 0.012) + (totalSuperficie * precioCemento * 2.77) + (totalSuperficie * precioCal * 1.11))        
        } else if (ladrilloSeleccionado.id === 2){
            costoLadrillo = totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento
            costoAridos = ((totalSuperficie * precioArena * 0.018) + (totalSuperficie * precioCemento * 4.16) + (totalSuperficie * precioCal * 1.67))
        } else if (ladrilloSeleccionado.id === 3){
            costoLadrillo = totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento
            costoAridos = ((totalSuperficie * precioArena * 0.027) + (totalSuperficie * precioCemento * 6.237) + (totalSuperficie * precioCal * 2.50))
        } else if(ladrilloSeleccionado.id === 4){
            costoLadrillo = totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento
            costoAridos = ((totalSuperficie * precioArena * 0.016) + (totalSuperficie * precioCemento * 3.11) + (totalSuperficie * precioCal * 1.47))
        }
        
            costoManoDeObra = totalSuperficie * precioManoDeObra
            costoTotal = costoLadrillo + costoAridos + costoManoDeObra
        }

        function presupuestar(totalSuperficie, costoTotal){
            totalFinal = costoTotal * (1 + gastosGeneralesValue / 100 + beneficioValue / 100 + costoFinancieroValue / 100 + impuestosValue / 100);
        
            totalPorMetro = totalFinal / totalSuperficie
        
            const resultadoDiv = document.getElementById("resultadoDiv")
            resultadoDiv.innerHTML = `
            <p>Costo Total: $${totalFinal.toFixed(2)}</p>
            <p>Costo por M2: $${totalPorMetro.toFixed(2)}</p>
            `
        }
        

})