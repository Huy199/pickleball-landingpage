const members = [
  {
    id: 1,
    name: "Đoàn Đình Dân",
    description: "Ban Giám Đốc",
    image: "/assets/image/DoanDinhDan.jpg",
  },
  {
    id: 2,
    name: "Hà Viễn Dương",
    description: "Ban Giám Đốc",

    image: "/assets/image/HaVienDuong.jpg",
  },
  {
    id: 3,
    name: "Nguyễn Thúc Cương",
    description: "Ban Giám Đốc",
    image: "/assets/image/NguyenThucCuong.jpg",
  },
  {
    id: 4,
    name: "Lê Thị Minh Lợi",
    description: "Phòng Tổng Hợp",
    image: "/assets/image/LeThiMinhLoi.jpg",
  },
  {
    id: 5,
    name: "Nguyễn Thị Diễm Hà",
    description: "Phòng Kế Toán",
    image: "/assets/image/NguyenThiDiemHa.jpg",
  },
  {
    id: 6,
    name: "Nguyễn Hải Linh",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenHaiLinh.jpg",
  },
  {
    id: 7,
    name: "Nguyễn Thị Kim Mỵ",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenThiKimMy.jpg",
  },
  {
    id: 8,
    name: "Đặng Triều Dương",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/DangTrieuDuong.jpg",
  },
  {
    id: 9,
    name: "Nguyễn Thị Thanh Bình",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/NguyenThiThanhBinh.jpg",
  },
  {
    id: 10,
    name: "Trần Quốc Việt",
    description: "Phòng Giải Pháp Tích Hợp",
    image: "/assets/image/TranQuocViet.png",
  },
  {
    id: 11,
    name: "Trần Minh Đạt",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/TranMinhDat.jpg",
  },
  {
    id: 12,
    name: "Bùi Thị Thu Hiền",
    description: "Phòng Kế Toán",
    image: "/assets/image/BuiThiThuHien.jpg",
  },
  {
    id: 13,
    name: "Đặng Khánh Huyền",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/DangKhanhHuyen.jpg",
  },
  {
    id: 14,
    name: "Đỗ Hải Long",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/DoHaiLong.jpg",
  },
  {
    id: 15,
    name: "Dương Quốc Khánh",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/DuongQuocKhanh.jpg",
  },
  {
    id: 16,
    name: "Hoàng Phương Anh",
    description: "Phòng Kế Toán",
    image: "/assets/image/HoangPhuongAnh.jpg",
  },
  {
    id: 17,
    name: "Hoàng Quang Huy",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/HoangQuangHuy.jpg",
  },

  {
    id: 18,
    name: "Lê Thị Nhân",
    description: "Phòng Kế Toán",
    image: "/assets/image/LeThiNhan.jpg",
  },
  {
    id: 19,
    name: "Lều Thị Thùy",
    description: "Phòng Kinh Doanh",
    image: "/assets/image/LeuThiThuy.jpg",
  },
  {
    id: 20,
    name: "Lưu Văn Tấn",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/LuuVanTan.jpg",
  },
  {
    id: 21,
    name: "Nguyễn Hải Nam",
    description: "Phòng Giải Pháp Tích Hợp",
    image: "/assets/image/NguyenHaiNam.jpg",
  },
  {
    id: 22,
    name: "Nguyễn Khắc Hoàn",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenKhacHoan.jpg",
  },
  {
    id: 23,
    name: "Vũ Thị Thùy Dung",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/VuThiThuyDung.jpg",
  },
  {
    id: 24,
    name: "Vũ Tư Bản",
    description: "Phòng Giải Pháp Tích Hợp",
    image: "/assets/image/VuTuBan.png",
  },
];

export default function MembersPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Thành viên</h1>
          <p className="text-lg text-gray-600">
            Các thành viên ưu tú tham gia giải đấu
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <div
              key={member.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
