import React, { useState, createContext } from 'react'
import { Alert } from 'react-native'
import { handleError } from '../utils/errorHandling'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)

  const getById = async (id) => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(product => setProduct(product))
  }

  return (
    <ProductContext.Provider value={{ product, getById }}>
      { children }
    </ProductContext.Provider>
  )
}