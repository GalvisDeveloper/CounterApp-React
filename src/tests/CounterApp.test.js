

// import '@testing-library/jest-dom';
import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe('Probando CounterApp', () => {

    let valor;
    let wrapper = shallow(<CounterApp value={0} />);

    beforeEach(() => {
        valor = 100;
        wrapper = shallow(<CounterApp value={valor} />);
    });

    test('Debe de mostrar <CounterApp /> Correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe de mostrar el valor por defecto de 100 ', () => {

        const valorH2 = wrapper.find('h2').text();
        expect(parseInt(valorH2)).toBe(valor);

    });


    test('Probando handleSubstract ', () => {

        wrapper.find('button').at(2).simulate('click');

        const valorH2 = wrapper.find('h2').text().trim();

        expect(parseInt(valorH2)).toBe(valor - 1);

    });

    test('Probando handleAdd ', () => {

        wrapper.find('button').at(0).simulate('click');

        const valorH2 = wrapper.find('h2').text().trim();

        expect(parseInt(valorH2)).toBe(valor + 1);

    });

    test('Probando handleReset ', () => {

        wrapper.find('button').at(1).simulate('click');

        const valorH2 = wrapper.find('h2').text().trim();

        expect(parseInt(valorH2)).toBe(valor);

    });



});
