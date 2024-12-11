import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import styles from './AppList.module.css';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import GetAppRounded from '@mui/icons-material/GetAppRounded';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AppListSkeleton from './skeleton/app-list-skeleton';

/*     Button styled 컴포넌트     */
const AppListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  background-color: rgb(52 52 52 / 90%);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 17px;
  width: 95px;
  height: 50px;

  cursor: pointer;

  &:hover {
    background-color: rgb(12 12 12 / 90%);
  }
`;

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
        );
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
    return (
      <div>
        <AppListSkeleton count={4} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Typography
        variant="h4"
        style={{ fontWeight: 'bold', marginLeft: '15px' }}
      >
        App List
      </Typography>
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
              style={{ marginRight: '10px' }}
              primary={<strong>{app.name}</strong>}
              secondary={app.description}
            />
            <AppListButton
              className={styles.app_list_button}
              onClick={() => handleButtonClick(app.app_state)}
            >
              <p>{app.app_state}</p>
              <div>
                {app.app_state === 'Get' ? (
                  <GetAppRounded />
                ) : (
                  <PlayCircleOutlineIcon />
                )}
              </div>
            </AppListButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
