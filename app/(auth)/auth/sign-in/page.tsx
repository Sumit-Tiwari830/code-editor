import SignInFormClient from "@/features/auth/components/sign-in-form-client";
import Image from "next/image";

const SignInPage = () => {
    return (
        <div className="relative min-h-screen bg-[#030712] flex items-center justify-center overflow-hidden px-6">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle Developer Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

            <div className="relative z-10 grid w-full max-w-6xl lg:grid-cols-2 gap-12 items-center">
                {/* Left Side: Logo & Branding */}
                <div className="hidden lg:flex flex-col items-center justify-center space-y-8">
                    <div className="relative group">
                        {/* Dynamic glow behind the logo */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-700"></div>
                        <Image
                            src="/logo.png"
                            alt="FlexIDE"
                            width={450}
                            height={450}
                            priority
                            className="relative object-contain drop-shadow-[0_0_25px_rgba(0,149,255,0.2)] transition-transform duration-500 hover:scale-105"
                        />
                    </div>
                    <div className="text-center space-y-3">
                        <h1 className="text-5xl font-extrabold tracking-tight text-white">
                            Flex<span className="text-blue-500">IDE</span>
                        </h1>
                        <p className="text-neutral-400 text-lg max-w-md">
                            Code at the speed of thought. Your lightning-fast cloud editor.
                        </p>
                    </div>
                </div>

                {/* Right Side: Authentication Form */}
                <div className="flex justify-center w-full">
                    <SignInFormClient />
                </div>
            </div>
        </div>
    );
};

export default SignInPage;