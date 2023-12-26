import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

type PropsLkCard = {
  text: string;
};

export default function LkCard({ text }: PropsLkCard): JSX.Element {
  return (
    <Card sx={{ width: 300, height: 180, marginTop: 5, padding: 4, display: 'flex', direction:'column', justifyContent:'center', alignItems:'center', 
    border: '2px solid #35cdce',borderRadius: '8px',}}>
      <CardActions>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {text}
        </Typography>
      </CardActions>
    </Card>
  );
}
