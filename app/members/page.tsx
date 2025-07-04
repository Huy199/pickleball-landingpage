"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const members = [
  {
    id: 1,
    name: "Nguyễn Hải Linh",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenHaiLinh.JPG",
  },
  {
    id: 2,
    name: "Lê Thị Minh Lợi",
    description: "Phòng Tổng Hợp",
    image: "/assets/image/LeThiMinhLoi.JPG",
  },
  {
    id: 3,
    name: "Nguyễn Thị Diễm Hà",
    description: "Phòng Kế Toán",
    image: "/assets/image/NguyenThiDiemHa.JPG",
  },

  {
    id: 4,
    name: "Hoàng Phương Anh",
    description: "Phòng Kế Toán",
    image: "/assets/image/LeThiMinhLoi.JPG",
  },

  {
    id: 5,
    name: "Bùi Thị Thu Hiền",
    description: "Phòng Kế Toán",
    image: "/assets/image/BuiThiThuHien.JPG",
  },

  {
    id: 6,
    name: "Dương Quốc Khánh",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/DuongQuocKhanh.JPG",
  },
  {
    id: 7,
    name: "Nguyễn Thị Kim Mỵ",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenThiKimMy.JPG",
  },
  {
    id: 8,
    name: "Vũ Thị Thùy Dung",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/VuThiThuyDung.JPG",
  },

  {
    id: 9,
    name: "Nguyễn Đình Doanh",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/NguyenDinhDoanh.JPG",
  },

  {
    id: 10,
    name: "Lê Thị Nhân",
    description: "Phòng Kế Toán",
    image: "/assets/image/LeThiNhan.JPG",
  },

  {
    id: 11,
    name: "Lưu Văn Tấn",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/LuuVanTan.JPG",
  },

  {
    id: 12,
    name: "Hoàng Quang Huy",
    description: "Phòng Phần Mềm 1",
    image: "/assets/image/HoangQuangHuy.JPG",
  },

  // {
  //   id: 9,
  //   name: "Nguyễn Thị Thanh Bình",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/NguyenThiThanhBinh.jpg",
  // },
  // {
  //   id: 10,
  //   name: "Trần Quốc Việt",
  //   description: "Phòng Giải Pháp Tích Hợp",
  //   image: "/assets/image/TranQuocViet.png",
  // },
  // {
  //   id: 11,
  //   name: "Trần Minh Đạt",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/TranMinhDat.jpg",
  // },
  // {
  //   id: 12,
  //   name: "Nguyễn Thúc Cương",
  //   description: "Ban Giám Đốc",
  //   image: "/assets/image/NguyenThucCuong.jpg",
  // },

  // {
  //   id: 13,
  //   name: "Đặng Khánh Huyền",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/DangKhanhHuyen.jpg",
  // },
  // {
  //   id: 14,
  //   name: "Đỗ Hải Long",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/DoHaiLong.JPG",
  // },
  // {
  //   id: 15,
  //   name: "Đoàn Đình Dân",
  //   description: "Ban Giám Đốc",
  //   image: "/assets/image/DoanDinhDan.jpg",
  // },

  // {
  //   id: 16,
  //   name: "Hà Viễn Dương",
  //   description: "Ban Giám Đốc",

  //   image: "/assets/image/HaVienDuong.jpg",
  // },

  // {
  //   id: 19,
  //   name: "Lều Thị Thùy",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/LeuThiThuy.jpg",
  // },

  // {
  //   id: 21,
  //   name: "Nguyễn Hải Nam",
  //   description: "Phòng Giải Pháp Tích Hợp",
  //   image: "/assets/image/NguyenHaiNam.jpg",
  // },
  // {
  //   id: 22,
  //   name: "Nguyễn Khắc Hoàn",
  //   description: "Phòng Phần Mềm 1",
  //   image: "/assets/image/NguyenKhacHoan.jpg",
  // },
  // {
  //   id: 23,
  //   name: "Đặng Triều Dương",
  //   description: "Phòng Kinh Doanh",
  //   image: "/assets/image/DangTrieuDuong.jpg",
  // },
  // {
  //   id: 24,
  //   name: "Vũ Tư Bản",
  //   description: "Phòng Giải Pháp Tích Hợp",
  //   image: "/assets/image/VuTuBan.png",
  // },
];

function MemberCard({
  member,
  isVisible,
}: {
  member: (typeof members)[0];
  isVisible: boolean;
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className="overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:scale-105"
    >
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {/* Loading skeleton - only show when visible */}
        {isVisible && !imageLoaded && !imageError && (
          <div className="absolute inset-0 animate-pulse bg-gray-200">
            <div className="flex h-full items-center justify-center">
              <div className="h-12 w-12 rounded-full bg-gray-300"></div>
            </div>
          </div>
        )}

        {/* Error fallback - only show when visible */}
        {isVisible && imageError && (
          <div className="flex h-full items-center justify-center bg-gray-100">
            <div className="text-center text-gray-400">
              <div className="mb-2 text-4xl">👤</div>
              <div className="text-sm">Image not available</div>
            </div>
          </div>
        )}

        {/* Placeholder when not visible */}
        {!isVisible && (
          <div className="flex h-full items-center justify-center bg-gray-50">
            <div className="text-center text-gray-300">
              <div className="mb-2 text-4xl">📷</div>
              <div className="text-sm">Scroll to view</div>
            </div>
          </div>
        )}

        {/* Actual image - only render when visible */}
        {isVisible && (
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className={`object-cover transition-opacity duration-300 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            quality={75}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-600">{member.description}</p>
      </div>
    </div>
  );
}

export default function MembersPage() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Create intersection observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        setVisibleCards((prev) => {
          const newVisible = new Set(prev);

          entries.forEach((entry) => {
            const cardId = Number.parseInt(
              entry.target.getAttribute("data-member-id") || "0"
            );

            if (entry.isIntersecting) {
              // Add to visible set when entering viewport
              newVisible.add(cardId);
            } else {
              // Remove from visible set when leaving viewport
              newVisible.delete(cardId);
            }
          });

          return newVisible;
        });
      },
      {
        root: null,
        rootMargin: "50px", // Start loading 50px before entering viewport
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    // Observe all member cards
    const cardElements = document.querySelectorAll("[data-member-id]");
    cardElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Thành Viên</h1>
          <p className="text-lg text-gray-600">
            Các thành viên đã đăng ký tham gia
          </p>
          {/* <p className="mt-2 text-sm text-gray-500">
            Scroll to view member images • {visibleCards.size} of{" "}
            {members.length} visible
          </p> */}
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.id} data-member-id={member.id}>
              <MemberCard
                member={member}
                isVisible={visibleCards.has(member.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
