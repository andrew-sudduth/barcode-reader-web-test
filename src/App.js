import React, {useState} from "react";
import BarcodeScanner from "./BarcodeScanner";

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isScannerOpen, setIsScannerOpen] = useState(false);

  return (
    <>
    {isScannerOpen ? 
      <button onClick={() => setIsScannerOpen(false)}>{'Close Scanner'}</button> : 
      <button onClick={() => setIsScannerOpen(true)}>{'Open Scanner'}</button>
    }
      {isScannerOpen && 
        <BarcodeScanner 
          onScan={(result) => {
              setData(result.text);
              setIsScannerOpen(false);
          }}
          onError={(error) => {
            setError(error);
            setIsScannerOpen(false);
          }}
        />
      }
      {data && (
        <p>{`Barcode Data: ${data}`}</p>
      )}
      {error && (
        <p>{`Error ${error}`}</p>
      )}
    </>
  );
}

export default App;
