import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster position="top-right" reverseOrder={false} />
        <AppRouter />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

// ** app.tsx is also beneficial for adding root settings in the application as it is the entry point of the app.
