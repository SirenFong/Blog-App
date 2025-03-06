import { Link } from "react-router-dom";
import Image from "./Image";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/*image */}
        <Image src="featured1.jpeg" className="rounded-3xl object-cover" />
        {/*details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-green-800 lg:text-lg">Tất cả bài viết</Link>
          <span className="text-gray-800">2 ngày trước</span>
        </div>
        {/*title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Ngày hôm nay của bạn thế nào?
        </Link>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* First post */}
        <div className="lg:h-1/2 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-green-800">Thanh và Su</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Đây sẽ là nơi bắt đầu
            </Link>
          </div>
        </div>
        {/* Second post */}
        <div className="lg:h-1/2 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-green-800">Thanh và Su</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Đây sẽ là nơi bắt đầu
            </Link>
          </div>
        </div>
        {/* Third post */}
        <div className="lg:h-1/2 flex justify-between gap-4">
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover w-1/3 aspect-video"
          />
          {/* Details and title */}
          <div className="w-2/3">
            {/* details */}
            <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
              <h1 className="font-semibold">02.</h1>
              <Link className="text-green-800">Thanh và Su</Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/* title */}
            <Link
              to="/test"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Đây sẽ là nơi bắt đầu
            </Link>
          </div>
        </div>
      </div>
      {/* Other post */}
    </div>
  );
};

export default FeaturedPosts;
