import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';


describe('Pruebas del componente <GifExpertApp />', () => {
  test('Debe mostrarse correctamente el componente', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe mostrar una listq de categorias', () => {
    const categories = ['One Piece', 'Dragon ball'];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('GifGrid').length).toBe(categories.length);

  });

})
