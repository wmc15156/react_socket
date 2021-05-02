import React, { CSSProperties, useCallback } from 'react';
import { FC } from 'react';
import { CloseModalButton, CreateMenu } from '@components/Menu/styles.';

type Props = {
  style: CSSProperties;
  show: boolean;
  onCloseModal: (e: any) => void;
  closeButton?: boolean;
};

const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const onStopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={onStopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
