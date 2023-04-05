import react from 'react';
const CardItem = (props) => {
    return (
        <div className='flex items-center justify-between p-5 border-b-2  hover:shadow-[0px_8px_30px_#DEE6F1]' key={props.id}>
            <div className='w-4/5'>
                <div className='text-2xl font-bold mb-2'>{props.title}</div>
                <div className='text-base text-gray-500'>{props.location}</div>
            </div>
            <div className='flex gap-2'>
                {
                    props.tags.map((tag) => {
                        return (
                            <button className=' bg-blue-500 font-bold text-white pt-1 pb-1 pl-3 pr-3 rounded-md ' >{tag}</button>
                        )
                    }
                    )
                }
            </div>
        </div>
    );
}
export default CardItem;