import styles from './Header.module.css';
import { Avatar } from 'react-lorem-ipsum';
import Icon from '@mui/material/Avatar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.header_title}>
        <h1>Robot App Store</h1>
      </div>

      <div className={styles.header_sub}>
        <div className={styles.header_icons}>
          <Icon
            sx={{
              marginRight: '30px',
              backgroundColor: 'none',
            }}>
            <SearchIcon />
          </Icon>
          <Icon>
            <HelpOutlineIcon />
          </Icon>
        </div>
        <div className={styles.header_avatar}>
          <Avatar />
        </div>
      </div>
    </header>
  );
}
