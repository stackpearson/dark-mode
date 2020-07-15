import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = () => {
    
    const [storedValue, setStoredValue] = useLocalStorage();
    console.log('storedValue from useDarkMode', storedValue)

    useEffect(() => {
        // const bodyTag = document.getElementsByTagName('body')
        const bodyTag = document.getElementById('test')
        return storedValue ? bodyTag.classList.add('dark-mode') : bodyTag.classList.remove('dark-mode')
        // return (storedValue ? alert('returning true') : alert('returning false'))
    }, [storedValue]);

    return [storedValue, setStoredValue];

};

export default useDarkMode;