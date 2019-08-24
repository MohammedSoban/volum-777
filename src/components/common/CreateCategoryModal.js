import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { db } from './../../firebase'

export default class CreateCategoryModal extends Component {
    state = {
        name: ''
    }

    handleInput = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    createCategory = () => {
        const { setCreateCatOpen } = this.props
        db.collection("categories").doc().set({
            name: this.state.name
        })
            .then(() => {
                console.log("Added Category!");
                this.setState({ name: '' })
                setCreateCatOpen(false)
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
    }

    render() {
        const { createCatOpen, setCreateCatOpen } = this.props
        const { name } = this.state
        return (
            <Dialog open={createCatOpen} onClose={() => setCreateCatOpen(false)} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Category</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Category Name"
                        type="text"
                        fullWidth
                        value={name}
                        onChange={this.handleInput}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setCreateCatOpen(false)} color="primary">
                        Cancel
                  </Button>
                    <Button onClick={this.createCategory} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

