import { Link } from "react-router-dom";
import Image from "./Image";

/**
 * Component PostListItem
 * Hiển thị một bài viết dạng list item với hình ảnh và thông tin chi tiết
 * Layout: 
 * - Mobile: Xếp dọc (hình ảnh trên, nội dung dưới)
 * - Desktop: Xếp ngang (75% hình ảnh trái, 25% nội dung phải)
 */
const PostListItem = () => {
  return (
    // Container chính - Flex container
    // flex-col: Xếp dọc trên mobile
    // xl:flex-row: Xếp ngang trên màn hình xl
    // gap-8: Khoảng cách 2rem giữa các phần tử
    <div className="flex flex-col xl:flex-row gap-8">
      {/* Phần hình ảnh */}
      {/* w-full: Chiều rộng 100% trên mobile */}
      {/* xl:w-3/4: Chiều rộng 50% trên màn hình xl */}
      <div className="w-full xl:w-2/4">
        <Image 
          src="postImg.jpeg" 
          // w-full: Hình ảnh rộng 100% container
          // h-[200px]: Chiều cao cố định 200px trên mobile
          // xl:h-[400px]: Chiều cao 400px trên màn hình xl
          // rounded-2xl: Bo góc
          // object-cover: Đảm bảo hình ảnh không bị méo
          className="w-full h-[200px] xl:h-[400px] rounded-2xl object-cover" 
        />
      </div>

      {/* Phần thông tin chi tiết */}
      {/* w-full: Chiều rộng 100% trên mobile */}
      {/* xl:w-1/4: Chiều rộng 25% trên màn hình xl */}
      <div className="w-full xl:w-1/4">
        {/* Tiêu đề bài viết */}
        <Link 
          to="/test" 
          // text-xl: Cỡ chữ lớn trên mobile
          // xl:text-2xl: Cỡ chữ lớn hơn trên xl
          // font-semibold: Độ đậm chữ
          // hover:text-green-800: Màu xanh khi hover
          className="text-xl xl:text-2xl font-semibold hover:text-green-800"
        >
          Đây là nơi bắt đầu
        </Link>

        {/* Thông tin meta (tác giả, danh mục) */}
        {/* mt-2: Margin top 0.5rem */}
        {/* flex-row: Luôn xếp ngang */}
        {/* flex-nowrap: Không cho phép wrap xuống dòng */}
        {/* items-center: Căn giữa theo chiều dọc */}
        {/* text-sm: Giảm kích thước chữ để vừa một hàng */}
        {/* whitespace-nowrap: Không cho phép text wrap */}
        <div className="mt-2 flex flex-row flex-nowrap items-center gap-2 text-gray-600 text-sm whitespace-nowrap overflow-x-auto">
          <span>Tạo bởi</span>
          {/* Link tác giả */}
          {/* text-green-800: Màu xanh */}
          {/* hover:underline: Gạch chân khi hover */}
          <Link className="text-green-800 hover:underline">Bé Su</Link>
          <span>Trong mục</span>
          {/* Link danh mục */}
          <Link className="text-green-800 hover:underline">Cà phê</Link>
        </div>
      </div>
    </div>
  );
};

// Export component để có thể sử dụng ở nơi khác
export default PostListItem;
