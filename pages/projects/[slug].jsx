import { Box, Typography } from '@mui/material';
import Markdown from 'markdown-to-jsx';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Project() {
  const router = useRouter();
  const fileName = router.query.slug;
  let formattedName = '';
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
      <Link href="/" className="border-b-2">
        Go Home
      </Link>
      <Box className="mt-5 flex items-center gap-2">
        <Link href="/projects" className="border-b-2">
          Projects
        </Link>
        <Typography> &gt; {formattedName}</Typography>
      </Box>
      {isLoading ? (
        <Typography>Loading...</Typography>
      ) : (
        <Box className="mt-5 text-[1rem]">
          {project !== null ? <Markdown>{project.default}</Markdown> : null}
        </Box>
      )}
    </>
  );
}
