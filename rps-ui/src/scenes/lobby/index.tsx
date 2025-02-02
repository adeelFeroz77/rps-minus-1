import { useEffect, useState } from "react";
import { Users, Bot, X, Timer, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Lobby = () => {

  const navigate = useNavigate();
  const [isSearching, setIsSearching] = useState(false);
  const [waitTime, setWaitTime] = useState(0);

  useEffect(() => {
    let interval: any;
    if (isSearching) {
      interval = setInterval(() => {
        setWaitTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSearching]);

  const formatTime = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    if (isSearching) {
      const timeout = setTimeout(() => {
        navigate("/match");
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [isSearching, navigate]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-800">
          Game Lobby
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Find an opponent or practice with a bot
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">
              Find a Player
            </h2>
            <p className="text-slate-600">Challenge real players worldwide</p>
          </div>
          {isSearching ? (
            <div className="text-center">
              <div className="flex justify-center items-center mb-8 relative">
                <div className="w-24 h-24 rounded-full border-4 border-blue-300/20 border-t-blue-500 animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <div className="space-y-2 mb-6">
                <p className="text-lg font-semibold text-slate-800">
                  Searching for players...
                </p>
                <p className="text-slate-600">
                  Wait time: {formatTime(waitTime)}
                </p>
              </div>
              <button
                onClick={() => {
                  setIsSearching(false);
                  setWaitTime(0);
                }}
                className="flex ml-4 items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition"
              >
                <X className="w-4 h-4" />
                Cancel Search
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearching(true)}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Find Match
            </button>
          )}
          {!isSearching && (
            <div className="mt-6 flex items-center gap-2 text-slate-600">
              <Timer className="w-4 h-4" />
              <span>Average wait time: ~1 min</span>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex flex-col items-center">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-semibold mb-2 text-slate-800">
              Practice with Bot
            </h2>
            <p className="text-slate-600">Perfect your strategy offline</p>
          </div>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              Easy Bot
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              Medium Bot
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition flex items-center justify-center gap-2">
              <Bot className="w-5 h-5" />
              Hard Bot
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-lg">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <span className="text-slate-600">1,234 Players Online</span>
        </div>
      </div>
    </div>
  );
};

export default Lobby;
