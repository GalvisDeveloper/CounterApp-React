


// import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';


describe('Probando funciones de desestructuración de arrays', () => {

    test('Prueba funcion retornaArreglo', () => {

        const arr = retornaArreglo(); //['ABC', 123]

        expect(arr).toEqual(['ABC', 123]);
    });


});

