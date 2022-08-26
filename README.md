# Barcode Reader POC

- Spun up basic app using Create React App
- Used package `react-qr-barcode-scanner`
  - Leverages `react-webcam` for using user's webcam and `@zxing-js/library` to parse the barcode/QR code

## Outcome
### Can we do what we want to do?
- Yes, this allows us to scan a barcode and QR code from the browser.  It sounds like we we're leaning toward barcodes, and this seems to be the most used library for barcodes.  If we're choose to go the route of QR codes, `react-qr-reader` might be a better options

### Gotchas:
- Most webcam barcode/qr scanning libraries appear to use `@zxing-js/library`, which [appears to be dead](https://github.com/zxing-js/library#project-in-maintenance-mode-only).
- Both `react-qr-barcode-scanner` and `react-qr-reader` seem largely unmaintained, which is less than ideal, which is a potential risk.
  - With that said, it seems both of these packages are stuck in the past on React 16 (18 is the latest at time of writing), with not much mention of upgrading.  This forces consumers to use React 16, or specify `--legacy-peer-deps` when running `npm install`.
- I had trouble with local development using both of these packages - the camera never appears to open.  I am not sure if this has something to do with browser security.  I was able to get this working by pushing the app to Vercel.  Things I've tried:
  - Generating a local SSL cert (using mkcert)
  - Messing with Browser settings.

### TL;DR:

- It works, but the local development experience isn't the best.  Maybe someone smarter than me can figure out what I am doing wrong.
- If we go with barcodes, we should use `react-qr-barcode-scanner`.  If we use QR codes, we should use `react-qr-reader`.
- Support for web-based scanners isn't the best.  Mobile (React Native) seems to have plenty of options (including one by Expo).