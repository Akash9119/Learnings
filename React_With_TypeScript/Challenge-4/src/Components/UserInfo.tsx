export type UInfo = {
    name: string;
    email: string;
    age: number;
    location: string[];
}

const UserInfo = ({name, email, age, location} : UInfo) => {
  return (
    <div>
        <h3>User Name: {name}</h3>
        <p>User Email: {email}</p>
        <p>User Age: {age}</p>
        <p>User Location: {location.join(', ')}</p>
    </div>
  )
}

export default UserInfo