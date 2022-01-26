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
      type: 'input',
      label: 'id',
      placeholder: '请输入用户id'
    },
    {
      type: 'input',
      label: '用户名',
      rules: [],
      placeholder: '请输入用户名'
    },
    {
      type: 'input',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      type: 'select',
      label: '喜欢的运动',
      options: [
        {
          label: '篮球',
          value: 'basketball'
        },
        {
          label: '足球',
          value: 'football'
        }
      ],
      placeholder: '请输入喜欢的运动'
    },
    {
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
