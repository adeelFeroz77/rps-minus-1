import { Link } from 'react-router-dom'
import { Users, Trophy, MessageCircle, Hand } from "lucide-react";

const index = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 px-2">
            Two-Handed Rock Paper Scissors
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Master the art of dual-wielding in this exciting twist on the
            classic game
          </p>
          <Link 
            to="/lobby" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition"
          >
            Quick Play
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200">
            <Hand className="w-8 h-8 mb-4 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">
              Dual Hand Control
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Play with both hands simultaneously for strategic gameplay
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200">
            <Users className="w-8 h-8 mb-4 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">
              Multiplayer
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Challenge players from around the world
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200">
            <Trophy className="w-8 h-8 mb-4 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">
              Ranked Matches
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Compete in ranked matches and climb the leaderboard
            </p>
          </div>
          
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-slate-200">
            <MessageCircle className="w-8 h-8 mb-4 text-blue-600" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-slate-800">
              Social Features
            </h3>
            <p className="text-sm sm:text-base text-slate-600">
              Chat with opponents and make new friends
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-slate-800">
            Ready to Play?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-6 py-2.5 rounded-lg transition text-sm sm:text-base">
              Play as Guest
            </button>
            <button className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 px-6 py-2.5 rounded-lg transition border border-slate-200 text-sm sm:text-base">
              Create Account
            </button>
          </div>
        </div>
      </div>
  )
}

export default index