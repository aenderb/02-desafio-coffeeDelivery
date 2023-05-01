import { ReactNode, createContext, useEffect, useState } from 'react'
import { Icard } from '../pages/Home/Components/CoffeeList'
import { produce } from 'immer'

export interface ICartItem extends Icard {
  count: number
}

interface ICartContext {
  cartItems: ICartItem[]
  cartQuantity: number
  cartCoffeeTotal: number
  addCardToCart: (card: ICartItem) => void
  changeCountCartCoffeeItem: (
    cartItemId: string,
    type: 'increment' | 'decrement',
  ) => void
  removeCartCoffeeItem: (cartItemId: string) => void
  resetCart: () => void
}

interface CartContextProviderPros {
  children: ReactNode
}

export const CartContext = createContext({} as ICartContext)

export function CartContextProvider({ children }: CartContextProviderPros) {
  const [cartItems, setCartItems] = useState<ICartItem[]>(() => {
    const storageCartItems = localStorage.getItem('coffeeDelivery:cartItems')
    if (storageCartItems) {
      return JSON.parse(storageCartItems)
    }
    return []
  })

  // salva array de cafés no carrinho dentro do local storage
  useEffect(() => {
    localStorage.setItem('coffeeDelivery:cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const cartQuantity = cartItems.length

  function addCardToCart(card: ICartItem) {
    // Buscar se card já existe no carrinho, se nao existir findIndex retorna -1
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === card.id,
    )

    // se o card nao existir no carrinho adiciona-lo, senao somente acresentar o count
    const Cart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(card)
      } else {
        draft[coffeeAlreadyExistsInCart].count += card.count
      }
    })
    setCartItems(Cart)
  }

  function changeCountCartCoffeeItem(
    cartItemId: string,
    type: 'increment' | 'decrement',
  ) {
    const Cart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        const item = draft[coffeeAlreadyExistsInCart]
        draft[coffeeAlreadyExistsInCart].count =
          type === 'increment' ? item.count + 1 : item.count - 1
      }
    })
    setCartItems(Cart)
  }

  function removeCartCoffeeItem(cartItemId: string) {
    const Cart = produce(cartItems, (draft) => {
      const coffeeAlreadyExistsInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId,
      )

      if (coffeeAlreadyExistsInCart >= 0) {
        draft.splice(coffeeAlreadyExistsInCart, 1)
      }
    })
    setCartItems(Cart)
  }

  const cartCoffeeTotal = cartItems.reduce((acc, cartItem) => {
    return acc + cartItem.price * cartItem.count
  }, 0)

  function resetCart() {
    setCartItems([])
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCardToCart,
        changeCountCartCoffeeItem,
        removeCartCoffeeItem,
        cartCoffeeTotal,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
