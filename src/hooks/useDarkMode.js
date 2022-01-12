import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("toggle", initialValue);
  return [darkMode, setDarkMode]
}

export default useDarkMode;