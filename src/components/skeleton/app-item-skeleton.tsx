import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  Skeleton,
} from '@mui/material';

export default function AppListSkeleton() {
  return (
    <ListItem>
      <ListItemIcon>
        <Skeleton variant="rectangular" width={80} height={80} />
      </ListItemIcon>
      <ListItemText style={{ marginLeft: '20px' }}>
        <Skeleton
          style={{ marginBottom: '10px' }}
          variant="rectangular"
          width={78}
          height={18}
        />
        <Skeleton
          variant="rectangular"
          width={376}
          height={40}
        />
      </ListItemText>
      <Button>
        <Skeleton
          style={{ marginTop: '10px' }}
          variant="rectangular"
          width={86}
          height={55}
        />
      </Button>
    </ListItem>
  );
}
