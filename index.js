import puppeteer from 'puppeteer';

import { promises as fs } from 'fs';  // Para fs, usamos el objeto 'promises' para obtener funciones asincrónicas
import express from 'express';
import path from 'path';
import open from 'open';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pdfPath = path.join(__dirname, "pdfs");

app.use("/pdfs", express.static(pdfPath));

app.listen(3001, () => {
  console.log("Servidor iniciado en http://localhost:3001");
});

// Lee el archivo de imagen y conviértelo a base64
const imageBuffer = await fs.readFile("D:/Puppeteer/pdf/mapa.png");
const base64Image = imageBuffer.toString("base64");
const imageBuffer2 = await fs.readFile("D:/Puppeteer/pdf/cmpc.png");
const base64Image2 = imageBuffer2.toString("base64");

(async function () {
  try {
    const browser = await puppeteer.launch({
      headless: "new", // Headless: true para ejecución sin interfaz gráfica
    });
    const page = await browser.newPage();

    // Generar el contenido HTML con el mapa y la tabla combinados
    let htmlContent = `
        <head>
        <!-- Agregar Bootstrap desde CDN -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
        <style>
        a{
            color:inherit;
            text-decoration:none;
        }
        .text-center{
            text-align:center;
        }
        table, tr, td, thead, th{
            border-collapse:collapse;
        }
        .h3{
            border-left:10px solid blue ;
            padding-left:10px;
        }
        .table tr td{
            background:#f9f9f9;
            border:1px solid #cccccc;
            padding:5px;
        }
        .border{
            border:1px solid #cccccc;
        }
        .encabezado{
            background:blue;
            color:#ffffff;
        }
        </style>
        </head>
        <body>
            <div >
                <div class="h3">
                <table>
                    <tr>
                        <td style="width:900px;">
                            <h3>IPS PRODUCTOS TERMINADOS</h3>
                        </td>
                        <td style="width:100px;text-align:right;">
                            <img src="data:image/png;base64,${base64Image2}" style="height:60px;">
                        </td>
                    </tr>
                </table>
                </div>
                
                <table class="table">
                    <tr>
                        <td>
                            <a target="_blank" href="https://www.google.com/maps?q=-40.5796559,-73.1473703">
                            <img src="data:image/png;base64,${base64Image}" class="logo" style="width:660px !important;"> 
                            </a>
                        </td>
                    </tr>
                </table>
                </div>
                <table style="font-size:13px !important;">
                <tr >
                    <td style="width:130px;"><small><b>ID Interno</b></small></td>
                    <td style="width:130px;"><small><b>Creado</b></small></td>
                    <td style="width:130px;"><small><b>Registrado</b></small></td>
                    <td style="width:130px;"><small><b>Dispositivo</b></small></td>
                    <td style="width:130px;"><small><b>Ejecutor</b></small></td>
                    <td style="width:130px;"><small><b>Georreferencia</b></small></td>
                </tr>
                <tr>
                    <td valign="top"><small>reciTB8OXIqaT7lr3 </small></td>
                    <td valign="top"><small>2023-12-12 00:07</small></td>
                    <td valign="top"><small>2023-12-12 03:07</small></td>
                    <td valign="top"><small>cddace394f238439</small></td>
                    <td valign="top"><small>crobles</small></td>
                    <td valign="top"><small>-37.43948919
                    -72.35507715</small></td>
                </tr>
                </table>
                <br>
                <table class="table table-bordered" style="font-size:13px !important;">
                    <tr><th>Empresa</th><td>JORQUERA PULP</td></tr>
                    <tr><th>Supervisor</th><td>DIEGO RUBILAR</td></tr>
                    <tr><th>Lugar</th><td>PLANTA PACÍFICO</td></tr>
                    <tr><th>Controlador</th><td>CRISTIAN ROBLES</td></tr>
                    <tr> <th>APR</th> <td>ALBERTO SANDOVAL</td></tr>
                    <tr><th>Patente</th><td>UT CGHR 84</td></tr>
                    <tr><th>Nombre Conductor</th><td>ARDI GONZALEZ</td></tr>
                </table>
                <br>
                <div class="h3">
                            <h3 class="text-start">Checklist</h3>
                </div>
                <table class="table">
                    <tr>
                        <td style="width:8px;">#</td>
                        <td style="width:475px;">Enunciado</td>
                        <td style="width:90px;">Seguimiento</td>
                        <td style="width:75px;">Respuesta</td>
                    </tr>

                    <tr>
                        <td><b>1+1</b></td>
                        <td ><small>Posee su cartilla de autocontrol completa en los periodos que correspond<br /></small></td>
                        <td><small>Pendiente</small></td>
                        <td style="text-align:center;">
                            <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                            <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                            <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                        </td>
                    </tr>
                    <tr style="color:#656565;">
                        <td style="background:#ffffff;"><b>2</b></td>
                        <td style="background:#ffffff;"><small>Posee la cantidad y estado adecuado de eslingas, carpas y tacos para asegurar y proteger la carga</small>
                        </td>
                        <td style="background:#ffffff;"><small>Pendiente</small>
                        </td>
                        <td style="text-align:center;">
                        <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                        <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                        <img src="data:image/png;base64,${base64Image}" style="width:25px;">
                        </td>
                    </tr>
                </table>
	            <div class="text-center">
                    <h2>97%</h2>
                    <p style="margin-top:-15px;"><small>Cumplimiento</small></p>
                    <br>
                    <img src="data:image/png;base64,${base64Image}" style="width:250px;">
                    <p style="margin-top:5px;"><small>Validar QR</small></p>
                </div>
            </div>
        </body>`;

    await page.setContent(htmlContent);
    await page.addStyleTag({
      content: `body {
            margin: 30px 50px 0px 50px;
            text-align: center;
          }`,
    });

    const pdfPath = path.join(__dirname, "pdfs", "mapa_y_tabla.pdf");
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
    });

    console.log("Se ha creado el PDF con el mapa y la tabla combinados.");

    // Cerrar el navegador después de generar el PDF
    await browser.close();

    await open(pdfPath);

    console.log(`Se abrió el PDF en el navegador: ${pdfPath}`);

    console.log(
      `Accede al PDF aquí: http://localhost:3001/pdfs/mapa_y_tabla.pdf`
    );
   
  } catch (error) {
    console.error(error);
  }
})();
