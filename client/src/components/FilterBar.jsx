// function FilterBar({
//   department,
//   status,
//   setDepartment,
//   setStatus,
// }) {
//   return (
//     <div className="row">

//       <div className="col-md-6">

//         <select
//           className="form-select"
//           value={department}
//           onChange={(e) =>
//             setDepartment(e.target.value)
//           }
//         >
//           <option value="">All Departments</option>

//           <option>HR</option>

//           <option>IT</option>

//           <option>Finance</option>

//           <option>Sales</option>

//           <option>Marketing</option>

//         </select>

//       </div>

//       <div className="col-md-6">

//         <select
//           className="form-select"
//           value={status}
//           onChange={(e) =>
//             setStatus(e.target.value)
//           }
//         >
//           <option value="">All Status</option>

//           <option>Active</option>

//           <option>Inactive</option>

//         </select>

//       </div>

//     </div>
//   );
// }

// export default FilterBar;
function FilterBar({
  department,
  status,
  setDepartment,
  setStatus,
}) {
  return (
    <div className="filters">

      <select
        className="form-select"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        <option>HR</option>
        <option>IT</option>
        <option>Finance</option>
        <option>Sales</option>
        <option>Marketing</option>
      </select>

      <select
        className="form-select"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">All Status</option>
        <option>Active</option>
        <option>Inactive</option>
      </select>

    </div>
  );
}

export default FilterBar;