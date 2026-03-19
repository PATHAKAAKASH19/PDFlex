
import { lazy , Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
const HomePage = lazy(() => import("./pages/HomePage"));
const PDFEditorPage = lazy(() => import("./pages/PDFEditorPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));



export function App() {
  return (
    <div className="flex min-h-svh">
      <BrowserRouter>
        <Suspense fallback={<LoadingPage/>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/pdf-editor" element={<PDFEditorPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

















                                                          

export default App
