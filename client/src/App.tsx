import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Portfolio from "@/pages/Portfolio";
import Seo from "@/pages/Seo";
import CV from "@/pages/CV";
import { useEffect } from "react";

// Redirect root to default language
function RootRedirect() {
  const [, setLocation] = useLocation();
  useEffect(() => {
    setLocation("/en");
  }, [setLocation]);
  return null;
}

function Router() {
  return (
    <Switch>
      {/* Root redirect */}
      <Route path="/" component={RootRedirect} />
      
      {/* Routes for each language */}
      <Route path="/:lang" component={Home} />
      <Route path="/:lang/portfolio" component={Portfolio} />
      <Route path="/:lang/seo" component={Seo} />
      <Route path="/:lang/cv" component={CV} />
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
