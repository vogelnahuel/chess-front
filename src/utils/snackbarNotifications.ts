import { enqueueSnackbar } from "notistack";

export type ToastMessageType = Record<
  SnackbarTypeEnum,
  { success: string; error: string }
>;

export enum SnackbarTypeEnum {
  LIST_ACTION_SHARE = "LIST_ACTION_SHARE",
  LIST_ACTION_RENAME = "LIST_ACTION_RENAME",
  LIST_ACTION_CLONE = "LIST_ACTION_CLONE",
  LIST_ACTION_DELETE = "LIST_ACTION_DELETE",
  LIST_ACTION_EDIT = "LIST_ACTION_EDIT",
  LIST_ACTION_CREATE = "LIST_ACTION_CREATE",
  SELECT_SKU_LIST = "SELECT_SKU_LIST",
  MODAL_ROW_CONFIG = "MODAL_ROW_CONFIG",
  COPY_TO_CLIPBOARD = "COPY_TO_CLIPBOARD",
  DYNAMIC_DISTRIBUTION_DATE_END_ERR = "DYNAMIC_DISTRIBUTION_DATE_END_ERR",
  DYNAMIC_DISTRIBUTION_WEEK_ERR = "DYNAMIC_DISTRIBUTION_WEEK_ERR",
  DYNAMIC_DISTRIBUTION_MONTH_ERR = "DYNAMIC_DISTRIBUTION_MONTH_ERR",
  PUBLISH_DISTRIBUTION = "PUBLISH_DISTRIBUTION",
  DOWNLOAD_TEMPLATE = "DOWNLOAD_TEMPLATE",
  SAVE_EXCEL = "SAVE_EXCEL",
  CLONE_TO_PRIVATE = "CLONE_TO_PRIVATE",
  PUBLISH_BRANCH = "PUBLISH_BRANCH",
  PROCESS_DATE_BY_SKUS_SALES_IDS_ERR = "PROCESS_DATE_BY_SKUS_SALES_IDS_ERR",
  SERIE_DELETE_BY_ID = "SERIE_DELETE_BY_ID",
  SERIE_UPDATE_BY_ID = "SERIE_UPDATE_BY_ID",
  SERIE_CREATE = "SERIE_CREATE",
  FORECAST_DATE_END_ERR = "FORECAST_DATE_END_ERR",
  FORECAST_DATE_INIT_ERR = "FORECAST_DATE_INIT_ERR",
  FORECAST_DASH_STYLE_ERR = "FORECAST_DASH_STYLE_ERR",
  FORECAST_MAX_SERIES_SELECTED = "FORECAST_MAX_SERIES_SELECTED",
  FORECAST_MAX_SKU_SELECTED = "FORECAST_MAX_SKU_SELECTED",
  FORECAST_MAX_GROUP_SKU_SELECTED = "FORECAST_MAX_GROUP_SKU_SELECTED",
  FORECAST_MAX_DIMENSION_ONE_SELECTED = "FORECAST_MAX_DIMENSION_ONE_SELECTED",
  FORECAST_SKU_HASNT_PROCESS_DATE = "FORECAST_SKU_HASNT_PROCESS_DATE",
  FORECAST_GROUP_SKU_HASNT_PROCESS_DATE = "FORECAST_GROUP_SKU_HASNT_PROCESS_DATE",
  FORECAST_DIMENSION_ONE_NON_SELECTED = "FORECAST_DIMENSION_ONE_NON_SELECTED",
}

export const {
  LIST_ACTION_SHARE,
  LIST_ACTION_RENAME,
  LIST_ACTION_CLONE,
  LIST_ACTION_DELETE,
  LIST_ACTION_EDIT,
  LIST_ACTION_CREATE,
  SELECT_SKU_LIST,
  MODAL_ROW_CONFIG,
  COPY_TO_CLIPBOARD,
  DYNAMIC_DISTRIBUTION_DATE_END_ERR,
  DYNAMIC_DISTRIBUTION_WEEK_ERR,
  DYNAMIC_DISTRIBUTION_MONTH_ERR,
  PUBLISH_DISTRIBUTION,
  DOWNLOAD_TEMPLATE,
  SAVE_EXCEL,
  CLONE_TO_PRIVATE,
  PUBLISH_BRANCH,
  PROCESS_DATE_BY_SKUS_SALES_IDS_ERR,
  SERIE_DELETE_BY_ID,
  SERIE_UPDATE_BY_ID,
  SERIE_CREATE,
  FORECAST_DATE_END_ERR,
  FORECAST_DATE_INIT_ERR,
  FORECAST_DASH_STYLE_ERR,
  FORECAST_MAX_SERIES_SELECTED,
  FORECAST_MAX_SKU_SELECTED,
  FORECAST_MAX_GROUP_SKU_SELECTED,
  FORECAST_MAX_DIMENSION_ONE_SELECTED,
  FORECAST_SKU_HASNT_PROCESS_DATE,
  FORECAST_GROUP_SKU_HASNT_PROCESS_DATE,
  FORECAST_DIMENSION_ONE_NON_SELECTED,
} = SnackbarTypeEnum;

