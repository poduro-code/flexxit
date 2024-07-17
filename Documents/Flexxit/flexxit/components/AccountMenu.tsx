import { signOut } from "next-auth/react";
import React from "react";
import useCurrentUser from "@/hooks/useCurrentUser";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {

  const { data } = useCurrentUser();

  if (!visible) {
    return null;
  }

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex z-50">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <img className="w-8 rounded-md" src="/images/profilepic.png" alt="Profile" />
          <p className="text-white text-sm group-hover/item:underline">
            {data?.name}
          </p>
        </div>
        <hr className="bg-white border-0 h-px my-4"/>
        <div className="px-3 text-center text-white text-sm hover:underline cursor-pointer" onClick={() => signOut()}>
          <p className="text-white text-sm">
            Sign out of Flexxit
          </p>
        </div>
      </div>
    </div>
  );
}

export default AccountMenu;
