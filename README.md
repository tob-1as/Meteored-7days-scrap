# Meteored-7
  Escrito en JavaScript, Meteored-7 es un scraping de la tabla de 7 días del clima de Meteored.cl. La función retorna un arreglo de 7 objetos, cada uno un día y su respectiva información.
  
## Instalación
  Utiliza NPM para instalar el paquete.
  
  ``` bash
  npm install meteored-7
  ```
  
## Uso
  Como parámetro se require una URL y retorna un arreglo de la información de cada día.
  
  ```javascript
  const meteo = require('meteored-7');

 async main(){
    var res = await meteo.get(<URL STRING>); //Por defecto el clima de Valdivia.
    return res
 }
 
 main(); //Retorna un arreglo de 7 objetos

  ```
## Retorno

La función del ejemplo anterior retorna un arreglo como este:

``` javascript
[
  Dia {
    dia: 'Hoy',
    fecha: '23 Abr',
    minima: '9°',
    maxima: '17°',
    probabilidad: ' 90%',
    nivelDeLluvia: '16 mm'
  },
  Dia {
    dia: 'Mañana',
    fecha: '24 Abr',
    minima: '10°',
    maxima: '17°',
    probabilidad: ' 90%',
    nivelDeLluvia: '16 mm'
  },
  Dia {
    dia: 'Sábado',
    fecha: '25 Abr',
    minima: '12°',
    maxima: '17°',
    probabilidad: ' 90%',
    nivelDeLluvia: '23 mm'
  },
  Dia {
    dia: 'Domingo',
    fecha: '26 Abr',
    minima: '9°',
    maxima: '17°',
    probabilidad: ' 90%',
    nivelDeLluvia: '14 mm'
  },
  Dia {
    dia: 'Lunes',
    fecha: '27 Abr',
    minima: '11°',
    maxima: '16°',
    probabilidad: ' 90%',
    nivelDeLluvia: '10 mm'
  },
  Dia {
    dia: 'Martes',
    fecha: '28 Abr',
    minima: '9°',
    maxima: '16°',
    probabilidad: ' 90%',
  },
  Dia {
    dia: 'Miércoles',
    fecha: '29 Abr',
    minima: '6°',
    maxima: '16°',
    probabilidad: ' 60%',
    nivelDeLluvia: '0.4 mm'
]
```
