import { useState } from 'react';

import BarcodeScannerComponent from 'react-qr-barcode-scanner';

function App() {
  const [scannedResult, setScannedResult] = useState(null);
  const [scanningError, setScanningError] = useState(null);

  return (
    <div className="App">
      <h2>{'Scan some stuff'}</h2>
      <BarcodeScannerComponent 
        width={500}
        height={500}
        onUpdate={(data) => {
          setScannedResult(data.text)
          setScanningError(null);
        }}
        onError={(data) => {
          setScanningError(data.text)
          setScannedResult(null);
        }}
      />
      {scannedResult && (<p>{`Scanned Result: ${scannedResult}`}</p>)}
      {scannedResult && (<p>{`Error: ${scannedResult}`}</p>)}
    </div>
  );
}

export default App;
