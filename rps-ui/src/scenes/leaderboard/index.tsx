import { useState } from "react";
import { Search, ArrowUp, ChevronLeft, ChevronRight, Trophy } from "lucide-react";

type Player = {
    rank: number;
    username: string;
    rating: number;
    wins: number;
    losses: number;
    winStreak: number;
    avatarSeed: string;
};

const index = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [timeFrame, setTimeFrame] = useState<"all" | "monthly" | "weekly">("all");
    
    const players: Player[] = [{
        rank: 1,
        username: "GrandMaster",
        rating: 2100,
        wins: 150,
        losses: 20,
        winStreak: 15,
        avatarSeed: "player1"
      }, {
        rank: 2,
        username: "RPSLegend",
        rating: 2050,
        wins: 140,
        losses: 25,
        winStreak: 8,
        avatarSeed: "player2"
      }, {
        rank: 3,
        username: "StrategyKing",
        rating: 2000,
        wins: 130,
        losses: 30,
        winStreak: 5,
        avatarSeed: "player3"
      }, {
        rank: 4,
        username: "TwoHandMaster",
        rating: 1950,
        wins: 120,
        losses: 35,
        winStreak: 3,
        avatarSeed: "player4"
      }, {
        rank: 5,
        username: "ProPlayer",
        rating: 1900,
        wins: 110,
        losses: 40,
        winStreak: 4,
        avatarSeed: "player5"
      }, {
        rank: 6,
        username: "GameWizard",
        rating: 1850,
        wins: 100,
        losses: 45,
        winStreak: 2,
        avatarSeed: "player6"
      }, {
        rank: 7,
        username: "RockPaperPro",
        rating: 1800,
        wins: 90,
        losses: 50,
        winStreak: 1,
        avatarSeed: "player7"
      }, {
        rank: 8,
        username: "ScissorMaster",
        rating: 1750,
        wins: 80,
        losses: 55,
        winStreak: 0,
        avatarSeed: "player8"
      }, {
        rank: 9,
        username: "TopPlayer",
        rating: 1700,
        wins: 70,
        losses: 60,
        winStreak: 0,
        avatarSeed: "player9"
      }, {
        rank: 10,
        username: "EliteGamer",
        rating: 1650,
        wins: 60,
        losses: 65,
        winStreak: 0,
        avatarSeed: "player10"
      }];

    const getRankStyle = (rank: number) => {
        switch (rank) {
            case 1: return "bg-gradient-to-br from-yellow-400 to-yellow-600";
            case 2: return "bg-gradient-to-br from-gray-400 to-gray-600";
            case 3: return "bg-gradient-to-br from-amber-500 to-amber-700";
            default: return "bg-slate-100";
        }
    };

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="text-center mb-8 sm:mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2">Leaderboard</h1>
                <p className="text-lg sm:text-xl text-slate-600">Top players worldwide</p>
            </div>

            {/* Controls Section */}
            <div className="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <div className="relative w-full sm:max-w-md">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" />
                    <input
                        type="text"
                        placeholder="Search players..."
                        className="w-full bg-white border border-slate-200 rounded-lg py-2.5 pl-10 pr-4 
                               focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 
                               placeholder:text-slate-400 transition"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    {(["all", "monthly", "weekly"] as const).map((time) => (
                        <button
                            key={time}
                            onClick={() => setTimeFrame(time)}
                            className={`px-4 py-2 rounded-lg transition-colors font-medium text-sm
                                    ${timeFrame === time 
                                        ? "bg-blue-600 text-white" 
                                        : "bg-white text-slate-600 border border-slate-200 hover:border-blue-400"}`}
                        >
                            {time.charAt(0).toUpperCase() + time.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Leaderboard Table */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-slate-50 border-b border-slate-200">
                            <tr>
                                <th className="px-5 py-3.5 text-left text-sm font-semibold text-slate-800">Rank</th>
                                <th className="px-5 py-3.5 text-left text-sm font-semibold text-slate-800">Player</th>
                                <th className="px-5 py-3.5 text-right text-sm font-semibold text-slate-800">Rating</th>
                                <th className="px-5 py-3.5 text-right text-sm font-semibold text-slate-800">W/L</th>
                                <th className="px-5 py-3.5 text-right text-sm font-semibold text-slate-800">Win Streak</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map(player => (
                                <tr 
                                    key={player.rank}
                                    className="hover:bg-slate-50/50 transition-colors border-b border-slate-100 last:border-0"
                                >
                                    <td className="px-5 py-4">
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center 
                                                       ${player.rank <= 3 ? "text-white" : "text-slate-600"}`}
                                             style={{boxShadow: player.rank > 3 ? "inset 0 1px 3px rgba(0,0,0,0.06)" : ""}}>
                                            <div className={`${getRankStyle(player.rank)} w-full h-full rounded-lg 
                                                           flex items-center justify-center text-sm font-semibold`}>
                                                {player.rank}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="relative">
                                                <img
                                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${player.avatarSeed}`}
                                                    alt={player.username}
                                                    className="w-10 h-10 rounded-full bg-slate-100 border-2 border-white shadow"
                                                />
                                                {player.rank <= 3 && (
                                                    <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow">
                                                        {player.rank === 1 && <Trophy className="w-4 h-4 text-yellow-500" />}
                                                        {player.rank === 2 && <Trophy className="w-4 h-4 text-gray-400" />}
                                                        {player.rank === 3 && <Trophy className="w-4 h-4 text-amber-900" />}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-medium text-slate-800">{player.username}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <span className="font-mono font-medium text-slate-800">{player.rating}</span>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <span className="text-emerald-600 font-medium">{player.wins}</span>
                                            <span className="text-slate-400">/</span>
                                            <span className="text-rose-500 font-medium">{player.losses}</span>
                                        </div>
                                    </td>
                                    <td className="px-5 py-4 text-right">
                                        <div className="flex items-center justify-end gap-1.5">
                                            <span className={`font-medium ${player.winStreak > 0 ? "text-emerald-600" : "text-slate-600"}`}>
                                                {player.winStreak}
                                            </span>
                                            {player.winStreak > 0 && (
                                                <div className="bg-emerald-100 p-1 rounded">
                                                    <ArrowUp className="w-4 h-4 text-emerald-600" />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-sm text-slate-600">Showing 1–10 of 100 players</div>
                <div className="flex gap-2">
                    <button className="p-2 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                        <ChevronLeft className="w-5 h-5 text-slate-600" />
                    </button>
                    <button className="p-2 rounded-lg border border-slate-200 hover:border-blue-400 hover:bg-blue-50 transition-colors">
                        <ChevronRight className="w-5 h-5 text-slate-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default index;