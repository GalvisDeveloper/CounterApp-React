

import React from 'react';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

// import { render } from '@testing-library/react';
// import '@testing-library/jest-dom';

describe('Probando primeraApp', () => {

    // test('Debe mostrarse el saludo ', () => {

    //     const saludo = 'CounterApp';

    //     const { getByText } = render(<PrimeraApp saludo={saludo} />);

    //     expect(getByText(saludo)).toBeInTheDocument();

    // })

    test('Debe mostrar <PrimeraApp /> Correctamente ', () => {

        const saludo = 'CounterApp';

        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();

    });


    test('Debe mostrar el subtitulo en <PrimeraApp /> Correctamente ', () => {

        const saludo = 'CounterApp';
        const subtitulo = 'Mi primera App';

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const saludoH1 = wrapper.find('h1').text();
        // const textoP = wrapper.find('p').text();
        // console.log(saludoH1);
        // console.log(textoP);
        expect(saludoH1).toBe(saludo);

    });



});