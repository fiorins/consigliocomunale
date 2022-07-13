/** return */

export const councilData = (my_data: any) => {
  let council_data: any = [];

  let years_list_keys: string[][] = [];
  my_data.forEach((i: any) => {
    return years_list_keys.push(i["Anno"]);
  });
  let merged = years_list_keys.flat();
  let uniques = Array.from(new Set(merged));
  const years: string[] = uniques.sort();

  let councils: any = [];
  let resolutions: any = [];
  let councils_resolutions: any = [];

  years.forEach((i: any) => {
    const filtered = my_data.filter((x: any) => x.Anno[0] == [i]);

    const max_council = filtered.reduce(
      (prev: any, curr: any) =>
        prev.Consiglio_Num > curr.Consiglio_Num ? prev : curr,
      {}
    ).Consiglio_Num;
    const max_resolution = filtered.reduce(
      (prev: any, curr: any) =>
        prev.Delibera_Num > curr.Delibera_Num ? prev : curr,
      {}
    ).Delibera_Num;
    councils.push(max_council); //pick councils for every year
    resolutions.push(max_resolution); //pick resolutions for every year
  });
  councils_resolutions.push(councils, resolutions);

  const councils_sum = councils.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );
  const resolutions_sum = resolutions.reduce(
    (partialSum: number, a: number) => partialSum + a,
    0
  );

  council_data.push(councils_sum, resolutions_sum, years, councils_resolutions);

  return council_data;
};
