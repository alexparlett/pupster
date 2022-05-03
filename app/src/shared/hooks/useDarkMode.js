import {useState, useEffect} from 'react';
import {Appearance, useColorScheme} from 'react-native';

export default function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

  Appearance.addChangeListener(({colorScheme}) => {
    setIsDarkMode(colorScheme === 'dark');
  });

  return isDarkMode;
}
