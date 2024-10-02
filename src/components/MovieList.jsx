import { useContext, useEffect } from "react";
import ColumnContent from "./ColumnContent";
import ColumnHeader from "./ColumnHeader";
import { MovieContext } from "../provider/MovieProvider";
import { useState, useRef } from "react";
export default function MovieList() {
  const [select, setSelect] = useState("day");
  let idRef = useRef();

  const { state, getMovies, getMovieDetail } = useContext(MovieContext);

  useEffect(() => {
    getMovies(select);
  }, [select]);

  useEffect(() => {
    if (state.showMain === false) {
      getMovieDetail(idRef.current);
      console.log(idRef.current);
      console.log(state);
    }
  }, [state.showMain, idRef]);
  console.log(state, "aaaa");
  return (
    <>
      {state.showMain ? (
        <section className="innerContent">
          <div className="wrapper">
            <div className="innerWrapper">
              <div className="column flex ">
                <ColumnHeader select={select} setSelect={setSelect} />
                <ColumnContent state={state} id={idRef} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        // 컴포넌트 로드 된 후에 프롭스에 데이터 전달되는거라 옵셔널 안 쓰면 터짐!!!!
        <div>
          <div>
            <img src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${state.detailData?.poster_path}`} alt="" />
          </div>
          <div>
            <div>{state.detailData?.original_title}</div>

            <div>{state.detailData?.overview}</div>
          </div>
        </div>
      )}
    </>
  );
}
