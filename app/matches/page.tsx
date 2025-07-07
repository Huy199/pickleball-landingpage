const matches = [
  // {
  //   id: 1,
  //   team1: {
  //     name: "Thunder Paddles",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#3",
  //     skillLevel: "5.0",
  //     recentForm: "W-W-L-W-W",
  //     playingStyle: "Aggressive baseline",
  //     keyPlayers: ["Mike Johnson", "Sarah Davis"],
  //   },
  //   team2: {
  //     name: "Lightning Dinks",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#5",
  //     skillLevel: "4.5",
  //     recentForm: "W-L-W-W-L",
  //     playingStyle: "Strategic net play",
  //     keyPlayers: ["Alex Chen", "Emma Wilson"],
  //   },
  //   time: "2024-01-15T14:00:00",
  //   location: "Court 1",
  //   status: "upcoming",
  //   round: "Quarter Finals",
  //   matchFormat: "Best of 3 games to 11",
  //   surface: "Outdoor Hard Court",
  // },
  // {
  //   id: 2,
  //   team1: {
  //     name: "Storm Smashers",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#2",
  //     skillLevel: "5.0",
  //     recentForm: "W-W-W-L-W",
  //     playingStyle: "Power baseline",
  //     keyPlayers: ["David Rodriguez", "Lisa Park"],
  //   },
  //   team2: {
  //     name: "Fire Volleys",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#7",
  //     skillLevel: "4.5",
  //     recentForm: "L-W-W-W-L",
  //     playingStyle: "All-court game",
  //     keyPlayers: ["Tom Anderson", "Maria Garcia"],
  //   },
  //   time: "2024-01-15T16:30:00",
  //   location: "Court 2",
  //   status: "upcoming",
  //   round: "Quarter Finals",
  //   matchFormat: "Best of 3 games to 11",
  //   surface: "Indoor Composite",
  // },
  // {
  //   id: 3,
  //   team1: {
  //     name: "Ice Spinners",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#4",
  //     skillLevel: "4.5",
  //     recentForm: "W-W-L-L-W",
  //     playingStyle: "Defensive specialists",
  //     keyPlayers: ["Rachel Kim", "James Miller"],
  //   },
  //   team2: {
  //     name: "Shadow Drops",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#6",
  //     skillLevel: "4.5",
  //     recentForm: "W-L-W-L-W",
  //     playingStyle: "Finesse and placement",
  //     keyPlayers: ["Kevin Lee", "Anna Thompson"],
  //   },
  //   time: "2024-01-15T19:00:00",
  //   location: "Court 3",
  //   status: "upcoming",
  //   round: "Quarter Finals",
  //   matchFormat: "Best of 3 games to 11",
  //   surface: "Outdoor Hard Court",
  // },
  // {
  //   id: 4,
  //   team1: {
  //     name: "Cyber Slicers",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#1",
  //     skillLevel: "5.5",
  //     recentForm: "W-W-W-W-L",
  //     playingStyle: "Balanced attack",
  //     keyPlayers: ["Chris Taylor", "Jennifer Brown"],
  //   },
  //   team2: {
  //     name: "Neon Lobs",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#8",
  //     skillLevel: "4.0",
  //     recentForm: "L-W-L-W-W",
  //     playingStyle: "Counter-attacking",
  //     keyPlayers: ["Ryan White", "Michelle Jones"],
  //   },
  //   time: "2024-01-15T21:30:00",
  //   location: "Court 4",
  //   status: "upcoming",
  //   round: "Quarter Finals",
  //   matchFormat: "Best of 3 games to 11",
  //   surface: "Indoor Composite",
  // },
  // {
  //   id: 5,
  //   team1: {
  //     name: "Thunder Paddles",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#3",
  //     skillLevel: "5.0",
  //     recentForm: "W-W-W-W-W",
  //     playingStyle: "Aggressive baseline",
  //     keyPlayers: ["Mike Johnson", "Sarah Davis"],
  //   },
  //   team2: {
  //     name: "Storm Smashers",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#2",
  //     skillLevel: "5.0",
  //     recentForm: "W-W-W-W-W",
  //     playingStyle: "Power baseline",
  //     keyPlayers: ["David Rodriguez", "Lisa Park"],
  //   },
  //   time: "2024-01-16T15:00:00",
  //   location: "Center Court",
  //   status: "scheduled",
  //   round: "Semi Finals",
  //   matchFormat: "Best of 5 games to 11",
  //   surface: "Premium Indoor",
  // },
  // {
  //   id: 6,
  //   team1: {
  //     name: "Ice Spinners",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#4",
  //     skillLevel: "4.5",
  //     recentForm: "W-W-W-L-W",
  //     playingStyle: "Defensive specialists",
  //     keyPlayers: ["Rachel Kim", "James Miller"],
  //   },
  //   team2: {
  //     name: "Cyber Slicers",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "#1",
  //     skillLevel: "5.5",
  //     recentForm: "W-W-W-W-W",
  //     playingStyle: "Balanced attack",
  //     keyPlayers: ["Chris Taylor", "Jennifer Brown"],
  //   },
  //   time: "2024-01-16T18:00:00",
  //   location: "Center Court",
  //   status: "scheduled",
  //   round: "Semi Finals",
  //   matchFormat: "Best of 5 games to 11",
  //   surface: "Premium Indoor",
  // },
  // {
  //   id: 7,
  //   team1: {
  //     name: "TBD",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "TBD",
  //     skillLevel: "TBD",
  //     recentForm: "TBD",
  //     playingStyle: "TBD",
  //     keyPlayers: ["TBD", "TBD"],
  //   },
  //   team2: {
  //     name: "TBD",
  //     logo: "/placeholder.svg?height=80&width=80",
  //     ranking: "TBD",
  //     skillLevel: "TBD",
  //     recentForm: "TBD",
  //     playingStyle: "TBD",
  //     keyPlayers: ["TBD", "TBD"],
  //   },
  //   time: "2024-01-17T20:00:00",
  //   location: "Championship Court",
  //   status: "scheduled",
  //   round: "Finals",
  //   matchFormat: "Best of 5 games to 11",
  //   surface: "Premium Indoor",
  // },
  {
    id: 8,
    team1: {
      name: "V.T.T.Dung & B.T.T.Hiền",
      logo: "/protonLogo.jpg",
      ranking: "#9",
      skillLevel: "4.0",
      recentForm: "W-L-W-L-W",
      playingStyle: "Consistent baseline",
      keyPlayers: ["Mark Davis", "Sophie Wilson"],
    },
    team2: {
      name: "H.P.Anh & L.T.Nhân",
      logo: "/joolaLogo.png",
      ranking: "#12",
      skillLevel: "3.5",
      recentForm: "L-L-W-W-L",
      playingStyle: "Recreational play",
      keyPlayers: ["John Smith", "Amy Johnson"],
    },
    time: "2024-01-14T20:00:00",
    location: "Court 1",
    status: "upcoming",
    round: "Vòng bảng",
    score: "2-1 (11-7, 9-11, 11-6)",
    winner: "Void Spinners",
    matchFormat: "Best of 3 games to 11",
    surface: "Outdoor Hard Court",
  },
  {
    id: 9,
    team1: {
      name: "H.Q.Huy & L.V.Tấn",
      logo: "/protonLogo.jpg",
      ranking: "#9",
      skillLevel: "4.0",
      recentForm: "W-L-W-L-W",
      playingStyle: "Consistent baseline",
      keyPlayers: ["Mark Davis", "Sophie Wilson"],
    },
    team2: {
      name: "N.D.Doanh & .D.Q.Khánh",
      logo: "/paddletekLogo.jpg",
      ranking: "#12",
      skillLevel: "3.5",
      recentForm: "L-L-W-W-L",
      playingStyle: "Recreational play",
      keyPlayers: ["John Smith", "Amy Johnson"],
    },
    time: "2024-01-14T20:00:00",
    location: "Court 1",
    status: "upcoming",
    round: "Vòng bảng",
    score: "2-1 (11-7, 9-11, 11-6)",
    winner: "Void Spinners",
    matchFormat: "Best of 3 games to 11",
    surface: "Outdoor Hard Court",
  },
  {
    id: 10,
    team1: {
      name: "N.H.Linh & B.T.T.Hiền",
      logo: "/protonLogo.jpg",
      ranking: "#9",
      skillLevel: "4.0",
      recentForm: "W-L-W-L-W",
      playingStyle: "Consistent baseline",
      keyPlayers: ["Mark Davis", "Sophie Wilson"],
    },
    team2: {
      name: "D.T.Dương & N.T.D.Hà",
      logo: "/joolaLogo.png",
      ranking: "#12",
      skillLevel: "3.5",
      recentForm: "L-L-W-W-L",
      playingStyle: "Recreational play",
      keyPlayers: ["John Smith", "Amy Johnson"],
    },
    time: "2024-01-14T20:00:00",
    location: "Court 1",
    status: "upcoming",
    round: "Vòng bảng",
    score: "2-1 (11-7, 9-11, 11-6)",
    winner: "Void Spinners",
    matchFormat: "Best of 3 games to 11",
    surface: "Outdoor Hard Court",
  },
  {
    id: 11,
    team1: {
      name: "N.T.K.Mỵ & V.T.T.Dung",
      logo: "/protonLogo.jpg",
      ranking: "#9",
      skillLevel: "4.0",
      recentForm: "W-L-W-L-W",
      playingStyle: "Consistent baseline",
      keyPlayers: ["Mark Davis", "Sophie Wilson"],
    },
    team2: {
      name: "L.T.M.Lợi & N.T.D.Hà",
      logo: "/joolaLogo.png",
      ranking: "#12",
      skillLevel: "3.5",
      recentForm: "L-L-W-W-L",
      playingStyle: "Recreational play",
      keyPlayers: ["John Smith", "Amy Johnson"],
    },
    time: "2024-01-14T20:00:00",
    location: "Court 1",
    status: "upcoming",
    round: "Vòng bảng",
    score: "2-1 (11-7, 9-11, 11-6)",
    winner: "Void Spinners",
    matchFormat: "Best of 3 games to 11",
    surface: "Outdoor Hard Court",
  },
];

