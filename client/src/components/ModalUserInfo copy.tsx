import React from 'react';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import UserInfoCard from './UserInfoCard';
import { clearCurrentItem } from '../redux/slices/items/itemsSlice';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function ModalUserInfo(): JSX.Element {
  const dispatch = useAppDispatch();
  const show = useAppSelector((state) => state.itemsSlice.currentItem);
  return (
    <div>
      <Modal
        open={!!show}
        onClose={() => dispatch(clearCurrentItem())}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UserInfoCard />
        </Box>
      </Modal>
    </div>
  );
}
