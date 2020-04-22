const cheerio = require('cheerio');
const request = require('request');
const url = 'https://www.meteored.cl/tiempo-en_Valdivia-America+Sur-Chile-Los+Lagos--1-18266.html';


function clima(url = url) {

    return new Promise( (resolve, reject)=>{
        request( url , (err, res, body)=>{
            if(!err && res.statusCode == 200){
                class Dia {
                    constructor(dia, fecha, minima, maxima, probabilidad, nivelDeLluvia){
                        this.dia = dia;
                        this.fecha = fecha;
                        this.minima = minima;
                        this.maxima = maxima;
                        this.probabilidad = probabilidad;
                        this.nivelDeLluvia = nivelDeLluvia;
                    }
                }
                var semana = [];
                let $ = cheerio.load(body);
                $('li.dia', '.datos-dos-semanas').each((index, el)=>{
        
                    let cuando = el.children[1];
                    let dia = cuando.firstChild.data;
                    let fecha = cuando.children[2].firstChild.data;
                    let probabilidad = '-';
                    let nivelDeLluvia = '-';
        
                    if(el.children[3].children[3] != undefined){
                        probabilidad = el.children[3].children[3].firstChild.data;
                        nivelDeLluvia = el.children[3].children[3].children[3].firstChild.data;
                    }
        
                    let temperatura = el.children[5];
                    let maxima = temperatura.children[1].firstChild.data;
                    let minima = temperatura.children[5].firstChild.data;
        
                    semana.push( new Dia(dia, fecha, minima, maxima, probabilidad, nivelDeLluvia) );
                });
                resolve(semana);
            }else{
                reject(err);
            }
        })
    });
}

exports = clima