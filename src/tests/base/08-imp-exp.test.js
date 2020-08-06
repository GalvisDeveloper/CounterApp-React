

// import '@testing-library/jest-dom';
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe('Pruebas de importacion y exportacion', () => {

    test('Funcion de heroe por ID', () => {

        const id = 1;

        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        expect(heroe).toEqual(heroeData);

    });

    test('Funcion de heroe por ID si no existe', () => {

        const id = 15;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);

    });

    test('Funcion de heroe por Owner (Bustos)', () => {

        const owner = 'Bustos';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe).toEqual(heroeData);
        console.log(heroeData);
    });

    test('Funcion de heroe por Owner (Galvis)', () => {

        const owner = 'Galvis';

        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);
        expect(heroe.length).toBe(3);
        console.log(heroeData);
    });

});