// 控件类型·
type IFromType = 'input' | 'password' | 'select' | 'datepicker'

export interface selectOptionsType {
  label: string
  value: string
}

export interface IFromItem {
  field: string
  type: IFromType
  label: string
  rules?: any
  placeholder?: any
  options?: selectOptionsType[]
  // 其他属性
  otherOptions?: any
  // 根据条件判断是否显示
  isShow?: boolean
}

export interface IForm {
  formItem: IFromItem[]
  labelWidth?: string
  itemStyle: any
  spanLayout: any
}
