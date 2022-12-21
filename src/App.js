import React, {useState} from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

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
        <Html5QrcodePlugin 
          fps={10}
          qrbox={500}
          disableFlip={false}
          qrCodeSuccessCallback={(decodedText, decodedResult) => {
            setData(decodedText);
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
