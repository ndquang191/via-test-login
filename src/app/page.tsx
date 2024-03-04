import Header from "@/components/Header";
import SignUpForm from "@/components/SignUpForm";
import ServicesList from "@/components/ServicesList";
import Slide from "@/components/Slide";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<main className="my-0 h-[100vh]">
			<Header />
			<div className="bg-white h-[calc(100vh-430px)] w-full pt-14 ">
				<div className="bg-white max-w-[1280px] mx-auto flex">
					<div className="w-[62%]">
						<SignUpForm />
					</div>
					<div className="relative y w-[38%]">
						<div className="absolute right-0 bottom-0">
							<ServicesList />
						</div>
					</div>
				</div>
			</div>

			<Slide />

			<Footer />
		</main>
	);
}
