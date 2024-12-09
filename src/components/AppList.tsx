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

const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log(backendUrl);

async function handleButtonClick() {
  try {
    const response = await axios.post(
      `${backendUrl}/api/download`,
      { image_name: 'sromerof202/palletizing_app-server:latest' } // 데이터
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

export default function AppList() {
  return (
    <>
      <List>
        {AppData.map((app) => (
          <ListItem
            className={styles.list_item}
            key={app.id}
            alignItems="flex-start">
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
              onClick={handleButtonClick}>
              Get
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
}

{
  /* <div className={styles.AppList}>
        <h2>Pionoid App List</h2>
        <ul>
          {AppData.map((app) => (
            <>
              <li key={app.id}>
                <img
                  className={styles.icon_image}
                  src={`/src/assets/icons/${app.id}.jpg`}
                  alt="app_icon"
                />
                <div className={styles.app_list_content}>
                  <strong>{app.name}</strong>
                  <p>{app.description}</p>
                </div>
                <div className={styles.app_list_button}>
                  <Button
                    style={{ color: 'black' }}
                    endIcon={<GetAppIcon />}>
                    Get
                  </Button>
                </div>
              </li>
            </>
          ))}
        </ul>
      </div> */
}
