import NoteApp from "./components/Noteapp";
import useThemeStore from "./store/useThemeStore";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const App = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      {/* MAIN APP CONTENT */}
      <div
        className="min-h-screen"
        style={{
          color: theme === "light" ? "#333" : "#fff",
          backgroundColor: theme === "light" ? "#fff" : "#333",
        }}
      >
        <NoteApp />
      </div>

      {/* FLOATING BUTTON (OUTSIDE LAYOUT) */}
      <button
        onClick={toggleTheme}
        className="
          fixed bottom-6 right-6 z-50
          bg-slate-400 p-4 rounded-full
          shadow-lg hover:scale-105 transition
        "
      >
        {theme === "light" ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
      </button>
    </>
  );
};

export default App;
