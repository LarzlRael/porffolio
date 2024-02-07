import { create } from 'zustand'

interface IAuthState {
  isLogged: boolean
  startSession: () => void
  logout: () => void
}

export const useAuthStore = create<IAuthState>((set) => {
  return {
    isLogged: false,
    startSession: () => {
      set({ isLogged: true })
    },
    logout: () => {
      window.localStorage.removeItem('token')
      set({ isLogged: false })
    },
  }
})

import { useState, createContext } from 'react'
type AuthContexsProps = {
  startSession: () => void
  isLogged: boolean
  logout: () => void
}
