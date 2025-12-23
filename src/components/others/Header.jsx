import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex items-end p-8 justify-between text-white bg-black">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {user?.name || "Admin"}
        </span>
      </h1>

      <button
        onClick={logout}
        className="px-5 rounded-sm py-2 bg-red-600 hover:bg-red-700 transition-all font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
