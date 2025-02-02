import { Brain, Hand, Swords, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 bg-white">
      <div className="text-center mb-8 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-800 px-2">
          How to Play
        </h1>
        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Master the art of dual-wielding Rock Paper Scissors
        </p>
      </div>
      
      <div className="space-y-8">
        {/* Basic Rules */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-slate-800">
            <Hand className="w-6 h-6 text-blue-600" />
            Basic Rules
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>
              Two-Handed RPS expands on the classic game by allowing players
              to use both hands simultaneously:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>
                Each player makes two moves simultaneously - one for each hand
              </li>
              <li>Rock beats Scissors</li>
              <li>Scissors beats Paper</li>
              <li>Paper beats Rock</li>
            </ul>
          </div>
        </section>

        {/* Scoring System */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-slate-800">
            <Trophy className="w-6 h-6 text-blue-600" />
            Scoring System
          </h2>
          <div className="space-y-4 text-slate-600">
            <p>Points are awarded based on hand combinations:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Win both hands: 2 points</li>
              <li>Win one hand and draw one: 1.5 points</li>
              <li>Win one hand and lose one: 1 point</li>
              <li>Draw both hands: 1 point</li>
              <li>Draw one hand and lose one: 0.5 points</li>
              <li>Lose both hands: 0 points</li>
            </ul>
          </div>
        </section>

        {/* Game Mechanics */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-slate-800">
            <Swords className="w-6 h-6 text-blue-600" />
            Game Mechanics
          </h2>
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Each match consists of 3 rounds</li>
              <li>15 seconds to make your moves each round</li>
              <li>Both players reveal their moves simultaneously</li>
              <li>First to reach 2 round victories wins the match</li>
              <li>Rating points are awarded based on match results and opponent rating</li>
            </ul>
          </div>
        </section>

        {/* Strategy Tips */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-slate-800">
            <Brain className="w-6 h-6 text-blue-600" />
            Strategy Tips
          </h2>
          <div className="space-y-4 text-slate-600">
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Use different moves with each hand to cover more options</li>
              <li>Watch for patterns in your opponent's play style</li>
              <li>Consider using the same move with both hands for a high-risk, high-reward strategy</li>
              <li>Practice different combinations against bots to develop your strategy</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Quick Start Button */}
      <div className="mt-8 flex justify-center">
        <Link to="/lobby" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-semibold transition">
          Start Playing
        </Link>
      </div>
    </div>
  )
}

export default index
