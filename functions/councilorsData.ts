/** return a list with two lists (attendances and absences) */

export const councilorsData = (my_data: any, my_list: any) => {
  let councilors_data: any = [];

  let attendances: any = [];
  let absences: any = [];

  my_list.forEach((i: any) => {
    let result = my_data.reduce((sums: any, entry: any) => {
      sums[entry[i]] = (sums[entry[i]] || 0) + 1;
      return sums;
    }, {});
    attendances.push(result["true"]); //pick presence
    absences.push(result["undefined"]); //pick absence
  });

  councilors_data.push(attendances, absences);

  return councilors_data;
};
