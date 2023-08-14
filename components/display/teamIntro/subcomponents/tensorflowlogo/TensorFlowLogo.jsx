import React, { useEffect, useState } from 'react';
import { styled } from 'styled-components';
const TensorFlowWrapper = styled.div`
  > svg .svg-elem-1 {
    stroke-dashoffset: 1093.0938720703125px;
    stroke-dasharray: 1093.0938720703125px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715)
        0s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
    transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s;
  }

  > svg.active .svg-elem-1 {
    stroke-dashoffset: 0;
    fill: rgb(229, 91, 45);
  }

  > svg .svg-elem-2 {
    stroke-dashoffset: 1193.732421875px;
    stroke-dasharray: 1193.732421875px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.12s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
    transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s;
  }

  > svg.active .svg-elem-2 {
    stroke-dashoffset: 0;
    fill: rgb(237, 142, 36);
  }

  > svg .svg-elem-3 {
    stroke-dashoffset: 939.9175415039062px;
    stroke-dasharray: 939.9175415039062px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.24s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
    transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1s;
  }

  > svg.active .svg-elem-3 {
    stroke-dashoffset: 0;
    fill: rgb(248, 191, 60);
  }

  > svg .svg-elem-4 {
    stroke-dashoffset: 1323.98193359375px;
    stroke-dasharray: 1323.98193359375px;
    fill: transparent;
    -webkit-transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715)
        0.36s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
    transition: stroke-dashoffset 2s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s,
      fill 0.7s cubic-bezier(0.47, 0, 0.745, 0.715) 1.1s;
  }

  > svg.active .svg-elem-4 {
    stroke-dashoffset: 0;
    fill: rgb(255, 255, 255);
  }
`;
const TensorFlowLogo = () => {
  const [cls, setCls] = useState('');

  useEffect(() => {
    let timeout = setTimeout(() => setCls('active'), 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <TensorFlowWrapper>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 319 342'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cls}
      >
        <g clip-path='url(#clip0_529_4)'>
          <path
            d='M136.21 236.763V341.125L91.6397 315.394V158.133L136.21 132.402V184.147V184.435L136.46 184.58L181.785 210.744V262.205L136.96 236.33L136.21 235.897V236.763ZM272.925 156.978L182.785 104.939V53.4768L272.925 105.516V156.978ZM0.5 157.555V106.093L45.0699 131.824V183.281L0.5 157.555Z'
            fill='#E55B2D'
            stroke='#E55B2D'
            className='svg-elem-1'
          ></path>
          <path
            d='M136.46 131.103L46.0701 183.281V131.824L181.785 53.4768V157.555L137.21 183.281V131.536V130.67L136.46 131.103ZM227.355 236.474L182.785 262.205V210.744L227.355 185.013V236.474ZM137.21 237.629L181.785 263.36V315.394L137.21 341.125V237.629ZM273.925 156.978V105.516L318.5 79.785V131.247L273.925 156.978Z'
            fill='#ED8E24'
            stroke='#ED8E24'
            className='svg-elem-2'
          ></path>
          <path
            d='M182.535 52.178L182.285 52.0337L182.035 52.178L45.5699 130.958L1.00007 105.228L182.285 0.577327L318 78.9193L273.425 104.65L182.535 52.178ZM226.855 184.147L182.285 209.878L137.71 184.147L182.285 158.421L226.855 184.147Z'
            fill='#F8BF3C'
            stroke='#F8BF3C'
            className='svg-elem-3'
          ></path>
        </g>
        <defs>
          <clipPath id='clip0_529_4'>
            <rect
              width='319'
              height='341.991'
              fill='white'
              className='svg-elem-4'
            ></rect>
          </clipPath>
        </defs>
      </svg>
    </TensorFlowWrapper>
  );
};

export default TensorFlowLogo;
