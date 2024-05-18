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
    },
    {
        title: 'Nov 2020 - Aug 2022',
        cardTitle: "Software Engineer - IC 2",
        cardSubtitle: 'ServiceNow, Hyderabad, India',
        cardDetailedText: ['Contributed to Appointment Booking flow including self and group bookings for VAM(Vaccine Administration Management) helped vaccinate nearly 1.7 million in Australia and thousands across the United States',
            'Worked on providing the ability to configure rule based recommendation systems(guidance as well decision tree based recommendations) called Next Best Action to help support executives solve customer cases 38% faster',
            'Managed and contributed in the development of recommendation/decision tree experience which led to increase in product feature adoption due to better user experience'],
    },
    {
        title: 'June 2018 - Oct 2020',
        cardTitle: "Software Development Engineer - 2",
        cardSubtitle: 'Planful, Hyderabad, India',
        cardDetailedText: ['Redesigned Report Security configurations by providing explicit and inherited permissions to view/edit various artifacts given to the user explicitly or through a user group',
            'Managed Dynamic Commentary capabilities across the modules, such as mentioning a user, assigning a task to the user, tagging the comment with hashtags, and resolving/archiving the comment thread',
            'Developed interactive reporting using Cell-Level Formatting with text/data formatting for data visualization in reports',
            'Developed a Dynamic Planning canvas to help users input budgets/actuals into the system and perform ad-hoc, multidimensional analysis : Zoom in, zoom out, keep, and pivot on all business categories and segments to explore data at the most granular business level/ aggregated financial results for the whole company'],
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