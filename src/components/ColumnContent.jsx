import Card from "./Card";
export default function ColumnContent({ state }) {
  return (
    <div className="columnContent">
      <div id="trendingScroller" className="wid100">
        <div className="scroller wid100 flex">
          {state.loading && <p>로딩중...</p>}
          {state.error && <p>에러 발생</p>}
          {!state.loading && state.movies && state.movies.map((movie) => <Card key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
}
