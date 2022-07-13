import { NextPage } from "next";
import { useState, useEffect } from "react";
import Airtable from "airtable";
import { ConsiglioComunale } from "../model/consiglioType";
import { Card } from "../components/Card";
import base from "./api/base";
import { councilorsList } from "../functions/councilorsList";
import { councilorsData } from "../functions/councilorsData";
import { councilData } from "../functions/councilData";

const Prova5: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    base("Grando_Test")
      .select({ view: "Grid view" })
      .eachPage((records: any, fetchNextPage) => {
        //setData(records) // e ci si accede poi tramite data.fields, ecc...
        setData(
          records.map((record: any) => {
            return { id: record.id, ...record.fields };
          })
        );
        fetchNextPage();
      });
  }, []);

  let tot_delibere = Object.entries(data).length;
  //-----------------------
  const consiglieriLista1 = councilorsList(data);
  console.log("consiglieriLista1: ", consiglieriLista1);
  //-----------------------
  const consiglieriDati1 = councilorsData(data, consiglieriLista1);
  console.log("consiglieriDati1: ", consiglieriDati1);
  //-----------------------
  const consigliDati1 = councilData(data);
  console.log("consigliDati1: ", consigliDati1);

  return (
    <div>
      <Card
        title="Statistiche Consiliatura 2017-2022"
        consiglieri={25}
        delibereTot={tot_delibere}
      />
    </div>
  );
};

export default Prova5;
