import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import { TableCell } from "@material-ui/core";
import Column from "./Column";

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

interface DataTableProps<Model> {
  columns: Column<Model>[];
  models: Model[] | null;
}

export default function DataTable<Model>({
  columns,
  models,
}: DataTableProps<Model>) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map(({ header }, index) => (
                <TableCell key={index}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {models ? (
              models.map((model, index) => (
                <StyledTableRow key={index}>
                  {columns.map(({ row }, index) => row(model, index))}
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow key="no_models">
                <TableCell colSpan={columns.length} align="center">
                  <CircularProgress />
                </TableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
