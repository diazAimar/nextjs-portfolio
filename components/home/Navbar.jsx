import { Box, ListItem, MenuItem, MenuList } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <Box className="h-1/12 border-2 border-red-500">
      <MenuList className="flex ">
        <MenuItem>
          <Link href="/">Home</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/about">About</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/works">Works</Link>
        </MenuItem>
      </MenuList>
    </Box>
  );
}
