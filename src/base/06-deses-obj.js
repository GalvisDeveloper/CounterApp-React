
// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Cristian',
    edad: 23,
    clave: '12345'
};

// const { edad, clave, nombre, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

export const useContext = ({ name, anios, pass }) => {

    // console.log( nombre, edad, rango );

    return {
        nombre: name,
        edad: anios,
        clave: pass
    }

}

// const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

// console.log(nombreClave, anios);
// console.log( lat, lng );
