export default function Discover() {
  return (
    <>
      <section className="main">
        <div className="discover">
          <div className="columnWrap">
            <div className="Maincontent">
              <div className="title">
                <h2>환영합니다</h2>
                <h3>수백만 개의 영화, TV 프로그램 및 인물을 발견하세요. 지금 살펴보세요.</h3>
              </div>
              <div className="search">
                <form action="">
                  <input className="textInput" type="text" placeholder="영화, TV 프로그램, 인물 검색..." />
                  <input className="searchSumbit" type="submit" value="Search"></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
