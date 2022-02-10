export const contentTableList = {
  // 表格配置
  listData: [
    {
      prop: 'id',
      label: '商品id',
      minWidth: '80'
    },
    {
      prop: 'name',
      label: '商品名称',
      minWidth: '120',
      showOverflowTooltip: true
    },

    {
      prop: 'imgUrl',
      label: '照片',
      minWidth: '80',
      slotName: 'img'
    },
    {
      prop: 'oldPrice',
      label: '原价',
      minWidth: '80',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价',
      minWidth: '80',
      slotName: 'newPrice'
    },
    {
      prop: 'address',
      label: '地址',
      minWidth: '120',
      showOverflowTooltip: true
    },
    {
      prop: 'status',
      label: '状态',
      minWidth: '80',
      slotName: 'status'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotName: 'createAt'
    },
    // 操作
    {
      label: '操作',
      minWidth: '160',
      slotName: 'handler',
      fixed: 'right'
    }
  ],
  // 是否显示序号
  showIndex: false,
  // 是否开启选择
  showSelection: true,
  // 标题
  title: '商品列表'
}
