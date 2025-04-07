import { useState } from "react";
interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}
type ListGroupProps = {
    items: string[];
  };
  const ListGroup: React.FC<ListGroupProps> = ({ items }) => {
    if (!Array.isArray(items)) {
      console.error('Expected items to be an array, but got:', typeof items);
      return <div>Invalid data</div>;
    }

function ListGroup({items, heading, onSelectItem}:Props){
    

    const [selectedIndex, setSelectedIndex] = useState(-1);
    

   


    return(
    <>
    <h1>(heading)</h1>
    { items.length === 0 && <p>No item found</p> }
    <ul className="list-group">
        { items.map((item,index) => (
            <li 
            className={ selectedIndex === index 
                ? 'list-group-item active' 
                : 'list-group-item'}
            key={item}
            onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
            }}
            >
                {item}
            </li>
        ))}
        
    </ul>
    </>
    );
}
  }

export default ListGroup;