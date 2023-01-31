import Link from 'next/link';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import ConditionalTooltipWrapper from '../home/ConditionalTooltipWrapper';

import { Box, Typography } from '@mui/material';

export default function ImageLink({ href, target, ext, sqr }) {
  const targetLowercase = target.toLowerCase();
  return (
    <Box
      className={
        `shadow-[0_8px_0_0_rgba(14,7,27,1)] active:shadow-none active:translate-y-[8px] rounded-[15px] relative` +
        (sqr ? ` w-[110px] ` : ` w-[250px]`)
      }
    >
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
        <Link href={href} target={ext ? '_blank' : '_self'}>
          <video
            src={`/assets/${targetLowercase}-button-hover.webm`}
            onMouseOver={(e) => {
              e.currentTarget.play();
            }}
            onMouseOut={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
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
