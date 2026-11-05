export default function TodoInput() {
    return (<div className="flex gap-2">
        <input type="text" id='taskInput' className="bg-gray-700 rounded-sm p-2 text-sm min-w-[350px] " value="" placeholder="What needs to be done?"  required />
        <button type='submit' id='AddTask'className="bg-blue-600 ext-white px-5 py-1.5 rounded-sm hover:bg-blue-800" >Add Too</button>
    </div>)
}