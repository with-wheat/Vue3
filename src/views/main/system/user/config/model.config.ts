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
      label: '用户名',
      rules: [
        {
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        },
        {
          min: 2,
          max: 7,
          message: '用户名只能在2和7之间',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      rules: [
        {
          required: true,
          message: '请输入真实姓名',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      rules: [
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        },
        {
          min: 6,
          message: '密码至少6位',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入密码'
    },
    {
      field: 'passwordOK',
      type: 'password',
      label: '确认密码',
      rules: [
        {
          required: true,
          message: '请输入确认密码',
          trigger: 'blur'
        },
        {
          min: 6,
          message: '确认密码至少6位',
          trigger: 'blur'
        }
      ],
      placeholder: '请输入确认密码'
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'roleId',
      type: 'select',
      label: '角色',
      options: [
        {
          label: '角色1',
          value: '1'
        },
        {
          label: '角色2',
          value: '2'
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择角色',
          trigger: 'blur'
        }
      ],
      placeholder: '请选择角色'
    },
    {
      field: 'departmentId',
      type: 'select',
      label: '部门',
      options: [
        {
          label: '部门1',
          value: '1'
        },
        {
          label: '部门2',
          value: '2'
        }
      ],
      rules: [
        {
          required: true,
          message: '请选择部门',
          trigger: 'blur'
        }
      ],
      placeholder: '请选择部门'
    }
  ]
}
