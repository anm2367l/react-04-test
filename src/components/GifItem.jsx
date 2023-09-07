export const GifItem = ({ url, title }) => {
    // console.log({ url, title });
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
