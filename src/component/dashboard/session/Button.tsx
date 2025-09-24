import Link from "next/link";

const Button = () => {
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full px-4 md:static md:px-0 md:translate-x-0 md:left-0 md:bottom-0">
            <Link href="/doctors"><button
                className="w-full md:w-auto px-4 py-2 text-white rounded-lg hover:opacity-90 transition"
                style={{
                    background: "linear-gradient(90deg, #B0A4F5 0%, #EDA197 100%)",
                }}
            >
                Schedule Now
            </button></Link>
        </div>
    );
};

export default Button;
