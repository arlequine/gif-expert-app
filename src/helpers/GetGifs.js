export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=P85rCYuhxKknBWDEyKBvkSF3zuANMi0y&limit=10&q=${category}`
  const res = await fetch(url);
  const { data } = await res.json();
  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  });
  return gifs;
}