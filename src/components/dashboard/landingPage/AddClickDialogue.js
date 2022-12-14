import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import { blue } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';

const context = ['video', 'audio'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Media Type</DialogTitle>
      <List sx={{ pt: 0 }}>
        {context.map((item) => (
          <ListItem button onClick={() => handleListItemClick(item)} key={item}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <Link style={linkStyles} to={`/dashboard/media-upload/${item}`}>
              <ListItemText primary={item} style={textStyles} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default function AddClickDialogue({ name }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(context[1]);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    navigate('/dashboard/media-upload/exclusiveVideo');
  };

  return (
    <div>
      {name === 'Exclusive Videos' ? (
        <Button variant="outlined" onClick={handleClick}>
          + Add
        </Button>
      ) : (
        <Button variant="outlined" onClick={handleClickOpen}>
          + Add
        </Button>
      )}

      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}

const textStyles = { textTransform: 'capitalize', color: 'black' };
const linkStyles = { textDecoration: 'none' };