const toastMessage: ToastMessageType = {
  [LIST_ACTION_SHARE]: { success: "", error: "" },
  [LIST_ACTION_RENAME]: {
    success: "Lista renombrada correctamente",
    error: "La lista no ha podido ser renombrada, intenta nuevamente",
  },
  [LIST_ACTION_EDIT]: {
    success: "Lista editada correctamente",
    error: "La lista no ha podido ser editada, intenta nuevamente",
  },
  [LIST_ACTION_CLONE]: {
    success: "Lista clonada correctamente",
    error: "La lista no ha podido ser clonada, intenta nuevamente",
  },
  [LIST_ACTION_DELETE]: {
    success: "Lista eliminada correctamente",
    error: "La lista no ha podido ser eliminada, intenta nuevamente",
  },
  [LIST_ACTION_CREATE]: {
    success: "Lista creada correctamente",
    error: "La lista no ha podido ser creada, intenta nuevamente",
  },
  [MODAL_ROW_CONFIG]: {
    success: "Su configuración de filas se ha aplicado correctamente",
    error:
      "Su configuración de filas no se ha aplicado correctamente, intenta nuevamente",
  },
  [COPY_TO_CLIPBOARD]: {
    success: "Elemento copiado con éxito",
    error: "La acción no se realizó con éxito, intenta nuevamente",
  },
  [SELECT_SKU_LIST]: {
    success: "Lista seleccionada correctamente",
    error: "Debes seleccionar una lista de SKU",
  },
  [DYNAMIC_DISTRIBUTION_DATE_END_ERR]: {
    success: "",
    error: 'Esta fecha debe ser posterior a la "Fecha de Inicio"',
  },
  [DYNAMIC_DISTRIBUTION_WEEK_ERR]: {
    success: "",
    error: "No puedes distribuir en semanas anteriores a la actual.",
  },
  [DYNAMIC_DISTRIBUTION_MONTH_ERR]: {
    success: "",
    error: "No puedes distribuir en meses anteriores al actual.",
  },
  [PUBLISH_DISTRIBUTION]: {
    success: "La distribución dinámica se ha publicado correctamente",
    error:
      "La distribución dinámica no se ha podido realizar, intenta nuevamente",
  },
  [DOWNLOAD_TEMPLATE]: {
    success: "La descarga de la plantilla se ha realizado correctamente",
    error:
      "La descarga de la plantilla no se ha podido realizar, intenta nuevamente",
  },
  [SAVE_EXCEL]: {
    success: "La importación masiva se ha publicado correctamente",
    error: "La importación masiva no se ha podido realizar, intenta nuevamente",
  },
  [CLONE_TO_PRIVATE]: {
    success: "Skus clonados correctamente a rama privada",
    error: "Los Skus no han podido ser clonados, intenta nuevamente",
  },
  [PUBLISH_BRANCH]: {
    success: "La publicación de tu rama se realizo correctamente.",
    error: "Hubo un error en la publicación de tu rama, intenta nuevamente.",
  },
  [PROCESS_DATE_BY_SKUS_SALES_IDS_ERR]: {
    success: "",
    error:
      'No se encontraron "Fechas de Procesamiento" para ese periodo de referencia.',
  },
  [SERIE_DELETE_BY_ID]: {
    success: "Serie eliminada correctamente",
    error: "La serie no ha podido ser eliminada, intenta nuevamente",
  },
  [SERIE_UPDATE_BY_ID]: {
    success: "Serie actualizada correctamente",
    error: "La serie no ha podido ser actualizada, intenta nuevamente",
  },
  [SERIE_CREATE]: {
    success: "Serie creada correctamente",
    error: "La serie no ha podido ser creada, intenta nuevamente",
  },
  [FORECAST_DATE_END_ERR]: {
    success: "",
    error: 'Esta fecha debe ser posterior a la "Fecha de Inicio"',
  },
  [FORECAST_DATE_INIT_ERR]: {
    success: "",
    error: 'Esta fecha debe ser anterior a la "Fecha de Fin"',
  },
  [FORECAST_DASH_STYLE_ERR]: {
    success: "",
    error:
      "Este estilo dash no puede ser aplicado a una serie diferente a forecast",
  },
  [FORECAST_MAX_SERIES_SELECTED]: {
    success: "",
    error: "No puedes seleccionar más de 20 series en total",
  },
  [FORECAST_MAX_SKU_SELECTED]: {
    success: "",
    error: "No puedes seleccionar más de 20 SKU en total",
  },
  [FORECAST_MAX_GROUP_SKU_SELECTED]: {
    success: "",
    error: "No puedes seleccionar más de 20 Grupos de SKU en total",
  },
  [FORECAST_MAX_DIMENSION_ONE_SELECTED]: {
    success: "",
    error: "No puedes seleccionar más de 20 Centros de Distribución en total",
  },
  [FORECAST_SKU_HASNT_PROCESS_DATE]: {
    success: "",
    error: "Tu selección de SKU no tiene una fecha de procesamiento",
  },
  [FORECAST_GROUP_SKU_HASNT_PROCESS_DATE]: {
    success: "",
    error: "Tu selección de AGRUPADO no tiene una fecha de procesamiento",
  },
  [FORECAST_DIMENSION_ONE_NON_SELECTED]: {
    success: "",
    error: "Debes seleccionar al menos un Centro de Distribución",
  },
};

export const getEnqueueSnackbar = (
  type: SnackbarTypeEnum,
  variant: "success" | "error" = "success",
  description?: string,
) => {
  enqueueSnackbar(
    `${toastMessage[type][variant]}${description ? " - " + description : ""}`,
    {
      variant,
    },
  );
};
