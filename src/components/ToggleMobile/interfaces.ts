import { Dispatch, SetStateAction } from 'react'
export interface PropsToggleMobile {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  isOpen: boolean
}
