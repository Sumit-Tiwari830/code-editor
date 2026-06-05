import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowUpRight,
  Sparkles,
  Zap,
  Users,
  Shield,
  Code,
  Terminal,
  Cpu,
  Globe,
  GitBranch,
  Play,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative z-20 flex flex-col">
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex flex-col items-center justify-start py-12 px-6 md:py-20 md:px-8">
        <div className="flex flex-col justify-center items-center max-w-5xl text-center space-y-8">
          {/* Animated Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/15 via-cyan-500/10 to-blue-600/15 rounded-full blur-[100px] animate-pulse pointer-events-none" />

          {/* FlexIDE Badge */}
          <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wide backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span>Introducing FlexIDE 2.0</span>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 group">
            <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-700 pointer-events-none" />
            <Image
              src="/hero1.png"
              alt="FlexIDE Developer"
              height={380}
              width={380}
              className="relative drop-shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-transform duration-500 hover:scale-105"
              priority
            />
          </div>

          {/* Typography Section */}
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
              Code at the{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400">
                Speed of Thought
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed px-4">
              <strong className="text-neutral-900 dark:text-neutral-200 font-semibold">
                FlexIDE
              </strong>{" "}
              is a powerful and intelligent code editor that enhances your
              coding experience. Write, debug, and optimize your workflows
              seamlessly.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Link href="/dashboard" className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
              <Button
                variant="default"
                size="lg"
                className="relative bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 px-8 py-6 text-lg font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                Get Started
                <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </Link>

            <Link
              href="/docs"
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
              <Button
                variant="outline"
                size="lg"
                className="relative px-8 py-6 text-lg font-semibold rounded-xl border-2 border-neutral-300 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all bg-transparent"
              >
                <Play className="mr-2 w-5 h-5" />
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-semibold border-blue-500/30 text-blue-600 dark:text-blue-400"
            >
              Why FlexIDE?
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
              Built for Modern{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
                Developers
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Everything you need to code faster, collaborate better, and ship
              with confidence.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Lightning Fast
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Optimized for speed with instant load times and responsive
                  editing experience.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Real-time Collaboration
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Code together with your team in real-time with live cursors
                  and instant sync.
                </p>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  AI-Powered
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Intelligent code completion, suggestions, and debugging powered
                  by advanced AI.
                </p>
              </CardContent>
            </Card>

            {/* Feature 4 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Enterprise Security
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Bank-grade encryption and security protocols to keep your code
                  safe.
                </p>
              </CardContent>
            </Card>

            {/* Feature 5 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Integrated Terminal
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Full terminal access with multi-tab support and command
                  history.
                </p>
              </CardContent>
            </Card>

            {/* Feature 6 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <GitBranch className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Git Integration
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Seamless version control with built-in Git operations and
                  conflict resolution.
                </p>
              </CardContent>
            </Card>

            {/* Feature 7 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  Cloud Native
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Access your projects from anywhere with automatic cloud sync
                  and backup.
                </p>
              </CardContent>
            </Card>

            {/* Feature 8 */}
            <Card className="group relative bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
                  50+ Languages
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Support for all popular programming languages with syntax
                  highlighting and linting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ========== CODE EDITOR PREVIEW SECTION ========== */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <Badge
              variant="outline"
              className="px-4 py-1.5 text-sm font-semibold border-blue-500/30 text-blue-600 dark:text-blue-400"
            >
              Editor Preview
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight">
              A Beautiful{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
                Coding Environment
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Experience a thoughtfully designed interface that puts your code
              front and center.
            </p>
          </div>

          {/* Editor Window Mockup */}
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-500" />

            {/* Editor Container */}
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 shadow-2xl">
              {/* Editor Title Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-neutral-200 dark:bg-neutral-800 border-b border-neutral-300 dark:border-neutral-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
                    app.tsx — FlexIDE
                  </span>
                </div>
              </div>

              {/* Editor Content */}
              <div className="p-6 bg-white dark:bg-[#0d1117] overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed">
                  <code className="text-neutral-800 dark:text-neutral-200">
                    <span className="text-purple-600 dark:text-purple-400">import</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">{`{ useState, useEffect }`}</span>{" "}
                    <span className="text-purple-600 dark:text-purple-400">from</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'react'</span>;{"\n"}
                    <span className="text-purple-600 dark:text-purple-400">import</span>{" "}
                    <span className="text-yellow-600 dark:text-yellow-400">{`{ motion }`}</span>{" "}
                    <span className="text-purple-600 dark:text-purple-400">from</span>{" "}
                    <span className="text-green-600 dark:text-green-400">'framer-motion'</span>;{"\n\n"}
                    <span className="text-gray-500 dark:text-gray-400">// Initialize FlexIDE workspace</span>{"\n"}
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">FlexIDE</span> = () <span className="text-purple-600 dark:text-purple-400">=&gt;</span>{"\n"}
                    <span className="text-purple-600 dark:text-purple-400">{`{`}</span>{"\n"}
                    {"  "}<span className="text-purple-600 dark:text-purple-400">const</span> [<span className="text-blue-600 dark:text-blue-400">code</span>, <span className="text-blue-600 dark:text-blue-400">setCode</span>] = <span className="text-blue-600 dark:text-blue-400">useState</span>(<span className="text-green-600 dark:text-green-400">''</span>);{"\n\n"}
                    {"  "}<span className="text-blue-600 dark:text-blue-400">useEffect</span>(() <span className="text-purple-600 dark:text-purple-400">=&gt;</span>{"\n"}
                    {"  "}<span className="text-purple-600 dark:text-purple-400">{`{`}</span>{"\n"}
                    {"    "}<span className="text-gray-500 dark:text-gray-400">// AI-powered code completion</span>{"\n"}
                    {"    "}<span className="text-blue-600 dark:text-blue-400">initializeAI</span>();{"\n"}
                    {"  "}<span className="text-purple-600 dark:text-purple-400">{`}`}</span>, []);{"\n\n"}
                    {"  "}<span className="text-purple-600 dark:text-purple-400">return</span> <span className="text-purple-600 dark:text-purple-400">{`(`}</span>{"\n"}
                    {"    "}<span className="text-blue-600 dark:text-blue-400">&lt;Editor</span>{"\n"}
                    {"      "}<span className="text-blue-600 dark:text-blue-400">theme</span>=<span className="text-green-600 dark:text-green-400">"midnight"</span>{"\n"}
                    {"      "}<span className="text-blue-600 dark:text-blue-400">aiEnabled</span>=<span className="text-orange-600 dark:text-orange-400">{`{true}`}</span>{"\n"}
                    {"    "}<span className="text-blue-600 dark:text-blue-400">/&gt;</span>{"\n"}
                    {"  "}<span className="text-purple-600 dark:text-purple-400">{`)`}</span>;{"\n"}
                    <span className="text-purple-600 dark:text-purple-400">{`}`}</span>;{"\n\n"}
                    <span className="text-purple-600 dark:text-purple-400">export default</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">FlexIDE</span>;
                  </code>
                </pre>
              </div>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 bg-neutral-200 dark:bg-neutral-800 border-t border-neutral-300 dark:border-neutral-700">
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    Ready
                  </span>
                  <span>TypeScript React</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                  <span>Ln 15, Col 32</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATS SECTION ========== */}
      <section className="relative py-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 p-1">
            <div className="bg-white dark:bg-neutral-900 rounded-[22px] p-12 md:p-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Stat 1 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    50K+
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Active Developers
                  </p>
                </div>

                {/* Stat 2 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    99.9%
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Uptime SLA
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    150+
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                    Countries Reached
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative space-y-8">
            <h2 className="text-4xl md:text-6xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
              Ready to Transform Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-400">
                Workflow?
              </span>
            </h2>

            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Join thousands of developers who are already coding at the speed
              of thought with FlexIDE.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/dashboard" className="relative group w-full sm:w-auto">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-300" />
                <Button
                  variant="default"
                  size="lg"
                  className="relative bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 hover:bg-neutral-800 dark:hover:bg-neutral-200 px-10 py-6 text-lg font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] w-full"
                >
                  Start Coding Now
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <Link
                href="https://github.com/Sumit-Tiwari830"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group w-full sm:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-neutral-600/20 to-neutral-400/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-300" />
                <Button
                  variant="outline"
                  size="lg"
                  className="relative px-10 py-6 text-lg font-semibold rounded-xl border-2 border-neutral-300 dark:border-neutral-700 hover:border-neutral-500 transition-all bg-transparent w-full"
                >
                  Star on GitHub
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}