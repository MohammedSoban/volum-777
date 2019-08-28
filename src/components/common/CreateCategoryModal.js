import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { db } from "./../../firebase";
import { connect } from 'react-redux'
import { categoryAction } from '../../store/actions/categoryAction'

class CreateCategoryModal extends Component {
  state = {
    name: "",
  };


//   componentWillUpdate(prevProps) {
//     if(prevProps.createdCategory && !prevProps.createCompanyLoader && this.props.createCompanyLoader){
//         this.props.createdCategory(this.state.name)
//     }
//   }

  handleInput = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  createCategory = () => {
    this.props.createCategory(this.state.name)
  };

  render() {
    const { createCatOpen, setCreateCatOpen } = this.props;
    const { name } = this.state;
    return (
      <Dialog
        open={createCatOpen}
        onClose={() => setCreateCatOpen(false)}
        aria-labelledby="form-dialog-title"
      >
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

const mapStateToProps = (state) => {
    // const {categoryReducer: {createdCategory, createdCategoryError, createdCategoryLoader}} = state
    return{
        // createdCategory, createdCategoryError, createdCategoryLoader
        // createdCategory: state.createdCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createCategory: (category) => dispatch(categoryAction.createCategory(category))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCategoryModal);
