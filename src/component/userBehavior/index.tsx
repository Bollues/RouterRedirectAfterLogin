import { useState, useEffect, useContext } from 'react';
import { Progress, Tag } from 'antd';
import '@ant-design/pro-list/dist/list.css';
import '@ant-design/pro-form/dist/form.css';
import ProList from '@ant-design/pro-list';
import './userBehavior.scss';
import { getUserBehaviorById } from '../../api/user'
import { UserContext } from '../../App';
import { Empty } from 'antd';

let testData = [
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
]

const data = testData.map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">区块链</Tag>,
  actions: [<a key="run">详情</a>, <a key="delete">删除</a>],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div style={{ flex: 1 }}>
      <div style={{width: 200}}>
        <div>上链中</div>
        {/* <Progress percent={Math.random() * 100 | 0} /> */}
      </div>
    </div>
  ),
}));



export default () => {
  const user = useContext(UserContext)
  const [userBehaviorData , setUserBehaviorData] = useState(testData)

  useEffect(() => {
    getUserBehaviorById(user.userId).then(res => {
      if (res.data.code === 200) {
        console.log('res', res)
      } else if (res.data.code === 300){
        setUserBehaviorData(testData)
      } else {
        if (res.data.msg) window.alert(res.data.msg)
      }
    }).catch(e => e)
  }, [])

  return (
    <div className="userBehavior-container">
      <p className="userBehavior-title">公益记录展示</p>
      {
        userBehaviorData.length <= 0 ? 
        <Empty /> :
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
            actions: {cardActionProps: 'extra'},
          }}
          dataSource={data}
        />
      }
    </div>
  );
}

