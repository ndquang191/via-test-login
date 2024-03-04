"use client";

import { useForm } from "react-hook-form";

type SignUpField = {
	shopName: string;
	phone: number;
	email: string;
	password: string;
	confirmPassword: string;
	address: string;
	subDistrict: string;
	district: string;
	city: string;
	termAgreement: boolean;
};

const SignUpForm = () => {
	const { register, handleSubmit } = useForm<SignUpField>();

	const onSubmit = (data: object) => {
		console.log(data);
	};
	return (
		<div>
			<div className="text-2xl font-semibold text-primary text-center mb-6">ĐĂNG KÝ TÀI KHOẢN</div>

			<form action="" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid sm:grid-cols-3 gap-3">
					<div className="">
						<label htmlFor="su_shopname">
							Tên cửa hàng <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							{...register("shopName")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Nhập tên cửa hàng..."
						/>
					</div>

					<div className="">
						<label htmlFor="su_shopname">
							Số điện thoại <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							{...register("phone")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Nhập số điện thoại"
						/>
					</div>

					<div className="">
						<label htmlFor="su_shopname">Email</label>
						<input
							type="text"
							{...register("email")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Nhập email..."
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 mt-6">
					<div className="">
						<label htmlFor="su_shopname">
							Mật khẩu <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							{...register("shopName")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Nhập mật khẩu..."
						/>
					</div>
					<div className="">
						<label htmlFor="su_shopname">
							Xác nhận mật khẩu <span className="text-primary">*</span>
						</label>
						<input
							type="text"
							{...register("shopName")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Xác nhận mật khẩu..."
						/>
					</div>
				</div>

				<div className="grid grid-cols-1 mt-6">
					<div className="">
						<label htmlFor="su_address">Địa chỉ</label>
						<input
							type="text"
							{...register("address")}
							className="border-2 border-input p-2 rounded w-full mt-1"
							placeholder="Nhập số nhà, tòa nhà, tên đường..."
						/>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-3 mt-6">
					<div className="">
						<label htmlFor="su_subDistrict">Phường/ Xã</label>
						<input
							type="text"
							{...register("subDistrict")}
							className="border-2 border-input p-2 rounded w-full mt-1"
						/>
					</div>
					<div className="">
						<label htmlFor="su_district">Quận/ Huyện</label>
						<input
							type="text"
							{...register("district")}
							className="border-2 border-input p-2 rounded w-full mt-1"
						/>
					</div>
					<div className="">
						<label htmlFor="su_district">Thành phố</label>
						<input
							type="text"
							{...register("city")}
							className="border-2 border-input p-2 rounded w-full mt-1"
						/>
					</div>
				</div>

				<div className="flex justify-between mt-6 ">
					<div className="relative top-2">
						<input type="checkbox" id="su_term" className="outline-primary outline-2" />
						<label htmlFor="su_term" className="ml-2">
							Tôi đã đọc và đồng ý với
						</label>
						<span className="text-primary cursor-pointer">
							Chính sách bảo mật thông tin
						</span>
					</div>
					<button
						type="submit"
						className="w-[141px] h-[43px] rounded-sm bg-[#FDBA4D] text-white cursor-pointer font-bold"
					>
						Đăng ký ngay
					</button>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
