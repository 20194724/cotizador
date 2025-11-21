import React, { useState } from 'react';
import { LayoutDashboard, Calculator, FileText } from 'lucide-react';
import { QuoteItem } from './types';
import DoorForm from './components/DoorForm';
import QuoteSummary from './components/QuoteSummary';

const App: React.FC = () => {
  const [items, setItems] = useState<QuoteItem[]>([]);

  const addItem = (item: QuoteItem) => {
    setItems([...items, item]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-black text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <LayoutDashboard className="h-6 w-6" />
            <h1 className="text-xl font-bold tracking-tight">Cotizador - La Casa de las Puertas</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Builder Form */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calculator className="text-gray-800 h-5 w-5" />
                  <h2 className="text-lg font-semibold text-gray-900">Configurar Producto</h2>
                </div>
              </div>
              
              <div className="p-6">
                <DoorForm onAdd={addItem} />
              </div>
            </div>

            {/* Instructions / Tips Block */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-gray-800 font-semibold mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2" />
                Información Importante
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Las puertas principales se escalan a un mínimo de 1.00m x 2.40m.</li>
                <li>Los marcos se redondean a la pulgada superior para el cálculo (1 pulgada = 2.54cm).</li>
                <li>Los portones solo están disponibles en Cedro y Cachimbo.</li>
                <li>Las puertas contraplacadas tienen medidas base estándar.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-5 xl:col-span-4">
             <div className="sticky top-24">
                <QuoteSummary items={items} onRemove={removeItem} />
             </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default App;