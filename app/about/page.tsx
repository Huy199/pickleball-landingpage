export default function AboutPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold">Thông tin giải đấu</h1>
            <p className="text-lg text-gray-600">
              Thông tin về giải đấu và giải thưởng
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-2xl font-semibold">Sứ mệnh</h2>
              <p className="mb-4 text-gray-600">
                Chúng tôi dành riêng để tạo ra trải nghiệm chơi game cạnh tranh
                cuối cùng, tập hợp những người chơi giỏi nhất từ ​​khắp nơi trên
                thế giới. Giải đấu của chúng tôi cung cấp một nền tảng cho các
                game thủ lành nghề để thể hiện tài năng của họ và cạnh tranh ở
                cấp độ cao nhất.
              </p>
              <p className="text-gray-600">
                Với công nghệ tiên tiến và tiêu chuẩn chơi công bằng, chúng tôi
                đảm bảo mọi trận đấu đều thú vị, cạnh tranh và đáng nhớ cho cả
                người chơi và khán giả.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold">Thể thức giải đấu</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  Thi đấu đôi nam và đôi nam nữ
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  Các đội thi đấu 1 set chạm 15 các trận vòng bảng
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  Bán kết và chung kết thi đấu 3 set 11
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-blue-500"></span>
                  Livestream trực tiếp trên fanpage
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 rounded-lg bg-gray-50 p-8">
            <h2 className="mb-6 text-2xl font-semibold text-center">
              Prize Pool
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-yellow-500">
                  Đội vô địch
                </div>
                <div className="text-xl font-semibold">$XXX</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-gray-400">
                  Giải nhì
                </div>
                <div className="text-xl font-semibold">$XXX</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-bold text-orange-600">
                  Giải ba
                </div>
                <div className="text-xl font-semibold">$XXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
