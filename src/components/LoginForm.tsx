"use client";

import { useForm } from "react-hook-form";

type LoginField = {
	email: String;
	password: string;
};
const LoginForm = () => {
	const { register, handleSubmit } = useForm<LoginField>();

	const onSubmit = (data: any) => {
		console.log(data);
	};
	return (
		<div className="bg-white p-7  rounded ">
			<form action="" className="flex  gap-2" onSubmit={handleSubmit(onSubmit)}>
				<div className="w-[290px]">
					<label htmlFor="email">Số điện thoại hoặc Email</label>
					<input
						id="email"
						className="border-2 border-input p-2 rounded w-full"
						type="text"
						placeholder="Nhập số điện thoại hoặc Email..."
						{...register("email", {
							required: true,
							pattern:
								/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8-9]|9\d)\d{7}$/ ||
								/\S+@\S+/,
						})}
					/>
				</div>

				<div className="w-[250px]">
					<label htmlFor="pw">Mật khẩu</label>
					<input
						id="pw"
						className="border-2 border-input p-2 rounded w-full"
						type="password"
						placeholder="Nhập mật khẩu..."
						{...register("password")}
						required
					/>
				</div>

				<button
					type="submit"
					className="block w-[120px] h-[45px] text-center bg-primary text-white rounded relative top-[22px]"
				>
					Đăng nhập
				</button>
			</form>
		</div>
	);
};

export default LoginForm;
