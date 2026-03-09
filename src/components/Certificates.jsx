import { motion } from "framer-motion";
import { useState } from "react";

const certificates = [
  { id: 1, image: "/portofolio/assets/cert1.jpg" },
  { id: 2, image: "/portofolio/assets/cert2.jpg" },
  { id: 3, image: "/portofolio/assets/cert3.jpg" },
  { id: 4, image: "/portofolio/assets/cert4.jpg" },
  { id: 5, image: "/portofolio/assets/cert5.jpg" },
  { id: 6, image: "/portofolio/assets/cert6.jpg" },
  { id: 7, image: "/portofolio/assets/cert7.jpg" },
  { id: 8, image: "/portofolio/assets/cert8.jpg" },
  { id: 9, image: "/portofolio/assets/cert9.jpg" },
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <section id="certificates" className="mt-32">

      <h1 className="text-4xl font-bold text-center mb-12">
        Certificates
      </h1>




      {/* GRID */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">

        {(showAll ? certificates : certificates.slice(0, 6)).map((cert) => (
<motion.div
  key={cert.id}
  onClick={() => setSelected(cert.image)}
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, delay: cert.id * 0.1 }}
  className="group relative overflow-hidden rounded-xl border border-zinc-700 
  hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]
  transition-all duration-500 cursor-pointer"
>

            <div className="aspect-[16/10] overflow-hidden">
  <img
    src={cert.image}
    className="w-full h-full object-cover
    brightness-50 group-hover:brightness-100
    transform group-hover:scale-110
    transition-all duration-500"
  />
</div>

            {/* overlay */}
            <div
              className="absolute inset-0 bg-blue-500/0 
              group-hover:bg-blue-500/20 
              transition duration-500 flex items-center justify-center"
            >
              <p className="text-white opacity-0 group-hover:opacity-100 font-semibold">
                View Certificate
              </p>
            </div>

          </motion.div>
        ))}

      </div>

      {/* BUTTON SHOW MORE */}
<div className="flex justify-center mt-10">
  <button
    onClick={() => setShowAll(!showAll)}
    className="px-6 py-3 rounded-full border border-zinc-600
    hover:border-blue-500 hover:bg-blue-500/10
    transition duration-300"
  >
    {showAll ? "Show Less" : "Show More"}
  </button>
</div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            className="max-w-4xl rounded-lg shadow-lg"
          />
        </div>
      )}

    </section>
  );
};

export default Certificates;