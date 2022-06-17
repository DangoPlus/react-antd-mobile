import React from 'react';
import { NavBar, Space, Toast } from 'antd-mobile';
import { useHistory } from 'react-router-dom';
import { ScanningOutline } from 'antd-mobile-icons';

export default (props: any) => {
  const history = useHistory();
  const handleOpenQR = () => {
    history.push('qr');
  };
  const right = <ScanningOutline fontSize={48} onClick={handleOpenQR} />;

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
