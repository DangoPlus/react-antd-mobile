import { Button } from 'antd-mobile';
import styles from './index.less';
export default () => {
  return (
    <div className={styles.todo}>
      <Button block color="primary" size="large" className={styles.addButton}>
        新增待办
      </Button>
    </div>
  );
};
