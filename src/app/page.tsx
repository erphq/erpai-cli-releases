import { FileQuestion } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF5] flex items-center justify-center px-6">
      <div className="text-center">
        <FileQuestion className="mx-auto h-24 w-24 text-stone-400 mb-6" />
        <h1 className="text-6xl font-bold text-stone-900 mb-4">404</h1>
        <h2 className="text-2xl text-stone-700 mb-4">Page Not Found</h2>
        <p className="text-stone-600 mb-8">
          The page you are looking for does not exist.
        </p>
        <a
          href="https://erp.ai"
          className="inline-block rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-3 transition-colors"
        >
          Go to ERP·AI
        </a>
      </div>
    </div>
  );
}
