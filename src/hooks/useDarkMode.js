import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
    const [darkValue, setDarkValue] = useLocalStorage("darkKey", false);

    useEffect(() => {
        darkValue ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
    }, [darkValue])

    return [darkValue, setDarkValue];
}