import { Link } from "react-router-dom";

const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8">
      {/* Link */}
      <div className="flex-1 flex items-center justify-between flex-wrap">
        <Link
          to="/posts"
          className="bg-green-800 text-white rounded-full px-4 py-2"
        >
          Tất cả bài viết
        </Link>
        <Link
          to="/posts?cat=place-fav"
          className="hover:bg-green-50 rounded-full px-4 py-2"
        >
          Địa điểm yêu thích
        </Link>
        <Link
          to="/posts?cat=coffe-fav"
          className="hover:bg-green-50 rounded-full px-4 py-2"
        >
          Cà phê yêu thích
        </Link>
        <Link
          to="/posts?cat=girl-fav"
          className="hover:bg-green-50 rounded-full px-4 py-2"
        >
          Góc của nàng
        </Link>
        <Link
          to="/posts?cat=boy-fav"
          className="hover:bg-green-50 rounded-full px-4 py-2"
        >
          Góc của chàng
        </Link>
        <Link
          to="/posts?cat=pet-fav"
          className="hover:bg-green-50 rounded-full px-4 py-2"
        >
          Động vật yêu thích
        </Link>
      </div>
      {/* Search */}
      <span className="text-xl font-medium">|</span>
      <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-transparent outline-none"></input>
      </div>
    </div>
  );
};

export default MainCategories;
