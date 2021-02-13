import { useState } from "react";
import Logo from "../logo";
import OpenDrawerButton from "./open-drawer-botton";
import SideDrawer from "./side-drawer";

export default function HeaderMobile({viewer}) {
    const [isDrawerOpen, setToggleDrawerOpen] = useState(false)
    const togleDrawer = () => {
        setToggleDrawerOpen(!isDrawerOpen)
    }

    return (
        <div className="header-mobile">
            <OpenDrawerButton openDrawer={togleDrawer} />

            <SideDrawer closeDrawer={togleDrawer} isOpen={isDrawerOpen} />

            <Logo />

            <style jsx>{`
                .header-mobile {
                display: flex;
                align-items: center;
                padding: 18px 48px;
                }
    `       }</style>
        </div>
    )
}