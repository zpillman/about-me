import {Box} from "@mui/material";

function Resume() {

    return (
        <>
            <Box className={"flex flex-col gap-y-2"}>
                <Box component={"section"} sx={{}} >
                    <div className={"flex flex-col gap-y-px"}>
                        <div className={"text-3xl underline bold"}>Education</div>
                        <div className={"text-xl"}>University Of Texas At Dallas</div>
                        <div className={"text-l"}>B.S. Computer Science</div>
                    </div>
                </Box>

                <Box>
                    <div className={"flex flex-col gap-y-px"}>
                        <div className={"text-3xl underline bold"}>Experience</div>
                        <div className={"text-xl"}>Baxter Planning | Software Engineer 2</div>
                        <div className={"text-m"}>Dec 2021 - Jan 2024</div>
                        <div className={"text-m"}>
                            <ul>
                                <li>Coordinated a customer-specific project aimed at implementing a new feature enabling ordering through multiple suppliers</li>
                                <li>Facilitated the design, implementation, and testing of new functionality to allow alternate storage and
                                    configuration of material suppliers.</li>
                                <li>Provided hands-on mentorship and guidance to 2 new software developers by facilitating their smooth
                                    onboarding into the team.</li>
                                <li>Supervised testing of a 6-month project focused on enhancing core functionality to store standard
                                    costs for materials at the site level</li>
                                <li>Modified existing backend utility feature to store calculation details to provide insight into complex
                                    calculation. This eliminated a black-box, helped answer many customer questions, and increased
                                    confidence in the results</li>
                                <li>Improved reliability of high impact muti-threaded process by 50% by implementing more robust
                                    schema to prevent the possibility of incorrectly stored data.</li>
                            </ul>
                        </div>

                        <div className={"text-xl"}>Baxter Planning | Software Engineer 1</div>
                        <div className={"text-m"}>May 2020 - Dec 2021</div>
                        <div className={"text-l"}>
                            <ul>
                                <li>Oversaw implementation of customer specific project to utilize excess at a distribution center (DC) to fill
                                    purchase orders at other DCs.</li>
                                <li>Implemented forecasting utility for Product Life Curves which allowed enhanced planning of future
                                    supply needs and prevent stockout situations.</li>
                                <li>Improved performance of regularly run high value calculation by 135% which resulted in savings of tens
                                    of thousands of dollars in AWS fees.</li>
                            </ul>
                        </div>

                        <div className={"text-xl"}>Baxter Planning | Software Development Intern</div>
                        <div className={"text-m"}>May 2018 - May 2020</div>
                        <div className={"text-l"}>
                            <ul>
                                <li>Converted existing legacy 4GL scripts into modern Java Spring batch processes.</li>
                                <li>Integrated static code analysis on all active projects to the automatic build pipeline.</li>
                                <li>Handled small to medium sized bugfix tickets for and internal database management tool built in Ruby.</li>
                            </ul>
                        </div>
                    </div>
                </Box>

                <Box>
                    <div className={"flex flex-col gap-y-px"}>
                        <div className={"text-3xl underline bold"}>Skills</div>
                        <div>
                            <span className={"text-xl gap-x-1"}>Programming Languages: </span>
                            <span className={"text-m"}>Java, SQL, C++, Python, Ruby</span>
                        </div>

                        <div>
                            <span className={"text-xl gap-x-1"}>Libraries / Frameworks: </span>
                            <span className={"text-m"}>Spring, Spring Boot, Spring Batch</span>
                        </div>

                        <div>
                            <span className={"text-xl gap-x-1"}>Tools / Platforms: </span>
                            <span className={"text-m"}>Gradle, Jenkins, Git, REST APIs, AWS</span>
                        </div>

                        <div>
                            <span className={"text-xl gap-x-1"}>Databases: </span>
                            <span className={"text-m"}>PostgreSQL, MySQL</span>
                        </div>
                    </div>
                </Box>
            </Box>
        </>
    )

}

export default Resume;