import React from "react";
import "./RoleSwitcher.css";

function RoleSwitcher({ role, setRole }) {

  return (

    <div className="flex gap-3 items-center">

      <label className="font-semibold">Select Role:</label>

      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="border p-2 rounded"
      >

        <option value="viewer">Viewer</option>
        <option value="admin">Admin</option>

      </select>

    </div>

  );
}

export default RoleSwitcher;