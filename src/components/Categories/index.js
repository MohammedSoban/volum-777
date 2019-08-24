import React, { Component } from 'react'
import { db } from './../../firebase'
import Category from './Category'
export default class Categories extends Component {
    state = {
        categories: []
    }

    componentDidMount() {
        this.getDataFromFirebase()
    }

    getDataFromFirebase = () => {
        let categoriesRef = db.collection('categories');
        let categories = []
        let allCities = categoriesRef.get()
            .then(snapshot => {
                snapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    categories.push({
                        cId: doc.id,
                        name: doc.data().name
                    })
                });
                this.setState({
                    categories
                })
            })
            .catch(err => {
                console.log('Error getting documents', err);
            });

            let unsub = db.collection('categories').onSnapshot((a) => {
                // this.getDataFromFirebase()
            });
            
    }

    render() {
        const { categories } = this.state
        return (
            <div>
                {
                    categories.map((category, i) => {
                        return <Category category={category} key={i} />
                    })
                }

            </div>
        )
    }
}
