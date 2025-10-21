import { useState } from "react"
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile = () => {

    const handleBannerChange = (e: any) => {
        const file = e.target.files[0];

        if(file) {
            setBannerUrl(URL.createObjectURL(file));
        }
    }

    const handleProfileChange = (e:any) => {
        const profile = e.target.files[0];
        
        if(profile) {
            setUserProfile(URL.createObjectURL(profile));
        }
    }

  const [bannerUrl, setBannerUrl] = useState<string>(
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBCgMBIgACEQEDEQH/xAAZAAEBAAMBAAAAAAAAAAAAAAAABAIDBQH/xAAqEAEAAgECBQEIAwAAAAAAAAAAAQIDBBESITFBcVETIjJCYYGRoRRSsf/EABgBAQEBAQEAAAAAAAAAAAAAAAACAQMF/8QAGREBAQEBAQEAAAAAAAAAAAAAAAECEiER/9oADAMBAAIRAxEAPwDsAPaeMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM6Yr351jl6s9Ph9pPFb4Y/az6JtVMpf41tvihrvhvTnMbx6wuEzSuXNFGowxX36Rt6wndJUWfAAYAAAAAAAAAAAAAAAAAAAAAAAAAAvw14cVdu8bs2GGd8dfDNyrpAAaxvXirMesOe6MztWZno5ysp0ALQAAAAAAAAAAAAAAAAAAAAA2Y8NskTMbRHrINYzyY7Y595gAAwbtNl4J4bfDPdXy9XOZ48t6conePSWWKlXiX+VP9I/LC+e9o26R9Gct6Z6rLvHBWeXdOCpGUAakAAAAAAAAAAAAAAAAAAA8A9rHFMR6r6VilYrHZo0lOt5+yn/AFGquRjesXrNbflBes0tNJjo6LVqMftK+71hkpqIgHRAAAAAAAAAAAAAAAAAAAAAAAAAAA9iJtMRHWXnhTpadbz4hlbG+tYrEVjtDIHN0AATanF89Y8pnSRajF7Od/lnoqVFjUAtIAAHIAAAAAAAAAAAAAAAAAAAAB7Ws2mIjrLoViKRFY7Qn0lOt58QpRqrkAEqAAGN6xes1t0ZAOfkpOO01nsxXZsUZK7d+0o5x3rO01t+HSXxFnrFTh08THFkjxBgw7TxXj7KU2tkab6fHMbVjaUcxNZmJ7Ok0anFvXjrHOOpmmokAWgAAAAAAAAAAAAAAAAe1rNrRWOsvFOkptvefEMtbIorEViKx2h6Dm6AAAAAAAAE8wAAARajHwX3j4Z/TU6F6RkrNZ7o50+SJ2232XKixrAUkAAAAAAAAAAAAAAdGsRWsRHQE6Vl6AhYAAAAAAAAAAAAA1j/2Q=="
  );
  const [userProfile, setUserProfile] = useState<string>("https://avatars.githubusercontent.com/u/68374089?v=4");

  return (
    <div className="relative ml-20 w-[calc(100%-5rem)]">
      <div className="relative">
        <img src={bannerUrl} alt="Background Image" className="w-full h-60 object-cover" />

        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
            <label htmlFor="banner-upload" className="cursor-pointer">
                <FaCamera size={24} />
            </label>

            <input type="file" name="banner-upload" id="banner-upload" accept="image/*" className="hidden" onChange={handleBannerChange} />
        </button>
      </div>

      {/* Profile Logo */}
      <div className="flex items-center ml-4 mt-8">
        <img src={userProfile} alt="User Profile" className="w-40 h-40 object-cover rounded-full border-white relative" />

      <button className="absolute ml-[3.7rem] z-10 mt-36 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
        <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={24} />
        </label>
        <input type="file" name="profile-upload" id="profile-upload" onChange={handleProfileChange} className="hidden" />
      </button>

      {/* Profile Details */}
      <div className="ml-12 mt-4">
        <h1 className="text-2xl font-bold">Akash Vasava</h1>
        <p>1M Views</p>
        <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quidem alias vitae quae unde architecto voluptatem.</p>
        <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">Subscribe</button>
      </div>
      </div>
      <Tabs />
    </div>
  )
}

export default Profile