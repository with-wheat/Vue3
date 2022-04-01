import { IChartTypes } from './chart/dashboard/types'
import { systemTypes } from '@/service/main/system/types'
import { ILoginState } from './login/types'
export interface IRootState {
  name: string
  departmentInfo: any[]
  roleInformation: any[]
  entryMenuList: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: systemTypes
  dashboard: IChartTypes
}
export type IStoreType = IRootState & IRootWithModule
