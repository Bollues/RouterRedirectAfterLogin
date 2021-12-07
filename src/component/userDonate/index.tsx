import { useState } from "react";
import { Button, Tooltip } from 'antd';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { Empty } from 'antd';
import './userDonate.scss'

const valueEnum = {
  0: 'close',
  1: 'running',
  2: 'online',
  3: 'error',
};

export type TableListItem = {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  memo: string;
};
const tableListDataSource: TableListItem[] = [];

const creators = ['付小小', '曲丽丽', '林东东', '陈帅帅', '兼某某'];

for (let i = 0; i < 5; i += 1) {
  tableListDataSource.push({
    key: i,
    name: '公益单位',
    containers: Math.floor(Math.random() * 20),
    creator: creators[Math.floor(Math.random() * creators.length)],
    status: valueEnum[1],
    createdAt: Date.now() - Math.floor(Math.random() * 100000000000),
    memo: i % 2 === 1 ? '某某公益单位' : '某某爱心协会',
  });
}

const columns: ProColumns<TableListItem>[] = [
  {
    title: '项目名称',
    width: 80,
    dataIndex: 'name',
    render: (_) => <a>{_}</a>,
  },
  {
    title: '近30天收到公益次数',
    width: 180,
    dataIndex: 'containers',
    align: 'right',
    sorter: (a, b) => a.containers - b.containers,
  },
  {
    title: '状态',
    width: 120,
    dataIndex: 'status',
    initialValue: 'all',
    valueEnum: {
      all: { text: '全部', status: 'Default' },
      close: { text: '关闭', status: 'Default' },
      running: { text: '运行中', status: 'Processing' },
      online: { text: '已上线', status: 'Success' },
      error: { text: '异常', status: 'Error' },
    },
  },
  // {
  //   title: '创建者',
  //   width: 120,
  //   dataIndex: 'creator',
  //   valueEnum: {
  //     all: { text: '全部' },
  //     付小小: { text: '付小小' },
  //     曲丽丽: { text: '曲丽丽' },
  //     林东东: { text: '林东东' },
  //     陈帅帅: { text: '陈帅帅' },
  //     兼某某: { text: '兼某某' },
  //   },
  // },
  {
    title: (
      <>
        创建时间
        <Tooltip placement="top" title="这是一段描述">
          <QuestionCircleOutlined style={{ marginLeft: 4 }} />
        </Tooltip>
      </>
    ),
    width: 180,
    key: 'since',
    dataIndex: 'createdAt',
    valueType: 'date',
    sorter: (a, b) => a.createdAt - b.createdAt,
  },
  {
    title: '备注',
    dataIndex: 'memo',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '操作',
    width: 200,
    key: 'option',
    valueType: 'option',
    render: () => [
      <a key="link">上链</a>,
      <a key="link2">关注</a>,
      <a key="link3" style={{color: '#ff4d4f'}}>举报</a>,
    ],
  },
];

export default () => {
  const [userDonateData, setUserDonateData] = useState([111])

  return (
    <div className="userDonate-container">
      <p className="userDonate-title">可捐赠单位</p>
      {
        userDonateData.length <= 0 ? 
        <Empty /> :
        <ProTable<TableListItem>
          columns={columns}
          request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            return Promise.resolve({
              data: tableListDataSource,
              success: true,
            });
          }}
          rowKey="key"
          pagination={{
            showQuickJumper: true,
          }}
          search={false}
          dateFormatter="string"
          // toolBarRender={() => [
          //   <Button key="out">
          //     导出数据
          //     <DownOutlined />
          //   </Button>,
          //   <Button type="primary" key="primary">
          //     创建应用
          //   </Button>,
          // ]}
        />
      }
    </div>
  );
}