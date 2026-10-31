import { useDroppable } from "@dnd-kit/react";
import Card from "./card";

interface Props{
    id: any
    card_keys :string[]
}

const Hand = ({card_keys,id}:Props) => {

    const {ref} = useDroppable({
        id
    });

  return (
    <div 
        ref={ref} 
        className="flex flex-row item-center border border-[#555555] p-2 rounded gap-2 min-w-50 min-h-12.5"
    >
        {
            card_keys.map((card_key)=>{
                return <Card key={card_key} id={card_key}/>
            })      
        }
    </div>
  );
};

export default Hand;
