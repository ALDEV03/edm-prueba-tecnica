import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const isValid = /\S+@\S+\.\S+/.test(email);

    if (!isValid) {
      setMessage("Por favor, ingresa un correo electrónico válido.");
    } else {
      const lengthType = email.length % 2 === 0 ? "par" : "impar";
      setMessage(`El número de caracteres es ${lengthType}.`);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mt-20">
        <h3 className="text-sm font-light text-[#C7C8CA]">NEWSLETTER</h3>
        <h2 className="text-4xl font-normal">SUSCRIBITE</h2>
        <p>Y enterate de todas las novedades</p>
        <form onSubmit={validateEmail} className="w-3/5 flex flex-col mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
            className="p-2 border border-gray-300 rounded mb-2"
          />
          {message && <p className="text-red-500">{message}</p>}
        </form>
      </div>
    </>
  );
}

export default NewsLetter;
