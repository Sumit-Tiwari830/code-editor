import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="relative mt-20 overflow-hidden border-t border-blue-500/10 bg-[#020617]">
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/[0.03] via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-40 w-[500px] rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center justify-between gap-10 md:flex-row">

                    {/* Brand */}
                    <div className="space-y-3 text-center md:text-left">
                        <h2 className="text-2xl font-bold tracking-tight">
                            <span className="text-white">Flex</span>
                            <span className="text-blue-500">IDE</span>
                        </h2>

                        <p className="max-w-md text-sm text-slate-400">
                            AI-powered coding platform for real-time development,
                            collaboration, interviews, and technical assessments.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center gap-8">
                        <Link
                            href="/docs"
                            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                        >
                            Docs
                        </Link>

                        <Link
                            href="/api"
                            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                        >
                            API
                        </Link>

                        <Link
                            href="/pricing"
                            className="text-sm text-slate-400 transition-colors hover:text-blue-400"
                        >
                            Pricing
                        </Link>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="https://github.com/Sumit-Tiwari830"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                group
                                flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-blue-500/10
                                bg-slate-900/50
                                px-4
                                py-2
                                transition-all
                                duration-300
                                hover:border-blue-500/40
                                hover:bg-blue-950/20
                                hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]
                            "
                        >
                            <FaGithub className="h-5 w-5 text-slate-300 transition-colors group-hover:text-blue-400" />
                            <span className="text-sm text-slate-300 group-hover:text-blue-400">
                                GitHub
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row">
                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()} FlexIDE. All rights reserved.
                    </p>

                    <p className="text-sm text-slate-500">
                        Built with ❤️ by Sumit Tiwari
                    </p>
                </div>
            </div>
        </footer>
    );
}