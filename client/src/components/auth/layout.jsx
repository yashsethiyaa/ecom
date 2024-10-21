import { Outlet } from "react-router-dom";

function AuthLayout() {
    return (
        <div className="flex min-h-screen w-full">
            <div
                className="hidden lg:flex flex-col items-center justify-between w-1/2 px-12 relative"
                style={{
                    backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1670360414946-e33a828d1d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fHww")',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    height: '100vh',
                }}
            >
                {/* Main Heading */}
                <h1 className="text-5xl font-extrabold tracking-tight text-black text-center absolute top-6">
                    Shree Ganesh Handloom
                </h1>

                {/* Subheadings in a single line */}
                <div className="absolute bottom-20 w-full flex justify-center space-x-8">
                    <h2 className="text-2xl font-semibold text-black">Sofa cushing</h2>
                    <h2 className="text-2xl font-semibold text-black">Rugs</h2>
                    <h2 className="text-2xl font-semibold text-black">Mattresses</h2>
                </div>

                {/* Address below the subheadings */}
                <h2 className="absolute bottom-8 text-xl font-semibold text-black text-center">
                    65, Rajendra Nagar, Indore
                </h2>
            </div>
            <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
}

export default AuthLayout;
