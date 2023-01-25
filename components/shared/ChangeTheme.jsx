import { Box, Typography } from '@mui/material';
import React from 'react';

import { useAtom } from 'jotai';
import { selectedTheme } from '../../pages/_app';
import { theme1, theme2 } from '../../styles/themes';

export default function ChangeTheme() {
  const [selectedThemeValue, setSelectedThemeValue] = useAtom(selectedTheme);

  const handleThemeChange = () => {
    selectedThemeValue === theme1 ? setSelectedThemeValue(theme2) : setSelectedThemeValue(theme1);
  };

  return (
    <Box className="cursor-pointer absolute top-[27px] right-[54px] " onClick={handleThemeChange}>
      <button
        component={'span'}
        className={
          (selectedThemeValue === theme1 ? ' disabled border-b-2 ' : ' opacity-50 ') +
          ' font-Abadon flex items-baseline capitalize text-white text-[1.6rem] '
        }
      >
        Aa
      </button>
    </Box>
  );
}
