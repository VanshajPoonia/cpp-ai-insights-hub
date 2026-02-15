import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, Download, FileText, BookOpen } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface WhitePaper {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  fileName: string;
}

const whitePapers: WhitePaper[] = [
  {
    id: 'llm-firewall',
    title: 'Bringing Large Language Models Inside the Corporate Firewall',
    subtitle: 'A Technical White Paper for CIOs and Chief AI Architects',
    description: 'Learn how to securely deploy LLMs within your corporate infrastructure while maintaining data privacy and compliance.',
    pdfUrl: '/assets/How_to_secure_corporate_data_with_AI.pdf',
    fileName: 'How_to_secure_corporate_data_with_AI.pdf',
  },
  {
    id: 'agentic-ai',
    title: 'Speed is Strategy: How Agentic AI Rewired an Entire Operating Model',
    subtitle: 'A Board-Ready Enhancement Report',
    description: 'Discover how agentic AI can transform your operating model, accelerate decision-making, and create lasting competitive advantage.',
    pdfUrl: '/assets/ConnectBase_Agentic_AI_Board_Ready_Enhanced.pdf',
    fileName: 'ConnectBase_Agentic_AI_Board_Ready_Enhanced.pdf',
  },
];

const WhitePapersPage = () => {
  const [selectedPaper, setSelectedPaper] = useState<WhitePaper | null>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const openPaper = (paper: WhitePaper) => {
    setSelectedPaper(paper);
    setPageNumber(1);
    setNumPages(0);
    setLoading(true);
  };

  const closePaper = () => {
    setSelectedPaper(null);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handleDownload = (paper: WhitePaper) => {
    const link = document.createElement('a');
    link.href = paper.pdfUrl;
    link.download = paper.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cpp-blue">
              White Papers
            </h1>
            <div className="w-24 h-1 bg-cpp-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Technical insights and research on AI implementation and security
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {whitePapers.map((paper) => (
              <div
                key={paper.id}
                className="bg-card border border-border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-cpp-blue p-6">
                  <FileText className="h-10 w-10 text-cpp-accent mb-3" />
                  <h2 className="text-xl font-bold text-white leading-tight">{paper.title}</h2>
                  <p className="text-cpp-light-accent text-sm mt-1">{paper.subtitle}</p>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm mb-6">{paper.description}</p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => openPaper(paper)}
                      className="bg-cpp-accent hover:bg-cpp-light-accent text-white flex-1"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Now
                    </Button>
                    <Button
                      onClick={() => handleDownload(paper)}
                      variant="outline"
                      className="border-cpp-blue text-cpp-blue hover:bg-cpp-blue hover:text-white"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* PDF Reader Modal */}
      <Dialog open={!!selectedPaper} onOpenChange={(open) => !open && closePaper()}>
        <DialogContent className="max-w-[95vw] w-full max-h-[95vh] h-full flex flex-col p-0 gap-0">
          <DialogHeader className="px-6 py-4 border-b border-border flex-shrink-0">
            <div className="flex items-center justify-between pr-8">
              <DialogTitle className="text-lg font-bold text-cpp-blue truncate">
                {selectedPaper?.title}
              </DialogTitle>
              {selectedPaper && (
                <Button
                  onClick={() => handleDownload(selectedPaper)}
                  variant="outline"
                  size="sm"
                >
                  <Download className="h-4 w-4" />
                </Button>
              )}
            </div>
          </DialogHeader>

          <div className="flex-1 flex flex-col items-center overflow-auto p-4">
            {loading && (
              <div className="text-muted-foreground mb-4 mt-8">Loading PDF...</div>
            )}

            {selectedPaper && (
              <Document
                file={selectedPaper.pdfUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div className="text-muted-foreground mt-8">Loading document...</div>}
                error={<div className="text-destructive mt-8">Failed to load PDF. Please try downloading instead.</div>}
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  className="shadow-md"
                  width={Math.min(window.innerWidth * 0.8, 900)}
                />
              </Document>
            )}

            {!loading && (pageNumber === 1 || pageNumber === 2) && numPages > pageNumber && (
              <div className="mt-4 py-3 px-6 bg-cpp-accent/10 border border-cpp-accent/30 rounded-md text-center">
                <p className="text-sm font-medium text-cpp-blue">To keep reading press <strong>Next</strong> below ↓</p>
              </div>
            )}

            {!loading && numPages > 0 && (
              <div className="mt-4 mb-2 flex items-center gap-4 flex-shrink-0">
                <Button onClick={() => setPageNumber(p => Math.max(p - 1, 1))} disabled={pageNumber <= 1} variant="outline" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>
                <span className="text-sm text-muted-foreground">Page {pageNumber} of {numPages}</span>
                <Button onClick={() => setPageNumber(p => Math.min(p + 1, numPages))} disabled={pageNumber >= numPages} variant="outline" size="sm">
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default WhitePapersPage;
