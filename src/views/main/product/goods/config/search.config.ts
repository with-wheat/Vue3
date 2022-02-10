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
      label: '商品id',
      placeholder: '请输入商品ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      rules: [],
      placeholder: '请输入地址'
    },
    {
      field: 'status',
      type: 'select',
      label: '状态',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ],
      placeholder: '请选择状态'
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
