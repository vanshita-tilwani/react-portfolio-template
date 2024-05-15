import React from 'react';
import SectionHeading from "../common/SectionHeading";
import SlideInTransition from "../common/SlideInTransition";
import CollapsibleCard from '../common/CollapsibleCard';


const educationDetails = [
    {
        university: 'Northeastern University, Boston',
        timeline: '2022 - 2024',
        degree: "Master's in Computer Science",
        coursework: ['CS 5010 - Programming Design Paradigms',
            'CS 5200 - Database Management Systems',
            'CS 5500 - Foundations of Software Engineering',
            'CS 5800 - Algorithms',
            'CS 6620 - Cloud Computing',
            'CS 6200 - Information Retrieval',
            'CS 5610 - Web Development'],
        grade: '3.95/4.0'
    },
    {
        university: 'The LNM Institute of Information Technology, India',
        timeline: '2014 - 2018',
        degree: "Bachelor's in Communication and Computer Engineering",
        coursework: ['Computer Programming',
            'Data Structures',
            'Computer Organization and Architecture',
            'Object Oriented Programming using Java',
            'Operating Systems',
            'Software Engineering',
            'Active Directory',
            'Applied CS with Android',
            'Computer Networks',
            'Introduction to Randomized Algorithms'],
        grade: '8.16/10.0'
    }
]
function Education() {
    return (
        <div className='education-container'>
            <SectionHeading heading={"Knowledge Party: Where I Got Schooled"}></SectionHeading>
            <div>
                {educationDetails.map(detail =>
                (
                    <div className='d-flex justify-content-center mb-7'>
                        <SlideInTransition mode={'left'}>
                            <SectionHeading level={'h4'} heading={detail.timeline}></SectionHeading>
                        </SlideInTransition>
                        <SlideInTransition mode={'right'}>
                            <CollapsibleCard className="py-5 text-white m-4 card-details" heading={detail.university}> {
                                <div >
                                    <div className='mb-2'>
                                        {detail.degree}
                                    </div>
                                    <div className='mb-2'>
                                        Coursework :
                                        <ul>
                                            {
                                                detail.coursework.map(each =>
                                                    <li>{each}</li>
                                                )
                                            }
                                        </ul>
                                    </div>
                                    <div className='mb-2'>
                                        GPA : {detail.grade}
                                    </div>
                                </div>}
                            </CollapsibleCard>

                        </SlideInTransition>
                    </div>)
                )}


            </div>
        </div>
    );
}

export default Education;