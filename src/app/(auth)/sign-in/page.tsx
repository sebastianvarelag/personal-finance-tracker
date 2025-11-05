'use client';

import { CustomInput } from '@/components/CustomInput';
import { Button } from '@/components/ui/button';
import React from 'react';

export default function SignIn() {
	return (
		<div className="flex h-full bg-black">
			<div className="w-1/2 h-full flex items-center justify-center text-white">
				<h1 className="text-8xl max-w-lg text-center">
					Finance Tracker
				</h1>
			</div>
			<div className="w-1/2 h-full flex items-center justify-center bg-white">
				<div className="w-lg flex flex-col items-center justify-center px-5">
					<div className="p-4">
						<h2 className="text-3xl">Inicia sesión</h2>
					</div>
					<form className="w-full px-2">
						<CustomInput
							label="Usuario"
							id="user"
							placeholder="Ingresa tu usuario"
							type="text"
							className="w-full mt-2"
						/>
						<CustomInput
							label="Contraseña"
							id="password"
							placeholder="Ingresa tu contraseña"
							type="password"
							className="w-full mt-2"
						/>
						<div className="w-full mt-8 flex justify-center">
							<Button className="w-fit px-8 bg-black hover:bg-black/80 cursor-pointer">
								Iniciar sesión
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