function MatchCard({ match }: { match: (typeof matches)[0] }) {
  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return {
      date: date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      }),
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
  };

  const { date, time } = formatTime(match.time);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "scheduled":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getFormColor = (result: string) => {
    return result === "W" ? "bg-green-500" : "bg-red-500";
  };

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg">
      <div className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{match.round}</h3>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
              match.status
            )}`}
          >
            Sắp diễn ra
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Teams Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex flex-col items-center space-y-2">
            <img
              src={match.team1.logo || "/placeholder.svg"}
              alt={`${match.team1.name} logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="text-center text-sm font-medium">
              {match.team1.name}
            </span>
            <span className="text-xs text-gray-500">{match.team1.ranking}</span>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-2xl font-bold text-orange-500">VS</div>
            {match.status === "completed" && match.score && (
              <div className="text-center text-sm font-semibold text-green-600">
                {match.score}
              </div>
            )}
          </div>

          <div className="flex flex-col items-center space-y-2">
            <img
              src={match.team2.logo || "/placeholder.svg"}
              alt={`${match.team2.name} logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
            <span className="text-center text-sm font-medium">
              {match.team2.name}
            </span>
            <span className="text-xs text-gray-500">{match.team2.ranking}</span>
          </div>
        </div>

        {/* Pre-Match Team Information */}
        <div className="mb-6 grid grid-cols-2 gap-4">
          {/* Team 1 Info */}
          <div className="space-y-3 rounded-lg bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-800">{match.team1.name}</h4>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Skill Level:</span>
                <span className="font-medium text-orange-600">
                  {match.team1.skillLevel}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Playing Style:</span>
                <span className="font-medium">{match.team1.playingStyle}</span>
              </div>

              <div>
                <span className="text-gray-600">Recent Form:</span>
                <div className="mt-1 flex space-x-1">
                  {match.team1.recentForm.split("-").map((result, index) => (
                    <span
                      key={index}
                      className={`h-6 w-6 rounded-full text-xs font-bold text-white flex items-center justify-center ${getFormColor(
                        result
                      )}`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-gray-600">Key Players:</span>
                <div className="mt-1">
                  {match.team1.keyPlayers.map((player, index) => (
                    <div
                      key={index}
                      className="text-xs font-medium text-gray-800"
                    >
                      • {player}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Team 2 Info */}
          <div className="space-y-3 rounded-lg bg-gray-50 p-4">
            <h4 className="font-semibold text-gray-800">{match.team2.name}</h4>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Skill Level:</span>
                <span className="font-medium text-orange-600">
                  {match.team2.skillLevel}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Playing Style:</span>
                <span className="font-medium">{match.team2.playingStyle}</span>
              </div>

              <div>
                <span className="text-gray-600">Recent Form:</span>
                <div className="mt-1 flex space-x-1">
                  {match.team2.recentForm.split("-").map((result, index) => (
                    <span
                      key={index}
                      className={`h-6 w-6 rounded-full text-xs font-bold text-white flex items-center justify-center ${getFormColor(
                        result
                      )}`}
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-gray-600">Key Players:</span>
                <div className="mt-1">
                  {match.team2.keyPlayers.map((player, index) => (
                    <div
                      key={index}
                      className="text-xs font-medium text-gray-800"
                    >
                      • {player}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Winner Display */}
        {match.status === "completed" && match.winner && (
          <div className="mb-4 text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800">
              🏆 Winner: {match.winner}
            </span>
          </div>
        )}

        {/* Match Details */}
        <div className="space-y-3 border-t pt-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{date}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Court:</span>
              <span className="font-medium">{match.location}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Surface:</span>
              <span className="font-medium">{match.surface}</span>
            </div>
          </div>
          <div className="text-center text-sm">
            <span className="text-gray-600">Format: </span>
            <span className="font-medium text-orange-600">
              {match.matchFormat}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MatchesPage() {
  const groupedMatches = matches.reduce((acc, match) => {
    if (!acc[match.round]) {
      acc[match.round] = [];
    }
    acc[match.round].push(match);
    return acc;
  }, {} as Record<string, typeof matches>);

  const roundOrder = ["Vòng bảng", "Quarter Finals", "Semi Finals", "Finals"];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold">Trận đấu</h1>
          <p className="text-lg text-gray-600">
            Theo dõi để biết chi tiết lịch thi đấu chính thức tại đây
          </p>
        </div>

        {/* Match Statistics */}
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600">20</div>
            <div className="text-sm text-gray-600">Thành viên tham gia</div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-orange-600">10</div>
            <div className="text-sm text-gray-600">Đội </div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-yellow-600">3</div>
            <div className="text-sm text-gray-600">Giải thưởng</div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600">20</div>
            <div className="text-sm text-gray-600">Trận đấu</div>
          </div>
        </div>

        {/* Matches by Round */}
        {roundOrder.map((round) => {
          const roundMatches = groupedMatches[round];
          if (!roundMatches) return null;

          return (
            <div key={round} className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-center">{round}</h2>
              <div className="grid gap-6 lg:grid-cols-2">
                {roundMatches.map((match) => (
                  <MatchCard key={match.id} match={match} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
