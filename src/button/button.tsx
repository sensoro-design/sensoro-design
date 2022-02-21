import React, { useContext } from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps, ButtonType as AntButtonType } from 'antd/es/button';
import { ConfigContext } from '../config-provider';

export type ButtonType = AntButtonType | 'minor';

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLElement>> {
  __ANT_BUTTON: boolean;
}

export interface ButtonProps extends Omit<AntButtonProps, 'type'> {
  type?: ButtonType;
}

export const InternalButton: React.ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { className, type = 'default', ...rest },
  ref
) => {
  const { getPrefixCls } = useContext(ConfigContext);

  const prefixCls = getPrefixCls('button');

  return <AntButton {...rest} type={type as AntButtonType} prefixCls={prefixCls} ref={ref} />;
};

export const Button = React.forwardRef<unknown, ButtonProps>(InternalButton) as CompoundedComponent;

Button.displayName = 'Button';
