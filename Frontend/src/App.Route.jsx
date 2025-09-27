// import React from  'react'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// const AppRoutes = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/user/register" element={<h1> User Registration </h1> } />
//                 <Route path="/user/login" element={<h1>User login </h1>} />
//                 <Route path="/facutly-account/register" element={<facultyAccountRegister />} />
//                 <Route path="/faculty-account/register" element={<facultyAccountlogin/>} />
//             </Routes>
//         </Router>
//     )
// }


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import FacultyAccountRegister from './FacultyAccountRegister';
// import FacultyAccountLogin from './FacultyAccountLogin';

// const AppRoutes = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/user/register" element={<h1>User Registration</h1>} />
//         <Route path="/user/login" element={<h1>User Login</h1>} />
//         <Route path="/faculty-account/register" element={<FacultyAccountRegister />} />
//         <Route path="/faculty-account/login" element={<FacultyAccountLogin />} />
//       </Routes>
//     </Router>
//   );
// };

// export default AppRoutes;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import UserRegister from './components/UserRegister';
import UserLogin from './components/UserLogin';
import FacultyRegister from './components/FacultyRegister';
import FacultyLogin from './components/FacultyLogin';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/user/login" element={<UserLogin />} />
        <Route path="/faculty/register" element={<FacultyRegister />} />
        <Route path="/faculty/login" element={<FacultyLogin />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;

