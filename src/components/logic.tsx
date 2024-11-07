import React from 'react';

export declare interface IfProps {
  if: boolean;
  [key: string]: any
}

export const If: React.FC<IfProps> = (props) => {

  return props.if ? props.children : <></>
}
