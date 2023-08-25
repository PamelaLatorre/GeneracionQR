const qrcode = require('qrcode');
const fs = require('fs');

// Información de contacto
const contactInfo = {
    name: 'Fernando A. Latorre',
    email: 'agrimensura.latorre@gmail.com',
    phone: '221 5989424'
};

// Generar el contenido de texto con formato vCard
const vCardContent = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
EMAIL:${contactInfo.email}
TEL:${contactInfo.phone}
END:VCARD`;

// Generar el código QR
qrcode.toDataURL(vCardContent, (err, url) => {
    if (err) throw err;

    // Guardar la imagen del código QR en un archivo
    fs.writeFileSync('contacto_qr.png', url.split(',')[1], 'base64');
    console.log('Código QR de información de contacto generado y guardado como contact_qr.png');
});

