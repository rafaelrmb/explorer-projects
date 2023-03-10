import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NewMovie } from "../pages/NewMovie";
import { MovieDetails } from "../pages/MovieDetails";
import { Profile } from "../pages/Profile";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/new-movie" element={<NewMovie />} />
			<Route path="/movies/:id" element={<MovieDetails />} />
			<Route path="/profile" element={<Profile />} />
		</Routes>
	);
}
