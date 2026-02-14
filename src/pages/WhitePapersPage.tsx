import { useState, useCallback } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { ChevronLeft, ChevronRight, Download, FileText, BookOpen, StickyNote, Plus, Trash2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface WhitePaper {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  pdfUrl: string;
  fileName: string;
}

interface Note {
  id: string;
  paperId: string;
  page: number;
  selectedText: string;
  content: string;
  createdAt: Date;
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
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('whitepaper-notes');
    return saved ? JSON.parse(saved) : [];
  });
  const [showNotes, setShowNotes] = useState(false);
  const [newNoteText, setNewNoteText] = useState('');
  const [selectedText, setSelectedText] = useState('');

  const saveNotes = useCallback((updatedNotes: Note[]) => {
    setNotes(updatedNotes);
    localStorage.setItem('whitepaper-notes', JSON.stringify(updatedNotes));
  }, []);

  const openPaper = (paper: WhitePaper) => {
    setSelectedPaper(paper);
    setPageNumber(1);
    setNumPages(0);
    setLoading(true);
    setShowNotes(false);
  };

  const closePaper = () => {
    setSelectedPaper(null);
    setShowNotes(false);
  };

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setLoading(false);
  };

  const handleTextSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().trim()) {
      setSelectedText(selection.toString().trim());
    }
  };

  const addNote = () => {
    if (!selectedPaper || (!newNoteText.trim() && !selectedText.trim())) return;
    const note: Note = {
      id: Date.now().toString(),
      paperId: selectedPaper.id,
      page: pageNumber,
      selectedText: selectedText,
      content: newNoteText,
      createdAt: new Date(),
    };
    saveNotes([...notes, note]);
    setNewNoteText('');
    setSelectedText('');
  };

  const deleteNote = (noteId: string) => {
    saveNotes(notes.filter(n => n.id !== noteId));
  };

  const currentNotes = notes.filter(n => selectedPaper && n.paperId === selectedPaper.id);

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
              <div className="flex items-center gap-2 flex-shrink-0">
                <Button
                  onClick={() => setShowNotes(!showNotes)}
                  variant={showNotes ? "default" : "outline"}
                  size="sm"
                  className={showNotes ? "bg-cpp-accent hover:bg-cpp-light-accent text-white" : ""}
                >
                  <StickyNote className="h-4 w-4 mr-1" />
                  Notes ({currentNotes.length})
                </Button>
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
            </div>
          </DialogHeader>

          <div className="flex flex-1 overflow-hidden">
            {/* PDF Viewer */}
            <div className="flex-1 flex flex-col items-center overflow-auto p-4" onMouseUp={handleTextSelection}>
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
                    width={Math.min(showNotes ? window.innerWidth * 0.55 : window.innerWidth * 0.8, 900)}
                  />
                </Document>
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

              {selectedText && (
                <div className="mt-2 p-3 bg-cpp-accent/10 border border-cpp-accent/30 rounded-md max-w-lg w-full">
                  <p className="text-xs text-muted-foreground mb-1">Selected text:</p>
                  <p className="text-sm italic text-foreground line-clamp-3">"{selectedText}"</p>
                  <div className="mt-2 flex gap-2">
                    <Textarea
                      value={newNoteText}
                      onChange={(e) => setNewNoteText(e.target.value)}
                      placeholder="Add a note about this highlight..."
                      className="text-sm min-h-[60px]"
                    />
                    <Button onClick={addNote} size="sm" className="bg-cpp-accent hover:bg-cpp-light-accent text-white self-end">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Notes Panel */}
            {showNotes && (
              <div className="w-80 border-l border-border bg-muted/30 flex flex-col flex-shrink-0">
                <div className="p-4 border-b border-border">
                  <h3 className="font-semibold text-cpp-blue text-sm">Your Notes</h3>
                </div>
                <div className="flex-1 overflow-auto p-4 space-y-3">
                  {currentNotes.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center mt-4">
                      Highlight text in the PDF and add notes. They'll be saved automatically.
                    </p>
                  ) : (
                    currentNotes.map((note) => (
                      <div key={note.id} className="bg-card p-3 rounded-md border border-border text-sm">
                        <div className="flex justify-between items-start mb-1">
                          <span className="text-xs text-cpp-accent font-medium">Page {note.page}</span>
                          <button onClick={() => deleteNote(note.id)} className="text-muted-foreground hover:text-destructive">
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                        {note.selectedText && (
                          <p className="italic text-muted-foreground text-xs mb-1 line-clamp-2">"{note.selectedText}"</p>
                        )}
                        {note.content && <p className="text-foreground">{note.content}</p>}
                      </div>
                    ))
                  )}
                </div>
                {/* Quick note without highlight */}
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Textarea
                      value={!selectedText ? newNoteText : ''}
                      onChange={(e) => { setSelectedText(''); setNewNoteText(e.target.value); }}
                      placeholder="Quick note for this page..."
                      className="text-sm min-h-[50px]"
                    />
                    <Button
                      onClick={() => { if (!selectedText) addNote(); }}
                      size="sm"
                      className="bg-cpp-accent hover:bg-cpp-light-accent text-white self-end"
                      disabled={!newNoteText.trim() && !selectedText}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
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
