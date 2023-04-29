const FuneralSources = () => {
	return (
		<ul className="list-disc text-base italic">
			<span>Sources:</span>
			<li className="ml-6">
				<a
					className="hover:underline"
					href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance"
				>
					COVID-19 Funeral Assistance | FEMA.gov
				</a>
			</li>
			<li className="ml-6">
				<a
					className="hover:underline"
					href="https://www.fema.gov/disaster/coronavirus/economic/funeral-assistance/faq"
				>
					Funeral Assistance FAQ | FEMA.gov
				</a>
			</li>
			<li className="ml-6">
				<a
					className="hover:underline"
					href="https://www.va.gov/burials-memorials/veterans-burial-allowance/"
				>
					Veterans Burial Allowance - VA.gov
				</a>
			</li>
			<li className="ml-6">
				<a
					className="hover:underline"
					href="https://www.ssa.gov/benefits/survivors/"
				>
					Survivors Benefits - SocialSecurity.gov
				</a>
			</li>
		</ul>
	);
};

export default FuneralSources;
