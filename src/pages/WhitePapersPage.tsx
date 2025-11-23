import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const WhitePapersPage = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const pdfUrl = '/assets/How_to_secure_corporate_data_with_AI.pdf';

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  const goToPrevPage = () => {
    setPageNumber((prev) => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(prev + 1, numPages));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'How_to_secure_corporate_data_with_AI.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              White Papers
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technical insights and research on AI implementation and security
            </p>
          </div>

          {/* Featured White Paper */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold mb-2 text-foreground">
                Bringing Large Language Models Inside the Corporate Firewall
              </h2>
              <p className="text-muted-foreground mb-4">
                A Technical White Paper for CIOs and Chief AI Architects
              </p>
              <Button 
                onClick={handleDownload}
                className="bg-cpp-accent hover:bg-cpp-light-accent text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>

            {/* PDF Viewer */}
            <div className="bg-card border border-border rounded-lg shadow-lg p-6">
              <div className="flex flex-col items-center">
                {loading && (
                  <div className="text-muted-foreground mb-4">Loading PDF...</div>
                )}
                
                <Document
                  file={pdfUrl}
                  onLoadSuccess={onDocumentLoadSuccess}
                  loading={<div className="text-muted-foreground">Loading document...</div>}
                  error={<div className="text-destructive">Failed to load PDF. Please try downloading instead.</div>}
                  className="max-w-full"
                >
                  <Page 
                    pageNumber={pageNumber}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-md"
                    width={Math.min(window.innerWidth - 100, 900)}
                  />
                </Document>

                {/* Navigation Controls */}
                {!loading && numPages > 0 && (
                  <div className="mt-6 flex items-center gap-4">
                    <Button
                      onClick={goToPrevPage}
                      disabled={pageNumber <= 1}
                      variant="outline"
                      size="sm"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    
                    <span className="text-sm text-muted-foreground">
                      Page {pageNumber} of {numPages}
                    </span>
                    
                    <Button
                      onClick={goToNextPage}
                      disabled={pageNumber >= numPages}
                      variant="outline"
                      size="sm"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WhitePapersPage;
