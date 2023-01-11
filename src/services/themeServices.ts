export function renderTheme(theme: string) {
    document.body.dataset["theme"] = theme || "light";
}
