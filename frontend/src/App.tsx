import { ThemeProvider } from "./contexts/ThemeProvider";
import AppRouter from "./Approuter";

function App() {
    return (
        <ThemeProvider defaultTheme="light">
            <AppRouter />
        </ThemeProvider>
    );
}

export default App;
