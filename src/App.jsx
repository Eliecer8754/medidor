import { useState } from "react";
import { Header } from "./components/Header";
import protector from "./assets/protector.png";

function App() {
  const [mostrarProductos, setMostrarProductos] = useState(false);

  const productos = [
    {
      nombre: "Smart Plug SPE200",
      descripcion: "Controla y mide tu consumo eléctrico desde el móvil.",
      precio: "$29.99",
    },
    {
      nombre: "Smart Sensor Temp+",
      descripcion: "Monitorea temperatura y humedad en tiempo real.",
      precio: "$24.99",
    },
    {
      nombre: "Smart Energy Hub",
      descripcion: "Administra múltiples dispositivos IoT desde un solo punto.",
      precio: "$49.99",
    },
  ];

  return (
    <div>
      <Header />

      {/* INICIO */}
      <section
        id="inicio"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 text-center"
      >
        <h1 className="text-9xl font-bold mb-3">KiloSense</h1>
        <span className="text-3xl font-semibold mb-6">
          Controla, mide e inspecciona
        </span>
        <p className="text-xl mb-6 max-w-4xl">
          Tu solución para controlar el gasto de energía de manera sencilla y
          eficiente.
        </p>
        <button
          onClick={() => setMostrarProductos(!mostrarProductos)}
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          {mostrarProductos ? "Producto principal" : "Más productos"}
        </button>
      </section>

      {/* PRODUCTOS */}
      {mostrarProductos && (
        <section className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-4 py-20 text-center">
          <h2 className="text-4xl font-bold mb-10 text-blue-700">
            Nuestros Productos
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            {productos.map((p, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{p.nombre}</h3>
                <p className="text-gray-600 mb-4">{p.descripcion}</p>
                <span className="text-blue-700 font-bold text-xl">
                  {p.precio}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SERVICIOS */}
      {!mostrarProductos && (
        <section
          id="servicios"
          className="h-screen flex flex-col justify-center items-center bg-gray-200 px-4 text-center"
        >
          <h2 className="text-4xl font-bold mb-8">
            Smart Power Consumption Monitor
          </h2>
          <div className="flex">
            <img src={protector} alt="" className="w-120 h-120 mr-4" />
            <ol className="flex flex-col gap-8 text-start justify-center mb-20 list-disc">
              <li>Modelo SPE200</li>
              <li>Tipo de conexión WiFi 2.4GHz</li>
              <li>Compatibilidad con Android/iOS/Alexa/Google Home</li>
              <li>Tensión de entrada 100-240 V AC</li>
              <li>Dimensiones: 60x60x80 mm</li>
            </ol>
          </div>
          <span className="text-red-800 text-4xl mb-4">$29.99</span>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Medición Precisa</h3>
              <p>
                Obtén datos exactos de tus electrodomésticos para tomar
                decisiones confiables.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">Control Total</h3>
              <p>
                Supervisa y gestiona todos tus dispositivos conectados desde un
                solo lugar.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">
                Encendido/Apagado
              </h3>
              <p>Enciende y apaga tus dispositivos conectados a la red WiFi.</p>
            </div>
          </div>
        </section>
      )}

      {/* ACERCA */}
      <section
        id="acerca"
        className="h-screen flex flex-col justify-center items-center bg-gray-300 px-4 text-justify"
      >
        <h2 className="text-4xl font-bold mb-6">Acerca del dispositivo</h2>
        <p className="max-w-3xl text-lg mb-4">
          Un dispositivo que monitorea el flujo eléctrico en cada equipo
          doméstico; los datos se recuperarían en un software para tener los
          registros de consumos. Además, se desarrollará una aplicación móvil
          exclusiva que le permitirá al usuario encender o apagar los tomas
          para no seguir malgastando energía.
        </p>
        <p className="max-w-3xl text-lg">
          Nuestro equipo está comprometido con la innovación, eficiencia y
          confiabilidad en cada proyecto que apoyamos.
        </p>
      </section>

      {/* CONTACTO */}
      <section
        id="contacto"
        className="h-screen flex flex-col justify-center items-center bg-gray-400 px-4 text-center"
      >
        <h2 className="text-4xl font-bold mb-6">Realiza tu compra</h2>
        <p className="mb-6 max-w-3xl text-lg">
          Escríbenos para poder realizar la compra.
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
