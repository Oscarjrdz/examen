import { useState, useEffect } from 'react';
import { syllabus } from './data/syllabus';
import type { Level } from './data/syllabus';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, BookOpen, Brain, Map as MapIcon, ChevronRight, Lock, Trophy } from 'lucide-react';
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
    <div className="sticky top-0 z-10 bg-white border-b-2 border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="font-bold text-[#58CC02] text-xl flex items-center gap-2">
        <Brain className="w-6 h-6" /> EXANI-Prep
      </div>
      <div className="flex items-center gap-4 font-bold text-gray-500">
        <div className="flex items-center gap-1 text-[#FFC800]">
          <Star className="w-5 h-5 fill-current" /> {xp} XP
        </div>
      </div>
    </div>
  );

  const MapView = () => {
    return (
      <div className="pb-24 pt-6 px-4 max-w-md mx-auto min-h-screen flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Sección 1: Probabilidad y Estadística</h2>
          <p className="text-gray-500 font-medium">Prepárate para el examen de ingreso</p>
        </div>

        <div className="flex flex-col items-center gap-6 relative w-full">
          {syllabus.map((lvl, idx) => {
            const isCompleted = progress.includes(lvl.id);
            const isUnlocked = idx === 0 || progress.includes(syllabus[idx - 1].id);
            
            // Wavy path calculation
            const offset = Math.sin(idx) * 40;
            
            return (
              <div key={lvl.id} className="relative flex flex-col items-center" style={{ transform: `translateX(${offset}px)` }}>
                <div className="absolute -top-6 text-sm font-bold text-gray-400 bg-white px-2 rounded-full shadow-sm z-10 border-2 border-gray-100">
                  Nivel {lvl.id}
                </div>
                <button
                  onClick={() => isUnlocked && startLevel(lvl)}
                  disabled={!isUnlocked}
                  className={`
                    w-20 h-20 rounded-full flex items-center justify-center transform transition-all 
                    ${isUnlocked ? 'cursor-pointer hover:scale-105 active:scale-95' : 'cursor-not-allowed opacity-60'}
                    ${isCompleted ? 'bg-[#58CC02] border-b-[6px] border-[#58A700]' : 
                      isUnlocked ? 'bg-[#1CB0F6] border-b-[6px] border-[#1899D6]' : 
                      'bg-gray-300 border-b-[6px] border-gray-400'}
                  `}
                >
                  {isCompleted ? <Check className="w-10 h-10 text-white" strokeWidth={4} /> : 
                   isUnlocked ? <Star className="w-10 h-10 text-white fill-current" /> : 
                   <Lock className="w-8 h-8 text-gray-500" />}
                </button>
                <div className="mt-2 font-bold text-gray-600 text-center max-w-[120px] text-[15px] leading-tight flex-col hidden md:flex">
                  {lvl.title}
                </div>
                {/* Connecting lines */}
                {idx < syllabus.length - 1 && (
                  <div className="h-12 w-2 bg-gray-200 mt-2 rounded-full absolute -bottom-14 -z-10"></div>
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
      <div className="min-h-screen bg-white flex flex-col pt-4">
        <div className="px-4 flex items-center justify-between mb-6">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" />
          </button>
          <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#1CB0F6] transition-all" style={{ width: `${((theoryIndex) / activeLevel.theory.length) * 100}%` }}></div>
          </div>
        </div>
        
        <div className="flex-1 px-6 max-w-2xl mx-auto w-full flex flex-col">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{activeLevel.title}</h2>
          <div className="bg-[#1CB0F6]/10 text-[#1CB0F6] font-bold p-2 px-4 rounded-2xl w-max mb-6 flex items-center gap-2">
            <BookOpen className="w-5 h-5"/> Estudiar
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={theoryIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex-1 text-xl text-gray-700 font-medium leading-relaxed mt-4"
            >
              {activeLevel.theory[theoryIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-6 border-t-2 border-gray-200 max-w-2xl mx-auto w-full">
          <button 
            className="w-full button-blue rounded-2xl py-4 text-xl tracking-wide uppercase flex items-center justify-center gap-2 transition-transform"
            onClick={() => {
              if (isLastTheory) {
                setView('QUIZ');
              } else {
                setTheoryIndex(theoryIndex + 1);
              }
            }}
          >
            {isLastTheory ? '¡A practicar!' : 'Continuar'} <ChevronRight className="w-6 h-6" />
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
        // Simple retry for this demo
        setSelectedOption(null);
        setIsAnswerChecked(false);
      }
    };

    return (
      <div className="min-h-screen bg-white flex flex-col pt-4">
        <div className="px-4 flex items-center justify-between mb-6">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" />
          </button>
          <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#58CC02] transition-all" style={{ width: `${((currentQuestionIndex) / activeLevel.quiz.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 px-6 max-w-2xl mx-auto w-full flex flex-col">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">{question.question}</h2>
          
          <div className="flex flex-col gap-3 flex-1">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                disabled={isAnswerChecked}
                onClick={() => setSelectedOption(idx)}
                className={`
                  p-4 rounded-2xl border-2 font-bold text-left text-lg transition-all
                  ${selectedOption === idx 
                    ? 'border-[#1CB0F6] bg-[#1CB0F6]/10 text-[#1CB0F6]' 
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }
                  ${isAnswerChecked && idx === question.correctAnswer ? 'border-[#58CC02] bg-[#58CC02]/10 text-[#58CC02]' : ''}
                  ${isAnswerChecked && selectedOption === idx && idx !== question.correctAnswer ? 'border-[#FF4B4B] bg-[#FF4B4B]/10 text-[#FF4B4B]' : ''}
                `}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        <div className={`p-6 border-t-2 w-full max-w-2xl mx-auto transition-colors ${
          !isAnswerChecked ? 'border-gray-200 bg-white' : 
          isCorrect ? 'border-[#58CC02] bg-[#d7ffb8]' : 'border-[#FF4B4B] bg-[#ffdfe0]'
        }`}>
          {isAnswerChecked && (
             <div className={`mb-4 font-bold text-xl flex items-center gap-2 ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
                {isCorrect ? <><Check className="w-8 h-8"/> ¡Excelente!</> : <><X className="w-8 h-8"/> Incorrecto</>}
             </div>
          )}
          {isAnswerChecked && (
            <p className={`mb-4 font-medium ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
              {question.explanation}
            </p>
          )}

          <button 
            disabled={selectedOption === null && !isAnswerChecked}
            className={`w-full rounded-2xl py-4 text-xl tracking-wide uppercase flex items-center justify-center button-3d
              ${selectedOption === null ? 'button-gray cursor-not-allowed' : 
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
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-40 h-40 bg-[#FFC800] rounded-full flex items-center justify-center mb-8 shadow-lg"
      >
        <Trophy className="w-20 h-20 text-white fill-current" />
      </motion.div>
      <h1 className="text-4xl font-extrabold text-[#FFC800] mb-4">¡Nivel Completado!</h1>
      <p className="text-xl text-gray-600 font-bold mb-12">Has ganado 15 XP. ¡Sigue así!</p>
      
      <button 
        className="w-full max-w-sm button-green rounded-2xl py-4 text-xl tracking-wide uppercase disabled:opacity-50"
        onClick={() => setView('MAP')}
      >
        Continuar
      </button>
    </div>
  );

  return (
    <div className="font-sans text-gray-800 bg-[#f7f7f7] min-h-screen selection:bg-[#1CB0F6] selection:text-white">
      {view === 'MAP' && <TopBar />}
      {view === 'MAP' && <MapView />}
      {view === 'THEORY' && <TheoryView />}
      {view === 'QUIZ' && <QuizView />}
      {view === 'SUCCESS' && <SuccessView />}

      {view === 'MAP' && (
        <div className="fixed bottom-0 w-full bg-white border-t-2 border-gray-200 flex justify-around p-3 pb-6 max-w-md left-1/2 -translate-x-1/2">
          <button className="flex flex-col items-center text-[#58CC02] font-bold">
            <MapIcon className="w-8 h-8 mb-1" />
            <span className="text-xs uppercase">Aprender</span>
          </button>
          <button className="flex flex-col items-center text-gray-400 font-bold hover:text-gray-500">
             <Trophy className="w-8 h-8 mb-1" />
             <span className="text-xs uppercase">Posiciones</span>
          </button>
        </div>
      )}
    </div>
  );
}
