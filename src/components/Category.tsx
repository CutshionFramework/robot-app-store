import Button from '@mui/material/Button';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import FactoryRoundedIcon from '@mui/icons-material/FactoryRounded';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import Stack from '@mui/material/Stack';

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        style={{ borderRadius: '15px' }}
        variant="contained"
        startIcon={<FastfoodRoundedIcon />}>
        Food / Beverage
      </Button>
      <Button
        style={{ borderRadius: '15px' }}
        variant="outlined"
        startIcon={<FactoryRoundedIcon />}>
        Industrial
      </Button>
      <Button
        style={{ borderRadius: '15px' }}
        variant="outlined"
        startIcon={<MovieCreationIcon />}>
        Entertainment
      </Button>
    </Stack>
  );
}
// export default function Category() {
//   return (
//     <div className={styles.container}>
//       <ul className={styles.category_list}>
//         {CategoryData.map((data) => (
//           <li key={data.id}>
//             <img
//               className={styles.category_icon}
//               src={`/src/assets/icons/${data.icon_name}.png`}
//               alt=""
//             />
//             {data.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
