

// import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';


describe('Pruebas a promesas', () => {

    test('Prueba a la funcion GetById Async ', (done) => {

        const id = 1;

        getHeroeByIdAsync(id)
            .then(heroe => {

                expect(heroe).toBe(heroes[0]);
                done();

            });
    });
    
    test('Prueba a la funcion GetById Async NO EXISTE', (done) => {

        const id = 7;

        getHeroeByIdAsync(id)
            // .then(heroe => {

            //     expect(heroe).toBe(heroes[25]);
            //     done();

            // })
            .catch(error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            });
    });

})
