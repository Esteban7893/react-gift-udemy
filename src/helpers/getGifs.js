export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=CYjvc2jilRZ6hXo54ws5SrXV2TzH9I3g&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.fixed_height_downsampled.url,
  }));
  return gifs;
};
