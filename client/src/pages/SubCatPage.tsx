/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Box, Card, CardContent, CardActionArea, Container, Grid, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkSubcatsLoad } from '../redux/slices/subcats/createAsyncThunk';
import SubCategoryCard from '../components/SubCategoryCard';

export default function SubCatPage(): JSX.Element {
  // const { id } = useParams();
  // const dispatch = useAppDispatch();
  // const subCats = useAppSelector((state) => state.subcatsSlice.subcats);

  // React.useEffect(() => {
  //   if (id) {
  //     void dispatch(thunkSubcatsLoad(+id));
  //   }
  // }, []);

  return (
    <Container sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Grid style={{height: '48px'}}/>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center', paddingBottom: '30px' }}>
        Выберите подкатегорию
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Link to="/subcats/items/1">
            <Card sx={{ width: 375, alignContent: 'center' }}>
              <CardActionArea
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
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
                    background: `transparent url('https://cdn-icons-png.flaticon.com/512/9090/9090800.png') 50% 50% / cover no-repeat`,
                  }}
                >
                  <source
                    src="https://cdn-icons-mp4.flaticon.com/512/9090/9090800.mp4"
                    type="video/mp4"
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Настольные Игры
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Link to="/subcats/items/1">
            <Card sx={{ width: 375, alignContent: 'center' }}>
              <CardActionArea
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
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
                    background: `transparent url('https://cdn-icons-png.flaticon.com/512/8312/8312314.png') 50% 50% / cover no-repeat`,
                  }}
                >
                  <source
                    src="https://cdn-icons-mp4.flaticon.com/512/8312/8312314.mp4"
                    type="video/mp4"
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Музыка
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Link to="/subcats/items/1">
            <Card sx={{ width: 375, alignContent: 'center' }}>
              <CardActionArea
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
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
                    background: `transparent url('https://cdn-icons-png.flaticon.com/512/8722/8722471.png') 50% 50% / cover no-repeat`,
                  }}
                >
                  <source
                    src="https://cdn-icons-mp4.flaticon.com/512/8722/8722471.mp4"
                    type="video/mp4"
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Книги
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>


        <Grid item xs={2} sm={4} md={4}>
          <Link to="/subcats/items/1">
            <Card sx={{ width: 375, alignContent: 'center' }}>
              <CardActionArea
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
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
                    background: `transparent url('https://cdn-icons-png.flaticon.com/512/9889/9889648.png') 50% 50% / cover no-repeat`,
                  }}
                >
                  <source
                    src="https://cdn-icons-mp4.flaticon.com/512/9889/9889648.mp4"
                    type="video/mp4"
                  />
                </Box>

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Компьютерные игры
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Link>
        </Grid>


      </Grid>
    </Container>
  );
}
