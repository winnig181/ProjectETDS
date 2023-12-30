import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useAppDispatch } from '../../redux/hook';
import type { PostType } from '../../types/post/post';
import type { UserType } from '../../types/auth';
import { thunkPostsDelete, thunkPostsLoad } from '../../redux/slices/posts/createAsyncThunk';

type OnePostProps = {
  post: PostType;
  currentUser:UserType;
  wsPostDeleteHandler:(id:number)=>void;
};

function OnePost({ post,currentUser,wsPostDeleteHandler }: OnePostProps): JSX.Element {
  // console.log('currentUser>>>>>',currentUser);
  const dispatch= useAppDispatch();

  return (
    <Card variant="outlined">
      <CardContent>
      <Typography gutterBottom variant="body2" component="div">
          автор сообщения: {post.User?.name}
        </Typography>
        {/* <Typography gutterBottom variant="h3" component="div">
          {post.title}
        </Typography> */}
        <Typography gutterBottom variant="body1">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
      {currentUser && currentUser.id === post.userId && (
        <Button size="small" onClick={() => {
          void dispatch(thunkPostsDelete(post.id));
          wsPostDeleteHandler(post.id)}}>

        {/* void dispatch(thunkPostsLoad) */}
          Удалить
        </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default React.memo(OnePost);