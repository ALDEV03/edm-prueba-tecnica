export default function Header() {
  return (
    <header className="text-white body-font bg-[rgb(147,178,216)] bg-[linear-gradient(0deg,_rgba(147,178,216,1)_0%,_rgba(109,138,180,1)_40%,_rgba(89,119,162,1)_60%,_rgba(30,47,73,1)_100%)]">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src="/logo_pufi.png" alt="Logo pufi" />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">PUFI PUFF</a>
          <a className="mr-5 hover:text-gray-900">PUFI RAIN</a>
          <a className="mr-5 hover:text-gray-900">PUFI CART</a>
          <a className="mr-5 hover:text-gray-900">PUFI NAP</a>
        </nav>
        <ul className="flex flex-row gap-2">
          <li>Mi Cuenta</li>
          <li>Mi Compra</li>
        </ul>
      </div>
    </header>
  );
}
