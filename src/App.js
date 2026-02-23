import React from "react";
import { Header, Footer } from "./components/Layout";//multiple export in same file in header must import using {header,footer}
import Card from "./components/Card";

export default function App() {
  return (
    <div>
      <Header />
      <h1>React App using Parcel</h1>
      <h2>My name is bluevoice</h2>
      <h3>i am changing the color of this text</h3>
      <h4> hey  wassup i am the ceo bitch</h4>
      <Card title="React" />
      
      <Card title="Parcel Bundler" />
      <Footer />
    </div>
  );
}




//{} means name import and export from the component like header, footer
//default export means no curly braces like Card
//multiple export in same file in header must import using {header,footer}
//expotr only one thing import using {default}
//{default} export contains single comp compnent
//multiple export = multiple utilities



//with bundler == combined all js files into one optimized files 
//fast reload , fast refresh, 

