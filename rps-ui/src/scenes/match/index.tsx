import { useEffect, useState } from "react";
import { Clock, MessageCircle, X, Trophy } from "lucide-react";

type Move = "rock" | "paper" | "scissors";
type HandState = {
  left: Move;
  right: Move;
};

const MOVE_ICONS = {
  rock: "👊",
  paper: "🖐",
  scissors: "✌️",
};

const getRandomMove = (): Move => {
  const moves: Move[] = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
};

const getWinner = (player: Move, opponent: Move): "player" | "opponent" | "draw" => {
  if (player === opponent) return "draw";
  if (
    (player === "rock" && opponent === "scissors") ||
    (player === "paper" && opponent === "rock") ||
    (player === "scissors" && opponent === "paper")
  ) return "player";
  return "opponent";
};

const Index = () => {
  const [phase, setPhase] = useState<"setup" | "selection" | "result">("setup");
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectionTime, setSelectionTime] = useState(5);
  const [playerMoves, setPlayerMoves] = useState<HandState>({
    left: "rock",
    right: "rock",
  });
  const [selectedHand, setSelectedHand] = useState<"left" | "right" | null>(null);
  const [opponentMoves, setOpponentMoves] = useState<HandState>({
    left: "rock",
    right: "rock",
  });
  const [opponentSelectedHand, setOpponentSelectedHand] = useState<"left" | "right" | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  const [showChat, setShowChat] = useState(false);
  const [result, setResult] = useState<"player" | "opponent" | "draw" | null>(null);

  // Main setup timer
  useEffect(() => {
    if (phase !== "setup" || timeLeft <= 0) return;
    
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, timeLeft]);

  // Selection phase timer
  useEffect(() => {
    if (phase !== "selection" || selectionTime <= 0) return;
    
    const timer = setInterval(() => {
      setSelectionTime(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [phase, selectionTime]);

  // Phase transitions
  useEffect(() => {
    if (timeLeft === 0 && phase === "setup") {
      setOpponentMoves({
        left: getRandomMove(),
        right: getRandomMove(),
      });
      setPhase("selection");
      setSelectionTime(5);
    }
  }, [timeLeft, phase]);

   // For opponent hand selection
   useEffect(() => {
    if (phase === "selection" && !opponentSelectedHand) {
      // Randomly select opponent's hand at start of selection phase
      setTimeout(() => {
        setOpponentSelectedHand(Math.random() > 0.5 ? "left" : "right");
      }, 5000)
    }
  }, [phase, opponentSelectedHand]);


  // Result calculation
  useEffect(() => {
    if (phase === "selection" && selectionTime === 0) {
      if (selectedHand && opponentSelectedHand) {
        const playerMove = playerMoves[selectedHand];
        const opponentMove = opponentMoves[opponentSelectedHand];
        const outcome = getWinner(playerMove, opponentMove);
        
        setResult(outcome);
        setPhase("result");
        if (outcome === "player") setPlayerScore(s => s + 1);
        if (outcome === "opponent") setOpponentScore(s => s + 1);
      }
    }
  }, [selectionTime, phase, selectedHand, opponentSelectedHand]);

  const selectMove = (hand: "left" | "right", move: Move) => {
    if (phase !== "setup") return;
    setPlayerMoves(prev => ({ ...prev, [hand]: move }));
  };
  

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-800 relative">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Opponent Section */}
        <div className="mb-8 bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=opponent" 
                  alt="Opponent" 
                  className="w-12 h-12 rounded-full border-2 border-blue-600"
                />
                <div className="absolute -bottom-1 -right-1 bg-blue-600 text-white text-xs px-2 rounded-full">
                  1500
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800">Opponent</h3>
            </div>
            <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Trophy className="w-6 h-6" /> {opponentScore}
            </div>
          </div>

          {/* Opponent Hands */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {(["left", "right"] as const).map(hand => (
              <div
                key={hand}
                className={`bg-slate-100 p-4 rounded-lg h-24 relative overflow-hidden transition-all
                  ${opponentSelectedHand === hand ? "border-2 border-blue-600 scale-105" : ""}`}
              >
                {phase === "setup" ? (
                  <>
                    <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="flex items-center justify-center h-full">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse" />
                        <div className="text-sm text-slate-500 font-medium">Choosing...</div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-4xl">
                      {MOVE_ICONS[opponentMoves[hand]]}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Game Status */}
        <div className="text-center mb-8">
          {result && (
            <div className={`text-lg font-bold mb-4 animate-bounce ${
              result === "player" ? "text-green-600" : 
              result === "opponent" ? "text-red-600" : "text-slate-600"
            }`}>
              {result === "player" && "You Won This Round!"}
              {result === "opponent" && "Opponent Won This Round!"}
              {result === "draw" && "It's a Draw!"}
            </div>
          )}
          <div className="inline-flex items-center gap-2 bg-white px-6 py-2 rounded-full 
                         text-lg font-semibold transition-colors border">
            <Clock className="w-5 h-5" />
            <span className={phase === "selection" && selectionTime <= 3 ? "text-red-500" : ""}>
              {phase === "setup" ? timeLeft : selectionTime}s
            </span>
          </div>
          <div className="mt-2 text-sm text-blue-500 font-medium">
            {phase === "setup" ? "Set Both Hand Moves" : 
             phase === "selection" ? "Choose Your Final Hand" : 
             "Round Result"}
          </div>
        </div>

        {/* Player Controls */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200">
          {/* Player Hands */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {(["left", "right"] as const).map(hand => (
              <div
                key={hand}
                onClick={() => {
                  if (phase === "selection") setSelectedHand(hand);
                }}
                className={`p-4 rounded-lg transition-all relative
                  ${phase === "selection" ? "cursor-pointer hover:border-blue-400" : "cursor-default"}
                  ${selectedHand === hand ? "border-2 border-blue-600 scale-105" : "border-2 border-slate-200"}`}
              >
                <div className="flex items-center justify-center h-20">
                  <span className="text-4xl">
                    {MOVE_ICONS[playerMoves[hand]]}
                  </span>
                </div>
                {phase === "setup" && (
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    {Object.entries(MOVE_ICONS).map(([move, icon]) => (
                      <button
                        key={move}
                        onClick={() => selectMove(hand, move as Move)}
                        className="border-2 border-blue-600 p-1 rounded-lg hover:bg-blue-50 transition"
                      >
                        <span className="text-2xl">{icon}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Player Info */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=player" 
                alt="Player" 
                className="w-12 h-12 rounded-full border-2 border-blue-600"
              />
              <div>
                <h3 className="font-semibold text-slate-800">You</h3>
                <span className="text-blue-500 text-sm">Rating: 1480</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Trophy className="w-6 h-6" /> {playerScore}
            </div>
          </div>
        </div>

        {/* Chat Widget */}
      {showChat && (
        <div className="fixed top-4 right-4 bg-white p-4 w-64 rounded-xl shadow-lg border border-slate-200 z-50">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-semibold text-slate-800">Quick Chat</h4>
            <button 
              onClick={() => setShowChat(false)}
              className="text-slate-500 hover:text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-2">
            {["Good luck!", "Well played!", "Good game!"].map((msg) => (
              <button
                key={msg}
                className="w-full text-left px-3 py-2 rounded-lg bg-slate-50 hover:bg-blue-50 transition text-sm font-medium text-slate-700"
              >
                {msg}
              </button>
            ))}
          </div>
        </div>
      )}
        
        {/* Chat Toggle */}
        {!showChat && (
          <button 
            onClick={() => setShowChat(true)}
            className="fixed top-4 right-4 bg-white hover:bg-blue-50 p-3 rounded-full 
                     shadow-lg border border-slate-200 transition hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;