
const Form = () => {


    const handleSubmit = (formData : any) => {
        const userData = {
            name: formData.get("name"),
            email : formData.get("email"),
            age : formData.get("age"),
        }

        console.log(userData);
    }

  return (
    <div>
        <form action={handleSubmit} className="flex flex-col space-4 px-6" >
            <label htmlFor="name" >Name
                <input type="text" id='name' name='name' className="border-2 rounded-full px-5 py-2" />
            </label>
            <br />
            <label htmlFor="email" >Email
                <input type="text" id='email' name='email' className="border-2 rounded-full px-5 py-2" />
            </label>
            <br />
            <label htmlFor="age" >Age
                <input type="number" name="age" id="age" className="border-2 rounded-full px-5 py-2" />
            </label>
            <button type="submit" className="bg-black border-2 rounded-full text-white p-3 w-70">Submit</button>
        </form>
    </div>
  )
}

export default Form