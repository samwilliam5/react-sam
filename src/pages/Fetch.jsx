import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Fetch = () => {
  const {data: userList,refetch,isLoading,isError,} = useQuery(
    ["userList"],
    () => {
      return axios
        .get("https://random-data-api.com/api/v2/users")
        .then((res) => {
          console.log(res);
          return res.data;
        });
    },
    []
  );

  if (isError) {
    return <div>Error!</div>;
  }

  if (isLoading) {
    return <div>Loading!</div>;
  }
  console.log(userList);
  return (
    <div className="py-5 bg-dark text-light">
      <h3>{userList?.first_name}</h3>
      <button className="btn btn-primary" onClick={refetch}>
        Click To update username
      </button>
    </div>
  );
};

export default Fetch;

// import axios from "axios"
// import { useEffect, useState } from "react"

// const Fetch = () => {

//   const[data,setdata]=useState([])
//   console.log(data)
//  useEffect(()=>{
//   axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
//     console.log(res)
//     setdata(res.data)
//   })
//  },[])

//   return (
//     <div>
//      {data.map((userList,index)=>
//          <h3 key={index}>{userList.name}</h3>
//      )}
//     </div>
//   )
// }

// export default Fetch
