import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Operations from "./pages/Operations";
import Projects from "./pages/Projects";
import ProjectCrossRiver from "./pages/ProjectCrossRiver";
import ProjectKogiGold from "./pages/ProjectKogiGold";
import Equipment from "./pages/Equipment";
import Minerals from "./pages/Minerals";
import Investment from "./pages/Investment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-16 md:pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/operations" element={<Operations />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/cross-river" element={<ProjectCrossRiver />} />
              <Route path="/projects/kogi-gold" element={<ProjectKogiGold />} />
              <Route path="/equipment" element={<Equipment />} />
              <Route path="/minerals" element={<Minerals />} />
              <Route path="/investment" element={<Investment />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
