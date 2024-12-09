import styles from './AppList.module.css';
import AppData from '../mock/app-data.json';
import axios from 'axios';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import GetAppIcon from '@mui/icons-material/GetAppRounded';

export default function AppList() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  console.log(backendUrl);

  async function handleButtonClick(app_state: string) {
    try {
      if (app_state === 'Get') {
        const response = await axios.post(
          `${backendUrl}/api/download`,
          { image_name: 'sromerof202/palletizing_app-server:latest' } // 데이터
        );
        console.log(response.data);
      } else if (app_state === 'Run') {
        const response = await axios.post(
          `${backendUrl}/api/open`,
          { image_name: 'sromerof202/palletizing_app-server:latest' } // 데이터
        );
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <List>
        {AppData.map((app) => (
          <ListItem
            className={styles.list_item}
            key={app.id}
            alignItems="flex-start"
          >
            <ListItemIcon>
              <img
                className={styles.icon_image}
                src={`/src/assets/icons/${app.id}.jpg`}
                alt="app_icon"
              />
            </ListItemIcon>
            <ListItemText
              primary={<strong>{app.name}</strong>}
              secondary={app.description}
            />
            <Button
              style={{ color: 'black' }}
              endIcon={<GetAppIcon />}
              className={styles.app_list_button}
              onClick={() => handleButtonClick(app.app_state)}
            >
              {app.app_state}
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}
