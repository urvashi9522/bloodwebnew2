import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import Sidebar from "../sidebar/sidebar";


export default function Admin() {
	return (
		<>
			<Sidebar />
			<div className="relative md:ml-64 bg-off_white outline">
				<div className="w-full h-full mx-auto bg-off_white">
				    {/* Child routes will be rendered here using the  <Outlet/> component */}
					<Outlet />
				</div>
			</div>
		</>
	);
}
