const Divider = ({ white = false }: { white?: boolean }) => {
	return (
		<div className="z-10 flex h-12 w-full items-center justify-center px-5 lg:px-0">
			<hr
				className={`w-full border ${
					white ? "border-white" : "border-black"
				} border-opacity-50 sm:max-w-md`}
			/>
		</div>
	);
};

export default Divider;
