"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Terminal,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  MessageSquare,
  Database,
  LogIn,
  History,
  FileText,
  Presentation,
  FileSpreadsheet,
  Upload,
  Download,
  LayoutDashboard,
} from "lucide-react";

const INSTALL_COMMAND = `curl -fsSL https://install.erpai.dev/install.sh | sh`;

export default function Home() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#FFFBF5]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-stone-200/60 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
          <a href="https://erp.ai" className="flex items-center gap-2">
            <Logo />
          </a>
          <nav className="flex items-center gap-4 md:gap-6">
            <a
              href="https://erp.ai"
              className="hidden text-sm text-stone-600 hover:text-stone-900 transition-colors md:block"
            >
              Platform
            </a>
            <a
              href="https://erp.ai/pricing"
              className="hidden text-sm text-stone-600 hover:text-stone-900 transition-colors md:block"
            >
              Pricing
            </a>
            <Button
              asChild
              className="rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white px-5"
            >
              <a href="https://erp.ai">Contact</a>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6">
        <section className="py-16 md:py-20 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2 motion-safe:animate-erpai-float">
            <Terminal className="h-4 w-4 text-stone-500" />
            <span className="text-sm text-stone-600">Command Line Interface</span>
          </div>

          <h1
            className="mb-4 text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-900 motion-safe:animate-erpai-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            ERP·AI{" "}
            <span className="font-instrument-serif italic text-[#F97316]">
              CLI
            </span>
          </h1>

          <p
            className="mx-auto mb-4 max-w-2xl text-lg text-stone-900/90 motion-safe:animate-erpai-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            AI-powered assistant for your ERP data
          </p>

          <p
            className="mx-auto mb-10 max-w-2xl text-lg text-stone-600 motion-safe:animate-erpai-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Query your ERP data using natural language directly from your terminal.
            Get instant insights, generate reports, and export to business formats.
          </p>

          {/* Install Box */}
          <div className="mx-auto max-w-xl">
            <div
              className="rounded-2xl border border-stone-200 bg-[#1C1C1C] p-5 text-left shadow-lg motion-safe:animate-erpai-fade-up"
              style={{ animationDelay: "260ms" }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                <div className="h-3 w-3 rounded-full bg-[#27CA40]" />
                <span className="ml-2 text-xs text-stone-500 font-mono">
                  Terminal
                </span>
              </div>
              <div className="overflow-hidden">
                <code className="text-sm text-stone-300 font-mono break-all">
                  {INSTALL_COMMAND}
                </code>
              </div>
              <Button
                onClick={copyCommand}
                variant="outline"
                size="sm"
                className="mt-4 gap-2 border-stone-600 bg-[#2A2A2A] text-stone-300 hover:bg-[#333] hover:text-white hover:border-stone-500"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-[#27CA40]" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy command
                  </>
                )}
              </Button>
            </div>
          </div>
        </section>

        {/* Commands */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-4 text-center text-2xl md:text-3xl text-stone-900">
            Commands
          </h2>
          <p className="mb-10 text-center text-stone-600 max-w-xl mx-auto">
            Simple commands to interact with your ERP·AI apps
          </p>

          <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
            {[
              {
                icon: <LogIn className="h-5 w-5" />,
                command: "erpai login",
                description: "Authenticate with your ERP·AI account via browser",
              },
              {
                icon: <MessageSquare className="h-5 w-5" />,
                command: "erpai chat",
                description: "Start an AI-powered chat session with your app",
              },
              {
                icon: <History className="h-5 w-5" />,
                command: "erpai threads",
                description: "List and resume previous chat conversations",
              },
              {
                icon: <Terminal className="h-5 w-5" />,
                command: "erpai doctor",
                description: "Check CLI configuration and connectivity",
              },
            ].map((item, index) => (
              <CommandCard key={item.command} delay={index * 80} {...item} />
            ))}
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-4 text-center text-2xl md:text-3xl text-stone-900">
            Reports, exports, and{" "}
            <span className="font-instrument-serif italic text-[#F97316]">
              automation
            </span>
          </h2>
          <p className="mb-10 text-center text-stone-600 max-w-xl mx-auto">
            Generate business-ready outputs and automate common workflows.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FileText className="h-5 w-5" />,
                title: "PDF reports",
                description:
                  "Generate polished PDF reports for leadership and compliance.",
              },
              {
                icon: <Presentation className="h-5 w-5" />,
                title: "PPT decks",
                description:
                  "Create slide-ready summaries and quarterly updates.",
              },
              {
                icon: <FileSpreadsheet className="h-5 w-5" />,
                title: "Excel export",
                description:
                  "Export data to Excel or CSV for finance and ops.",
              },
              {
                icon: <Upload className="h-5 w-5" />,
                title: "Excel import",
                description:
                  "Upload Excel files to build or enrich your datasets.",
              },
              {
                icon: <LayoutDashboard className="h-5 w-5" />,
                title: "Dashboards",
                description:
                  "Summarize KPIs into dashboards and team-ready views.",
              },
              {
                icon: <Download className="h-5 w-5" />,
                title: "Scheduled exports",
                description:
                  "Deliver reports on a cadence without manual effort.",
              },
            ].map((item, index) => (
              <CapabilityCard key={item.title} delay={index * 70} {...item} />
            ))}
          </div>
        </section>

        {/* What you can do */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-4 text-center text-2xl md:text-3xl text-stone-900">
            What you can{" "}
            <span className="font-instrument-serif italic text-[#22C55E]">
              do
            </span>
          </h2>
          <p className="mb-10 text-center text-stone-600 max-w-xl mx-auto">
            Ask questions in plain English and get answers from your data
          </p>

          <div className="mx-auto max-w-3xl space-y-4">
            {[
              {
                question: "How many active customers do we have?",
                answer: "You have 1,247 active customers across 12 regions.",
              },
              {
                question: "What's the total revenue for Q4?",
                answer: "Q4 revenue is $2.4M, up 18% from Q3.",
              },
              {
                question: "Show me top 5 products by sales",
                answer: "1. Widget Pro ($450K) 2. Service Plus ($320K) ...",
              },
              {
                question: "Average order value by customer segment?",
                answer: "Enterprise: $12,400 | SMB: $2,100 | Startup: $890",
              },
            ].map((item, index) => (
              <ExampleCard key={item.question} delay={index * 70} {...item} />
            ))}
          </div>
        </section>

        {/* CLI UI Preview */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
            <div className="motion-safe:animate-erpai-fade-up">
              <h2 className="mb-4 text-2xl md:text-3xl text-stone-900">
                Beautiful CLI{" "}
                <span className="font-instrument-serif italic text-[#22C55E]">
                  UI
                </span>
              </h2>
              <p className="text-stone-600">
                The ERP·AI CLI renders rich, structured output with clear
                borders, readable prompts, and status-aware highlighting —
                designed for fast work in the terminal.
              </p>
            </div>
            <AnimatedTerminal />
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-10 text-center text-2xl md:text-3xl text-stone-900">
            Features
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <Database className="h-5 w-5" />,
                title: "SQL Generation",
                description: "AI generates optimized PostgreSQL queries",
              },
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: "Analytics",
                description: "Aggregations, breakdowns, and trends",
              },
              {
                icon: <Shield className="h-5 w-5" />,
                title: "Read-Only",
                description: "Safe queries that never modify data",
              },
              {
                icon: <Zap className="h-5 w-5" />,
                title: "Fast",
                description: "Instant responses from your terminal",
              },
            ].map((item, index) => (
              <Feature key={item.title} delay={index * 70} {...item} />
            ))}
          </div>
        </section>

        {/* Getting Started */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-10 text-center text-2xl md:text-3xl text-stone-900">
            Get started in{" "}
            <span className="font-instrument-serif italic text-[#F97316]">
              3 steps
            </span>
          </h2>

          <div className="mx-auto grid max-w-2xl gap-5">
            <Step
              number={1}
              title="Install"
              description="Run the install command above"
              code="curl -fsSL https://install.erpai.dev/install.sh | sh"
            />
            <Step
              number={2}
              title="Login"
              description="Authenticate with your ERP·AI account"
              code="erpai login"
            />
            <Step
              number={3}
              title="Chat"
              description="Start asking questions about your data"
              code="erpai chat"
            />
          </div>
        </section>

        {/* Requirements */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-8 text-center text-2xl md:text-3xl text-stone-900">
            Requirements
          </h2>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-3">
            {[
              "macOS (Apple Silicon)",
              "Linux (coming soon)",
              "Windows (coming soon)",
              "ERP·AI account",
            ].map((req) => (
              <div
                key={req}
                className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2"
              >
                <Check className="h-4 w-4 text-[#22C55E]" />
                <span className="text-sm text-stone-700">{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <div className="mx-auto max-w-lg text-center">
            <h3 className="mb-4 text-2xl text-stone-900">
              Ready to get started?
            </h3>
            <p className="mb-6 text-stone-600">
              Sign up for ERP·AI and start building AI-powered business apps.
            </p>
            <Button
              asChild
              className="rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white px-6"
            >
              <a href="https://erp.ai">
                Build Now with ERP·AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200/60 bg-white py-8">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="opacity-50">
              <Logo />
            </div>
            <p className="text-sm text-stone-500">
              Made with love by{" "}
              <a
                href="https://erp.ai"
                className="text-[#F97316] hover:underline"
              >
                ERP·AI
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 764 200"
      className="h-5 w-auto text-stone-900"
    >
      <path
        fillRule="evenodd"
        d="M55.791 149.146c-1.228 0-2.4-.48-3.274-1.355a4.645 4.645 0 0 1-1.355-3.274V55.484c0-1.228.494-2.4 1.355-3.275a4.672 4.672 0 0 1 3.274-1.355h128.525a2.554 2.554 0 0 1 2.555 2.555v18.645a2.552 2.552 0 0 1-2.555 2.541H81.805c-3.77 0-6.762 3.09-6.762 6.775v6.76h97.981a2.555 2.555 0 0 1 2.556 2.555v18.645a2.55 2.55 0 0 1-2.556 2.54h-97.98v6.776c0 3.656 3.005 6.633 6.76 6.633h102.512a2.554 2.554 0 0 1 2.555 2.555v18.772a2.55 2.55 0 0 1-2.555 2.54H55.791Zm280.723-58.461c0 12.605-7.524 23.387-18.448 27.946l17.628 26.564c.509.776.566 1.778.114 2.61a2.516 2.516 0 0 1-2.245 1.341h-22.356a2.569 2.569 0 0 1-2.132-1.129l-17.882-26.831h-66.381v25.42a2.538 2.538 0 0 1-2.54 2.54h-18.645a2.547 2.547 0 0 1-2.54-2.54V53.409a2.55 2.55 0 0 1 2.54-2.555H306.14c16.852 0 30.374 13.663 30.374 30.516v9.315Zm-23.599 0v-9.316c0-3.684-3.106-6.774-6.775-6.774h-81.328s0 22.864.014 22.864h81.314c3.669 0 6.775-3.006 6.775-6.774Zm141.867-39.831c16.711 0 30.516 13.663 30.516 30.516v9.315c0 16.852-13.805 30.501-30.516 30.501h-81.314v25.42a2.55 2.55 0 0 1-2.554 2.54h-18.631a2.551 2.551 0 0 1-2.555-2.54V53.409a2.555 2.555 0 0 1 2.555-2.555h102.499Zm6.775 39.831v-9.316c0-3.684-3.092-6.774-6.775-6.774h-81.314V97.46h81.314c3.683 0 6.775-3.006 6.775-6.774Zm66.507-13.035c12.339 0 22.358 10.019 22.358 22.359 0 12.322-10.019 22.342-22.358 22.342-12.34 0-22.358-10.02-22.358-22.342 0-12.34 10.018-22.359 22.358-22.359Zm8.605-22.21c.016 5.296-4.273 9.602-9.57 9.618-5.297.016-9.619-4.274-9.635-9.57l-.039-23.261c-.012-7.198-5.849-13.025-13.045-13.025-75.015 0-396.948.13-472.092.13a13.077 13.077 0 0 0-13.074 13.073V167.83c0 7.179 5.82 12.998 12.998 12.998 74.99 0 397.37-.13 472.24-.13a12.95 12.95 0 0 0 12.95-12.952l-.002-24.143c0-5.297 4.289-9.603 9.602-9.603 5.298 0 9.602 4.306 9.602 9.603v32.065c0 13.366-10.835 24.203-24.202 24.202-95.622 0-392.27.13-488.089.13A24.31 24.31 0 0 1 0 175.687V24.365C0 10.981 10.85.13 24.235.13 119.895.13 416.407 0 512.26 0c13.45 0 24.357 10.896 24.373 24.345l.036 31.094Zm110.983 21.275c-.517-.894-1.523-1.452-2.616-1.45-1.093.001-2.096.561-2.61 1.458l-40.676 70.965c-.515.898-1.52 1.458-2.615 1.458h-29.53c-1.051 0-2.024-.517-2.555-1.36a2.582 2.582 0 0 1-.029-2.736l55.974-92.79c.523-.868 1.512-1.406 2.583-1.406h39.518c1.085 0 2.082.55 2.601 1.434l54.491 92.789c.5.853.48 1.887-.06 2.722-.53.835-1.5 1.347-2.54 1.347H691.24c-1.092 0-2.095-.557-2.611-1.451l-40.977-70.98Zm85.256 72.431c-1.63 0-2.96-1.232-2.96-2.751V53.606c0-1.52 1.33-2.752 2.96-2.752h26.172c1.64 0 2.96 1.232 2.96 2.752v92.789c0 1.519-1.32 2.751-2.96 2.751h-26.172Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function CommandCard({
  icon,
  command,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  command: string;
  description: string;
  delay?: number;
}) {
  return (
    <div
      className="rounded-xl border border-stone-200 bg-white p-5 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
          {icon}
        </div>
        <div>
          <code className="text-sm font-semibold text-stone-900 font-mono">
            {command}
          </code>
          <p className="mt-1 text-sm text-stone-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function CapabilityCard({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <div
      className="rounded-xl border border-stone-200 bg-white p-5 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
        {icon}
      </div>
      <h3 className="mb-1 font-medium text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}

function ExampleCard({
  question,
  answer,
  delay = 0,
}: {
  question: string;
  answer: string;
  delay?: number;
}) {
  return (
    <div
      className="rounded-xl border border-stone-200 bg-white p-5 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white text-xs font-medium">
          Q
        </div>
        <div className="flex-1">
          <p className="text-stone-900 font-medium">{question}</p>
          <div className="mt-2 flex items-start gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white text-xs font-medium">
              A
            </div>
            <p className="text-sm text-stone-600">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Step({
  number,
  title,
  description,
  code,
}: {
  number: number;
  title: string;
  description: string;
  code?: string;
}) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-white border border-stone-200">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-white font-medium text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h3 className="mb-1 font-medium text-stone-900">{title}</h3>
        <p className="text-sm text-stone-600">{description}</p>
        {code && (
          <code className="mt-2 inline-block rounded-md bg-stone-100 px-3 py-1.5 font-mono text-sm text-stone-800">
            {code}
          </code>
        )}
      </div>
    </div>
  );
}

function Feature({
  icon,
  title,
  description,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <div
      className="rounded-xl border border-stone-200 bg-white p-5 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
        {icon}
      </div>
      <h3 className="mb-1 font-medium text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}

type TerminalStep = {
  role: "user" | "assistant" | "tool";
  label?: string;
  prefix?: string;
  text: string;
};

const TERMINAL_STEPS: TerminalStep[] = [
  {
    role: "user",
    label: "You",
    text: "generate a Q4 revenue summary and export a PDF report",
  },
  {
    role: "assistant",
    label: "ERP·AI",
    text: "On it. I will analyze revenue and build the report.",
  },
  {
    role: "tool",
    prefix: "⊕ run_pg_query_on_app",
    text: "Query completed in 124ms",
  },
  {
    role: "assistant",
    label: "ERP·AI",
    text: "Q4 revenue is $2.4M (18% QoQ). Top driver: renewals.",
  },
  {
    role: "tool",
    prefix: "✓ export",
    text: "Saved revenue-q4.pdf and q4-summary.pptx",
  },
  {
    role: "tool",
    prefix: "✓ report",
    text: "Saved q4-revenue.xlsx",
  },
  {
    role: "user",
    label: "You",
    text: "import latest pipeline Excel",
  },
  {
    role: "tool",
    prefix: "⊞ excel import",
    text: "Added 184 rows to Sales_2024",
  },
];

function AnimatedTerminal() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const steps = useMemo(() => TERMINAL_STEPS, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener("change", update);
    } else {
      media.addListener(update);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", update);
      } else {
        media.removeListener(update);
      }
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    if (currentStepIndex >= steps.length) {
      const resetTimer = setTimeout(() => {
        setCurrentStepIndex(0);
        setCurrentCharIndex(0);
      }, 2400);
      return () => clearTimeout(resetTimer);
    }

    const step = steps[currentStepIndex];
    const typingSpeed =
      step.role === "tool" ? 14 : step.role === "assistant" ? 18 : 22;
    const pauseDelay = step.role === "tool" ? 500 : 700;

    if (currentCharIndex < step.text.length) {
      const timer = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, typingSpeed);
      return () => clearTimeout(timer);
    }

    const nextTimer = setTimeout(() => {
      setCurrentStepIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
    }, pauseDelay);

    return () => clearTimeout(nextTimer);
  }, [currentStepIndex, currentCharIndex, reduceMotion, steps]);

  const visibleSteps = reduceMotion
    ? steps
    : steps.slice(0, Math.min(currentStepIndex + 1, steps.length));

  return (
    <div className="rounded-2xl border border-[#27272a] bg-[#0A0A0A] p-5 text-left shadow-lg">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <div className="h-3 w-3 rounded-full bg-[#27CA40]" />
        <span className="ml-2 text-xs text-stone-500 font-mono">erpai chat</span>
      </div>
      <div className="space-y-3 text-sm font-mono">
        {visibleSteps.map((step, index) => {
          const isActive =
            !reduceMotion && index === currentStepIndex && currentStepIndex < steps.length;
          const text =
            reduceMotion || index < currentStepIndex
              ? step.text
              : step.text.slice(0, currentCharIndex);
          return (
            <TerminalLine
              key={`${step.role}-${index}`}
              step={step}
              text={text}
              showCaret={isActive}
            />
          );
        })}
      </div>
    </div>
  );
}

function TerminalLine({
  step,
  text,
  showCaret,
}: {
  step: TerminalStep;
  text: string;
  showCaret: boolean;
}) {
  const roleStyles = {
    user: {
      container:
        "rounded-md border-l-2 border-[#3b82f6] bg-[#141414] px-3 py-2 text-[#e4e4e7]",
      label: "text-[#3b82f6]",
      text: "text-[#e4e4e7]",
    },
    assistant: {
      container: "pl-4 text-[#e4e4e7]",
      label: "text-[#f59e0b]",
      text: "text-[#e4e4e7]",
    },
    tool: {
      container: "pl-6 text-[#71717a]",
      label: "text-[#71717a]",
      text: "text-[#71717a]",
    },
  } as const;

  const styles = roleStyles[step.role];

  return (
    <div className={styles.container}>
      {step.label && (
        <span className={`${styles.label} mr-2`}>{step.label}:</span>
      )}
      {step.prefix && (
        <span className={`${styles.label} mr-2`}>{step.prefix}</span>
      )}
      <span className={styles.text}>
        {text}
        {showCaret && (
          <span className="ml-1 inline-block h-4 w-2 bg-[#e4e4e7] align-middle animate-erpai-caret" />
        )}
      </span>
    </div>
  );
}
