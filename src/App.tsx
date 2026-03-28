import { useState, useEffect } from 'react';
import { syllabus } from './data/syllabus';
import type { Level } from './data/syllabus';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, BookOpen, Brain, Map as MapIcon, Lock, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

type ViewState = 'MAP' | 'THEORY' | 'QUIZ' | 'SUCCESS';

export default function App() {
  const [view, setView] = useState<ViewState>('MAP');
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
  const [progress, setProgress] = useState<number[]>(() => {
    const saved = localStorage.getItem('exani_progress');
    return saved ? JSON.parse(saved) : [];
  });
  const [xp, setXp] = useState<number>(() => {
    const saved = localStorage.getItem('exani_xp');
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('exani_progress', JSON.stringify(progress));
    localStorage.setItem('exani_xp', xp.toString());
  }, [progress, xp]);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [theoryIndex, setTheoryIndex] = useState(0);

  const startLevel = (level: Level) => {
    setActiveLevel(level);
    setTheoryIndex(0);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setView('THEORY');
  };

  const handleLevelComplete = () => {
    if (activeLevel && !progress.includes(activeLevel.id)) {
      setProgress([...progress, activeLevel.id]);
      setXp(xp + 15);
    }
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#58CC02', '#FFC800', '#1CB0F6']
    });
    setView('SUCCESS');
  };

  const TopBar = () => (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-gray-200 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3 flex justify-between items-center">
      <div className="font-extrabold text-[#58CC02] text-2xl flex items-center gap-2">
        <Brain className="w-8 h-8" /> Exani
      </div>
      <div className="flex items-center gap-4 font-bold text-gray-500 text-lg">
        <div className="flex items-center gap-1.5 text-[#FFC800]">
          <Star className="w-6 h-6 fill-current" /> {xp} 
        </div>
      </div>
    </div>
  );

  const MapView = () => {
    return (
      <div className="pb-32 px-4 max-w-md mx-auto flex flex-col items-center">
        <div className="text-center mt-6 mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800">Probabilidad y Estadística</h2>
          <p className="text-gray-500 font-bold mt-1">Sigue el camino al éxito</p>
        </div>

        <div className="flex flex-col items-center gap-8 relative w-full pt-4">
          {syllabus.map((lvl, idx) => {
            const isCompleted = progress.includes(lvl.id);
            const isUnlocked = idx === 0 || progress.includes(syllabus[idx - 1].id);
            
            // Wavy path calculation using sine wave
            const offset = Math.sin(idx * 0.8) * 50;
            const nextOffset = idx < syllabus.length - 1 ? Math.sin((idx + 1) * 0.8) * 50 : 0;
            // A simple line drawer
            const dx = nextOffset - offset;
            const isCurveRight = dx > 0;
            
            return (
              <div key={lvl.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                {idx === 0 && !isCompleted && (
                  <motion.div animate={{y: [0, -10, 0]}} transition={{repeat: Infinity, duration: 2}} className="absolute -top-12 bg-white px-4 py-2 rounded-2xl border-2 border-gray-200 font-bold text-gray-600 shadow-sm z-20 tooltip">
                    ¡Comienza aquí!
                    <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b-2 border-r-2 border-gray-200 rotate-45"></div>
                  </motion.div>
                )}
                
                <button
                  onClick={() => isUnlocked && startLevel(lvl)}
                  disabled={!isUnlocked}
                  className={`
                    w-24 h-24 rounded-full flex items-center justify-center transform transition-all active:scale-95 z-10
                    ${isUnlocked ? 'cursor-pointer' : 'cursor-not-allowed opacity-60'}
                    ${isCompleted ? 'bg-[#58CC02] border-b-[8px] border-[#58A700]' : 
                      isUnlocked ? 'bg-[#1CB0F6] border-b-[8px] border-[#1899D6] shadow-[0_0_0_8px_rgba(28,176,246,0.2)]' : 
                      'bg-gray-300 border-b-[8px] border-gray-400'}
                  `}
                >
                  {isCompleted ? <Check className="w-12 h-12 text-white" strokeWidth={4} /> : 
                   isUnlocked ? <Star className="w-12 h-12 text-white fill-current" /> : 
                   <Lock className="w-10 h-10 text-gray-500" strokeWidth={2.5} />}
                </button>
                
                <div className="mt-3 font-extrabold text-gray-700 text-center max-w-[130px] text-[16px] leading-tight flex-col hidden sm:flex">
                  {lvl.title}
                </div>

                {/* Connecting lines */}
                {idx < syllabus.length - 1 && (
                  <svg className="absolute -bottom-16 -z-10" width="100" height="70" style={{ left: isCurveRight ? '50%' : 'auto', right: !isCurveRight ? '50%' : 'auto', transform: isCurveRight ? 'none' : 'scaleX(-1)' }}>
                    <path d="M0,0 C20,30 40,30 50,70" fill="transparent" stroke="#E5E5E5" strokeWidth="16" strokeLinecap="round" strokeDasharray="1 24"/>
                  </svg>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const TheoryView = () => {
    if (!activeLevel) return null;
    const isLastTheory = theoryIndex === activeLevel.theory.length - 1;

    return (
      <div className="min-h-screen bg-white flex flex-col pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="px-5 flex items-center justify-between mb-8 mt-4">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" strokeWidth={3} />
          </button>
          <div className="flex-1 mx-5 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#1CB0F6] transition-all duration-300" style={{ width: `${((theoryIndex) / activeLevel.theory.length) * 100}%` }}></div>
          </div>
        </div>
        
        <div className="flex-1 px-6 max-w-2xl mx-auto w-full flex flex-col space-y-6">
          <h2 className="text-3xl font-extrabold text-gray-800">{activeLevel.title}</h2>
          <div className="bg-[#1CB0F6]/15 text-[#1CB0F6] font-extrabold p-2 px-4 rounded-xl w-max flex items-center gap-2 uppercase tracking-wide text-sm">
            <BookOpen className="w-5 h-5"/> Estudiar
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={theoryIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="flex-1 text-[22px] text-gray-700 font-semibold leading-relaxed"
            >
              {activeLevel.theory[theoryIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 border-t-2 border-gray-200 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <button 
            className="w-full button-blue rounded-2xl py-5 text-xl tracking-widest font-extrabold uppercase flex items-center justify-center gap-2 button-3d"
            onClick={() => {
              if (isLastTheory) {
                setView('QUIZ');
              } else {
                setTheoryIndex(theoryIndex + 1);
              }
            }}
          >
            {isLastTheory ? '¡A practicar!' : 'Continuar'}
          </button>
        </div>
      </div>
    );
  };

  const QuizView = () => {
    if (!activeLevel) return null;
    const question = activeLevel.quiz[currentQuestionIndex];
    if (!question) return null;

    const isCorrect = selectedOption === question.correctAnswer;
    const isLastQuestion = currentQuestionIndex === activeLevel.quiz.length - 1;

    const handleCheck = () => {
      if (selectedOption === null) return;
      setIsAnswerChecked(true);
    };

    const handleNext = () => {
      if (isCorrect) {
        if (isLastQuestion) {
          handleLevelComplete();
        } else {
          setCurrentQuestionIndex(prev => prev + 1);
          setSelectedOption(null);
          setIsAnswerChecked(false);
        }
      } else {
        setSelectedOption(null);
        setIsAnswerChecked(false);
      }
    };

    return (
      <div className="min-h-screen flex flex-col pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="px-5 flex items-center justify-between mb-8 mt-4">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" strokeWidth={3} />
          </button>
          <div className="flex-1 mx-5 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#58CC02] transition-all duration-300" style={{ width: `${((currentQuestionIndex) / activeLevel.quiz.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 px-6 max-w-2xl mx-auto w-full flex flex-col">
          <h2 className="text-[26px] font-extrabold text-gray-800 mb-8 leading-snug">{question.question}</h2>
          
          <div className="flex flex-col gap-4 flex-1">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                disabled={isAnswerChecked}
                onClick={() => setSelectedOption(idx)}
                className={`
                  p-5 rounded-2xl border-[3px] font-bold text-left text-[19px] transition-all active:scale-95 touch-manipulation
                  ${selectedOption === idx 
                    ? 'border-[#1CB0F6] bg-[#1CB0F6]/10 text-[#1CB0F6]' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50 button-3d shadow-sm'
                  }
                  ${isAnswerChecked && idx === question.correctAnswer ? '!border-[#58CC02] !bg-[#58CC02]/10 !text-[#58CC02]' : ''}
                  ${isAnswerChecked && selectedOption === idx && idx !== question.correctAnswer ? '!border-[#FF4B4B] !bg-[#FF4B4B]/10 !text-[#FF4B4B]' : ''}
                `}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className={`p-6 border-t-2 w-full pb-[max(1.5rem,env(safe-area-inset-bottom))] transition-colors ${
          !isAnswerChecked ? 'border-gray-200 bg-white' : 
          isCorrect ? 'border-[#58CC02] bg-[#d7ffb8]' : 'border-[#FF4B4B] bg-[#ffdfe0]'
        }`}>
          {isAnswerChecked && (
             <div className={`mb-3 font-extrabold text-2xl flex items-center gap-2 ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
                {isCorrect ? <><Check className="w-8 h-8" strokeWidth={4}/> ¡Excelente!</> : <><X className="w-8 h-8" strokeWidth={4}/> Incorrecto</>}
             </div>
          )}
          {isAnswerChecked && (
            <p className={`mb-6 font-bold text-lg leading-snug ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
              {question.explanation}
            </p>
          )}

          <button 
            disabled={selectedOption === null && !isAnswerChecked}
            className={`w-full rounded-2xl py-5 text-xl tracking-widest font-extrabold uppercase flex items-center justify-center button-3d touch-manipulation
              ${selectedOption === null ? 'button-gray cursor-not-allowed opacity-50' : 
                isAnswerChecked ? (isCorrect ? 'button-green' : 'bg-[#FF4B4B] text-white shadow-[0_4px_0_#EA2B2B]') : 'button-green'
              }
            `}
            onClick={isAnswerChecked ? handleNext : handleCheck}
          >
            {isAnswerChecked ? (isCorrect ? 'Continuar' : 'Entendido') : 'Comprobar'}
          </button>
        </div>
      </div>
    );
  };

  const SuccessView = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-48 h-48 bg-[#FFC800] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_0_#E6B500]"
      >
        <Trophy className="w-24 h-24 text-white fill-current" />
      </motion.div>
      <h1 className="text-4xl font-black text-[#FFC800] mb-4 drop-shadow-sm">¡Nivel Completado!</h1>
      <p className="text-2xl text-gray-600 font-extrabold mb-12">+15 XP a tu racha.</p>
      
      <div className="w-full mt-auto mb-8 max-w-sm">
        <button 
          className="w-full button-green rounded-2xl py-5 text-xl tracking-widest font-extrabold uppercase disabled:opacity-50 button-3d touch-manipulation"
          onClick={() => setView('MAP')}
        >
          Continuar
        </button>
      </div>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-white min-h-[100dvh]">
      {view === 'MAP' && <TopBar />}
      {view === 'MAP' && <MapView />}
      {view === 'THEORY' && <TheoryView />}
      {view === 'QUIZ' && <QuizView />}
      {view === 'SUCCESS' && <SuccessView />}

      {view === 'MAP' && (
        <div className="fixed bottom-0 w-full bg-white border-t-2 border-gray-200 flex justify-around p-3 pb-[max(1rem,env(safe-area-inset-bottom))] z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.03)] pb-safe">
          <button className="flex flex-col items-center text-[#58CC02] font-extrabold">
            <MapIcon className="w-8 h-8 mb-1" strokeWidth={2.5}/>
            <span className="text-[11px] uppercase tracking-wider">Aprender</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 font-extrabold hover:text-gray-500">
             <Trophy className="w-8 h-8 mb-1" strokeWidth={2.5}/>
             <span className="text-[11px] uppercase tracking-wider">Posiciones</span>
          </button>
        </div>
      )}
    </div>
  );
}
