
// import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Probando el codigo de template-string', () => {

    test('Verificando el funcionamiento de la funcion getSaludo', () => {
        // const nombre = 'Prueba';

        const saludo = getSaludo();

        expect('Hola Testing').toBe(saludo);
    });

});