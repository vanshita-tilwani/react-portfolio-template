import { Section } from '@radix-ui/themes'

function SectionHeading({ heading }) {
    return (<Section>
        <div className="justify-content-center text-white text-center p-4">
            <h3>{heading}</h3>
        </div>
    </Section >);
}

export default SectionHeading;