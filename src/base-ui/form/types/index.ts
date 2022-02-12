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
}

export interface IForm {
  formItem: IFromItem[]
  labelWidth?: string
  itemStyle: any
  spanLayout: any
}
