import { Typography } from '@mui/material';

import Link from 'next/link';

import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap_white.css';
import ConditionalTooltipWrapper from '../home/ConditionalTooltipWrapper';

export default function ImageLink({ href, target, ext, sqr }) {
  return (
    <Link
      href={href}
      className={sqr ? `w-[110px] h-[100px]` : `w-[250px] h-[100px]`}
      target={ext ? '_blank' : '_self'}
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
        <picture className="h-full flex items-end">
          <img
            src={`/assets/${target}-button/${target}-button.png`}
            onMouseOver={(e) =>
              (e.currentTarget.src = `/assets/${target}-button/${target}-button-hover.gif`)
            }
            onMouseOut={(e) =>
              (e.currentTarget.src = `/assets/${target}-button/${target}-button.png`)
            }
            onMouseUp={(e) =>
              (e.currentTarget.src = `/assets/${target}-button/${target}-button.png`)
            }
            onMouseDown={(e) =>
              (e.currentTarget.src = `/assets/${target}-button/${target}-button-clicked.png`)
            }
            alt={target + ' button'}
          />
        </picture>
      </ConditionalTooltipWrapper>
    </Link>
  );
}
