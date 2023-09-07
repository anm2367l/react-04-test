export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1XIbmAJjzf2Fb25j0NzMgpVOZ4AQWnUE&q=${category}&limit=10`;
    // api.giphy.com / v1 / gifs / search ? q = valoran & api_key=1XIbmAJjzf2Fb25j0NzMgpVOZ4AQWnUE & limit=10
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return (gifs);
}

// const gifs = getGifs();
