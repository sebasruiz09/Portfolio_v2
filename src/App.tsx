import { ThemeProvider } from "./context/themeContext";
import './styles/_index.scss';
import { Home } from "./components/Pages/home/home";

function App() {
    return (
        <div>
            <ThemeProvider>
                <Home />
            </ThemeProvider>
        </div>
    );
}

export default App;
