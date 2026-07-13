// function EmployeeProfileCard({ employee }) {
//   return (
//     <div className="profile-card">

//       <div className="profile-top">

//         <div className="profile-avatar">

//           {employee.fullName.charAt(0).toUpperCase()}

//         </div>

//         <h2>{employee.fullName}</h2>

//         <p>{employee.designation}</p>

//       </div>

//       <div className="profile-info">

//         <div>

//           <strong>Email</strong>

//           <p>{employee.email}</p>

//         </div>

//         <div>

//           <strong>Mobile</strong>

//           <p>{employee.mobile}</p>

//         </div>

//         <div>

//           <strong>Department</strong>

//           <p>{employee.department}</p>

//         </div>

//         <div>

//           <strong>Joining Date</strong>

//           <p>
//             {new Date(employee.joiningDate).toLocaleDateString()}
//           </p>

//         </div>

//         <div>

//           <strong>Status</strong>

//           <span
//             className={
//               employee.status === "Active"
//                 ? "badge-active"
//                 : "badge-inactive"
//             }
//           >
//             {employee.status}
//           </span>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default EmployeeProfileCard;