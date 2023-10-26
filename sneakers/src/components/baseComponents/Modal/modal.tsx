import { Children, ReactNode } from 'react';
import "./modal.css";

export const Modal = ({ active, setActive, children }:{
  active:boolean, setActive:(value:boolean) => void, children?: ReactNode;
}) => {
  return (


    <div
    className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal__content active" : "modal__content"}
        onClick={(e) => e.stopPropagation()}
      >
        <div className='info'>
          {children}
        </div>
      </div>
    </div>
  );
};