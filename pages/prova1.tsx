import { NextPage } from "next";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
//import grando from "../data/grando.json";
import grando_test from "../data/grando_test.json";
import { Card } from "../components/Card";
import { useEffect, useState } from "react";

// schema
// getStaticProps create an Object props and pass it to the page
// the page understand the Object props type with the interface I pass to it

// dato che utilizzo una API key, utilizzo il ssr o lo static generation (questa in questo caso)
// https://nextjs.org/docs/basic-features/pages & https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// per recuperare i dati dal db e nascondere l'API key in modo che il front end non faccia una chiamata REST
// quindi creo questa funzione che restituisce dei dati (le props) che poi vengono passati al componente automaticamente da NextJS
// export async function getStaticProps() {
//   const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
//     "appjMMg2Hxsyb6seI"
//   );
//   const result = await base("Grando_Test").select({}).all();

//   // function totCount(consigliere: boolean) {
//   //   let count = 0;
//   //   for (let i = 0; i < result.length; i++) {
//   //     if (result[i]?. == consigliere) {
//   //       count++;
//   //     }
//   //   }
//   //   return count;
//   // }
//   // function totCountYear(consigliere: boolean) {
//   //   let count = 0;
//   //   for (let i = 0; i < result.length; i++) {
//   //     if (result[i]?.Ascani == consigliere) {
//   //       count++;
//   //     }
//   //   }
//   //   return count;
//   // }

//   return {
//     props: {
//       data: result.map((record) => {
//         return { id: record.id, ...record.fields };
//       }), //select data of my interest (https://airtable.com/api/meta)
//     },
//   };
// }

// interface ConsigliProps {
//   data: ConsiglioComunale[];
// }

const Prova1: NextPage = (props) => {
  // console.log("Props Data: ", props.data);
  // console.log("contatore", totCount(true));

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appjMMg2Hxsyb6seI"
  );
  const [paliotta2, setPaliotta2] = useState([]);
  const [grando1, setGrando1] = useState<Airtable.Record<any>[]>([]);
  const [grando2, setGrando2] = useState([]);

  // useEffect(() => {
  //   //base("Grando_Test").select({}).all();
  //   base("Grando_Test")
  //     .select({ view: "Grid view" })
  //     .eachPage((records, fetchNextPage) => {
  //       console.log("records: ", records);
  //       setGrando1(records);
  //       fetchNextPage();
  //     });
  // }, []);

  // function totCount(consigliere: boolean) {
  //   let count = 0;
  //   for (let i = 0; i < props.data.length; i++) {
  //     if (props.data[i]?.Ardita == consigliere) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }
  // function totCountYear(consigliere: boolean) {
  //   let count = 0;
  //   for (let i = 0; i < props.data.length; i++) {
  //     if (props.data[i]?.Ascani == consigliere) {
  //       count++;
  //     }
  //   }
  //   return count;
  // }

  return <div>prova</div>;
};

export default Prova1;
