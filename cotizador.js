/*----------LOGIN DEL MODAL----------*/
const modal = document.getElementById("loginModal")
const signIn = document.getElementById("signIn")
let usuario = document.getElementById("user")
let contraseña = document.getElementById("password")
const signUp = document.getElementById("signUp")
const logOut = document.getElementById("logOut")

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || []

window.onload = async function() {
    if (!localStorage.getItem("usuarioLogueado")){
    modal.style.display = "block"
    }
}

signUp.addEventListener("click", () => {
    let nuevoUsuario = usuario.value.trim();
    let nuevaContraseña = contraseña.value.trim();
    let usuarioExistente = usuarios.find(usuario => usuario.nombre === nuevoUsuario)

    if(nuevoUsuario.trim() === "" || nuevaContraseña.trim() === ""){
        Swal.fire({
            icon: "error",
            text: "Los campos usuario y contraseña no pueden estar vacíos, reintente",
          });
        return
    } if(nuevaContraseña.length < 4){
        Swal.fire({
            icon: "error",
            text: "La contraseña debe tener al menos 4 dígitos",
          });
        return
    } if(usuarioExistente){
        Swal.fire({
            icon: "error",
            text: "El nombre de usuario ya se encuentra registrado, reintente",
          });
        return
    }

    usuarios.push({nombre: nuevoUsuario, contraseña: nuevaContraseña})
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    Swal.fire("Registro Exitoso, ahora puede iniciar sesión");
    modal.style.display = "none"
})

signIn.addEventListener("click", (e) => {
    e.preventDefault()
    let usuarioValue = usuario.value.trim();
    let contraseñaValue = contraseña.value.trim();
    let usuarioExistente = usuarios.find(usuario => usuario.nombre === usuarioValue && usuario.contraseña === contraseñaValue)

    if(usuarioValue.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Atención",
            text: "El campo Usuario no puede estar vacío",
          });
        return
    } if(contraseñaValue.trim() === ""){
        Swal.fire({
            icon: "error",
            title: "Atención",
            text: "El campo Contraseña no puede estar vacío",
          });
        return
    } if(contraseñaValue.length < 4){
        Swal.fire({
            icon: "error",
            title: "Atención",
            text: "La contraseña no puede tener menos de 4 caracteres",
          });
        return
    } if(usuarioExistente){
        Swal.fire("Bienvenido a Estructurando! Te ayudaremos a cotizar tu proyecto")
        localStorage.setItem("usuarioLogueado", true)
        modal.style.display = "none"
    } else {
        Swal.fire({
            icon: "error",
            title: "Atención",
            text: "Usuario o contraseña incorrectos, por favor reintente",
          });
    }
})

logOut.addEventListener("click", () => {
    localStorage.removeItem("usuarioLogueado")
    modal.style.display = "block"
    Swal.fire("Gracias por utilizar Estructurando")
})


/*----------INICIO DEL PROGRAMA----------*/
const ubicacion = document.getElementById("ubicacion")
let ladrilloSeleccionado = null
let ubicacionSeleccionada = null

const ubicacionesPosibles = [
    {
        id:1,
        nombre:"Interior-Interior",
        img:"./img/intInt.png"
    },
    {
        id:2,
        nombre:"Interior-Exterior",
        img:"./img/intExt.png"
    },
    {
        id:3,
        nombre:"Exterior-Exterior",
        img:"./img/extExt.png"
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
        const previamenteSeleccionada = document.querySelector(".ubicacion.selected")
        if (previamenteSeleccionada) {
            previamenteSeleccionada.classList.remove("selected")
        }
        ubicacionSeleccionada = element;
        div.classList.add("selected")
    })

    ubicacion.appendChild(div)
})

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
        console.log("Element: ", element)

        const previamenteSeleccionada = document.querySelector(".tipologia.selected")
        if (previamenteSeleccionada) {
            previamenteSeleccionada.classList.remove("selected")
        }
        ladrilloSeleccionado = element
        console.log("Valor ladrilloSeleccionado: ", ladrilloSeleccionado)

        div.classList.add("selected")
    })

    tipologia.appendChild(div)    
})


/*----------DESARROLLO DEL CÁLCULO----------*/
let alto = document.getElementById("alto")
let largo = document.getElementById("largo")
let gastosGenerales = document.getElementById("gG").value = 15
let beneficio = document.getElementById("benef").value = 25
let costoFinanciero = document.getElementById("cF").value = 5
let impuestos = document.getElementById("imp").value = 21

