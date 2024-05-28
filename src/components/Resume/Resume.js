import { Document, Page, pdfjs } from "react-pdf";
import resume from '../../assets/resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
    return (
        <div className="resume-container text-white">
            <Document file={resume} className="d-flex justify-content-center">
                <Page pageNumber={1} />
            </Document>
        </div >
    );
}

export default Resume;