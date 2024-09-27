export default function ColumnHeader({ select, setSelect }) {
  return (
    <div className="columnHeader flex">
      <h2>트렌드</h2>
      <div className="selecterWrap">
        <div className="selecter flex">
          <a href="#">
            <div className={`button ${select === "day" ? "selected" : ""}`} onClick={() => setSelect("day")}>
              <h3>오늘</h3>
            </div>
          </a>
          <a href="#">
            <div className={`button ${select === "week" ? "selected" : ""}`} onClick={() => setSelect("week")}>
              <h3>이번주</h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
