"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
	email:
		z.string().email() || z.string().regex(/^(0|\+84)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-6|8-9]|9\d)\d{7}$/),
	password: z.string(),
});

type LoginField = z.infer<typeof schema>;

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<LoginField>({
		resolver: zodResolver(schema),
	});

	const onSubmit = async (data: any) => {
		console.log(data);

		const result = await fetch("https://dev-fe-exam.viajsc.com/ExamUser/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ username: data.email, password: data.password }),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Login failed");
				}
				return response.json();
			})
			.then((data) => {
				console.log("Login successful:", data);
				return data;
			})
			.catch((error) => {
				// Handle errors
				console.error("Error logging in:", error.message);
				throw error;
			});
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
						{...register("email")}
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
					disabled={isSubmitting}
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
