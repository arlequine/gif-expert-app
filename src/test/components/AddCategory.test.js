import React from 'react';
import AddCategory from '../../components/AddCategory';
import { shallow } from 'enzyme';


describe('Pruebas en componenten <AddCategory />', () => {
  const setCategories = jest.fn();
  let wrapper

  beforeEach(() => {
    jest.clearAllMocks(); //si tenemos alguna simulacion previa, todo se limpia 
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });


  test('Deberia tener el formulario correcto', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('deberia debe de cambiar la caja de texto', () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    const input = wrapper.find('input');
    const value = 'Hola Mundo';
    input.simulate('change', { target: { value: value } });
    expect(wrapper.find('p').text().trim()).toBe(value);
  });

  test('no debe de mandar la informacion con submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() { } });//forma corta de la funcion preventDefault
    expect(setCategories).not.toHaveBeenCalled();
  });

  test('debe de llamar el setCategories y limpiar la caja de texto', () => {
    const val = 'One Piece';
    const input = wrapper.find('input');


    // 1 simular inputChange
    input.simulate('change', { target: { value: val } });

    // 2 simular submit
    wrapper.find('form').simulate('submit', { preventDefault() { } });//forma corta de la funcion preventDefault

    // 3 verificar que se llame al setCategories
    expect(setCategories).toHaveBeenCalled();
    // expect(setCategories).toHaveBeenCalledTimes(2); 
    // .toHaveBeenCalledTimes(2) se manda a llamar la funcion segun el valor del argumento se le ponga
    // expect(setCategories).toHaveBeenCalledWith( expect.any(Function) );
    // se espera que sea llamado con cualquier tipo de funcion 

    // 4 verificar que el value del input sea vacio
    expect(input.prop('value')).toBe('');
    // al colocar prop se hace referencia a las propiedades del input

  });

});
