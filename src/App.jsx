import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjeta 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
            alt="Diademas Inalámbrico"
            className="rounded-lg"
          />
          <h3 className="font-bold text-lg">Diademas Inalambrico</h3>
          <p className="text-texto-dim text-sm">Diademas Inalambrico, conexion Bluetooth</p>
          <p className="text-verde font-extrabold">$89.900</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img
            src="https://compugamercol.com/wp-content/uploads/2024/06/TECLADO-REDRAGON-KUMARA-RAINBOW-1-Photoroom.png"
            alt="Teclado Mecánico"
            className="rounded-lg"
          />
          <h3 className="font-bold text-lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img
            src="https://reset.net.co/wp-content/uploads/2021/06/Monitor_24_Samsung_Curvo_T35F_IPS_75Hz_2.webp"
            alt="Monitor 24"
            className="rounded-lg"
          />
          <h3 className="font-bold text-lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.900</p>
        </div>

        {/* Tarjeta 4 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img
            src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop"
            alt="Audífonos Bluetooth"
            className="rounded-lg"
          />
          <h3 className="font-bold text-lg">Audífonos Bluetooth</h3>
          <p className="text-texto-dim text-sm">Cancelación de ruido, 20h de batería</p>
          <p className="text-verde font-extrabold">$199.900</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
