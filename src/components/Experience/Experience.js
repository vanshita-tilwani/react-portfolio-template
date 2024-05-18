import { Chrono } from "react-chrono";
import SectionHeading from "../common/SectionHeading";

function Experience() {
    const workExperience = [{
        title: 'May 2024 - Aug 2024',
        cardTitle: "Incoming Intern - Software Engineer",
        cardSubtitle: 'Sequoia Capital, Menlo Park, CA',
        cardDetailedText: ['Will be working  with the Workspace Engineering Team in Summer 2024 to redesign flawed software workflows'],
    },
    {
        title: 'May 2023 - Dec 2023',
        cardTitle: "Intern - Software Engineer",
        cardSubtitle: 'Fulfil Solutions, Mountain View, CA',

        cardDetailedText: ['Played a significant role in developing the Factory Generation tool, enabling the creation of MARS systems in simulation by determining the required count of different machines and generating them in various orientations for simulation purposes.',
            'Devised a Mars Status Updater Agent to automatically refresh machine statuses, such as stacks and trays, at regular intervals, adhering to various system constraints to prevent commands from being sent to faulty or inactive machines.',
            'Contributed to the development of a Reservation System, empowering users to create and release reservations on specific machines for executing various commands.'],
    }];

    return (
        <div>
            <SectionHeading heading={'From 9 to 5: The Saga of My Work Life'} />
            <Chrono mode='VERTICAL_ALTERNATING'
                items={workExperience}
                slideShow
                textDensity={'LOW'}
                enableLayoutSwitch={false}
                enableQuickJump={false}
                flipLayout={true}
                theme={{
                    primary: 'var(--imp-text-color)',
                    secondary: 'var(--imp-icon-color)',
                    cardBgColor: 'var(--imp-background-color)',
                    titleColor: 'var(--imp-text-color)',
                    titleColorActive: 'var(--imp-text-color)',
                    toolbarBgColor: 'var(--imp-background-color)',
                    toolbarBtnBgColor: 'var(--imp-background-color)',
                    toolbarTextColor: 'var(--imp-text-color)'
                }}
                classNames={{
                    card: 'card-details',
                    cardSubTitle: 'text-white',
                    cardText: 'text-white',
                    cardTitle: 'text-white',
                }}>
            </Chrono>
        </div >
    )
}

export default Experience;