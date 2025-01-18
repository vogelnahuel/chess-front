export type TypeWithKey<T> = { [key: string]: T };
export type TypeID<T> = { id: T };

export type KeysWithValsOfType<T, V> = keyof {
  [P in keyof T as T[P] extends V ? P : never]: P;
};

export type GenericPick<T, K extends keyof T> = Pick<T, K>;

export enum TypeSerie {
  Column = "column",
  Spline = "spline",
}

export enum DashStyle {
  Solid = "Solid",
  Dash = "Dash",
}

export enum FileExtensions {
  xlsx = "XLSX",
  csv = "CSV",
}
