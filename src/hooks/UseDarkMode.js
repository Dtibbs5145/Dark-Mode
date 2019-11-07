import React, { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initValue) => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage(key, initValue)

    useEffect(() => {
        isDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }
    return [isDarkMode, toggleDarkMode]
}

export default useDarkMode;