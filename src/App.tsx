import { useState, useEffect } from 'react';
import { subjects } from './data/syllabus';
import type { Level } from './data/syllabus';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, BookOpen, Brain, Map as MapIcon, Lock, Trophy, User, LogOut } from 'lucide-react';
import confetti from 'canvas-confetti';

type ViewState = 'LOGIN' | 'MAP' | 'THEORY' | 'QUIZ' | 'SUCCESS' | 'PROFILE';

type UserData = {
  password: string;
  xp: number;
  progress: Record<string, number[]>;
};

export default function App() {
  const [view, setView] = useState<ViewState>('LOGIN');
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  
  // App State tied to User
  const [progress, setProgress] = useState<Record<string, number[]>>({});
  const [xp, setXp] = useState<number>(0);
  const [activeSubjectId, setActiveSubjectId] = useState<string>(subjects[0].id);

  // Load user session on mount
  useEffect(() => {
    const activeSession = sessionStorage.getItem('exani_active_user');
    if (activeSession) {
      loadUserData(activeSession);
    }
  }, []);

  // Save changes to localStorage whenever progress/xp changes and user is logged in
  useEffect(() => {
    if (currentUser) {
      const usersRaw = localStorage.getItem('exani_users');
      const users: Record<string, UserData> = usersRaw ? JSON.parse(usersRaw) : {};
      users[currentUser] = { ...users[currentUser], xp, progress };
      localStorage.setItem('exani_users', JSON.stringify(users));
    }
  }, [progress, xp, currentUser]);

  const loadUserData = (username: string) => {
    const usersRaw = localStorage.getItem('exani_users');
    const users: Record<string, UserData> = usersRaw ? JSON.parse(usersRaw) : {};
    
    setCurrentUser(username);
    setXp(users[username]?.xp || 0);
    
    let loadedProgress = users[username]?.progress || {};
    // Retro-compatibility migration if older user format
    if (Array.isArray(loadedProgress)) {
      loadedProgress = { "probabilidad": loadedProgress };
    }
    
    setProgress(loadedProgress);
    setView('MAP');
    sessionStorage.setItem('exani_active_user', username);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setXp(0);
    setProgress({});
    sessionStorage.removeItem('exani_active_user');
    setView('LOGIN');
  };

  // Quiz & Theory State
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
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
    const pList = progress[activeSubjectId] || [];
    if (activeLevel && !pList.includes(activeLevel.id)) {
      setProgress({
        ...progress,
        [activeSubjectId]: [...pList, activeLevel.id]
      });
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

  // ---------------- Views ----------------

  const LoginView = () => {
    const [name, setName] = useState('');
    const [pwd, setPwd] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const username = name.trim().toLowerCase();
      if (!username || !pwd) {
        setErrorMsg('Llena ambos campos por favor.');
        return;
      }
      
      const usersRaw = localStorage.getItem('exani_users');
      const users: Record<string, UserData> = usersRaw ? JSON.parse(usersRaw) : {};

      if (users[username]) {
        if (users[username].password === pwd) {
          loadUserData(username);
        } else {
          setErrorMsg('Contraseña incorrecta.');
        }
      } else {
        users[username] = { password: pwd, xp: 0, progress: {} };
        localStorage.setItem('exani_users', JSON.stringify(users));
        loadUserData(username);
      }
    };

    return (
      <div className="h-[100dvh] bg-white flex flex-col items-center justify-center p-6 text-center overflow-y-auto w-full">
        <Brain className="w-24 h-24 text-[#58CC02] mb-6 shrink-0" />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 shrink-0">Exani-Prep</h1>
        <p className="text-gray-500 font-bold mb-10 shrink-0">Ingresa o crea tu perfil para guardar tu récord</p>
        
        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4 shrink-0">
          <input 
            type="text" 
            placeholder="Tu nombre (Ej: Oscar)" 
            className="w-full p-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#1CB0F6] font-bold text-gray-700 text-lg transition-colors"
            value={name}
            onChange={e => {setName(e.target.value); setErrorMsg('');}}
            maxLength={15}
          />
          <input 
            type="password" 
            placeholder="Contraseña sencilla" 
            className="w-full p-4 rounded-xl border-2 border-gray-200 outline-none focus:border-[#1CB0F6] font-bold text-gray-700 text-lg transition-colors"
            value={pwd}
            onChange={e => {setPwd(e.target.value); setErrorMsg('');}}
          />
          
          {errorMsg && <p className="text-[#FF4B4B] font-bold text-sm text-left px-2">{errorMsg}</p>}
          
          <button type="submit" className="w-full button-green rounded-2xl py-4 mt-4 text-xl tracking-widest font-extrabold uppercase button-3d touch-manipulation">
            Entrar
          </button>
        </form>
      </div>
    );
  };

  const TopBar = () => (
    <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-gray-200 px-5 pt-[max(1rem,env(safe-area-inset-top))] pb-3 flex justify-between items-center shadow-sm shrink-0">
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
    const activeSub = subjects.find(s => s.id === activeSubjectId)!;
    const currentProgress = progress[activeSubjectId] || [];

    return (
      <div className="pb-32 px-4 max-w-md mx-auto flex flex-col items-center w-full">
        {/* Subject scrollable tabs */}
        <div className="flex overflow-x-auto w-full gap-3 py-4 mt-2 px-2 snap-x hide-scrollbar">
          {subjects.map(sub => (
            <button 
              key={sub.id} 
              onClick={() => setActiveSubjectId(sub.id)}
              className={`snap-center shrink-0 px-5 py-3 rounded-2xl font-extrabold text-[15px] border-2 transition-all active:scale-95 button-3d
                ${activeSubjectId === sub.id ? 'bg-[#1CB0F6] text-white border-[#1899D6] shadow-[0_4px_0_#1899D6]' : 'bg-white text-gray-400 border-gray-200 shadow-[0_4px_0_#E5E5E5]'}
              `}
            >
              {sub.title}
            </button>
          ))}
        </div>

        <div className="text-center mt-6 mb-10 px-2">
          <h2 className="text-2xl font-extrabold text-gray-800">{activeSub.title}</h2>
          <p className="text-gray-500 font-bold mt-1 text-sm">{activeSub.description}</p>
        </div>

        <div className="flex flex-col items-center gap-8 relative w-full pt-4">
          {activeSub.levels.map((lvl, idx) => {
            const isCompleted = currentProgress.includes(lvl.id);
            const isUnlocked = idx === 0 || currentProgress.includes(activeSub.levels[idx - 1].id);
            
            const offset = Math.sin(idx * 0.8) * 50;
            const nextOffset = idx < activeSub.levels.length - 1 ? Math.sin((idx + 1) * 0.8) * 50 : 0;
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
                
                <div className="mt-3 font-extrabold text-gray-700 text-center max-w-[130px] text-[15px] leading-tight flex-col hidden sm:flex">
                  {lvl.title}
                </div>

                {idx < activeSub.levels.length - 1 && (
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
      <div className="h-[100dvh] w-full bg-white flex flex-col overflow-hidden pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="px-5 flex items-center justify-between mb-4 mt-2 shrink-0">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" strokeWidth={3} />
          </button>
          <div className="flex-1 mx-5 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#1CB0F6] transition-all duration-300" style={{ width: `${((theoryIndex) / activeLevel.theory.length) * 100}%` }}></div>
          </div>
        </div>
        
        <div className="flex-1 px-6 max-w-2xl mx-auto w-full flex flex-col overflow-y-auto pb-6">
          <h2 className="text-[26px] font-extrabold text-gray-800 mb-4 shrink-0">{activeLevel.title}</h2>
          <div className="bg-[#1CB0F6]/15 text-[#1CB0F6] font-extrabold p-2 px-4 rounded-xl w-max flex items-center gap-2 uppercase tracking-wide text-sm shrink-0 mb-4">
            <BookOpen className="w-5 h-5"/> Estudiar
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={theoryIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex-1 text-[20px] text-gray-700 font-semibold leading-relaxed flex flex-col justify-center"
            >
              {activeLevel.theory[theoryIndex]}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="p-4 px-6 border-t-2 border-gray-200 pb-[max(1rem,env(safe-area-inset-bottom))] shrink-0 bg-white z-10 w-full max-w-2xl mx-auto">
          <button 
            className="w-full button-blue rounded-2xl py-5 text-xl tracking-widest font-extrabold uppercase flex items-center justify-center gap-2 button-3d touch-manipulation"
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
      <div className="h-[100dvh] w-full flex flex-col overflow-hidden pt-[max(1rem,env(safe-area-inset-top))]">
        <div className="px-5 flex items-center justify-between mb-2 mt-2 shrink-0">
          <button onClick={() => setView('MAP')} className="text-gray-400 hover:text-gray-600">
            <X className="w-8 h-8" strokeWidth={3} />
          </button>
          <div className="flex-1 mx-5 h-4 bg-gray-200 rounded-full overflow-hidden">
             <div className="h-full bg-[#58CC02] transition-all duration-300" style={{ width: `${((currentQuestionIndex) / activeLevel.quiz.length) * 100}%` }}></div>
          </div>
        </div>

        <div className="flex-1 px-5 max-w-2xl mx-auto w-full flex flex-col overflow-y-auto pb-6">
          <div className="flex-1 flex flex-col justify-end">
             <h2 className="text-[22px] font-extrabold text-gray-800 mb-6 leading-snug">{question.question}</h2>
          </div>
          
          <div className="flex flex-col gap-3 shrink-0">
            {question.options.map((opt, idx) => (
              <button
                key={idx}
                disabled={isAnswerChecked}
                onClick={() => setSelectedOption(idx)}
                className={`
                  p-4 rounded-xl border-[3px] font-bold text-left text-[17px] transition-all active:scale-95 touch-manipulation
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

        <div className={`p-5 border-t-2 w-full shrink-0 pb-[max(1rem,env(safe-area-inset-bottom))] transition-colors ${
          !isAnswerChecked ? 'border-gray-200 bg-white' : 
          isCorrect ? 'border-[#58CC02] bg-[#d7ffb8]' : 'border-[#FF4B4B] bg-[#ffdfe0]'
        }`}>
          {isAnswerChecked && (
             <div className={`mb-2 font-extrabold text-xl flex items-center gap-2 ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
                {isCorrect ? <><Check className="w-7 h-7" strokeWidth={4}/> ¡Excelente!</> : <><X className="w-7 h-7" strokeWidth={4}/> Incorrecto</>}
             </div>
          )}
          {isAnswerChecked && (
            <p className={`mb-4 font-bold text-[16px] leading-snug ${isCorrect ? 'text-[#58A700]' : 'text-[#EA2B2B]'}`}>
              {question.explanation}
            </p>
          )}

          <div className="max-w-2xl mx-auto w-full">
            <button 
              disabled={selectedOption === null && !isAnswerChecked}
              className={`w-full rounded-2xl py-4 text-xl tracking-widest font-extrabold uppercase flex items-center justify-center button-3d touch-manipulation
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
      </div>
    );
  };

  const SuccessView = () => (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center p-6 text-center pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] overflow-hidden">
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", bounce: 0.5 }}
        className="w-40 h-40 bg-[#FFC800] rounded-full flex items-center justify-center mb-8 shadow-[0_8px_0_#E6B500] shrink-0"
      >
        <Trophy className="w-20 h-20 text-white fill-current" />
      </motion.div>
      <h1 className="text-4xl font-black text-[#FFC800] mb-4 drop-shadow-sm shrink-0">¡Nivel Completado!</h1>
      <p className="text-xl text-gray-600 font-extrabold mb-8 shrink-0">+15 XP a tu progreso.</p>
      
      <div className="w-full mt-auto mb-4 max-w-sm shrink-0">
        <button 
          className="w-full button-green rounded-2xl py-5 text-xl tracking-widest font-extrabold uppercase disabled:opacity-50 button-3d touch-manipulation"
          onClick={() => setView('MAP')}
        >
          Continuar
        </button>
      </div>
    </div>
  );

  const ProfileView = () => {
    let globalCompleted = 0;
    let globalTotal = 0;
    Object.values(progress).forEach(arr => globalCompleted += arr.length);
    subjects.forEach(sub => globalTotal += sub.levels.length);

    return (
      <div className="min-h-screen flex flex-col items-center p-6 pt-[max(3rem,env(safe-area-inset-top))] pb-[env(safe-area-inset-bottom)]">
        <div className="w-32 h-32 bg-[#1CB0F6] rounded-full flex items-center justify-center mb-6 shadow-md border-4 border-white">
          <User className="w-16 h-16 text-white" />
        </div>
        <h1 className="text-3xl font-black text-gray-800 capitalize">{currentUser}</h1>
        <p className="text-xl text-gray-500 font-extrabold mt-2 mb-10">¡Sigue esforzándote!</p>

        <div className="w-full max-w-sm flex flex-col gap-4">
          <div className="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-[#FFC800] fill-current" />
              <span className="font-extrabold text-xl text-gray-700">Experiencia total</span>
            </div>
            <span className="font-black text-2xl text-[#FFC800]">{xp} XP</span>
          </div>
          <div className="flex items-center justify-between bg-white p-5 rounded-2xl border-2 border-gray-200">
            <div className="flex items-center gap-3">
              <Check className="w-8 h-8 text-[#58CC02] px-1" strokeWidth={4} />
              <span className="font-extrabold text-xl text-gray-700">Niveles (General)</span>
            </div>
            <span className="font-black text-2xl text-[#58CC02]">{globalCompleted} / {globalTotal}</span>
          </div>
        </div>

        <div className="w-full max-w-sm mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full bg-white text-[#FF4B4B] border-2 border-[#FF4B4B] rounded-2xl py-5 text-lg font-extrabold uppercase flex items-center justify-center gap-2 active:bg-[#ffdfe0] transition-colors touch-manipulation"
          >
            <LogOut className="w-6 h-6" /> Cerrar sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 bg-white min-h-[100dvh]">
      {view === 'LOGIN' && <LoginView />}
      {(view === 'MAP' || view === 'PROFILE') && <TopBar />}
      {view === 'MAP' && <MapView />}
      {view === 'THEORY' && <TheoryView />}
      {view === 'QUIZ' && <QuizView />}
      {view === 'SUCCESS' && <SuccessView />}
      {view === 'PROFILE' && <ProfileView />}

      {(view === 'MAP' || view === 'PROFILE') && (
        <div className="fixed bottom-0 w-full bg-white border-t-2 border-gray-200 flex justify-around p-3 pb-[max(1rem,env(safe-area-inset-bottom))] z-50 shadow-[0_-4px_15px_rgba(0,0,0,0.03)] pb-safe">
          <button 
            onClick={() => setView('MAP')} 
            className={`flex flex-col items-center font-extrabold pb-1 ${view === 'MAP' ? 'text-[#58CC02]' : 'text-gray-400 hover:text-gray-500'}`}
          >
            <MapIcon className="w-8 h-8 mb-1" strokeWidth={2.5}/>
            <span className="text-[11px] uppercase tracking-wider">Aprender</span>
          </button>
          <button 
            onClick={() => setView('PROFILE')}
            className={`flex flex-col items-center font-extrabold pb-1 ${view === 'PROFILE' ? 'text-[#1CB0F6]' : 'text-gray-400 hover:text-gray-500'}`}
          >
             <User className="w-8 h-8 mb-1" strokeWidth={2.5}/>
             <span className="text-[11px] uppercase tracking-wider">Perfil</span>
          </button>
        </div>
      )}
    </div>
  );
}
