import React from 'react';
import { Toggle } from './Toggle';

interface IProps {}

export const ThemeSwitcher: React.FC<IProps> = () => {
  const [theme, setTheme] = React.useState<string>('');
  const handleToggleTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  React.useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      // setTheme("light");
      setTheme('dark'); // always dark
    }
  }, []);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return <Toggle label="Darkmode" />;
};
