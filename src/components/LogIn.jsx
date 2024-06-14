import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function LogIn() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.email && data.password) {
      navigate("/users");
      localStorage.setItem("token", uuidv4());
    }
    reset();
  };

  return (
    <div className="w-4/12">
      <h1 className="text-center text-2xl mb-4 font-semibold">Ingresar</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            autoComplete="off"
            className="mb-2 w-full transition ease-in-out duration-500 rounded-lg p-4 bg-[#eeeef8] mt-1 focus:outline-none focus:border-sky-[#7678ed] focus:ring-2 focus:ring-[#7678ed]"
            type="text"
            placeholder="Correo electronico"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$/,
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-500 mb-1" role="alert">
              * Ingresa tu email
            </p>
          )}
          {errors?.email?.type === "pattern" && (
            <p className="text-red-500 mb-1" role="alert">
              * Ingresa un email valido
            </p>
          )}
        </div>
        <div>
          <input
            autoComplete="off"
            className="w-full transition ease-in-out duration-500 rounded-lg p-4 bg-[#eeeef8] mt-1 focus:outline-none focus:border-sky-[#7678ed] focus:ring-2 focus:ring-[#7678ed]"
            type="password"
            id="password"
            placeholder="Contraseña"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password && (
            <p className=" text-red-500 mt-1" role="alert">
              *Ingresa tu contraseña
            </p>
          )}
        </div>
        <button className="bg-black rounded-lg w-full p-4 mt-2  text-white font-semibold text-lg hover:bg-[#585aff] transition ease-in-out duration-300 ">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LogIn;
