import "./changeTheme.scss";
import React from "react";
import { renderTheme } from "@Portfolio/services/themeServices";
import ThemeContext from "@Portfolio/context/themeContext";

export const ChangeTheme = () => {
    const { theme, setTheme, loadTheme } = React.useContext(ThemeContext);

    React.useEffect(() => {
        loadTheme();
    }, []);

    React.useEffect(() => {
        renderTheme(theme);
    }, [theme]);

    function onChangeTheme(e: React.ChangeEvent<HTMLInputElement>) {
        const checked: boolean = e.target.checked;
        checked ? setTheme("dark") : setTheme("light");
    }

    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    onChange={(e) => onChangeTheme(e)}
                    id="checkTheme"
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};
