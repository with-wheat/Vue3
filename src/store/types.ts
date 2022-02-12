import { systemTypes } from '@/service/main/system/types'
import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  departmentInfo: any[]
  roleInformation: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: systemTypes
}
export type IStoreType = IRootState & IRootWithModule
