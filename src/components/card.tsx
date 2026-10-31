import {useDraggable} from '@dnd-kit/react';

interface Props{
    id:any
}

const Card = ({id}:Props)=>{

    const {ref} = useDraggable({
        id
    });

    return (
        <div ref={ref} className="border border-[#1dbd65] rounded p-2 cursor-pointer select-none">
            CARD {id}
        </div>
    )
}

export default Card;