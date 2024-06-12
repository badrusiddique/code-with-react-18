import * as React from "react";

type Country = {
  id: number;
  name: string;
};

type ListGroupProps = {
  items: Country[];
  title: string;
  onSelected: (id: number) => void
};

function ListGroup({ items, title, onSelected }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const getClassName = (index: number) => {
    return index === selectedIndex
      ? "list-group-item active"
      : "list-group-item";
  };

  const handleClick = (id: number, index: number) => {
    setSelectedIndex(index);
    onSelected(id)
  };

  return (
    <div className="m-4">
      <span>{title}</span>
      <ul className="list-group">
        {items.map(({ id, name }, index) => (
          <li
            key={id}
            className={getClassName(index)}
            onClick={() => handleClick(id, index)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
