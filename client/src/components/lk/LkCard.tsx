import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

type PropsLkCard = {
  text: string;
};

export default function LkCard({ text }: PropsLkCard): JSX.Element {
  return (
    <Card sx={{ width: 300, height: 180, marginTop: 5, padding: 4, display: 'flex', direction:'column', justifyContent:'center', alignItems:'center'}}>
      {/* <CardContent>

      </CardContent> */}
      <CardActions>
        <Typography variant="h5" component="div" sx={{ textAlign: 'center' }}>
          {text}
        </Typography>
        {/* <Button size="small">Go</Button> */}
      </CardActions>
    </Card>
  );
}
