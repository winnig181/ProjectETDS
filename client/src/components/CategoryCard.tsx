import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

type CategoryProps = {
  category: {
    categoryName: string

    id: number
  }
}

export default function CategoryCard({ category }: CategoryProps): JSX.Element {
  // const clickHandler = ():void => {
  //   window.location.href = `/categories/${category.id}`;
  // };

  return (
    <Link to={`/categories/${category.id}`}>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea style={{ cursor: 'pointer' }}
      // onClick={clickHandler}
      >
       <Box
        component="video"
        width={256}
        height={256}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          background: `transparent url('https://cdn-icons-png.flaticon.com/512/6451/6451064.png') 50% 50% / cover no-repeat`,
        }}
      >
        <source src="https://cdn-icons-mp4.flaticon.com/512/6451/6451064.mp4" type="video/mp4" />
      </Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {category.categoryName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
}



// <video width="256" height="256" preload="none" style="background: transparent  url('https://cdn-icons-png.flaticon.com/512/6451/6451064.png') 50% 50% / fit no-repeat;" autoplay="autoplay" loop="true" muted="muted" playsinline="">
//         <source src="https://cdn-icons-mp4.flaticon.com/512/6451/6451064.mp4" type="video/mp4">
//     </video>
