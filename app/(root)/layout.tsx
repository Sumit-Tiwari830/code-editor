import { Footer } from "@/features/home/components/footer";

import { Header } from "@/features/home/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
// import { usePathname } from "next/navigation";

export const metadata: Metadata = {
    title: {
        template: "%s | FlexIDE",
        default: "FlexIDE - Code at the speed of thought",
    },
    description: "Your lightning-fast cloud editor.",
};

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen flex flex-col bg-white dark:bg-[#030712] transition-colors duration-300">

            {/* --- GLOBAL BACKGROUND LAYER --- */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* Ambient Glows (Only visible in dark mode to match your brand theme) */}
                <div className="hidden dark:block absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
                <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />

                {/* Developer Grid Pattern */}
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:4rem_4rem]",
                        "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                        "dark:[background-image:linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]",
                        "opacity-70 dark:opacity-30"
                    )}
                />

                {/* Vignette Fade (Masks the edges to focus the user's eye on the center) */}
                <div className="absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_30%,black)] dark:bg-[#030712]" />
            </div>

            {/* --- CONTENT LAYERS --- */}
            <Header />

            {/* flex-grow ensures the footer is pushed to the bottom even if the page content is short */}
            <main className="relative z-20 flex-grow w-full pt-4 md:pt-8">
                {children}
            </main>

            <div className="relative z-20 w-full">
                <Footer />
            </div>

        </div>
    );
}