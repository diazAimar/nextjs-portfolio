import { Box, Button, Typography } from '@mui/material';
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
    <Box className="flex items-baseline absolute top-[20px] right-[54px] text-[1.2rem] ">
      <button
        onClick={handleThemeChange}
        disabled={selectedThemeValue === theme1}
        variant="contained"
        component={'span'}
        className={
          (selectedThemeValue === theme1 ? ' opacity-100 cursor-not-allowed ' : ' opacity-50 ') +
          ' font-Abadon capitalize  '
        }
      >
        Aa
      </button>
      <Typography className="cursor-context-menu mx-2">↔</Typography>
      <button
        onClick={handleThemeChange}
        disabled={selectedThemeValue === theme2}
        variant="contained"
        component={'span'}
        className={
          (selectedThemeValue === theme2 ? '  opacity-100 cursor-not-allowed ' : ' opacity-50 ') +
          ' font-sans capitalize  '
        }
      >
        Aa
      </button>
    </Box>
  );
}
