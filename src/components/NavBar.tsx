import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons';

export default (props: any) => {
  const history = useHistory();
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  );

  const back = () => {
    history.goBack();
    // Toast.show({
    //   content: '点击了返回区域',
    //   duration: 1000,
    // });
  };

  return (
    <>
      <NavBar right={right} onBack={back}>
        {props.children}
      </NavBar>
    </>
  );
};
