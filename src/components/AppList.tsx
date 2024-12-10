import { styled } from 'styled-components';
import styles from './AppList.module.css';
import AppData from '../mock/app-data.json';
import axios from 'axios';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import GetAppIcon from '@mui/icons-material/GetAppRounded';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

/*
 ? 1. docker-desktop 설치 여부 alert (생략해도 될듯)
 ? 2. 설치 후, 아이콘 변경
 ? 3. 실행버튼 -> /api/open 으로 데이터 전송
 */

/*     Button styled 컴포넌트     */
const AppListButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

/* 백엔드 서버랑 연결하는 코드 (vite앱 버전)  */
const backendUrl = import.meta.env.VITE_BACKEND_URL;

/*            App 다운로드            */
async function handleDownloadButton() {
  try {
    const response = await axios.post(
      `${backendUrl}/api/download`,
      { image_name: 'sromerof202/palletizing_app-server:latest' }
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

/*          App 실행             */
async function handleRunButton() {
  try {
    const response = await axios.post(`${backendUrl}/api/open`, {
      image_name: 'sromerof202/palletizing_app-server:latest',
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

/*        AppList 컴포넌트        */
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
              className={styles.list_content}
              primary={<strong>{app.name}</strong>}
              secondary={app.description}
            />
            <AppListButton onClick={handleDownloadButton}>
              Get <GetAppIcon />
            </AppListButton>

            <AppListButton onClick={handleRunButton}>
              Run
              <DownloadDoneIcon />
            </AppListButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
