
const Footer = () => {

    return (
        <footer className="p-6 bg-neutral text-neutral-content">
            <div className="max-w-7xl grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-xl">Services</h2>
                    <div className="flex flex-col space-y-2 text-sm opacity-80">
                        <p>24 hours free wifi access</p>
                        <p>Valet Parking and Parking Facilities</p>
                        <p>Room service</p>
                        <p>Security services</p>
                        <p>Perfect living rooms</p>
                        <p>Your dream swimming pool</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-xl">Service Area</h2>
                    <div className="flex flex-col space-y-2 text-sm opacity-80 ">
                        <p>Suburbia Estates, Anytown, USA</p>
                        <p>Lakeview Drive, Countryside, USA</p>
                        <p>University District, College Town, USA</p>
                        <p>Oceanview Heights, Seaside Town, USA</p>
                        <p>Downtown District, Metropolis, USA</p>
                        <p>Mountain Valley, Scenic Town, USA</p>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-xl">Contact</h2>
                    <div className="flex flex-col space-y-2 text-sm opacity-80 ">
                        <a className="hover:btn-link">sweethouse.digital@yahoo.com</a>
                        <a className="hover:btn-link">lind.jesse@fisher.org</a>
                        <a className="hover:btn-link">+1-678-336-9840</a>
                        <a className="hover:btn-link">+1-678-336-9840</a>
                    </div>
                </div>
                <div className="flex flex-col space-y-4">
                    <h2 className="font-medium text-xl">Community</h2>
                    <div className="flex flex-col space-y-2 text-sm opacity-80 ">
                        <a className="hover:btn-link">GitHub</a>
                        <a className="hover:btn-link">Discord</a>
                        <a className="hover:btn-link">Twitter</a>
                        <a className="hover:btn-link">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-6 pt-12 text-sm opacity-90">
                <span className="">© Copyright 2024. All Rights Reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;