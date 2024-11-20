import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "../../../../public/logo.png";
import Drop from "../../../../public/drop.gif";

const navigation = [
	{ name: "Home", href: "/" },
	{ name: "Host Blood Drive", href: "/host-blood-drive" },
	{ name: "More Knowledge", href: "/knowledge" },
	{ name: "Need Blood", href: "/need-blood", secondLast: true },
	{ name: "Donate Blood", href: "/donate-blood", last: true },
];

const compnayName = "LifeDrop";

const HeaderComponent = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [offset, setOffset] = useState(0);
	const [blurActivation, setBlurActivation] = useState(false);
	const [isActiveName, setIsActiveName] = useState(null);

	const reuseableClass = {
		for_last: `last:bg-pure_red last:text-white last:hover:bg-white last:hover:text-dark`,
		for_second_last: `rounded-rsm border border-white/[.5] hover:bg-white hover:text-dark`,
	};

	useEffect(() => {
		const onScroll = () => {
			setOffset(window.pageYOffset);
			setBlurActivation(window.pageYOffset > 5);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<header
			className={`fixed inset-x-0 top-0 z-50 ${
				blurActivation ? "bg-dark/[.6] backdrop-blur-md" : ""
			}`}
		>
			<nav
				className="flex items-center justify-between p-6 lg:px-8 w-[min(1250px,100%-15px)] m-auto"
				aria-label="Global"
			>
				{/* Logo */}
				<div className="flex text-xl font-bold">
					<a href="/" className="flex justify-center items-center -m-1.5 p-1.5">
						<img className="w-auto h-14" src={Logo} alt="" />
						<span className="ml-[0px] text-white">Life<span className="text-[red]">Drop</span></span>
					</a>
				</div>

				<div className="flex lg:hidden">
					<label className="hamburger">
						<input type="checkbox" checked={mobileMenuOpen} onChange={() => setMobileMenuOpen(!mobileMenuOpen)} />
						<svg viewBox="0 0 32 32">
							<path
								d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
								className="line line-top-bottom"
							></path>
							<path d="M7 16 27 16" className="line"></path>
						</svg>
					</label>
				</div>

				<div className="hidden lg:flex lg:gap-x-4 lg:transition">
					{navigation.map((item) => (
						<NavLink
							key={item.name}
							onClick={() => {
								setIsActiveName(item.name);
								setMobileMenuOpen(false);
							}}
							to={item.href}
							active="bg-red"
							className={`text-xl font-medium hover:bg-red lg:transition leading-6 text-white px-3 py-2 rounded-rsm ${
								item.secondLast &&
								`${reuseableClass.for_second_last}`
							} ${item.last && `${reuseableClass.for_last}`} ${
								isActiveName === item.name ? `bg-dark` : ``
							}`}
						>
							{item.name}
						</NavLink>
					))}
				</div>
			</nav>

			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
					    <div className="flex text-xl font-bold">
							<a href="/" className="flex justify-center items-center -m-1.5 p-1.5">
							<img className="w-auto h-14" src={Logo} alt="" />
							<span className="ml-[0px]">Life<span className="text-[red]">Drop</span></span>
							</a>
						</div>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-pure_red"
							onClick={() => setMobileMenuOpen(false)}
						>
							<svg
								className="w-[2.5rem] h-[2.5rem] font-bold"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M6 18L18 6M6 6l12 12"
									stroke="currentColor"
									strokeWidth="3"  
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</div>
					<div className="flow-root mt-6">
						<div className="-my-6 divide-y ">
							<div className="py-6 space-y-2">
							{navigation.map((item) => (
								<NavLink
								key={item.name}
								onClick={() => {
									setIsActiveName(item.name);
									setMobileMenuOpen(false);
								}}
								to={item.href}
								className={`-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-pure_red hover:bg-dark px-3 py-2 rounded-rsm ${
									item.secondLast &&
									`rounded-rsm border border-dark/[.5] hover:bg-white hover:text-dark`
								} ${
									item.last &&
									`last:bg-red last:text-white last:hover:bg-white last:hover:text-dark`
								} ${
									isActiveName === item.name
									? `bg-dark text-white`
									: ``
								}`}
								>
								{item.name}
								</NavLink>
							))}
							</div>
							<div className="flex justify-center items-center ">
							<img src={Drop} alt="GIF description" className="w-auto h-52" />
							</div>
					</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
};

export default HeaderComponent;

