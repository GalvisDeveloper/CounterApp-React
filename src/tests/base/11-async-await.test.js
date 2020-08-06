

// import '@testing-library/jest-dom';
import { getImagen } from '../../base/11-async-await';


describe('Probando 11-async-await', () => {

    test('Prueba de metodo getImagen() ', async () => {

        const url = await getImagen();
        console.log(url);

        expect(url.includes('https://')).toBe(true);

    })

});