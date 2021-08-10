import React from 'react';
import { shallow } from 'enzyme';
import '../../setupTests.js'

import GifGridItem from '../../../src/components/GifGridItem';

describe('GirfGridItem', () => {

  const title = 'test';
  const url = 'http://placehold.it/200x200';
  const wrapper = shallow(<GifGridItem {...{ url, title }} />);

  test('debe mostrar <GifGridItem /> correctamente ', () => {

    const wrapper = shallow(<GifGridItem {...{ url, title }} />);
    expect(wrapper).toMatchSnapshot();

  });

  test('debe tener un parrafo con el title', () => {
    const p = wrapper.find('p');
    expect(p.text().trim()).toBe(title);
  });

  test('debe tener una imagen con la url y alt de los props', () => {
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe(url);
    expect(img.prop('alt')).toBe(title);
  });

  test('debe tener animate__fadeIn', () => {
    const div = wrapper.find('div');
    console.log(div.prop('className'));
    const className = div.prop('className');
    expect(className.includes('animate__fadeIn')).toBe(true);
  })


})