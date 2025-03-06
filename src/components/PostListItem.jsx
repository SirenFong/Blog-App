import { Link } from "react-router-dom";
import Image from "./Image";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*image*/}
      <div className="md:hidden xl:block">
        <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
      </div>

      {/*details*/}
      <div className="">
        <Link to="/test" className="text-4xl font-semibold">
          Đây là nơi bắt đầu
        </Link>
        <div className="">
          <span>Tạo bởi</span>
          <Link>Bé Su</Link>
          <span>Trong mục</span>
          <Link>Cà phê</Link>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
