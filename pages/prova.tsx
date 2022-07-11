import { NextPage } from "next";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
import grando from "../data/grando.json";
import grando_test from "../data/grando_test.json";
import { Card } from "../components/Card";

// schema
// getStaticProps create an Object props and pass it to the page
// the page understand the Object props type with the interface I pass to it

// dato che utilizzo una API key, utilizzo il ssr o lo static generation (questa in questo caso)
// https://nextjs.org/docs/basic-features/pages & https://nextjs.org/docs/basic-features/data-fetching/get-static-props
// per recuperare i dati dal db e nascondere l'API key in modo che il front end non faccia una chiamata REST
// quindi creo questa funzione che restituisce dei dati (le props) che poi vengono passati al componente automaticamente da NextJS
export async function getStaticProps() {
  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appjMMg2Hxsyb6seI"
  );
  const result = await base("Grando_Test").select({}).all();

  // create a json as a separate file just to take a look at it
  const my_result = JSON.stringify(
    result.map((record) => {
      return { id: record.id, ...record.fields };
    }),
    null,
    4
  );
  const fs = require("fs");
  fs.writeFile("./data/Grando_Test.json", my_result, function (err: any) {
    if (err) {
      console.log(err);
    }
  });

  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }), //select data of my interest (https://airtable.com/api/meta)
    },
  };
}

// function totCount(consigliere: boolean) {
//   let count = 0;
//   for (let i = 0; i < grando.length; i++) {
//     if (grando[i].Caredda == consigliere) {
//       count++;
//     }
//   }
//   return count;
// }
// function totCountYear(consigliere: boolean) {
//   let count = 0;
//   for (let i = 0; i < grando.length; i++) {
//     if (grando[i].Caredda == consigliere) {
//       count++;
//     }
//   }
//   return count;
// }

interface ConsigliProps {
  data: ConsiglioComunale[];
}

const Prova: NextPage<ConsigliProps> = (props) => {
  console.log("Props Data: ", props.data);
  console.log("contatore", totCount(true));

  function totCount(consigliere: boolean) {
    let count = 0;
    for (let i = 0; i < grando.length; i++) {
      if (props.data[i]?.Ardita == consigliere) {
        count++;
      }
    }
    return count;
  }
  function totCountYear(consigliere: boolean) {
    let count = 0;
    for (let i = 0; i < grando.length; i++) {
      if (props.data[i]?.Ascani == consigliere) {
        count++;
      }
    }
    return count;
  }

  return (
    <div>
      <h1>Catalog</h1>
      {props.data.map((p) => {
        return (
          <li key={p.id}>
            {p.Presenti} ({p.Assenti}) ({p.Data}) {p.Anno[0]} {String(p.Ardita)}{" "}
            {p.Consiglio_Num} {p.Delibera_Num} totCount: {totCount(true)}{" "}
            totCountYear: {totCountYear(true)}
          </li>
        );
      })}
      <Card consigliTot={totCount(true)} />
    </div>
  );
};

export default Prova;
