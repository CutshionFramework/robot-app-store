import { useEffect, useState } from 'react';
import styles from './AppList.module.css';
import axios from 'axios';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetAppRounded';

// App 데이터 타입 정의
interface App {
  id: string;
  name: string;
  description: string;
  app_state: string;
}

// API 응답 데이터 타입 정의
interface ApiResponse {
  apps: App[];
}

export default function AppList() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL as string;
  const [appData, setAppData] = useState<App[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAppData() {
      try {
        const response = await axios.get<ApiResponse>(
          `${backendUrl}/api/get_app_state`
        ); // 서버에서 데이터 요청
        setAppData(response.data.apps);
        console.log(response.data.apps);
      } catch (err) {
        console.error('Error fetching app data:', err);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchAppData();
  }, [backendUrl]);

  async function handleButtonClick(app_state: string) {
    try {
      if (app_state === 'Get') {
        const response = await axios.post(`${backendUrl}/api/download`, {
          image_name: 'sromerof202/palletizing_app-server:latest',
        });
        console.log(response.data);
      } else if (app_state === 'Run') {
        const response = await axios.post(`${backendUrl}/api/open`, {
          image_name: 'sromerof202/palletizing_app-server:latest',
        });
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <List>
      {appData.map((app) => (
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
  );
}
