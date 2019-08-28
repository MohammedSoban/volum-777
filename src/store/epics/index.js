import { combineEpics } from 'redux-observable'
import categoryEpic from './categoryEpic'

const rootEpic = combineEpics(
    categoryEpic.createCategory,
    categoryEpic.getCategories
)

export default rootEpic;