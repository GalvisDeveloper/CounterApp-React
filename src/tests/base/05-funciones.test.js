

// import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Probando 05-funciones', () => {

    test('Probando el metodo getUser', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual(userTest);


    });

    test('Probando el metodo getUsuarioActivo ', () => {

        const nombre = 'Cristian';

        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });

    });

});
