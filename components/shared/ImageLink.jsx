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
            overlay={<Typography>{target}</Typography>}
          >
            {children}
          </Tooltip>
        )}
      >
        <Link href={href} target={ext ? '_blank' : '_self'}>
          <Box className="flex items-center justify-center">
            <Box className="box z-20" />
            <picture>
              <img alt={target} src={sqr ? `/assets/${target}-button.png` : `/assets/button.png`} />
            </picture>
            {!sqr ? (
              <Typography className="text-[1.5rem] sm:text-[2.5rem] capitalize absolute">
                {target}
              </Typography>
            ) : null}
          </Box>
        </Link>
      </ConditionalTooltipWrapper>
    </Box>
  );
}
