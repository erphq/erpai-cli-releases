"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Terminal,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
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
        <section className="py-16 md:py-24 text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-2">
            <Terminal className="h-4 w-4 text-stone-500" />
            <span className="text-sm text-stone-600">Command Line Interface</span>
          </div>

          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-900">
            AI-Native Platform
          </h1>

          <h2 className="mb-8 text-4xl md:text-5xl lg:text-6xl tracking-tight">
            <span className="font-instrument-serif italic text-[#F97316]">
              Powering
            </span>{" "}
            <span className="text-stone-900">the future of</span>{" "}
            <span className="font-instrument-serif italic text-[#22C55E]">
              CLI
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-stone-600">
            Query your ERP data using natural language. Get instant insights,
            generate reports, and automate workflows from your terminal.
          </p>

          {/* Install Box */}
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl border border-stone-200 bg-[#1C1C1C] p-5 text-left shadow-lg">
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

        {/* Getting Started */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-10 md:mb-12 text-center text-2xl md:text-3xl text-stone-900">
            Get started in{" "}
            <span className="font-instrument-serif italic text-[#F97316]">
              seconds
            </span>
          </h2>

          <div className="mx-auto grid max-w-2xl gap-5">
            <Step
              number={1}
              title="Install the CLI"
              description="Run the install command above. The binary will be installed to /usr/local/bin"
            />
            <Step
              number={2}
              title="Log in to your account"
              description="Authenticate with your ERP·AI credentials"
              code="erpai login"
            />
            <Step
              number={3}
              title="Start chatting"
              description="Query your ERP data using natural language"
              code="erpai chat"
            />
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-10 md:mb-12 text-center text-2xl md:text-3xl text-stone-900">
            Built for{" "}
            <span className="font-instrument-serif italic text-[#22C55E]">
              enterprise
            </span>
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<Terminal className="h-5 w-5" />}
              title="Natural Language"
              description="Query your data with plain English"
            />
            <Feature
              icon={<BarChart3 className="h-5 w-5" />}
              title="Analytics"
              description="Generate reports and insights"
            />
            <Feature
              icon={<Shield className="h-5 w-5" />}
              title="Secure"
              description="Enterprise-grade security"
            />
            <Feature
              icon={<Zap className="h-5 w-5" />}
              title="Fast"
              description="Instant AI-powered responses"
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
              "macOS (Apple Silicon / Intel)",
              "Linux (x64)",
              "Windows (x64)",
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
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5">
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
        {icon}
      </div>
      <h3 className="mb-1 font-medium text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}
