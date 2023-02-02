import Link from 'next/link';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import ConditionalTooltipWrapper from '../home/ConditionalTooltipWrapper';

import { Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function ImageLink({ href, target, ext, sqr }) {
  const targetLowercase = target.toLowerCase();
  const [showShadow, setShowShadow] = useState(true);

  return (
    <Box
      className={
        `relative active:translate-y-[8px] ` +
        (sqr ? `w-[100px] sm:w-[110px] ` : ` w-[220px] sm:w-[250px]`)
      }
      onPointerDown={() => setShowShadow(false)}
      onPointerUp={() => setShowShadow(true)}
      onPointerOut={() => setShowShadow(true)}
      /*       onMouseDown={() => setShowShadow(false)}
      onTouchStart={() => setShowShadow(false)}
      onTouchEnd={() => setShowShadow(true)}
      onMouseUp={() => setShowShadow(true)}
      onMouseOut={() => setShowShadow(true)} */
    >
      <Box
        className={
          ` h-full w-full absolute top-[-2px] ` +
          (showShadow ? 'shadow-[0_10px_0_0_rgba(14,7,27,1)] rounded-[15px] pb-2' : ' shadow-none')
        }
      ></Box>
      <ConditionalTooltipWrapper
        target={target}
        wrapper={(children) => (
          <Tooltip
            placement="bottom"
            trigger={['hover']}
            overlay={<Typography>{target}</Typography>}
          >
            {children}
          </Tooltip>
        )}
      >
        <Link href={href} target={ext ? '_blank' : '_self'} title={target}>
          <video
            src={`/assets/${targetLowercase}-button-hover.webm`}
            preload="auto"
            onMouseOver={(e) => {
              e.currentTarget.play();
            }}
            onMouseOut={(e) => {
              e.currentTarget.currentTime = '0';
              e.currentTarget.pause();
            }}
            muted
            loop
          >
            Your browser does not support the <code>video</code> element. Click here to go to{' '}
            {target}
          </video>
        </Link>
      </ConditionalTooltipWrapper>
    </Box>
  );
}
