
describe('Probando cadenas de texto', () => {

    test('prueba1 ', () => {
        const msg1 = 'Hello';

        const msg2 = "Hello";

        expect(msg2).toBe(msg1);
    });


    // test('prueba2 ', () => {
    //     const msg1 = 'Matate';

    //     const msg2 = "Matata";

    //     expect(msg2).toEquals(msg1);
    // });


    // RECOMENDACION = EJECUTAR LAS PRUEBAS 2 VECES PARA CONFIRMAR
    // POSIBLES ERRORES A LA PRIMERA VEZ QUE SE REALIZA EL TESTEO
});

