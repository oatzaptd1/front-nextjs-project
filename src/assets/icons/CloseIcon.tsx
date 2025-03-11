import React from 'react';

interface CloseIconProps {
  color?: string;
}

const CloseIcon: React.FC<CloseIconProps> = ({ color = 'black' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={color}>
  <path d="M12 2.00043C6.49 2.00043 2 6.49043 2 12.0004C2 17.5104 6.49 22.0004 12 22.0004C17.51 22.0004 22 17.5104 22 12.0004C22 6.49043 17.51 2.00043 12 2.00043ZM15.36 14.3004C15.65 14.5904 15.65 15.0704 15.36 15.3604C15.21 15.5104 15.02 15.5804 14.83 15.5804C14.64 15.5804 14.45 15.5104 14.3 15.3604L12 13.0604L9.7 15.3604C9.55 15.5104 9.36 15.5804 9.17 15.5804C8.98 15.5804 8.79 15.5104 8.64 15.3604C8.35 15.0704 8.35 14.5904 8.64 14.3004L10.94 12.0004L8.64 9.70043C8.35 9.41043 8.35 8.93043 8.64 8.64043C8.93 8.35043 9.41 8.35043 9.7 8.64043L12 10.9404L14.3 8.64043C14.59 8.35043 15.07 8.35043 15.36 8.64043C15.65 8.93043 15.65 9.41043 15.36 9.70043L13.06 12.0004L15.36 14.3004Z" fill={color}/>
</svg>
);

export default CloseIcon;