import {Box} from "@mui/material";
import imgUrl from '/assets/headshot.jpeg';

function AboutMe() {
    return (
        <>
            <Box
                component="img" sx={{
                    height: 223,
                    width: 350

            }}
                alt={"Picture of Zach"}
                src={"document.getElementById('headshot').src=imgUrl"}
            />
        </>
    )
}

export default AboutMe;