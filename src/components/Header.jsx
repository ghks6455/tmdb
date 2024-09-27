export default function Header() {
  return (
    <header className="wid100">
      <div className="headerWrap wid100">
        <div className="headerLeft">
          <a href="#">
            <img src="" alt="" />
          </a>
          <ul>
            <li>
              <a href="">영화</a>
            </li>
            <li>
              <a href="">TV프로그램</a>
            </li>
            <li>
              <a href="">인물</a>
            </li>
            <li>
              <a href="">More</a>
            </li>
          </ul>
        </div>
        <div className="headerRight">
          <ul>
            <li>
              <a href="">+</a>
            </li>
            <li>
              <a href="">KR</a>
            </li>
            <li>
              <a href="">로그인</a>
            </li>
            <li>
              <a href="">회원가입</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
