import React, { createContext, useContext, useReducer } from 'react'
import { ACTIONS } from '../const'
import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

const productContext = createContext()
export const useProduct = () => useContext(productContext)

const INIT_STATE = {
	product: []
}

const reducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case ACTIONS.GET:
			return { ...state, product: action.payload }
		default:
			return state
	}
}

const ProductContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INIT_STATE)

	const productCollectionRef = collection(db, 'test')

	async function addProduct(newProduct) {
		await addDoc(productCollectionRef, newProduct)
		readProduct()
	}

	async function readProduct() {
		const data = await getDocs(productCollectionRef)
		const response = data.docs.map(item => ({ id: item.id, ...item.data() }))

		dispatch({
			type: ACTIONS.GET,
			payload: response
		})
	}
	async function deleteProduct(id) {
		await deleteDoc(doc(productCollectionRef, id))
		dispatch({
			type: ACTIONS.DELETE,
			payload: id
		})
		readProduct()
	}

	const values = {
		addProduct,
		readProduct,
		deleteProduct,
		products: state.product
	}

	return (
		<productContext.Provider value={values}>{children}</productContext.Provider>
	)
}

export default ProductContext
