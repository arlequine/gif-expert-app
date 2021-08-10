import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas del hook useFetchGifs', () => {

  test('debe de retornar el state inicial', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One piece'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('debe de retornar un arreglo de imagenes y el loading en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One piece'));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).tobe(12);
    expect(loading).toBe(false);

  });

})
