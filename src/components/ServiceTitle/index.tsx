import React from 'react';

const ServiceTitle: React.FC = () => {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          backgroundColor: '#C6DCF9',
          border: '2px solid #D5D5D5',
          height: '50px',
        }}
      >
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          商品名称
        </div>
        <div style={{ display: 'flex', flex: 3, justifyContent: 'center', alignItems: 'center' }}>
          包装清单
        </div>
        <div style={{ display: 'flex', flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          租赁数量
        </div>
      </div>
      <div style={{ display: 'flex', height: '80px' }}>
        <div
          style={{
            display: 'flex',
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              marginRight: '20px',
              backgroundColor: 'gray',
            }}
          ></div>
          <div>xxxxxx</div>
        </div>
        <div
          style={{
            flex: 3,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
          }}
        >
          xxxxxx * 1 , xxxxxx * 2
        </div>
        <div
          style={{
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottom: '2px solid #D5D5D5',
            borderLeft: '2px solid #D5D5D5',
            borderRight: '2px solid #D5D5D5',
          }}
        >
          1
        </div>
      </div>
    </div>
  );
};

export default ServiceTitle;
