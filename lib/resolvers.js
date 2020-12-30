'use strict'

const db = require('./db.js')

function listaVehiculos() {
   for (var i=0; i < db.vehiculos.length; i++) {
      var vehiculo = db.vehiculos[i]

      if (vehiculo.puertas != undefined) {
         console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Puertas: ${vehiculo.puertas} // ` +
         `Precio: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(vehiculo.precio))
         .replace(/\s+/g, '')}`)
      } else {
         console.log(`Marca: ${vehiculo.marca} // Modelo: ${vehiculo.modelo} // Cilindrada: ${vehiculo.cilindrada} // ` +
         `Precio: ${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(vehiculo.precio))
         .replace(/\s+/g, '')}`)
      }
   }
   console.log('=============================')
}

function vehiculoMasCaro() {
   let ordenarDeMayorAMenor = db.vehiculos.sort(function (a,b) { return (b.precio - a.precio) })

   let vehiculoMasCaro = ordenarDeMayorAMenor[0]
   console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`)
}

function vehiculoMasBarato() {
   let ordenarDeMenorAMayor = db.vehiculos.sort(function (a,b) { return (a.precio - b.precio) })

   let vehiculoMasBarato = ordenarDeMenorAMayor[0]
   console.log(`Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`)
}

function vehiculoConLetraYEnElModelo() {
   for (var i=0; i < db.vehiculos.length; i++) {
      var vehiculo = db.vehiculos[i]
      var vehiculoContieneLetraY = vehiculo.modelo.includes('Y')
      
      if (vehiculoContieneLetraY === true) {
         console.log('Vehículo que contiene en el modelo la letra ‘Y’: ' + `${vehiculo.marca} ${vehiculo.modelo} ` + 
         `${(new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"})
         .format(vehiculo.precio))
         .replace(/\s+/g, '')}`)
      }
   }
   console.log('=============================')
}

function vehiculosOrdenadosPorPrecioDeMayorAMenor() {
   let ordenarDeMayorAMenor = db.vehiculos.sort(function (a,b) { return (b.precio - a.precio) })

   console.log('Vehículos ordenados por precio de mayor a menor:')
   
   for (var i=0; i < ordenarDeMayorAMenor.length; i++) {
      var vehiculo = ordenarDeMayorAMenor[i]
      console.log(`${vehiculo.marca} ${vehiculo.modelo}`)
   }
}


module.exports = { 
   listaVehiculos,
   vehiculoMasCaro,
   vehiculoMasBarato,
   vehiculoConLetraYEnElModelo,
   vehiculosOrdenadosPorPrecioDeMayorAMenor
}