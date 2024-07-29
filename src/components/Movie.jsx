function Movie(props) {
    const {
        Title: title,
        Year: year,
        imdbID: tt0133093,
        Type: type,
        Poster: poster
    } = props;

    return <div  className="card move">
        <div className="card-image waves-effect waves-block waves-light">
            {
                poster === 'N/A' ?
                    <img className='activator' src={`https://placehold.co/300x430?text={title}`}/>
                    :
                    <img className="activator" src={poster}/>
            }


        </div>
        <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{title}</span>
            <p>{year}<span className='right'>{type}</span></p>
        </div>
    </div>

}
export{Movie}