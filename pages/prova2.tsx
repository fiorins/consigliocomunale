import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAirtable } from "../functions/useAirtable";
import { TAirtableQueryResults } from "../model/TAirtableQueryResults";

const Prova2: NextPage = () => {
  let somma: number = 0;

  let x: any = [];

  try {
    useAirtable("Grando_Test", "Grid view", 90).then(
      (res: TAirtableQueryResults) => {
        console.log("print1: ", res.data);
        x = res.data;
        console.log("print2: ", x); //It PRINTS data
      }
    );
  } catch (error) {}

  console.log("print3: ", x); //It PRINTS empty array

  return <div>prova {x}</div>;
};

export default Prova2;
