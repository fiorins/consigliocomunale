/** return a clean set without repetition */

export const councilorsList = (my_data: any) => {
  let list_tot_keys: string[][] = [];
  my_data.forEach((i: any) => {
    return list_tot_keys.push(Object.keys(i));
  });

  let merged = list_tot_keys.flat();
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
  const councilors_list = filtered.sort();

  return councilors_list;
};
