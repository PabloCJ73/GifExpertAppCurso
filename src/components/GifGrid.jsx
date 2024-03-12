export const GifGrid = ({ category }) => {
  console.log(category);
  const getGifs = async () => {
    const url = `api.giphy.com/v1/gifs/search?api_key=hjVq6EmHdKKTSDWDoTJ7xzysP9UmSMqn&q=${category}&limit=20`;

    const resp = await fetch(url);

    console.log(resp);

    const { data } = await resp.json();

    console.log(data);

    /*
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    console.log(resp);
    */
  };

  getGifs();

  return (
    <>
      <h3>{category}</h3>
    </>
  );
};
