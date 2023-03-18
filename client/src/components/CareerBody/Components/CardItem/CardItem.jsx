import react from 'react';
const CardItem=(props)=>{
    return(
        <div  className='flex items-center justify-between rounded-md p-5 border-b-2  hover:shadow-hov' key={props.id}>
            <div className='w-4/5'>
                <div className='text-2xl font-bold mb-2'>{props.title}</div>
                <div className='text-base text-gray-500'>{props.descriptions}</div>
            </div>
            <div>
                 <button className=' bg-blue-500 font-bold text-white pt-1 pb-1 pl-3 pr-3 rounded-md ' >{props.position}</button>   
            </div>
        </div>
    );
}
export default CardItem;