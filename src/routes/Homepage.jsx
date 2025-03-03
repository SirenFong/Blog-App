import { Link } from "react-router-dom";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";

const Homepage = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>🤔</span>
        <span className="text-green-800">Blogs và Thanh với Su</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-gray-800 text-2xl md:text-3xl lg:text-3xl font-bold">
            Góc nhỏ của Thanh và Su
          </h1>
          <p className="mt-8 text-md md:text-xl">Hãy cùng viết nào</p>
        </div>
        {/* Animated button */}
        <div className="flex justify-end">
          <Link to="write" className=" hidden md:block relative">
            <svg
              viewBox="0 0 200 200"
              width="150"
              height="150"
              className="text-lg tracking-widest animate-spin animatedButton"
            >
              <path
                id="circlePath"
                fill="none"
                d="M 100, 100m -75 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
              />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Viết bài ngay 🤔
                </textPath>
                <textPath href="#circlePath" startOffset="40%">
                  Ngày hôm nay thế nào 😁 ?
                </textPath>
              </text>
            </svg>
            <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* POST LIST */}
    </div>
  );
};

export default Homepage;
