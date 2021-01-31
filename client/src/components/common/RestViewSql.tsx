import React, { useState, useEffect, useCallback } from "react";
import { Grid } from "@material-ui/core";
import DataTable from "./DataTable";
import Column from "./Column";
import { useApi } from "../../hooks/use_api";
import Fetcher from "../../util/fetcher";

interface RestViewSqlProps<Model> {
  endpoint: string;
  columns: Column<Model>[];
}

export default function RestViewSql<Model>({
  columns,
  endpoint,
}: RestViewSqlProps<Model>) {
  const { fetcher } = useApi();
  const url = `${endpoint}`;
  const [models, setModels] = useState<Model[] | null>(null);
  const getModels = useCallback(
    (fetcher: Fetcher) => {
      fetcher
        .get(url)
        .then((response) => {
          setModels(response);
        })
        .catch(console.log);
    },
    [url]
  );

  useEffect(() => {
    getModels(fetcher);
  }, [fetcher, getModels]);

  return (
    <React.Fragment>
      <Grid item>
        <DataTable<Model> columns={columns} models={models} />
      </Grid>
    </React.Fragment>
  );
}
