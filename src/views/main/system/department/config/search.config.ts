import { IForm } from '@/base-ui/form/index'
export const fromConfig: IForm = {
  // label宽度
  labelWidth: '110px',
  // 组件样式
  itemStyle: {
    padding: '10px, 20px'
  },
  // 配置位置
  spanLayout: {
    xl: 8,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  },
  // 表单值
  formItem: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入部门角色id'
    },
    {
      field: 'name',
      type: 'input',
      label: '部门名称',
      rules: [],
      placeholder: '请输入部门名称'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
