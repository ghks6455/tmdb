export default function Card({ movie }) {
  return (
    <div className="card flex">
      <div className="image wid100">
        <div className="imageWrapeer wid100 height100">
          <a className="wid100 height100" href="" onClick={() => window.open(`https://www.themoviedb.org/movie/${movie.id}`)}>
            <img className="wid100 height100" src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.original_title} />
          </a>
        </div>
      </div>
      <div className="content flex wid100 ">
        <div className="consensus">
          <div className="consensusScore">consensus : {movie.vote_average}</div>
        </div>
        <h2 className="wid100">
          <a className="wid100" href="/movie/1108566-killer-heat?language=ko" title={movie.original_title}>
            {movie.original_title}
          </a>
        </h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}
