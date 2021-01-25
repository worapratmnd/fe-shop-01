import Logo from "../logo";
import OpenDrawerButton from "./open-drawer-botton";
import SideDrawer from "./side-drawer";

export default function HeaderMobile({viewer}) {
    let isDrawerOpen = false

    const togleDrawer = () => {
        console.log('isDrawerOpen: ', isDrawerOpen)
        isDrawerOpen = !isDrawerOpen
    }

    return (
        <div className="header-mobile">
            <OpenDrawerButton openDrawer={togleDrawer} />

            <SideDrawer closeDrawer={togleDrawer} isOpen={isDrawerOpen} />

            <Logo />
            <div>
                <h1> iS: {isDrawerOpen}</h1>
            </div>

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