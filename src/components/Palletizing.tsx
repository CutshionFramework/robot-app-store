import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './AppCard.module.css';

export default function Palletizing() {
  return (
    <Card
      sx={{
        maxWidth: 450,
        marginRight: '50px',
        borderRadius: '15px',
      }}>
      <CardMedia
        component="img"
        alt="Palletizing Robot"
        height="200"
        image="/palletizing-robot.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Palletizing Robot
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}>
          A robot for stacking books in a publishing factory
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Typography>
      </CardContent>
      <CardActions>
        <img
          className={styles.icon_image}
          src="/src/assets/icons/3.jpg"
          alt=""
        />
        <div className={styles.description}></div>
      </CardActions>
    </Card>
  );
}
