import Image from 'next/image';

//import LogoImg from '@/assets/logo.png';

const Footer = () => {
    return (
        <section className="py-7 bg-slate-200 text-black">
            <main className="max-w-6xl flex flex-col mx-auto">
                <div className="flex items-start justify-around">
                    <div>
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-black">
                            About us
                        </h3>
                        <ul className="mt-4 list-none font-medium md:text-black">
                            <li className="whitespace-nowrap cursor-pointer">
                                How it works
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Investors
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Testimonials
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-black">
                            Videos
                        </h3>
                        <ul className="mt-4 list-none font-medium md:text-black">
                            <li className="whitespace-nowrap cursor-pointer">
                                Submit video
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Influencer
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Agency
                            </li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-black">
                           Social Media
                        </h3>
                        <ul className="mt-4 list-none font-medium md:text-black">
                            <li className="whitespace-nowrap cursor-pointer">
                                Instagram
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Twitter
                            </li>
                            <li className="whitespace-nowrap cursor-pointer mt-1">
                                Facebook
                            </li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h3 className="capitalize text-3xl font-roboto-condensed font-bold text-black text-centre">
                            Contact us
                        </h3>
                        <div className="mt-2 flex flex-col text-hci-lila-dark">
                            <input
                                className="mt-4 p-2 w-4/5 opacity-80"
                                placeholder="Your Name"
                                type="text"
                            />
                            <input
                                className="mt-4 p-2 w-4/5 opacity-80"
                                placeholder="Your E-mail"
                                type="text"
                            />
                        </div>
                    </div>
                </div>

         </main>
            <p className="mt-12 text-center">
                    Copyright @ 2022 ETE. All rights reserved.
                </p>
        </section>
    );
};

export default Footer;
