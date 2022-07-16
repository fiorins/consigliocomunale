/** return a list with two lists (attendances and absences of councilors) */

export const councilorsDataNum = (my_data: any, my_list: any) => {
  let councilors_data_num: any = [];

  let attendances: any = [];
  let absences: any = [];

  my_list.forEach((i: any) => {
    let result = my_data.reduce((sums: any, entry: any) => {
      sums[entry[i]] = (sums[entry[i]] || 0) + 1;
      return sums;
    }, {});
    attendances.push(result[1]); //pick presence
    absences.push(result[0]); //pick absence
  });

  councilors_data_num.push(attendances, absences);

  return councilors_data_num;
};
