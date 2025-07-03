const matches = [
  {
    id: 1,
    team1: {
      name: "Thunder Wolves",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Lightning Hawks",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-15T14:00:00",
    location: "Arena Alpha",
    status: "upcoming",
    round: "Quarter Finals",
  },
  {
    id: 2,
    team1: {
      name: "Storm Eagles",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Fire Dragons",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-15T16:30:00",
    location: "Arena Beta",
    status: "upcoming",
    round: "Quarter Finals",
  },
  {
    id: 3,
    team1: {
      name: "Ice Phoenixes",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Shadow Titans",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-15T19:00:00",
    location: "Arena Gamma",
    status: "upcoming",
    round: "Quarter Finals",
  },
  {
    id: 4,
    team1: {
      name: "Cyber Spartans",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Neon Vipers",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-15T21:30:00",
    location: "Arena Delta",
    status: "upcoming",
    round: "Quarter Finals",
  },
  {
    id: 5,
    team1: {
      name: "Thunder Wolves",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Storm Eagles",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-16T15:00:00",
    location: "Arena Alpha",
    status: "scheduled",
    round: "Semi Finals",
  },
  {
    id: 6,
    team1: {
      name: "Ice Phoenixes",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Cyber Spartans",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-16T18:00:00",
    location: "Arena Beta",
    status: "scheduled",
    round: "Semi Finals",
  },
  {
    id: 7,
    team1: {
      name: "TBD",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "TBD",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-17T20:00:00",
    location: "Main Arena",
    status: "scheduled",
    round: "Finals",
  },
  {
    id: 8,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
  },
  {
    id: 9,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
  },
  {
    id: 10,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
  },
  {
    id: 11,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
  },
  {
    id: 12,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
  },
  {
    id: 13,
    team1: {
      name: "Void Hunters",
      logo: "/placeholder.svg?height=80&width=80",
    },
    team2: {
      name: "Plasma Knights",
      logo: "/placeholder.svg?height=80&width=80",
    },
    time: "2024-01-14T20:00:00",
    location: "Arena Alpha",
    status: "completed",
    round: "Vòng bảng",
    score: "2-1",
    winner: "Void Hunters",
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

  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg transition-transform hover:scale-105">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{match.round}</h3>
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium ${getStatusColor(
              match.status
            )}`}
          >
            {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Teams */}
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
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="text-2xl font-bold text-gray-400">VS</div>
            {match.status === "completed" && match.score && (
              <div className="text-lg font-semibold text-blue-600">
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
          </div>
        </div>

        {/* Winner Display */}
        {match.status === "completed" && match.winner && (
          <div className="mb-4 text-center">
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
              Winner: {match.winner}
            </span>
          </div>
        )}

        {/* Match Details */}
        <div className="space-y-3 border-t pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Date:</span>
            <span className="font-medium">{date}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Time:</span>
            <span className="font-medium">{time}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Location:</span>
            <span className="font-medium">{match.location}</span>
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
            Theo dõi để có thông tin về các trận đấu và cập nhật kết quả mới
            nhất
          </p>
        </div>

        {/* Match Statistics */}
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-blue-600">
              {matches.filter((m) => m.status === "completed").length}
            </div>
            <div className="text-sm text-gray-600">Tổng số đội</div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-yellow-600">
              {matches.filter((m) => m.status === "upcoming").length}
            </div>
            <div className="text-sm text-gray-600">Tổng số trận đấu</div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-green-600">
              {matches.filter((m) => m.status === "scheduled").length}
            </div>
            <div className="text-sm text-gray-600">Vòng bảng</div>
          </div>
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <div className="text-3xl font-bold text-purple-600">
              {matches.length}
            </div>
            <div className="text-sm text-gray-600">Đấu loại trực tiếp</div>
          </div>
        </div>

        {/* Matches by Round */}
        {roundOrder.map((round) => {
          const roundMatches = groupedMatches[round];
          if (!roundMatches) return null;

          return (
            <div key={round} className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-center">{round}</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
