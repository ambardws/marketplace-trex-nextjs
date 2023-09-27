import React, { ReactNode } from "react";
import { Drawer } from "antd";

export default function CustomDrawer({open, onClose, children} : {open: boolean, onClose: any, children: ReactNode}) {
  return (
    <Drawer
      className="rounded-t-3xl"
      placement="bottom"
      width={420}
      closable={false}
      open={open}
      onClose={onClose}
      height={"auto"}
    >
      <hr className="border-2 rounded-md w-1/5 -mt-4 mx-auto" />
     {children}
    </Drawer>
  );
}
