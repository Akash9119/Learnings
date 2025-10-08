import React, { useEffect, useState } from 'react'

const FetchDataEffect = () => {
    const [posts, SetPosts] = useState([])

   useEffect(() => {
  (async function () {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      SetPosts(data);
    //   console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  })();
}, []);

    
  return (
    <div>
        <h2>Fetch post title</h2>
        <h3>{
            posts.length > 0 ? posts[0].title : "Loading..."
        }</h3>
    </div>
  )
}

export default FetchDataEffect