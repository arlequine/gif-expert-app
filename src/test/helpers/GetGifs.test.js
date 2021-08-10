import { getGifs } from '../../../src/helpers/GetGifs';

describe('Pruebas con GetGifs Fetch', () => {
  test('Debe obtener los gifs', async () => {
    const gifs = await getGifs('One piece');
    expect(gifs.length).toBe(12);
  });
  test('Debe obtener un array vacio', async () => {
    const gifs = await getGifs('');
    expect(gifs.length).toBe(0);
  });
});
