import React from 'react';

const Box1 = () => {
  return (
    <div id='box1' style={{ backgroundColor: 'green', height: '200px', width: '400px' }}>
      <Box2 />
    </div>
  );
};

const Box2 = () => {
  return (
    <div id='box2' style={{ backgroundColor: 'blue', height: '150px', width: '350px' }}>
      <Box3 />
    </div>
  );
};

const Box3 = () => {
  return (
    <div id='box3' style={{ backgroundColor: 'pink', height: '100px', width: '180px' }}>
      <Box4 />
      <Box4 />
    </div>
  );
};

const Box4 = () => {
  return (
    <div id='box4' style={{ backgroundColor: 'purple', height: '50px', width: '50px' }} />
  );
};

export default Box1;
