import React, { useState } from 'react';

const useLocalStorage = (key, initValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initValue;
    })
    const setValue = value => {
        setStoredValue(value)
        
    }
}