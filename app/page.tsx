"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "Pickleball PM1 Championship Tournament",
    description:
      "Tham gia ngay với những người chơi từ khắp các đơn vị thuộc trung tâm Công Nghệ Thông Tin",
    image:
      "https://t3.ftcdn.net/jpg/05/67/37/28/240_F_567372856_RVmqo9kvrsKoDJJMZhGxo746rUZkncW0.jpg",
  },
  {
    id: 2,
    title: "Giải đấu cạnh tranh, chuyên nghiệp",
    description:
      "Cơ hội giao lưu cọ sát với những vận động viên đã có thành tích cao trong các giải đấu",
    image:
      "https://media.self.com/photos/648a027d2ce966b1da9a1611/3:2/w_8100,h_5400,c_limit/pickleball.jpeg",
  },
  {
    id: 3,
    title: "Phần thưởng hấp dẫn",
    description:
      "Phần thưởng bao gồm quà tặng, huy chương, cup vô địch, và tiền mặt hấp dẫn",
    image:
      "https://images.pexels.com/photos/17299530/pexels-photo-17299530.jpeg?cs=srgb&dl=pexels-mason-tuttle-612393380-17299530.jpg&fm=jpg",
  },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[500px] overflow-hidden bg-gray-900">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex h-full items-center justify-center bg-black/50">
                <div className="text-center text-white">
                  <h1 className="mb-4 text-4xl font-bold md:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg md:text-xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-3 w-3 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="mb-8 text-3xl font-bold">
              Pickleball PM1 Tournament Overview
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Đăng ký</h3>
                <p className="text-gray-600">
                  Đăng ký ngay hôm nay để có suất tham gia thi đấu tại giải đấu
                  chuyên nghiệp, hấp dẫn. Giải đấu không giới hạn về trình độ,
                  kỹ năng
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Thể lệ</h3>
                <p className="text-gray-600">
                  Giải đấu được thi đấu trên mặt sân tiêu chuẩn quốc tế, bóng
                  đấu được tài trợ của hãng Facolos, luật thi đấu và cách tính
                  điểm theo chuẩn PPA
                </p>
              </div>
              <div className="rounded-lg bg-gray-50 p-6">
                <h3 className="mb-4 text-xl font-semibold">Giải thưởng</h3>
                <p className="text-gray-600">
                  Nhiều phần quà giải thưởng hấp dẫn đang chờ đợi các vận động
                  viên bao gồm huy chương và giải thưởng tiền mặt cho người
                  chiến thắng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
