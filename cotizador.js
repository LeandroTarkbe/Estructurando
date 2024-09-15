/*COMO PRIMER PASO DEL PROYECTO ME GUSTARÍA DESARROLLAR UN LOGIN*/
function iniciar(){
    let usuario = prompt ("Ingrese Usuario") 
    let contraseña = prompt ("Ingrese Contraseña")

    if((usuario === "Leandro") && (contraseña === "1234")){
        alert ("Bienvenido a Estructurando! Te ayudaremos a cotizar tu proyecto")
    } else if ((usuario === "salir") || (contraseña === "salir")){
        alert ("Gracias por utilizar Estructurando, vuelva pronto")
        return
    } else {
        alert ("Usuario o contraseña incorrectos, por favor reintente")
        iniciar()
    }
}

iniciar ()


/*A PARTIR DE ESTA LÍNEA SE SOLICITARÁN LAS PRECISIONES RESPECTO DE LO QUE SE PRETENDE CALCULAR, AL MOMENTO, LO ARMARÉ COMO UNA CADENA DE IF*/
/*EN UNA SEGUNDA INSTANCIA, ME GUSTARIA QUE SE PUDIERAN DEFINIR PARÁMETROS COMO UBICACION DEL MURO (INT-INT / INT-EXT / EXT-EXT) PARA QUE EL PROGRAMA ORIENTE LAS PROPORCIONES DE LA MEZCLA A PARTIR DE ESE DATO*/

let respuesta
let tipologia
let alto
let largo

const superficie = (alto, largo) => {
    return alto * largo
}

function definirTipologia(){
    respuesta = prompt ("Este contenido se encuentra en desarrollo, podemos ayudarlo con la cotización de muros de ladrillo, ¿Desea continuar?")
    if (respuesta.toLowerCase() !== "si"){
        alert ("Gracias por utilizar Estructurando")
        return
    }
    
    tipologia = prompt("¿Que tipo de muro desea calcular? Las opciones disponibles son:\n"+
            "1) Ladrillo del 8\n"+
            "2) Ladrillo del 12\n"+
            "3) Ladrillo del 18\n"+
            "4) Ladrillo Común de 0.30\n"+
            "Ingrese el número de la opción deseada")

        } if (tipologia === "1"){
            alert ("Usted ha seleccionado Ladrillo del 8")
        } else if (tipologia === "2") {
            alert ("Usted ha seleccionado Ladrillo del 12")            
        } else if (tipologia === "3"){
            alert ("Usted ha seleccionado Ladrillo del 18")
        } else if (tipologia === "4"){
            alert ("Usted ha seleccionado Ladrillo Común en Muro de 0.30")
        } 
    
definirTipologia()


function computar(){
    if (tipologia === "1"){
        alto = parseFloat(prompt("Ingrese el alto del muro"))
        largo = parseFloat(prompt("Ingrese la longitud del muro"))
        return superficie(alto, largo)
    } else if (tipologia === "2"){
        alto = parseFloat(prompt("Ingrese el alto del muro"))
        largo = parseFloat(prompt("Ingrese la longitud del muro"))
        return superficie(alto, largo)
    } else if (tipologia === "3"){
        alto = parseFloat(prompt("Ingrese el alto del muro"))
        largo = parseFloat(prompt("Ingrese la longitud del muro"))
        return superficie(alto, largo)
    } else if (tipologia === "4"){
        alto = parseFloat(prompt("Ingrese el alto del muro"))
        largo = parseFloat(prompt("Ingrese la longitud del muro"))
        return superficie(alto, largo)
    }
}

/*EN UNA SEGUNDA INSTANCIA ME GUSTARÍA QUE EL USUARIO PUEDA DEFINIR OTROS PARÁMETROS COMO EL PRECIO*/

let totalSuperficie = computar()

let precioLadrilloDel8 = 312
let precioLadrilloDel12 = 434
let precioLadrilloDel18 = 690
let precioLadrilloComun = 222
let precioCemento = 7206
let precioCal = 3934
let precioArena = 22314
let precioManoDeObra = 5500
let costoLadrillo
let costoAridos
let costoManoDeObra
let costoTotal

function costear(){
    if (tipologia === "1"){
        costoLadrillo = totalSuperficie * precioLadrilloDel8 * 15
        costoAridos = ((totalSuperficie * precioArena * 0.012) + (totalSuperficie * precioCemento * 2.77) + (totalSuperficie * precioCal * 1.11))
        costoManoDeObra = totalSuperficie * precioManoDeObra
        costoTotal = costoLadrillo + costoAridos + costoManoDeObra
    } else if (tipologia === "2"){
        costoLadrillo = totalSuperficie * precioLadrilloDel12 * 16
        costoAridos = ((totalSuperficie * precioArena * 0.018) + (totalSuperficie * precioCemento * 4.16) + (totalSuperficie * precioCal * 1.67))
        costoManoDeObra = totalSuperficie * precioManoDeObra
        costoTotal = costoLadrillo + costoAridos + costoManoDeObra
    } else if (tipologia === "3"){
        costoLadrillo = totalSuperficie * precioLadrilloDel18 * 16
        costoAridos = ((totalSuperficie * precioArena * 0.027) + (totalSuperficie * precioCemento * 6.237) + (totalSuperficie * precioCal * 2.50))
        costoManoDeObra = totalSuperficie * precioManoDeObra
        costoTotal = costoLadrillo + costoAridos + costoManoDeObra
    } else if(tipologia === "4"){
        costoLadrillo = totalSuperficie * precioLadrilloDel18 * 60
        costoAridos = ((totalSuperficie * precioArena * 0.016) + (totalSuperficie * precioCemento * 3.11) + (totalSuperficie * precioCal * 1.47))
        costoManoDeObra = totalSuperficie * precioManoDeObra
        costoTotal = costoLadrillo + costoAridos + costoManoDeObra
    }
}

costear()


let gastosGenerales
let beneficio
let costoFinanciero
let impuestos
let totalPorMetro
let totalFinal

function presupuestar(){
    gastosGenerales = parseFloat(prompt("Ingrese % de Gastos Generales"))
    beneficio = parseFloat(prompt("Ingrese % de Beneficio"))
    costoFinanciero = parseFloat(prompt("Ingrese % de Costo Financiero"))
    impuestos = parseFloat(prompt("Ingrese % de Impuestos"))

    totalFinal = costoTotal * (1 + gastosGenerales / 100 + beneficio / 100 + costoFinanciero / 100 + impuestos / 100);

    totalPorMetro = totalFinal / totalSuperficie

    alert("El costo total es $ " + totalFinal + "y el costo por m2 es de $ " + totalPorMetro)

}

presupuestar()
