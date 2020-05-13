
import { request } from '../utils';
import Mytable from '../components/Mytable';


const _ = props => {
  console.log(props);
  const data = props.data || [];
  return (
    <Mytable data={data} />
  )
};

export async function getStaticProps(ctx) {
  console.log('ctx', ctx);
  const res = await request({
    url: '/list'
  })
  console.log('res', res);
  return {
    props: {
      data: res.data
    }
  }
}

export default _;
