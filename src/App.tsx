import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";

// Lazy-loaded routes — only fetched when the user navigates to them
const Hair = lazy(() => import("./pages/Services/Hair"));
const Nails = lazy(() => import("./pages/Services/Nails"));
const Makeup = lazy(() => import("./pages/Services/Makeup"));
const Skin = lazy(() => import("./pages/Services/Skin"));
const Spa = lazy(() => import("./pages/Services/Spa"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Minimal loading fallback that matches the site's luxury aesthetic
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-8 h-8 border-2 border-brand-gold/30 border-t-brand-gold rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Home />} />
                <Route path="/contact" element={<Home />} />
                <Route path="/services" element={<Navigate to="/services/hair" replace />} />
                <Route path="/services/hair" element={<Hair />} />
                <Route path="/services/skin" element={<Skin />} />
                <Route path="/services/nails" element={<Nails />} />
                <Route path="/services/makeup" element={<Makeup />} />
                <Route path="/services/spa" element={<Spa />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
