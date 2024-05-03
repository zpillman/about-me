import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab, Link } from "@mui/material";
import React from "react";
import AboutMe from "./AboutMe";
import Resume from "./Resume";

function NavBar() {

    const [value, changeValue] = React.useState('1');

    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        changeValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="About Me / Resume / Contact Info">
                        <Tab label="About Me" value="1" />
                        <Tab label="Resume" value="2" />
                        <Tab label="Contact Information" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><AboutMe /></TabPanel>
                <TabPanel value="2"><Resume /></TabPanel>
                <TabPanel value="3">
                    <div className="center">
                        <p><Link href="https://www.linkedin.com/in/zachary-pillman/" underline="hover" >LinkedIn</Link></p>
                        <p><Link href="https://github.com/zpillman" underline="hover">GitHub</Link></p>
                        <p></p>
                    </div>
                </TabPanel>
            </TabContext>
        </Box>
    );

}

export default NavBar;