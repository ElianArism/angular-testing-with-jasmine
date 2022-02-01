# Angular Testing

## Tiempo

Las pruebas consumen mucho tiempo,

## Que utiliza Angular para el Testing

Angular nativamente utiliza Jasmine, que es un framework que soporta
los tres tipos de pruebas automaticas descritas abajo.

## Pruebas automaticas

Para que sirven?
Para probar el comportamiento distintos paths que un usuario puede tomar
dentro de la aplicacion

Ventajas
Ayuda a encontrar errores
Permite probar codigo escrito por otros devs
Detecta errores antes de que ocurran en produccion
Genera codigo mas limpio, reportes y estadisticas

Desventajas
No garantiza estar libre de bugs
Probar el codigo es un trabajo mas largo que desarrollar la app

Que debo probar?
Se recomienda probar los paths criticos/principales del sistema, para
ahorrar tiempo

Que tipo de pruebas existen?

Unitarias
Toma metodos aislados en un componente de la app y prueba su comportamiento,
sin presencia de recursos externos (llamadas a una API u otro componente/servicio)

Integracion
Toma 2 o mas componentes/elementos y analiza su interaccion

E2E (End to End)
Refiere a tomar un path especifico dentro de la app y testear el comportamiento
de la misma durante todo el recorrido
