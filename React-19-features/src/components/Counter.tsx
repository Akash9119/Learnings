import { useActionState } from 'react'

async function increment (preveVal: number, formData: any) {
    console.log(formData.get('name'));
    return preveVal + 1;
}

const Counter = () => {

    const [state, formAction] = useActionState(increment, 0);
  return (
    <form>
        <h3>{state}</h3>
        <button className='border rounded-full bg-blue-500' formAction={formAction}>Increment</button>
        <br />
        <input type="text" placeholder='Enter Name' name='name' id='name' />
    </form>
  )
}

export default Counter