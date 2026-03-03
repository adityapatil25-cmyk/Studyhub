/*import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
/*import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import './PDFViewer.css';

// Set up PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFViewer = ({ pdfUrl }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setLoading(false);
    }

    function onDocumentLoadError(error) {
        console.error('Error loading PDF:', error);
        setError('Failed to load PDF. Please try downloading it instead.');
        setLoading(false);
    }

    const goToPrevPage = () => {
        setPageNumber((prev) => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setPageNumber((prev) => Math.min(prev + 1, numPages));
    };

    return (
        <div className="pdf-viewer-container">
            {loading && <div className="pdf-viewer-loading">Loading PDF...</div>}
            
            {error && (
                <div className="pdf-viewer-error">
                    <p>{error}</p>
                    <a href={pdfUrl} download className="pdf-viewer-download-btn">
                        Download PDF Instead
                    </a>
                </div>
            )}

            {!error && (
                <>
                    <Document
                        file={pdfUrl}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={onDocumentLoadError}
                        loading={<div className="pdf-viewer-loading">Loading PDF...</div>}
                    >
                        <Page 
                            pageNumber={pageNumber} 
                            width={Math.min(window.innerWidth - 100, 800)}
                            renderTextLayer={true}
                            renderAnnotationLayer={true}
                        />
                    </Document>

                    {numPages && (
                        <div className="pdf-viewer-controls">
                            <button
                                className="pdf-viewer-btn"
                                disabled={pageNumber <= 1}
                                onClick={goToPrevPage}
                            >
                                ← Previous
                            </button>
                            <span className="pdf-viewer-page-info">
                                Page {pageNumber} of {numPages}
                            </span>
                            <button
                                className="pdf-viewer-btn"
                                disabled={pageNumber >= numPages}
                                onClick={goToNextPage}
                            >
                                Next →
                            </button>
                        </div>
                    )}

                    <div className="pdf-viewer-download">
                        <a href={pdfUrl} download className="pdf-viewer-download-btn">
                            📥 Download PDF
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default PDFViewer;
*/