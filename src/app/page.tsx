"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  Copy,
  Terminal,
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
  Settings,
  Users,
  BadgeCheck,
  Workflow,
  Layers,
  ClipboardList,
  Search,
  Sparkles,
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
            ERP·AI <span className="font-instrument-serif italic text-[#F97316]">CLI</span>
          </h1>

          <p
            className="mx-auto mb-4 max-w-2xl text-lg text-stone-900/90 motion-safe:animate-erpai-fade-up"
            style={{ animationDelay: "140ms" }}
          >
            AI-powered assistant for your ERP data
          </p>

          <p
            className="mx-auto mb-10 max-w-3xl text-lg text-stone-600 motion-safe:animate-erpai-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Ask questions in plain English, generate analytics, and export
            board-ready reports from the terminal. ERP·AI CLI connects to your
            ERP·AI apps, understands your schema, and turns requests into
            safe, audited actions that teams can trust.
          </p>

          {/* Install Box */}
          <div className="mx-auto max-w-xl">
            <div
              className="rounded-2xl border border-stone-200 bg-[#1C1C1C] p-5 text-left shadow-lg motion-safe:animate-erpai-fade-up motion-safe:animate-erpai-pulse-soft"
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

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-stone-600">
            {[
              "Natural language → SQL analytics",
              "Read & update ERP records",
              "Exports: PDF, PPT, XLSX, CSV",
              "Threaded history and context",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-stone-200 bg-white px-4 py-2"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl md:text-3xl text-stone-900">
              Built for operators, analysts, and teams who ship
            </h2>
            <p className="text-stone-600">
              ERP·AI CLI is the fastest way to answer questions, generate reports,
              and keep data in sync — without hunting through dashboards.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {[
              {
                icon: <BarChart3 className="h-5 w-5" />,
                title: "Monthly close & finance reporting",
                description:
                  "Generate revenue, margin, and collections summaries in minutes.",
                prompts: [
                  "Close the month and summarize revenue by product line",
                  "Create a cash collections report for the last 30 days",
                ],
              },
              {
                icon: <Search className="h-5 w-5" />,
                title: "Sales pipeline & forecasting",
                description:
                  "Track deal velocity, stage conversion, and forecast accuracy.",
                prompts: [
                  "Show pipeline value by stage and owner",
                  "Forecast this quarter based on historical conversion",
                ],
              },
              {
                icon: <ClipboardList className="h-5 w-5" />,
                title: "Inventory & supply chain",
                description:
                  "Identify low-stock SKUs, reorder timelines, and vendor lead time.",
                prompts: [
                  "List SKUs at risk of stockout in the next 14 days",
                  "Compare supplier lead times by category",
                ],
              },
              {
                icon: <Users className="h-5 w-5" />,
                title: "Customer success & support",
                description:
                  "Review SLA compliance, top tickets, and CSAT trends.",
                prompts: [
                  "Summarize SLA breaches by account this week",
                  "Top 10 ticket themes and resolution time",
                ],
              },
              {
                icon: <Layers className="h-5 w-5" />,
                title: "Operations & fulfillment",
                description:
                  "Monitor throughput, backlog, and on-time delivery.",
                prompts: [
                  "Backlog aging by warehouse",
                  "On-time delivery rate by carrier",
                ],
              },
              {
                icon: <Settings className="h-5 w-5" />,
                title: "Data maintenance & governance",
                description:
                  "Bulk updates, record validation, and controlled edits.",
                prompts: [
                  "Normalize customer tiers and backfill missing regions",
                  "Update payment terms for enterprise accounts",
                ],
              },
            ].map((item, index) => (
              <UseCaseCard key={item.title} delay={index * 70} {...item} />
            ))}
          </div>
        </section>

        {/* Outputs & automation */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl text-stone-900">
                Reports, exports, and deliverables
              </h2>
              <p className="text-stone-600">
                Turn answers into the outputs teams need — PDF summaries,
                PowerPoint decks, Excel workbooks, and CSV extracts. Schedule
                exports for weekly leadership updates or finance reviews.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["PDF", "PPTX", "XLSX", "CSV", "JSON"].map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm text-stone-700"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              {[
                {
                  icon: <FileText className="h-5 w-5" />,
                  title: "PDF & board-ready reports",
                  description:
                    "Create executive-ready PDFs with metrics, trends, and highlights.",
                },
                {
                  icon: <Presentation className="h-5 w-5" />,
                  title: "Slide decks for stakeholders",
                  description:
                    "Generate PPT summaries for leadership, QBRs, and OKRs.",
                },
                {
                  icon: <FileSpreadsheet className="h-5 w-5" />,
                  title: "Excel exports for analysis",
                  description:
                    "Send datasets to finance, ops, and GTM teams in seconds.",
                },
              ].map((item, index) => (
                <Feature key={item.title} delay={index * 70} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Workflow section */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-4 text-center text-2xl md:text-3xl text-stone-900">
            End-to-end workflows, from{" "}
            <span className="font-instrument-serif italic text-[#22C55E]">
              import
            </span>{" "}
            to action
          </h2>
          <p className="mb-10 text-center text-stone-600 max-w-2xl mx-auto">
            Bring in Excel data, ask for insights, and push outputs to the teams
            that need them — without leaving the terminal.
          </p>

          <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
            {[
              {
                icon: <Upload className="h-5 w-5" />,
                title: "Import Excel safely",
                description:
                  "Upload Excel files and map columns to ERP·AI tables.",
              },
              {
                icon: <MessageSquare className="h-5 w-5" />,
                title: "Ask questions in natural language",
                description:
                  "Turn questions into SQL analytics and summaries.",
              },
              {
                icon: <Download className="h-5 w-5" />,
                title: "Export results instantly",
                description:
                  "Generate PDFs, PPTs, and spreadsheets for stakeholders.",
              },
              {
                icon: <Workflow className="h-5 w-5" />,
                title: "Automate recurring requests",
                description:
                  "Repeat exports and summaries on a cadence.",
              },
            ].map((item, index) => (
              <WorkflowCard key={item.title} delay={index * 80} {...item} />
            ))}
          </div>
        </section>

        {/* Commands */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <h2 className="mb-4 text-center text-2xl md:text-3xl text-stone-900">
            Commands
          </h2>
          <p className="mb-10 text-center text-stone-600 max-w-xl mx-auto">
            Simple commands to interact with your ERP·AI apps.
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

        {/* Long-form feature section */}
        <section className="border-t border-stone-200/60 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 items-start">
            <div>
              <h2 className="mb-4 text-2xl md:text-3xl text-stone-900">
                Designed for real operational work
              </h2>
              <p className="text-stone-600">
                ERP·AI CLI is built for analysts and operators who live in
                spreadsheets but need faster answers. It keeps context across
                sessions, understands table schemas, and turns requests into
                safe actions with guardrails.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                {
                  icon: <Database className="h-5 w-5" />,
                  title: "Schema-aware analytics",
                  description:
                    "Auto-discovers tables and generates SQL with the right joins.",
                },
                {
                  icon: <BadgeCheck className="h-5 w-5" />,
                  title: "Reliable, audited output",
                  description:
                    "Summaries backed by SQL and consistent formatting.",
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "Safe by default",
                  description:
                    "Analytics focus with explicit tools for record updates.",
                },
                {
                  icon: <Sparkles className="h-5 w-5" />,
                  title: "Fast iteration",
                  description:
                    "Ask follow-up questions and refine results in seconds.",
                },
              ].map((item, index) => (
                <Feature key={item.title} delay={index * 70} {...item} />
              ))}
            </div>
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

function UseCaseCard({
  icon,
  title,
  description,
  prompts,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  prompts: string[];
  delay?: number;
}) {
  return (
    <div
      className="rounded-2xl border border-stone-200 bg-white p-6 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-medium text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
      <div className="mt-4 space-y-2 text-sm text-stone-500">
        {prompts.map((prompt) => (
          <div key={prompt} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F97316]" />
            <span>{prompt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowCard({
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
      className="rounded-2xl border border-stone-200 bg-white p-6 motion-safe:animate-erpai-fade-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-stone-100 text-stone-600">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-medium text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600">{description}</p>
    </div>
  );
}
