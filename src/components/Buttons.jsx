
export default function Buttons(){
    return(
        <div className="flex gap-5">
            <button type='submit' id='categoryAll' className='categoryButtons'>All</button>
            <button type='submit' id='categoryActive' className='categoryButtons'>Active</button>
            <button type='submit' id='categoryCompleted' className='categoryButtons' >Completed</button>
        </div>
    )
}