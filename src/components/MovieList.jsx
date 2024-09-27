import { useContext, useEffect } from "react";
import ColumnContent from "./ColumnContent";
import ColumnHeader from "./ColumnHeader";
import { MovieContext } from "../provider/MovieProvider";
import { useState } from "react";
export default function MovieList() {
  const [select, setSelect] = useState("day");
  const { state, getMovies } = useContext(MovieContext);

  useEffect(() => {
    getMovies(select);
  }, [select]);

  return (
    <>
      <section className="innerContent">
        <div className="wrapper">
          <div className="innerWrapper">
            <div className="column flex ">
              <ColumnHeader select={select} setSelect={setSelect} />
              <ColumnContent state={state} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
