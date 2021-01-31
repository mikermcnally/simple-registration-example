export default interface Column<Model> {
  header: JSX.Element | string;
  row: (model: Model, key: number) => JSX.Element;
}
