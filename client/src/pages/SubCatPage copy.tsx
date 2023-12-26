/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { thunkSubcatsLoad } from '../redux/slices/subcats/createAsyncThunk';
import SubCategoryCard from '../components/SubCategoryCard';

export default function SubCatPage(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const subCats = useAppSelector((state) => state.subcatsSlice.subcats);

  React.useEffect(() => {
    if (id) {
      void dispatch(thunkSubcatsLoad(+id));
    }
  }, []);

  return (
    <Container sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Typography variant="h3" gutterBottom sx={{ textAlign: 'center' }}>
        Выберите подкатегорию:
      </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {subCats.map((subcat) => (
          <Grid item xs={2} sm={6} md={6} key={subcat.id}>
            <SubCategoryCard subcat={subcat} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
