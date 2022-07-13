import { NextPage } from "next";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
import grando from "../data/grando.json";
import grando_test from "../data/grando_test.json";
import { Card } from "../components/Card";
import base from "./api/base";

export async function getStaticProps() {
  const result = await base("Grando_Test").select({}).all();
  return {
    props: {
      data: result.map((record) => {
        return { id: record.id, ...record.fields };
      }),
    },
  };
}

interface ConsigliProps {
  data: ConsiglioComunale[];
}

const Prova4: NextPage<ConsigliProps> = (props) => {
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

export default Prova4;
