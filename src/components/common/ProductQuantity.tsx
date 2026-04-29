import { useState } from 'react';

const ProductQuantity = () => {
  const [jumlah, setJumlah] = useState(1);

  const tambah = () => setJumlah(jumlah + 1);
  const kurang = () => {
    // Logika proteksi: tidak bisa kurang dari 1
    if (jumlah > 1) {
      setJumlah(jumlah - 1);
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 border rounded w-fit">
      {/* data-testid ini dipakai sebagai penanda untuk dibaca oleh robot tester nanti */}
      <button onClick={kurang} data-testid="btn-kurang" className="bg-red-500 text-white px-3 py-1 font-bold rounded">
        -
      </button>
      
      <span data-testid="nilai-jumlah" className="font-['Outfit'] text-xl font-bold">
        {jumlah}
      </span>
      
      <button onClick={tambah} data-testid="btn-tambah" className="bg-blue-500 text-white px-3 py-1 font-bold rounded">
        +
      </button>
    </div>
  );
};

export default ProductQuantity;