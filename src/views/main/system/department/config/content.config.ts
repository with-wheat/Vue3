export const contentTableList = {
  // 表格配置
  listData: [
    {
      prop: 'name',
      label: '部门',
      minWidth: '100'
    },
    {
      prop: 'leader',
      label: '权限介绍',
      minWidth: '120'
    },
    {
      prop: 'parentId',
      label: '上级部门',
      minWidth: '120'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '130',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '130',
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
  showIndex: true,
  // 是否开启选择
  showSelection: true,
  // 标题
  title: '部门列表'
}
