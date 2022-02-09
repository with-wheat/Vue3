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
      label: '用户id',
      placeholder: '请输入用户ID'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [],
      placeholder: '请输入真实姓名'
    },
    {
      field: 'callphone',
      type: 'input',
      label: '电话号码',
      rules: [],
      placeholder: '请输入电话号码'
    },
    {
      field: 'enable',
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
