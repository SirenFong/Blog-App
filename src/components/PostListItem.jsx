import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*image*/}
      <div className="w-full xl:w-3/4">
        <Image 
          src="postImg.jpeg" 
          className="w-full h-[200px] xl:h-[400px] rounded-2xl object-cover" 
        />
      </div>

      {/*details*/}
      <div className="w-full xl:w-1/4">
        <Link to="/test" className="text-xl xl:text-2xl font-semibold hover:text-green-800">
          Đây là nơi bắt đầu
        </Link>
        <div className="mt-2 flex flex-col xl:flex-row xl:flex-wrap items-start xl:items-center gap-2 text-gray-600">
          <span>Tạo bởi</span>
          <Link className="text-green-800 hover:underline">Bé Su</Link>
          <span>Trong mục</span>
          <Link className="text-green-800 hover:underline">Cà phê</Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
