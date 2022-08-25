import BarcodeScannerComponent from "react-qr-barcode-scanner";

const BarcodeScanner = ({onScan}) => (
    <>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
            if(result) {
                onScan(result)
            }
        }}
      />
    </>
)

export default BarcodeScanner;