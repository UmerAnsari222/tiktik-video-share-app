import React, { useState } from "react";

import { ImCancelCircle } from "react-icons/im";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import Discover from "./Discover";
import SuggestedAccounts from "./SuggestedAccounts";
import Footer from "./Footer";
import useAuthStore from "../store/authStore";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const { fetchAllUsers, allUsers } = useAuthStore();

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar(!showSidebar)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>

      {showSidebar && (
        <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 ">
          <div className="xl:border-b-2 border-gray-200 xl:pb-4">
            <Link href={"/"}>
              <div className="flex items-center text-[#F51997]">
                <p className="text-2xl">
                  <AiFillHome />
                </p>
                <span className="capitalize text-xl hidden xl:block ml-2">
                  For You
                </span>
              </div>
            </Link>
          </div>

          <Discover />
          <SuggestedAccounts
            fetchAllUsers={fetchAllUsers}
            allUsers={allUsers}
          />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
