import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'
jest.mock('../../hooks/useFetchGifs')
// servira para fingir una llamada hacia ese archivo y controlar la informacion que devuelva

describe('Pruebas sobre el componente GifGrid', () => {
  const val = 'Hola Mundo'

  test('Comprobar que se muestre el componenten <GifGrid />', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={val} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 1,
        title: 'One piece',
        url: 'http://www.gif.com/onepiece.gif',
      },
      {
        id: 2,
        title: 'Dragon ball',
        url: 'http://www.gif.com/dragonball.gif',
      },
      {
        id: 3,
        title: 'How i meet your mother',
        url: 'http://www.gif.com/howimeetyourmother.gif',
      }
    ]
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const val = 'One Piece'
    const wrapper = shallow(<GifGrid category={val} />);

    // expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false);
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length);

  });


});
