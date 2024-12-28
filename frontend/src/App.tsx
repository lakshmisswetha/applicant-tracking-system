import { ThemeProvider } from "./contexts/ThemeProvider";
import AppRouter from "./Approuter";

function App() {
    return (
        <ThemeProvider>
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
