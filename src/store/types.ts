import { systemTypes } from '@/service/main/system/types'
import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  age: number
}

export interface IRootWithModule {
  login: ILoginState
  system: systemTypes
}
export type IStoreType = IRootState & IRootWithModule
