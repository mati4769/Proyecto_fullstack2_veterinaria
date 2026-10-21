# Plan de Pruebas Unitarias

**Proyecto:** Veterinaria San Marcos
<br />

**Integrantes:** Matías Acevedo y Alexander Mejias
<br />

**Componentes / Módulos principales:** TarjetaProducto, FormularioRegistro, FormularioLogin, RutaPrivada, Productos, FormularioCita, FormularioProducto, Carrito.
<br />

**Herramientas:** Vitest + React Testing Library (jsdom)
<br />

**Comando para ejecutar:** `npx vitest`
<br />

**Fecha:** 20-10-2026

## Funcionalidades críticas a evaluar

| Funcionalidad | Componente | Por qué es crítica |
| :--- | :--- | :--- |
| Favoritos (useState) | TarjetaProducto, Productos | Funcionalidad interactiva con estado |
| Validaciones y campos de contexto | FormularioRegistro | Validaciones de la primera entrega y campos de la mascota |
| Inicio de sesión con credenciales estáticas | FormularioLogin | Autenticación y guardado de sesión en localStorage |
| Protección de rutas | RutaPrivada | Restringe el Panel de Control a usuarios autenticados |
| Filtrado dinámico (useState) | Productos | Funcionalidad interactiva con estado |
| Solicitud de citas | FormularioCita | Validación de los datos de la cita |
| CRUD en memoria | FormularioProducto | Validación de los productos nuevos del Panel de Control |
| Total del carrito | Carrito | Resumen de pago del carrito de compras |

## Casos de prueba

| ID | Componente<br>*(describe)* | Caso de Prueba<br>*(it / test)* | Preparación<br>*(Arrange: props, mocks)* | Acción<br>*(Act: fireEvent, render)* | Resultado Esperado<br>*(Assert: expect)* | Estado<br>*(Pasa / Falla)* |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| PU-001 | TarjetaProducto | Debe cambiar el botón a "★ Favorito" al hacer clic | Objeto mock con datos de un producto, renderizado dentro de BrowserRouter | Buscar el botón "☆ Agregar a favoritos" y hacer clic | El botón muestra "★ Favorito" | ✅ PASS |
| PU-002 | FormularioRegistro | Debe mostrar error si el nombre de la mascota tiene números ("Toby1") | Mock de `window.alert`, llenar nombre, apellido, correo, teléfono y fecha válidos | Ingresar "Toby1" y hacer clic en REGISTRARSE | Se muestra "El nombre de la mascota debe contener solo letras" | ✅ PASS |
| PU-003 | FormularioRegistro | Debe mostrar error si el nombre tiene solo espacios | Mock de `window.alert` | Ingresar "   " en Nombre y hacer clic en REGISTRARSE | Se muestra "El nombre debe contener solo letras" | ❌ FAIL |
| PU-004 | FormularioLogin | Debe guardar la sesión en localStorage con credenciales correctas | Limpiar localStorage y mock de `window.alert` | Ingresar admin@duocuc.cl / Admin1234 y hacer clic en ENVIAR | localStorage "sesion" es "admin@duocuc.cl" | ✅ PASS |
| PU-005 | FormularioLogin | No debe guardar la sesión si la contraseña es incorrecta | Limpiar localStorage y mock de `window.alert` | Ingresar admin@duocuc.cl / Clave9999 y hacer clic en ENVIAR | Se muestra "Correo o contraseña incorrectos" y "sesion" es null | ✅ PASS |
| PU-006 | RutaPrivada | Debe mandar al login si no hay sesión | Limpiar localStorage | Renderizar RutaPrivada con el texto "Panel admin" adentro | No se muestra "Panel admin" y la ruta cambia a /login | ✅ PASS |
| PU-007 | Productos | Debe mantener el favorito después de filtrar y volver a Todas | Renderizar Productos con productosIniciales y marcar el primer producto como favorito | Filtrar por "Prevención" y volver a "Todas" | Se sigue mostrando 1 "★ Favorito" | ❌ FAIL |
| PU-008 | FormularioCita | No debe registrar una cita con una fecha que ya pasó | Mock de `window.alert` y de `onAgregar`, llenar todos los campos con fecha 2020-01-01 | Hacer clic en "Solicitar cita" | `onAgregar` no se llama | ❌ FAIL |
| PU-009 | FormularioProducto | Debe mostrar error si la descripción tiene solo espacios | Mock de `window.alert`, llenar nombre, precio y categoría válidos | Ingresar "   " en Descripción y hacer clic en "Agregar producto" | Se muestra "Debe ingresar una descripción" | ❌ FAIL |
| PU-010 | Carrito | Debe sumar el total de los productos del carrito | Carrito mock con 2 productos ($15000 y $12000) | Renderizar Carrito | Se muestra "Total a pagar: $27000 CLP" | ✅ PASS |

## Resultado

6 pruebas pasan y 4 fallan (`npx vitest`).

## Defectos encontrados

| ID | Defecto | Causa |
| :--- | :--- | :--- |
| PU-003 | El registro acepta un nombre con solo espacios | `regexSoloLetras` permite espacios (`\s`), así que "   " se considera válido |
| PU-007 | El favorito se pierde al filtrar | El estado `favorito` está dentro de cada TarjetaProducto; al filtrar, la tarjeta se quita de la pantalla y su estado se reinicia |
| PU-008 | Se pueden pedir citas en fechas pasadas | FormularioCita solo revisa que los campos no estén vacíos, no compara la fecha con hoy |
| PU-009 | El Panel de Control acepta una descripción con solo espacios | FormularioProducto compara con `""` y no considera los espacios en blanco |
