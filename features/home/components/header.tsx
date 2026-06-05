import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/toggle-theme";
import UserButton from "@/features/auth/components/user-button";

export function Header() {
    return (
        <header className="sticky top-0 z-50 flex justify-center px-4 pt-3">
            <div
                className="
          relative
          flex
          h-16
          w-full
          max-w-7xl
          items-center
          justify-between

          rounded-2xl
          border
          border-blue-500/10

          bg-black/60
          backdrop-blur-2xl

          shadow-[0_0_40px_rgba(59,130,246,0.12)]

          px-6
        "
            >
                {/* Background Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-transparent to-cyan-500/5 pointer-events-none" />

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-60" />

                {/* Left Section */}
                <div className="relative z-10 flex items-center gap-8">
                    <Link
                        href="/"
                        className="group flex items-center gap-3"
                    >
                        <Image
                            src="/logo.png"
                            alt="FlexIDE"
                            width={34}
                            height={34}
                            className="
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]
              "
                        />

                        <span className="hidden sm:block text-xl font-bold tracking-tight">
                            <span className="text-white">Flex</span>
                            <span className="text-blue-500">IDE</span>
                        </span>
                    </Link>

                    <div className="hidden h-6 w-px bg-blue-500/20 sm:block" />

                    <nav className="hidden sm:flex items-center gap-6">
                        <Link
                            href="/docs"
                            className="
                text-sm
                font-medium
                text-slate-300
                transition-all
                duration-200
                hover:text-blue-400
              "
                        >
                            Docs
                        </Link>

                        <Link
                            href="/api"
                            className="
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-slate-300
                transition-all
                duration-200
                hover:text-blue-400
              "
                        >
                            API

                            <span
                                className="
                  rounded-full
                  border
                  border-blue-500/20
                  bg-blue-500/10
                  px-2
                  py-0.5
                  text-[10px]
                  font-bold
                  text-blue-400
                "
                            >
                                NEW
                            </span>
                        </Link>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="relative z-10 flex items-center gap-4">
                    <ThemeToggle />

                    <div className="h-6 w-px bg-blue-500/20" />

                    <UserButton />
                </div>
            </div>
        </header>
    );
}