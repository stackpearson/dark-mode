import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    
    const [storedValue, setStoredValue] = useLocalStorage();
    console.log('storedValue from useDarkMode', storedValue)

    useEffect(() => {
        let bodyTag = document.getElementsByTagName('body')[0];
        return storedValue ? bodyTag.classList.add('dark-mode') : bodyTag.classList.remove('dark-mode')
    }, [storedValue]);

    return [storedValue, setStoredValue];

};

export default useDarkMode;