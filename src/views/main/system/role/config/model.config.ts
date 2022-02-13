import { IForm } from '@/base-ui/form/index'
export const modelConfig: IForm = {
  // 组件样式
  itemStyle: {
    padding: '0'
  },
  // 配置位置
  spanLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  },
  // 表单值
  formItem: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      rules: [
        {
          required: true,
          message: '请输入角色名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 7,
          message: '角色名只能在2和7之间',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '介绍',
      rules: [
        {
          required: true,
          message: '请输入简介',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入简介'
    }
  ]
}
