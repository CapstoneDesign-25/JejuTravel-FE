import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsLoggedIn(!!accessToken);
  }, []);

  const handleMouseEnter = (item) => setHoveredItem(item);
  const handleMouseLeave = () => setHoveredItem(null);

  const navItems = [
    { name: "旅游", link: "/tourism" },
    { name: "购物", link: "/shopping" },
    { name: "餐厅", link: "/restaurant" },
    { name: "住宿", link: "/accommodation" },
    { name: "公交车", link: "/bus" },
    { name: "洗手间", link: "/restroom" },
    { name: "无线网络", link: "/wifi" },
    // { name: "日程表", link: "/schedule" },
    // { name: "关于我们", link: "/aboutus" },
  ];

  return (
    <header className="p-4 fixed top-0 left-0 w-full z-20 bg-white shadow-md">
      {/* PC 버전 */}
      <div className="hidden xs:flex flex-col items-center container mx-auto" style={{ maxHeight: "120px" }}>
        <div className="w-full flex justify-between items-center mb-6">
          <Link to="/" className="flex items-center" style={{ marginLeft: "50px" }}>
            <span
              className="text-4xl font-bold"
              style={{
                marginRight: "1rem",
                marginLeft: "0px",
                fontFamily: '"Noto Sans SC", sans-serif',
                color: "#FF4C4C",
              }}
            >
              济州旅游
            </span>
          </Link>
          <div className="flex space-x-4">
            {isLoggedIn ? (
              <>
                <Link
                  to="/mypage"
                  onMouseEnter={() => handleMouseEnter("mypage")}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-300 ${
                    hoveredItem === "mypage"
                      ? "text-[#FF4C4C] bg-red-100 rounded-full px-3 py-1"
                      : "text-gray-700 hover:bg-red-50 hover:rounded-full px-3 py-1"
                  }`}
                >
                  我的页面
                </Link>
                <Link
                  to="/logout"
                  onMouseEnter={() => handleMouseEnter("logout")}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-300 ${
                    hoveredItem === "logout"
                      ? "text-[#FF4C4C] bg-red-100 rounded-full px-3 py-1"
                      : "text-gray-700 hover:bg-red-50 hover:rounded-full px-3 py-1"
                  }`}
                >
                  登出
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onMouseEnter={() => handleMouseEnter("login")}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-300 ${
                    hoveredItem === "login"
                      ? "text-[#FF4C4C] bg-red-100 rounded-full px-3 py-1"
                      : "text-gray-700 hover:bg-red-50 hover:rounded-full px-3 py-1"
                  }`}
                >
                  登录
                </Link>
                <Link
                  to="/signup"
                  onMouseEnter={() => handleMouseEnter("signup")}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-300 ${
                    hoveredItem === "signup"
                      ? "text-[#FF4C4C] bg-red-100 rounded-full px-3 py-1"
                      : "text-gray-700 hover:bg-red-50 hover:rounded-full px-3 py-1"
                  }`}
                >
                  注册
                </Link>
              </>
            )}
          </div>
        </div>
        <nav className="w-full">
          <ul className="flex flex-wrap justify-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.link}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  className={`transition-all duration-300 px-4 ${
                    hoveredItem === item.name
                      ? "text-[#FF4C4C] bg-red-100 rounded-full"
                      : "text-gray-700 hover:bg-red-50 hover:rounded-full"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 모바일 버전 (680px 이하) */}
      <div className="xs:hidden flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span
            className="text-3xl font-bold"
            style={{
              fontFamily: '"Noto Sans SC", sans-serif',
              color: "#FF4C4C",
            }}
          >
            济州旅游
          </span>
        </Link>

        {/* 햄버거 버튼 */}
        <button
          onClick={() => setMenuOpen(true)}
          className="text-gray-700 focus:outline-none pr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* 어두운 배경 */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* 오른쪽 슬라이드 메뉴 */}
      <div
        className={`fixed top-0 right-0 h-full w-[60vw] max-w-[320px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end items-center p-5 border-b border-gray-200">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* 메뉴 리스트 */}
        <ul className="flex flex-col items-end pr-8 space-y-6 mt-8 text-lg text-gray-800">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.link}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4C4C] transition"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* 로그인 / 마이페이지 */}
        <div className="absolute bottom-10 right-8 flex flex-col items-end space-y-3 border-t border-gray-200 pt-4 w-4/5 text-gray-800">
          {isLoggedIn ? (
            <>
              <Link
                to="/mypage"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4C4C] transition"
              >
                我的页面
              </Link>
              <Link
                to="/logout"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4C4C] transition"
              >
                登出
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4C4C] transition"
              >
                登录
              </Link>
              <Link
                to="/signup"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#FF4C4C] transition"
              >
                注册
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
