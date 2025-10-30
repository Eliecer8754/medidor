import { Header } from "./components/Header";
import protector from "./assets/protector.png"
function App() {
  return (
    <div>
      <Header />
      {/* INICIO */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center"
      >
        <h1 className="text-9xl font-bold mb-3">KiloSense</h1>
        <span className="text-3xl font-semibold mb-30">Controla, mide e inspecciona</span>
        <p className="text-xl mb-6 max-w-4xl">
          Tu solución para controlar el gasto de energia de manera sencilla y eficiente.
        </p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
          Comenzar
        </button>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="h-screen flex flex-col justify-center items-center bg-gray-200 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-8">Producto</h2>
        <img src={protector} alt="" />
        <span className="text-red-800 text-4xl mb-4">$29.99</span>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Medición Precisa</h3>
            <p>Obtén datos exactos de tus electrodomesticos para tomar decisiones confiables.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Control Total</h3>
            <p>Supervisa y gestiona todas tus dispositivos conectados desde un solo lugar.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Encendido/apagado</h3>
            <p>Enciende y apaga tus dispositivos conectados a la red WiFi2</p>
          </div>
        </div>
      </section>

      {/* ACERCA */}
      <section
        id="acerca"
        className="h-screen flex flex-col justify-center items-center bg-gray-300 px-4 text-justify"
      >
        <h2 className="text-4xl font-bold mb-6">Acerca del dispositivo</h2>
        <p className="max-w-3xl text-lg mb-4">
         un dispositivo se monitoreara el flujo eléctrico en cada equipo doméstico, los datos se recuperarían en un software
         para tener los registros de consumos, 
         que a su vez se crearía una aplicación exclusiva para móvil, que le permitiera al usuario poder encender o 
         apagar los tomas para no seguir malgastando energía al no usar algunos equipos
        </p>
        <p className="max-w-3xl text-lg">
          Nuestro equipo está comprometido con la innovación, eficiencia y confiabilidad en cada proyecto que apoyamos.
        </p>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="h-screen flex flex-col justify-center items-center bg-gray-400 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Realiza tu compra</h2>
        <p className="mb-6 max-w-3xl text-lg">
          Escribenos para poder realizar la compra
        </p>
        <form className="flex flex-col gap-4 w-full max-w-md">
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded border border-gray-300"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="p-3 rounded border border-gray-300"
          />
          <textarea
            placeholder="Mensaje"
            className="p-3 rounded border border-gray-300"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Enviar
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
