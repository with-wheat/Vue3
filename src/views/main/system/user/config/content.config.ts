export const contentTableList = {
  // 表格配置
  listData: [
    {
      prop: 'name',
      label: '姓名',
      minWidth: '100'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '100'
    },
    {
      prop: 'cellphone',
      label: '号码',
      minWidth: '150'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '100',
      slotName: 'state'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
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
  title: '用户列表'
}
