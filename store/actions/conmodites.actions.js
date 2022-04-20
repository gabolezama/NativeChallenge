import { URL_BASE_API } from "../../constants/apiData.js";
import { VALUES } from "../../constants/values";

export const SELECT_LIST = "SELECT_LIST";
export const UPDATE_SEARCH = "UPDATE_SEARCH";

async function getCommodities(year) {
  const response = await fetch(`${URL_BASE_API}${year}`);
  const data = await response.json();
  const { records } = data;
  //se crea recordsOptimized tomar solo datos necesarios y acumular los precios presentes
  //mas de una vez en el mismo año
  let recordsOptimized = [];
  records.forEach((commoditie) => {
    //se consulta si el commodity ya esta agregado en recordsOptimized
    const found = recordsOptimized.find(
      (item) => item.name === commoditie.fields.commodity
    );
    //si no esta agregado, se agrega como un item nuevo
    if (!found) {
      recordsOptimized = [
        ...recordsOptimized,
        {
          name: commoditie.fields.commodity,
          price: commoditie.fields.price_index,
        },
      ];
    } else {
      //si ya esta agregado, se actualiza el precio
      //se obtiene el indice donde existe en recordsOptimized
      const idx = recordsOptimized.indexOf(found);
      //se suma el precio en el acumulado
      recordsOptimized[idx].price += commoditie.fields.price_index;
    }
  });
  return recordsOptimized;
}


export const selectList = (start, end) => {
  let list = [];

  start = parseInt(start);
  end = parseInt(end);

  const validateStart =
    start >= parseInt(VALUES.start) && start <= parseInt(VALUES.end);
  const validateEnd =
    end >= parseInt(VALUES.start) && end <= parseInt(VALUES.end);
  const validateOrder = start <= end;

  return async (dispatch) => {
    //se valida que los valores ingresados esten en el rango de años y en orden correcto
    if (validateStart && validateEnd && validateOrder) {
      dispatch({
        type: UPDATE_SEARCH
      });
      let queriesArray = [];
      try {
        //se consulta la api por cada año dentro del rango
        for (let i = start; i <= end; i++) {
          queriesArray.push(getCommodities(i));
        }
        const content = await Promise.all(queriesArray);
        //se itera recordsOptimized para ir generando la lista a guardar
        content.forEach((commodities, i) => {
          commodities.forEach((commoditie) => {
            //se consulta si ya existe el commoditie en list
            const found = list.find((item) => item.name === commoditie.name);
            //si no existe, se agrega como uno nuevo
            if (!found) {
              list = [
                ...list,
                {
                  name: commoditie.name,
                  listYears: [{ [i]: commoditie.price }],
                },
              ];
            } else {
              //si ya esta agregado, se incluye el nuevo año
              //se obtiene el indice donde existe en list
              const idx = list.indexOf(found);
              //se incluye el nuevo año
              list[idx].listYears = [
                ...list[idx].listYears,
                { [i]: commoditie.price },
              ];
            }
          });
        });
      } catch (e) {
        console.error(e.message);
        dispatch({
          type: SELECT_LIST,
          years: [start, end],
          list: []
        });
        
      }
    }
    dispatch({
      type: SELECT_LIST,
      years: [start, end],
      list
    });
  };
};

