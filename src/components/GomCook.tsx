import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './AppCard.module.css';

export default function GomCook() {
  return (
    <Card
      sx={{
        maxWidth: 450,
        marginRight: '50px',
        borderRadius: '15px',
      }}>
      <CardMedia
        component="img"
        alt="Gom Cook"
        height="200"
        image="/gom-cook.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Gom Cook
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}>
          A cooking robot that supports personalized customized
          cooking
        </Typography>
      </CardContent>
      <CardActions>
        <img
          className={styles.icon_image}
          src="/src/assets/icons/1.jpg"
          alt=""
        />
        <div className={styles.description}>
          <div className={styles.app}>Gom Cook</div>
          <div className={styles.company}>cutshion</div>
        </div>
      </CardActions>
    </Card>
  );
}
