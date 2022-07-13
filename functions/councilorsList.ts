/** return a clean set without repetition */

export const councilorsList = (my_data: any) => {
  let list_keys: string[][] = [];
  my_data.forEach((i: any) => {
    return list_keys.push(Object.keys(i));
  });

  let merged: string[] = list_keys.flat();
  let uniques = Array.from(new Set(merged));

  const toRemove = [
    "id",
    "Consiglio_Num",
    "Data",
    "Anno",
    "Delibera_Num",
    "Presenti",
    "Assenti",
  ];
  const filtered = uniques.filter((i: any) => !toRemove.includes(i));
  const sorted = Array.from(filtered).sort();

  const councilors_set = new Set(sorted);

  return councilors_set;
};
