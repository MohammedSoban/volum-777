import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { db } from "./../../firebase";
import { connect } from "react-redux";
import { categoryAction } from "../../store/actions/categoryAction";
import ReactLoading from 'react-loading';

class CreateCategoryModal extends Component {
  state = {
    name: ""
  };

  handleInput = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  createCategory = () => {
    this.props.createCategory({ name: this.state.name });
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.createCategoryLoader &&
      !this.props.createCategoryLoader &&
      this.props.createdCategory
    ) {
      this.props.setCreateCatOpen(false);
    }
  }

  render() {
    const {
      createCatOpen,
      setCreateCatOpen,
      createdCategory,
      createCategoryError,
      createCategoryLoader
    } = this.props;
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
          <Button
            disabled={createCategoryLoader}
            onClick={() => {
              this.createCategory();
              // setCreateCatOpen(false);
            }}
            color="primary"
          >
            {createCategoryLoader ? (<ReactLoading type={'bars'} color={'#0097A7'} height={'20px'} width={'20pxy'} />) : "Submit"}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  const {
    categoryReducer: {
      createdCategory,
      createCategoryError,
      createCategoryLoader
    }
  } = state;
  return {
    createdCategory,
    createCategoryError,
    createCategoryLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCategory: category => dispatch(categoryAction.createCategory(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateCategoryModal);
