import { Table } from 'antd';
import router from 'next/router';
import 'antd/lib/table/style/index.css';
import 'antd/lib/pagination/style/index.css';

export default props => {
  const { data } = props;
  return (
    <div>
      <h1>我是音频</h1>
      <div>
        <p>类别：</p>
        <button onClick={() => router.push('/audio')}>全部</button>
        <button onClick={() => router.push('/audio/male')}>male</button>
        <button onClick={() => router.push('/audio/a')}>a</button>
      </div>
      <Table
        dataSource={data}
        columns={[
          {
            dataIndex: 'uName',
            title: '用户名'
          },
          {
            dataIndex: 'source',
            title: '资源'
          },
          {
            dataIndex: 'bgi',
            title: '封面'
          },
          {
            dataIndex: 'category',
            title: '类别'
          },
          {
            dataIndex: 'price',
            title: '价格'
          },
        ]}
        rowKey="id"
      />
    </div>
  )
}