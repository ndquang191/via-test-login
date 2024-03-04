import Image from "next/image";
import React from "react";
import LoginForm from "./LoginForm";

const Header = () => {
	return (
		<div className="relative w-full h-[430px] bg-banner bg-cover pt-[75px] pl-[45%]">
			{/* <div className="custom-vector">
				<Image src={"/img/banner/Vector.png"} width={288.06} height={152.13} alt="vec1" />
				<Image src={"img/banner/Vector1.png"} />
				<Image src={"img/banner/Vector2.png"} />
				<Image src={"img/banner/Vector3.png"} />
				<Image src={"img/banner/Vector3.png"} />
			</div> */}

			<div className="max-w-[748px]">
				<div className="font-semibold text-white mb-4 text-lg">ĐĂNG NHẬP NGAY !</div>
				<LoginForm />

				<div className="mt-3 text-end text-white cursor-pointer hover:text-white-500">
					Quên mật khẩu
				</div>
			</div>
		</div>
	);
};

export default Header;
