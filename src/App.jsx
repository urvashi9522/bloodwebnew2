import HomePage from "./components/pages/home/home-page";
import { Routes, Route} from "react-router-dom";
import DonateBloodPage from "./components/pages/donate-blood/donate-blood-page";
import HostBloodDrivePage from "./components/pages/host-blood-drive/host-blood-drive";
import NeedBloodPage from "./components/pages/need-blood/need-blood-page";
import ContactPage from "./components/sections/contact/contact-page";
import Knowledge from "./components/pages/knowledge/Knowledge";
import Submission from "./components/sections/Submission";
import Submission2 from "./components/sections/Submission2";


import Admin from "./components/layouts/admin";
import Dashboard from "../src/components/views/admin/dashboard";
import AdminDonateBlood from "../src/components/views/admin/admin-donate-blood";
import AdminNeedBlood from "../src/components/views/admin/admin-need-blood";
import AdminHostBloodDrive from "../src/components/views/admin/admin-host-blood-drive";
import AdminNeedHelp from "../src/components/views/admin/admin-need-help";

export default function App() {
	return (
		<>

			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/host-blood-drive" element={<HostBloodDrivePage />}/>
				<Route path="/donate-blood" element={<DonateBloodPage />} />
				<Route path="/need-blood" element={<NeedBloodPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/knowledge" element={<Knowledge />} />
				<Route path="/submission" element={<Submission />} />
				<Route path="/submission2" element={<Submission2 />} />

				<Route path="/admin" element={<Admin />}>
					<Route index element={<Dashboard />} />
					<Route path="donate-blood" element={<AdminDonateBlood />} />
					<Route path="need-blood" element={<AdminNeedBlood />} />
					<Route
						path="host-blood-drive"
						element={<AdminHostBloodDrive />}
					/>
					<Route path="need-help" element={<AdminNeedHelp />} />
				</Route>
			</Routes>
		</>
	);
}