const confirmarIngreso = document.getElementById("confirmarIngreso")


let precios = {}
async function cargarPrecios() {
    try{
        const response = await fetch('precios.json')
        if (!response.ok){
            throw new Error('Error en la carga de precios')
        }
        const data = await response.json()
        data.insumos.forEach(material => {
            precios[material.nombre] = material.precio
        })
        console.log(precios)
    } catch (error){
        console.error("Error al cargar los precios: ", error)
        Swal.fire("Ocurrió un error con la carga de precios, reintente")
    }    
}

cargarPrecios().then(() => {
})  

/*----------Individualizo la confirmación del ingreso----------*/
confirmarIngreso.addEventListener("click", async() => {
    await cargarPrecios()
    console.log("Botón Confirmar Ingreso presionado")
    
    if (!ladrilloSeleccionado) {
        Swal.fire("Por favor, seleccione un ladrillo")
        return
    }
    if (!ubicacionSeleccionada) {
        Swal.fire("Por favor, seleccione una ubicación")
        return
    }

    /*----------Declaro las Variables de cálculo de los precios finales----------*/
    altoValue = parseFloat(alto.value) || 0;
    largoValue = parseFloat(largo.value) || 0;
    
    console.log("Alto: ", altoValue);
    console.log("Largo: ", largoValue)
 
    if (isNaN(altoValue) || isNaN(largoValue)){
    Swal.fire("Asegurese de que todos los valores sean numéricos")
    return    
    } else if (altoValue <= 0 || largoValue <= 0){
    Swal.fire("Asegurese de que todos los valores sean numéricos y positivos")
    return   
    }

    /*----------Declaro las variables para el cálculo de los valores de superficie y costo----------*/

    const totalSuperficie = altoValue * largoValue


    try{
    const costoLadrillo = costearTipologia(totalSuperficie)
    const costoAridos = costearAridos(totalSuperficie)
    const costoManoDeObra = costearManoDeObra(totalSuperficie)
    const costoTotal = costoLadrillo + costoAridos + costoManoDeObra

    console.log("Costo Ladrillo:", costoLadrillo);
    console.log("Costo Áridos:", costoAridos);
    console.log("Costo Mano de Obra:", costoManoDeObra);
    console.log("Costo Total:", costoTotal);

    presupuestar(totalSuperficie, costoTotal)
    } catch (error){
        Swal.fire("Error en el cálculo de costos")
        console.error(error)
    }

    alto.value = ""
    largo.value = ""

})

let gastosGeneralesValue = 0
let beneficioValue = 0 
let costoFinancieroValue = 0
let impuestosValue = 0

