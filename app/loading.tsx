export default function Loading() {
    return (
        <div className="fixed inset-0 bg-jet-black z-[100] flex items-center justify-center">
            <div className="relative">
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full bg-strong-cyan/20 animate-ping" />

                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-teal/30 border-t-strong-cyan rounded-full animate-spin" />

                {/* Logo Center */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-teal block" />
                </div>
            </div>
        </div>
    );
}
