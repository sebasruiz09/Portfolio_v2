import React from "react";

interface UserState {
    theme: string;
    setTheme: (newTheme: string) => void;
    loadTheme: () => void;
}

const ThemeContext: React.Context<UserState> = React.createContext({
    theme: "light",
    setTheme: (_: string) => {},
    loadTheme: () => {},
});

interface ThemeProviderProps {
    children: React.ReactElement | React.ReactElement[];
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = React.useState<string>("light");

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    function setNewTheme(newTheme: string) {
        setTheme(newTheme);
    }

    function loadTheme() {
        const theme = localStorage.getItem("theme");
        if (!theme) localStorage.setItem("theme", "light");
        setTheme(theme || "light");
    }

    const preferences = {
        theme,
        setTheme: setNewTheme,
        loadTheme,
    };

    return (
        <ThemeContext.Provider value={preferences}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;