function costearTipologia(totalSuperficie){
    if (!ladrilloSeleccionado) {
        throw new Error("No se ha seleccionado Ladrillo")
    }
    let costoLadrillo = 0
    if (ladrilloSeleccionado.id === 1){
        costoLadrillo = ((totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento) + (totalSuperficie * precios.arena * 0.012) + (totalSuperficie * precios.cemento * 0.06) + (totalSuperficie * precios.cal * 0.05))
        } else if (ladrilloSeleccionado.id === 2){
        costoLadrillo = ((totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento) + (totalSuperficie * precios.arena * 0.018) + (totalSuperficie * precios.cemento * 0.08) + (totalSuperficie * precios.cal * 0.07))
        } else if (ladrilloSeleccionado.id === 3){
        costoLadrillo = ((totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento) + (totalSuperficie * precios.arena * 0.027) + (totalSuperficie * precios.cemento * 0.1245) + (totalSuperficie * precios.cal * 0.10))
        } else if(ladrilloSeleccionado.id === 4){
        costoLadrillo = ((totalSuperficie * ladrilloSeleccionado.precio * ladrilloSeleccionado.rendimiento) + (totalSuperficie * precios.arena * 0.030) + (totalSuperficie * precios.cemento * 0.15) + (totalSuperficie * precios.cal * 0.14))
        }
    return costoLadrillo
    }

    function costearAridos(totalSuperficie){
        let costoAridos = 0

        if (isNaN(totalSuperficie) || totalSuperficie <= 0){
            console.error("La superficie total no es válida: ", totalSuperficie)
            return NaN
        }

        if(!precios.arena || !precios.cemento || !precios.cal || !precios.hidrofugo || precios.yesoProyectable)
        if (ubicacionSeleccionada.id === 1){
                costoAridos = (((totalSuperficie * precios.yesoProyectable * 0.14)) * 2)        
        } else if (ubicacionSeleccionada.id === 2){
                costoAridos = ((totalSuperficie * precios.arena * 0.023) + (totalSuperficie * precios.cemento * 0.05) + (totalSuperficie * precios.cal * 0.14) + (totalSuperficie * precios.hidrofugo * 0.11)) + (totalSuperficie * precios.yesoProyectable * 0.14) + (totalSuperficie * precios.manoDeObraTerminacionInterior) + (totalSuperficie * precios.manoDeObraTerminacionExterior)
        } else if (ubicacionSeleccionada.id === 3){
                costoAridos = ((totalSuperficie * precios.arena * 0.023) + (totalSuperficie * precios.cemento * 0.05) + (totalSuperficie * precios.cal * 0.14) + (totalSuperficie * precios.hidrofugo * 0.11) + (totalSuperficie * precios.manoDeObraTerminacionExterior)) * 2
        }
        return costoAridos
    }

    function costearManoDeObra(totalSuperficie){
         const costoManoDeObra = totalSuperficie * precios.manoDeObraMuro
    return costoManoDeObra
    }
        
    function calcularCostoTotal(costearTipologia, costearAridos, costearManoDeObra){
    return costearTipologia + costearAridos + costearManoDeObra
    }

    function presupuestar(totalSuperficie, costoTotal){
        totalFinal = costoTotal * (1 + gastosGeneralesValue / 100 + beneficioValue / 100 + costoFinancieroValue / 100 + impuestosValue / 100)
      
        totalPorMetro = totalFinal / totalSuperficie
        
        const resultadoDiv = document.getElementById("resultadoDiv")
        if(!resultadoDiv) {
            console.error("El elemento resultadoDiv no se encuentra en el DOM")
            return
        }

        resultadoDiv.innerHTML = `
        <p>Superficie: ${totalSuperficie.toFixed(2)} m2</p>
        <p>Costo Total: $${totalFinal.toFixed(2)}</p>
        <p>Costo por M2: $${totalPorMetro.toFixed(2)}</p>
        `

        guardarOperacion(resultadoDiv.innerHTML, totalSuperficie, totalFinal)
    }

/*----------Verificación de Llegada de Datos----------*/
console.log(precios)
console.log(ladrilloSeleccionado)
console.log(precios.arena, precios.cemento, precios.cal)

function guardarOperacion(resultado, totalSuperficie, costoTotal){
    const fechaHora = new Date().toLocaleString()

    const operacion = {
        fechaHora: fechaHora,
        resultado: resultado,
        superficie: totalSuperficie,
        costo: costoTotal
    }

    let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones")) || []

    operacionesGuardadas.push(operacion)

    localStorage.setItem("operaciones", JSON.stringify(operacionesGuardadas))
}

const toggleOperacionesBtn = document.getElementById("toggleOperaciones")
const operacionesDiv = document.getElementById("operacionesDiv")

function mostrarOperaciones() {
    const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones")) || []

    operacionesDiv.innerHTML = ""

    if (operacionesGuardadas.length === 0) {
        operacionesDiv.innerHTML = "<p>No hay operaciones guardadas</p>"
        return
    }

    operacionesGuardadas.forEach((operacion, index) => {
        const operacionElement = document.createElement
    ("div")
        operacionElement.innerHTML = `
        <p>Operación ${index + 1}</p>
        <p>Fecha y Hora: ${operacion.fechaHora}</p>
        <p>Superficie: ${operacion.superficie.toFixed(2)} m2</p>
        <p>Costo Total: $${operacion.costo.toFixed(2)}</p>
        <hr>`

        operacionesDiv.appendChild(operacionElement)
})

}

toggleOperacionesBtn.addEventListener("click", () => {
    if (operacionesDiv.style.display === "none") {
        operacionesDiv.style.display = "block"
        mostrarOperaciones()
        toggleOperacionesBtn.textContent = "Ocultar Operaciones"
    } else {
        operacionesDiv.style.display = "none"
        toggleOperacionesBtn.textContent = "Mostrar Operaciones"
    }
});

mostrarOperaciones()