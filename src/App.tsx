import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AppRouter from "./router";
import AuthProvider from "./components/providers/auth-provider";

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
        <AuthProvider>
          <Toaster position="bottom-right" reverseOrder={false} />
          <AppRouter />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;

// ** app.tsx is also beneficial for adding root settings in the application as it is the entry point of the app.
