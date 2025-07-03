const members = [
  {
    id: 1,
    name: "Sophia Phương Anh",
    description:
      "Professional esports player with 5 years of competitive experience",
    image:
      "https://cdnphoto.dantri.com.vn/RQI9NJKg1_st5RClRjcMuKGIeAI=/2024/10/04/461940686867167558842354607331-1728035027302.jpg",
  },
  {
    id: 2,
    name: "Anna Leigh Waters",
    description: "Strategic mastermind known for incredible game sense",

    image:
      "https://www.desertsun.com/gcdn/presto/2021/11/11/PPAS/4b1b2732-b78b-44d6-852c-92dde726ccf8-20211111_Pickleball_002.jpg",
  },
  {
    id: 3,
    name: "Ben Johns",
    description: "Veteran player with multiple championship titles",
    image:
      "https://kenh14cdn.com/203336854389633024/2025/3/7/3fa1240887c69854a2a94c0cbd683e5-1741362042377-17413620425271185917543.jpg",
  },
  {
    id: 4,
    name: "Agassi",
    description: "Rising star in the competitive gaming scene",
    image:
      "https://joola.com/cdn/shop/articles/Agassi_x_JOOLA.jpg?v=1724109173",
  },
  {
    id: 5,
    name: "Quang Dương",
    description: "Technical specialist with unmatched precision",
    image:
      "https://www.ppatour.com/wp-content/uploads/2025/03/Quang-Duong-1.png",
  },
  {
    id: 6,
    name: "Staksrud",
    description: "Stealth expert with incredible reaction times",
    image:
      "https://www.ppatour.com/wp-content/uploads/2025/03/federico-staksrud.png",
  },
  {
    id: 7,
    name: "Lý Hoàng Nam",
    description: "Comeback king who never gives up",
    image:
      "https://thethaovanhoa.mediacdn.vn/372676912336973824/2025/2/12/4771108451221778009582687815826991824825018054n-17393507728611391107692.jpg",
  },
  {
    id: 8,
    name: "Trịnh Linh Giang",
    description: "Cool under pressure with strategic thinking",
    image:
      "https://kenh14cdn.com/203336854389633024/2024/10/10/46262510226118114690107848354404558355250322n-1728518599271942620879-1728523061432-172852306157283268294.jpg",
  },
  {
    id: 9,
    name: "Trương Vinh Hiển",
    description: "Powerhouse player with aggressive playstyle",
    image:
      "https://kenh14cdn.com/203336854389633024/2024/6/23/6cc63187-f120-49e0-b817-25c94a3fc60d-1719152712051846998207.jpeg",
  },
  {
    id: 10,
    name: "Đạt Trố",
    description: "Quick reflexes and innovative strategies",
    image: "https://i.ytimg.com/vi/EtSZzT0X43s/maxresdefault.jpg",
  },
  {
    id: 11,
    name: "Tardio",
    description: "Fast-paced player with explosive gameplay",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA5ufGQY1Vc6ztIQTy8WPnyU63BZs9HfV7g&s",
  },
  {
    id: 12,
    name: "Patriquin",
    description: "Mysterious player with unpredictable tactics",
    image:
      "https://www.ppatour.com/wp-content/uploads/2025/03/Hayden-Patriquin-1.png",
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
