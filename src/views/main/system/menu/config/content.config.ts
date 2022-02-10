import { Failed } from '@element-plus/icons-vue/dist/types'

export const contentTableList = {
  // 标题
  title: '菜单列表',
  // 表格配置
  listData: [
    {
      prop: 'name',
      label: '名称',
      minWidth: '100'
    },
    {
      prop: 'type',
      label: '类型',
      minWidth: '100'
    },
    {
      prop: 'url',
      label: '菜单url',
      minWidth: '100'
    },
    {
      prop: 'icon',
      label: '菜单图片',
      minWidth: '100'
    },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '100'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120',
      slotName: 'updateAt'
    },
    // 操作
    {
      label: '操作',
      minWidth: '150',
      slotName: 'handler',
      fixed: 'right'
    }
  ],
  // 是否显示序号
  showIndex: false,
  // 是否开启选择
  showSelection: false,
  // 配置树形展开方式
  childrenProps: {
    rowKey: 'id',
    treeProps: { children: 'children' }
  },
  showFooter: false
}
