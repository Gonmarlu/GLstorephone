import { useState } from 'react';

const phones = [
  { name: 'iPhone 14 Pro Max', price: '$1.200.000', img: 'https://via.placeholder.com/300x200?text=iPhone+14+Pro+Max' },
  { name: 'Samsung Galaxy S24 Ultra', price: '$1.050.000', img: 'https://via.placeholder.com/300x200?text=Galaxy+S24+Ultra' },
  { name: 'Xiaomi Redmi Note 13 Pro', price: '$550.000', img: 'https://via.placeholder.com/300x200?text=Redmi+Note+13+Pro' },
];

function App() {
  const [search, setSearch] = useState('');

  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ textAlign: 'center' }}>GLstorephone</h1>
      <p style={{ textAlign: 'center', color: 'gray' }}>Celulares nuevos al mejor precio en Mendoza</p>
      <input
        type="text"
        placeholder="Buscar celular..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: '100%', padding: 10, margin: '20px 0' }}
      />
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredPhones.map((phone, i) => (
          <div key={i} style={{ border: '1px solid #ccc', borderRadius: 10, padding: 10, width: 300 }}>
            <img src={phone.img} alt={phone.name} style={{ width: '100%', borderRadius: 10 }} />
            <h2>{phone.name}</h2>
            <p style={{ color: 'green' }}>{phone.price}</p>
            <button style={{ width: '100%', padding: 10, backgroundColor: '#000', color: '#fff', border: 'none', borderRadius: 5 }}>
              Comprar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;