import Q from "q";
import React, {useState} from "react";
import BarcodeScanner from "./BarcodeScanner";

function App() {
  const [data, setData] = useState("");
  const [isScannerOpen, setIsScannerOpen] = useState(false)

  return (
    <>
    {isScannerOpen ? 
      <button onClick={() => setIsScannerOpen(false)}>{'Close Scanner'}</button> : 
      <button onClick={() => setIsScannerOpen(true)}>{'Open Scanner'}</button>
    }
      {isScannerOpen && 
        <BarcodeScanner 
          onScan={(result) => {
              setData(result);
              isScannerOpen(false);
          }}
        />
      }
      <p>{data}</p>
    </>
  );
}

export default App;
