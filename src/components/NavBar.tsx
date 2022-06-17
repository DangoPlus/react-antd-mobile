import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile';
import { SearchOutline, MoreOutline, CloseOutline } from 'antd-mobile-icons';

export default (props: any) => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <Space style={{ '--gap': '16px' }}>
        <MoreOutline />
      </Space>
    </div>
  );

  const back = () =>
    Toast.show({
      content: '点击了返回区域',
      duration: 1000,
    });

  return (
    <>
      <NavBar right={right} onBack={back}>
        {props.children}
      </NavBar>
    </>
  );
};
