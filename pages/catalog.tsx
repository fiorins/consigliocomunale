import { NextPage } from "next";
import Airtable from "airtable";
import { ConsigliComunali } from "../model/consigli";
import grando from "../data/grando.json";

export async function getStaticProps() {
  console.log(process.env.AIRTABLE_API_KEY);

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    "appjMMg2Hxsyb6seI"
  );

  const result = await base("Grando").select({}).all();

  // create json as a separate file just to take a look at it
  const result_my = JSON.stringify(
    result.map((record) => {
      return { id: record.id, ...record.fields };
    }),
    null,
    4
  );

  const fs = require("fs");
  fs.writeFile("./data/Grando.json", result_my, function (err: any) {
    if (err) {
      console.log(err);
    }
  });

  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }), //select data of my interest
    },
  };
}

function totCount(consigliere: boolean) {
  var count = 0;
  for (var i = 0; i < grando.length; i++) {
    if (grando[i].Caredda == consigliere) {
      count++;
    }
  }
  return count;
}
function totCountYear(consigliere: boolean) {
  var count = 0;
  for (var i = 0; i < grando.length; i++) {
    if (grando[i].Caredda == consigliere) {
      count++;
    }
  }
  return count;
}

interface ConsigliProps {
  data: ConsigliComunali[];
}

const Catalog: NextPage<ConsigliProps> = (props) => {
  console.log("Props Data: ", props.data);

  console.log("contatore", totCount(true));

  return (
    <div>
      <h1>Catalog</h1>

      {props.data.map((p) => {
        return (
          <li key={p.id}>
            {p.Presenti} ({p.Assenti}) ({p.Ardita}){p.Anno[0]}
          </li>
        );
      })}
    </div>
  );
};

export default Catalog;
