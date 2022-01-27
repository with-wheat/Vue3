// 用户列表请求参数
export interface systemTypes {
  offset: number
  size: number
  name?: string
  cellphone?: number
}
export interface systemInfo {
  url: string
  data: systemTypes
}
