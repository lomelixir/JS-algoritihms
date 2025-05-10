console.log("Hello World main.js");

//APLICACIÓN PARA REGISTRAR BOLETOS.
function Evento(nuevosBoletos) {
    let boletosRegistrados = [...nuevosBoletos];
    console.log(boletosRegistrados);

    this.boletoExistente = function (boleto) {
        let existe = boletosRegistrados.includes(boleto);
        if (!existe) {
            console.log(`Boleto ${boleto} no existe.`);
        } else {
            console.log(`Boleto ${boleto} verificado.`);
        }
    };

    this.boletoRegistrado = function (boleto) {
        let existe = boletosRegistrados.includes(boleto);
        if (!existe) {
        let registrado = boletosRegistrados.pop(boleto);
        console.log(`Boleto ${boleto} registrado.`);
        console.log(boletosRegistrados);
        } else {
            console.log(`Boleto ${boleto} no existe.`)
        }
        
    }
};

const concierto = new Evento([1, 2, 3]);

concierto.boletoExistente(2);
concierto.boletoRegistrado(2);