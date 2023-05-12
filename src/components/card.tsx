import { ReactNode } from "react";

interface ICardProps {
  cardHeaderText: string;
  children: ReactNode;
}

const Card = (props: ICardProps) => {
  const { cardHeaderText, children } = props;

  return (
    <div className="card mt-4">
      <h5 className="card-header">{cardHeaderText}</h5>
      <div className="card-text mx-4 mt-4 mb-2">{children}</div>
    </div>
  );
};

export default Card;
