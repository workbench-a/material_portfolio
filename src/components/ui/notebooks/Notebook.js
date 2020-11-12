import React from "react";

import SinglePagePDFViewer from "./SinglePage";
// import AllPagesPDFViewer from "./components/pdf/all-pages";
// import { sampleBase64pdf } from "./sampleBase64pdf";
/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import samplePDF from "./static_notebooks/notebook.pdf";

export default function Notebook() {
  return (
    <div style={{"height":"100vh"}}>
      {/* <h4>Single Page</h4> */}
      {/* <SinglePagePDFViewer pdf={samplePDF} /> */}
      <iframe src={samplePDF} style={{"width":"100%", "height":"100%"}}/>
{/* 
      <hr />

      <h4>All Pages</h4>
      <div className="all-page-container">
        <AllPagesPDFViewer pdf={samplePDF} />
      </div>

      <hr />

      <h4>Base 64 Single Page</h4>
      <SinglePagePDFViewer pdf={sampleBase64pdf} />

      <hr /> */}
    </div>
  );
}
