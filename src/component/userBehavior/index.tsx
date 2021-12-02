import { useState } from 'react';
import { Progress, Tag } from 'antd';
import '@ant-design/pro-list/dist/list.css';
import '@ant-design/pro-form/dist/form.css';
import ProList from '@ant-design/pro-list';
import { ProFormRadio } from '@ant-design/pro-form';
import './userBehavior.scss';

const data = [
  '机构1',
  '机构2',
  '机构3',
  '机构4',
  '机构5',
  '机构6',
  '机构7',
  '机构8',
  '机构9',
  '机构10',
  '机构11',
  '机构12',
  '机构13',
  '机构14',
  '机构15',
  '机构16',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">区块链</Tag>,
  actions: [<a key="run">详情</a>, <a key="delete">删除</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>上链中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export default () => {
  const [cardActionProps, setCardActionProps] = useState<'actions' | 'extra'>('extra');
  return (
    <div className="userBehavior-container">
      <ProFormRadio.Group
        label=""
        options={[
          {
            label: 'action',
            value: 'actions',
          },
          {
            label: 'extra',
            value: 'extra',
          },
        ]}
        fieldProps={{
          value: cardActionProps,
          onChange: (e) => setCardActionProps(e.target.value),
        }}
      />
      <ProList<any>
        pagination={{
          defaultPageSize: 8,
          showSizeChanger: false,
        }}
        rowSelection={{}}
        grid={{ gutter: 16, column: 2 }}
        metas={{
          title: {},
          subTitle: {},
          type: {},
          avatar: {},
          content: {},
          actions: {
            cardActionProps,
          },
        }}
        headerTitle="公益记录展示"
        dataSource={data}
      />
    </div>
  );
}

