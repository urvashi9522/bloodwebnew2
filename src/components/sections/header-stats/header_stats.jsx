import React from "react";

export default function HeaderStats({
	heading = "Welcome to LifeDrop",
	subheading = "Admin Dashboard",
}) {
	return (
		<>
			<div className=" bg-[#b91e09] md:pt-32 pb-32 pt-12">
				<div className="px-4 md:px-10 mx-auto w-full">
					<div>
						<h2 className="text-white font-bold text-[50px]">
							{heading}
						</h2>
						<h3 className="text-off_white tracking-[10px] font-medium text-[20px] uppercase">
							{subheading}
						</h3>
					</div>
				</div>
			</div>
		</>
	);
}
