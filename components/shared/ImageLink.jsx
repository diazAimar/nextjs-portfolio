import Link from 'next/link';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import ConditionalTooltipWrapper from '../home/ConditionalTooltipWrapper';

import { Box, Typography } from '@mui/material';

export default function ImageLink({ href, target, ext, sqr }) {
  return (
    <Box
      className={
        `shadow-[0_8px_0_0_rgba(14,7,27,1)] active:shadow-none active:translate-y-[8px] rounded-[15px] relative` +
        (sqr ? ` w-[88px] sm:w-[110px] ` : ` w-[200px] sm:w-[250px]`)
      }
    >
      <ConditionalTooltipWrapper
        target={target}
        wrapper={(children) => (
          <Tooltip
            placement="bottom"
            trigger={['hover']}
            overlay={<Typography className="font-NokiaFC22">{target}</Typography>}
          >
            {children}
          </Tooltip>
        )}
      >
        <Link href={href} target={ext ? '_blank' : '_self'} className="">
          <video
            src={`/assets/${target}-button/${target}-button-hover.webm`}
            className=""
            onMouseOver={(e) => {
              e.currentTarget.play();
              console.log('as');
            }}
            onMouseOut={(e) => {
              e.currentTarget.pause();
              e.currentTarget.currentTime = 0;
            }}
            muted
            loop
          >
            Your browser does not support the <code>video</code> element.
          </video>
        </Link>
      </ConditionalTooltipWrapper>
    </Box>
  );
}
