import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    Card,
    IconButton,
    ListItem,
    ListItemPrefix,
    List,
    Drawer,
} from "@material-tailwind/react";
import {
    CubeTransparentIcon,
    UserCircleIcon,
    CodeBracketSquareIcon,
    Square3Stack3DIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    RocketLaunchIcon,
    Bars2Icon,
    XMarkIcon,
    Bars3Icon,
} from "@heroicons/react/24/solid";
import SideNavbar from "../SideNavbar/SideNavbar";
import { Outlet } from "react-router-dom";




const DashboardNavbar = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);


    const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false),
        );
    }, []);

    const navList = <>


        <List>
            <ListItem>
                <ListItemPrefix>


                    <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625ZM21 9.375A.375.375 0 0 0 20.625 9h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 0 0 .375-.375v-1.5ZM10.875 18.75a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h7.5ZM3.375 15h7.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375Zm0-3.75h7.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 10.875 9h-7.5A.375.375 0 0 0 3 9.375v1.5c0 .207.168.375.375.375Z" clip-rule="evenodd" />
                    </svg>


                </ListItemPrefix>
                Work Sheet
            </ListItem>

            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
                <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                </ListItemPrefix>
                Profile
            </ListItem>

            <ListItem>
                <ListItemPrefix>
                    <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
            </ListItem>
            <ListItem>
                <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
            </ListItem>
        </List>
    </>



    return (
        <Navbar className="max-w-full mx-auto">

            <div className="flex sticky bg-white py-2 top-0 z-10 justify-between text-blue-gray-900">

                <IconButton
                    className="lg:hidden"

                    variant="text" size="lg" onClick={openDrawer}>
                    {isDrawerOpen ? (
                        <XMarkIcon className="h-8 w-8 stroke-2" />
                    ) : (
                        <Bars3Icon className="h-8 w-8 stroke-2" />
                    )}
                </IconButton>

                <div className="flex items-center 
                gap-2 md:gap-4 cursor-pointer ">
                    <img
                        src="/logo.png"
                        alt="brand"
                        className="h-8 w-8"
                    />
                    <Typography
                        as="a"
                        href="#"
                        variant="h5"
                        className="font-bold"
                    >
                        Psy Worker
                    </Typography>
                </div>

                <div>
                    <Button
                        variant="text"
                        color="blue-gray"
                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                    >
                        <Avatar
                            variant="circular"
                            size="sm"
                            alt="tania andrew"
                            className="border border-gray-900 p-0.5"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                        />
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`h-3 w-3 transition-transform  rotate-180"
                                `}
                        />
                    </Button>
                </div>
            </div>


            <div className="flex gap-5 justify-between mt-5">
                <div className="hidden lg:block sticky top-16 z-10 rounded-xl w-[400px] h-[calc(100vh-7rem)] border-2">
                    {navList}
                </div>

                <div>
                    <Outlet />
                </div>

            </div>

            <Drawer open={isDrawerOpen} onClose={closeDrawer}>
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full p-4"
                >
                    {navList}

                </Card>
            </Drawer>

        </Navbar >
    );

};

export default DashboardNavbar;