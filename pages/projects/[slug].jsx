import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Box, Typography } from '@mui/material';
import { theme1, theme2 } from '../../styles/themes';

import Markdown from 'markdown-to-jsx';

import { useAtom } from 'jotai';
import { selectedTheme } from '../_app';

export default function Project() {
  const router = useRouter();
  const fileName = router.query.slug;
  let formattedName = '';
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [selectedThemeValue, setSelectedThemeValue] = useAtom(selectedTheme);

  const markdownStyles = {
    fontFamily: selectedThemeValue.typography.allVariants.fontFamily,
    letterSpacing: selectedThemeValue.typography.allVariants.letterSpacing,
    fontSize: selectedThemeValue.typography.allVariants.fontSize,
  };

  useEffect(() => {
    if (!router.isReady) return;
    const fetchProjectMd = async () => {
      const project = await import(`../../markdown/${fileName}.md`);
      setProject(project);
    };
    setIsLoading(false);
    fetchProjectMd();
  }, [fileName, router.query.slug, router.isReady]);

  if (!router.isReady) return;

  formattedName = fileName.replace(/-/g, ' ');
  formattedName = formattedName.charAt(0).toUpperCase() + formattedName.slice(1);

  return (
    <>
      <Link href="/">
        <Typography className="border-b-2 inline">Go Home</Typography>
      </Link>
      <Box className="mt-5 flex items-baseline gap-2">
        <Link href="/projects">
          <Typography className="border-b-2 inline">Projects</Typography>
        </Link>
        <Typography> &gt; {formattedName}</Typography>
      </Box>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box className="mt-5 text-[1.1rem]" style={markdownStyles}>
          {project !== null ? <Markdown>{project.default}</Markdown> : null}
        </Box>
      )}
    </>
  );
}
