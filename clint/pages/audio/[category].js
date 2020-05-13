
import { request } from '../../utils';
import Mytable from '../../components/Mytable';
import qs from 'querystring';

const _ = props => {
  console.log(props);
  const data = props.data || [];
  return (
    <Mytable data={data} />
  )
};

export async function getStaticProps(ctx) {
  const { category } = ctx.params;
  const res = await request({
    url: `/list?${qs.stringify(ctx.params)}`,
  })
  console.log('res', res);
  return {
    props: {
      data: res.data
    }
  }
}


export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'maleVedio' } },
      { params: { category: 'gadg' } },
    ],
    fallback: true,
  }
}

export default _;
