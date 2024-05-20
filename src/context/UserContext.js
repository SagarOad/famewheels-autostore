// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//     const token = localStorage.getItem("token");

//   const [user, setUser] = useState(null);

//   const getUserData = async () => {
//     try {
//       const response = await axios.get(`https://portal.famewheels.com/getUser`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(response.data);
//       console.log(response.data);
//     } catch (error) {
//       toast.error("Error fetching user data");
//       console.error("Error fetching user data:", error);
//     }
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       getUserData(token);
//     }
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, getUserData }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// export { UserContext, UserProvider };
