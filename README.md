Hacer un servidor con al menos los siguientes endpoints listados a continuación
* '/people' - Regresar un JSON de los 50 personajes (no importando
cuales sean). Este endpoint deberá permitir
tomar un parámetro de la URL llamado 'ordenar' y este deberá funcionar
con los siguientes metodos: 'nombre', 'peso',
'altura', por ejemplo
'/personajes?ordenar=peso' este deberá retornar un JSON de 50
personajes ordenados
de menor a mayor en base a su peso. Generar en angular un listado con
la información anterior
* '/people/:id' - Retornar en un template (de su preferencia) con la
información
obtenida del personaje solicitado utilizando Angular
* '/planets' - Regresar un JSON en la siguiente forma:
{
<Nombre del planeta>: [
<Nombre del personaje 1>,
<Nombre del personaje 2>,
<Nombre del personaje 3>,
]
}
donde el objetivo es agregar a cada planeta los residentes que lo
habitan.
* Hacer llamadas paginadas y limitar la respuesta a 10 elementos. (EN
ANGULAR)

-------------------------------------------------------------------------------

* Para levantar frontend/backend ir a paxzuwars ---> api/client ---> npm start. 
