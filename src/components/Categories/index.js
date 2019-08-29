import React, { Component } from "react";
import { db } from "./../../firebase";
import Category from "./Category";
import { connect } from "react-redux";
import { categoryAction } from "../../store/actions";
import ReactLoading from 'react-loading';

class Categories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    // this.getDataFromFirebase()
    this.props.getCategories();
  }

  render() {
    const { categories , getCategoriesLoader} = this.props;
    return (
      <div>
        {
          getCategoriesLoader ? <div style={{margin: '0 auto', width: '20%', position: "absolute", top: '25%', left: '25%', right: '25%' }}><ReactLoading type={"spokes"} color={"#0097A7"} height={'20%'} width={'100%'} /></div> : ''
        }
        {categories && categories.map((category, i) => {
          return <Category category={category} key={i} getCategories={this.props.getCategories}/>;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { categories, getCategoriesError, getCategoriesLoader } = state.categoryReducer;
  return {
    categories,
    getCategoriesError,
    getCategoriesLoader
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: (payload) => dispatch(categoryAction.getCategories(payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
