import MenuLink from "./MenuLink";
import { menus } from "../../common/data";

const Navigation = ({ isMobile, setOpen }) => (
    <nav className={`hidden lg:flex ${isMobile ? "flex-col" : "items-center"}`}>
        <ul className="flex justify-normal items-center gap-[47px] ml-[34px]">
            {menus.map(({ to, label }) => (
                <MenuLink
                    key={to}
                    to={to}
                    label={label}
                    onClick={() => setOpen(false)}
                />
            ))}
        </ul>
    </nav>
);

export default Navigation;
