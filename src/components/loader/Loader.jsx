import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Overlay } from './OverlayLoader';

const Loader = () => {
  return (
    <Overlay>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color=" rgb(13, 110, 253)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Overlay>
  );
}

export default Loader;
