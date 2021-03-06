import React, {  useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { DialogActions, Dialog, DialogContent,DialogContentText,DialogTitle } from '@mui/material';

export function AddTask(props) {
    const [isOpen, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div className="btn newTask">

            <button type="button" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow " variant="outlined" onClick={() =>handleClickOpen()}>+ajouter une nouvelle tâche à votre Todo-List</button>
            <Dialog open={isOpen} onClose={() => handleClose()}>
                <DialogTitle>~TodoList</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        New Task
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        label="Title"
                        type=""
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="task"
                        label="Task"
                        type=""
                        fullWidth
                        size= "medium"
                        variant="standard"
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>handleClose()}>Cancel</Button>
                    <Button onClick={() => handleClose()}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>

    );
} 
