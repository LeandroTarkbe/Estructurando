README
ESTRUCTURANDO
Cotizador de Obras de Construccion


Funcionamiento

1. Inicio de Sesión en Modal y Registro
Inicialización: Al cargar la página, se muestra un modal de inicio de sesión si no se detecta un usuario logueado en localStorage.
Registro de Usuario (signUp):
Al hacer clic en el botón "signUp", el sistema verifica que el nombre y la contraseña no estén vacíos y que la contraseña tenga al menos 4 caracteres.
Si el usuario ya existe, se muestra una alerta de error. Si no, se guarda el usuario en localStorage y se cierra el modal.
Inicio de Sesión (signIn):
Al hacer clic en "signIn", se valida el nombre y la contraseña del usuario. Si son correctos, se guarda el estado de "usuario logueado" en localStorage, se cierra el modal y se muestra un mensaje de bienvenida.
Cerrar Sesión: Al hacer clic en el botón "logOut", se elimina el estado de "usuario logueado" de localStorage y se vuelve a mostrar el modal.

2. Selección de Ubicación y Tipología de Ladrillo
Opciones de Ubicación: Se genera una lista de ubicaciones posibles con sus respectivas imágenes. Al hacer clic en una ubicación, se selecciona visualmente y se guarda la elección.
Tipos de Ladrillos: Similar a la ubicación, se muestra una lista de ladrillos con sus datos específicos. Al seleccionar un ladrillo, se resalta visualmente y se guarda la elección en la variable ladrilloSeleccionado.

3. Cargar Precios de Materiales
cargarPrecios(): Función asíncrona que carga los precios de los materiales desde un archivo JSON. Almacena estos datos en la variable precios para calcular posteriormente el costo de construcción.

4. Confirmación del Cálculo de Costos (Botón "Confirmar Ingreso")
Validaciones Previas: Verifica que se haya seleccionado una ubicación y un ladrillo, y que los valores de altura y largo ingresados sean positivos y numéricos.
Variables de Cálculo:
totalSuperficie: Calcula el área (alto * largo) que será usada en los cálculos de costos.
Costos específicos (costoLadrillo, costoAridos, costoManoDeObra): Se calculan según las funciones de costeo de cada elemento.

5. Cálculo de Costos
Función costearTipologia(): Calcula el costo de los ladrillos en función del área total y de los datos del ladrillo seleccionado, sumando costos adicionales de materiales como arena, cemento y cal según el tipo de ladrillo.
Función costearAridos(): Calcula el costo de áridos adicionales en función de la ubicación y de materiales adicionales, como yeso o hidrófugo, dependiendo de la ubicación seleccionada.
Función costearManoDeObra(): Calcula el costo de mano de obra en función del área total de la construcción.

6. Presupuesto Final
Función presupuestar():
Calcula el costo total aplicando factores como gastos generales, beneficio, costo financiero e impuestos al costo base.
Calcula el costo por metro cuadrado y muestra los resultados en un div de resultados (resultadoDiv).
Función guardarOperacion(): Guarda cada operación con sus detalles en localStorage, lo que permite revisar posteriormente el historial de operaciones.

7. Mostrar y Ocultar Operaciones Guardadas
Función mostrarOperaciones(): Recupera y muestra el historial de operaciones almacenadas, o un mensaje si no hay operaciones guardadas.
Botón de Alternar: Permite al usuario mostrar u ocultar las operaciones guardadas.


Flujo General
El flujo de este simulador permite a los usuarios registrarse o iniciar sesión, seleccionar los materiales y ubicación, ingresar los datos de la construcción, y luego calcular y visualizar el presupuesto de la obra, con opciones para guardar y revisar operaciones anteriores. La integración con localStorage facilita el almacenamiento de usuarios y operaciones, haciendo que el sistema sea reutilizable.