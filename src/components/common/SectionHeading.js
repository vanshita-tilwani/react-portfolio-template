import { Section } from '@radix-ui/themes'

function SectionHeading({ level, heading }) {
    const HeadingTag = level || 'h3';

    return (<Section>
        <div className="justify-content-center text-white text-center p-4">
            <HeadingTag>{heading}</HeadingTag>
        </div>
    </Section >);
}

export default SectionHeading;