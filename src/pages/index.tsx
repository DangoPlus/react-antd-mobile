import styles from './index.less';
import App from '@/layouts';
import { Helmet } from 'umi';
export default function IndexPage(props: any) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=750" initial-scale="1" />
        <title>My App</title>
      </Helmet>
      <App>{props}</App>
    </div>
  );
}
