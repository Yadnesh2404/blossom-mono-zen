import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hair from "./pages/Services/Hair";
import Nails from "./pages/Services/Nails";
import Makeup from "./pages/Services/Makeup";
import Skin from "./pages/Services/Skin";
import Spa from "./pages/Services/Spa";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/hair" element={<Hair />} />
              <Route path="/services/skin" element={<Skin />} />
              <Route path="/services/nails" element={<Nails />} />
              <Route path="/services/makeup" element={<Makeup />} />
              <Route path="/services/spa" element={<Spa />} />
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
