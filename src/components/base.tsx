import {ReactNode} from "react";

interface IBaseProps {
  children: ReactNode;
}

const Base = ({ children }: IBaseProps) => {
  return <div className="container">{children}</div>;
};

export default Base;
