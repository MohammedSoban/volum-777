import React, { Component } from "react";
import { db } from "./../../firebase";
import Category from "./Category";
import { connect } from "react-redux";
import { categoryAction } from "../../store/actions";

class Categories extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    // this.getDataFromFirebase()
    this.props.getCategories();
  }

  // getDataFromFirebase = () => {
  //     let categoriesRef = db.collection('categories');
  //     let categories = []
  //     let allCities = categoriesRef.get()
  //         .then(snapshot => {
  //             snapshot.forEach(doc => {
  //                 console.log(doc.id, '=>', doc.data());
  //                 categories.push({
  //                     cId: doc.id,
  //                     name: doc.data().name
  //                 })
  //             });
  //             this.setState({
  //                 categories
  //             })
  //         })
  //         .catch(err => {
  //             console.log('Error getting documents', err);
  //         });

  //         let unsub = db.collection('categories').onSnapshot((a) => {
  //             // this.getDataFromFirebase()
  //         });

  // }

  render() {
    const { categories } = this.props;
    return (
      <div>
        {categories && categories.map((category, i) => {
          return <Category category={category} key={i} />;
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
    getCategories: () => dispatch(categoryAction.getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
