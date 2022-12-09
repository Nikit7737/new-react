import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TextField from "@material-ui/core/TextField";
import { sanitize } from 'dompurify';
import PulseLoader from "react-spinners/PulseLoader";
import axios from "axios";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

}))

// function createData(name, username, email, phone, website) {
//     return { name, username, email, phone, website };
//    }

//    const rows = [];

export default function DynamicTable() {
  const classes = useStyles()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsperpage, setRowPerPage] = useState(5);
  const [filter, setFilter] = useState([]);
  const [orderDirection, setOrderDirection] = React.useState('asc')
  const [valueToOrderBy, setvalueToOrderBy] = React.useState("title,username, slug,content, status")






  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)


    }, 2000)








    axios
      .get("https://testing.timestint.com/tsapi/v1/blog/category/")
      .then((res) => {
        setData(res.data.results);
        setFilter(res.data.results);

        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  






  // for fillter
  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => {
      return row.title
        .toString()
        .toLowerCase()
        .includes(searchedVal.toString().toLowerCase());
    });
    if (searchedVal.length < 1) {
      setFilter(data);
    } else {
      setFilter(filteredRows);
    }
  };

  // for pagination
  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  };


  const onChangeRowsPerPage = (event) => {
    setRowPerPage(event.target.value)
  };



  // for sortabel

  const handleRequestSort = (event, property) => {
    const isAscending = (valueToOrderBy === property && orderDirection === 'asc')
    setvalueToOrderBy(property)
    setOrderDirection(isAscending ? 'desc' : 'asc')
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }
  const sortedRowInformation = (rowArray, Comparator) => {
    const stabilizedRowArray = rowArray.map((e1, index) => [e1, index])
    stabilizedRowArray.sort((a, b) => {
      const order = Comparator(a[0], b[0])
      if (order !== 0) return order
      return a[1] - b[1]
    })
    return stabilizedRowArray.map((el) => el[0])
  }

  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy)
  }


  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1

    }
    if (b[orderBy] > a[orderBy]) {
      return 1
    }
    return 0
  }











  return (

    <>
      {
        loading ?
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open

          >
            <CircularProgress color="inherit" />
          </Backdrop>

          :
          <TableContainer align="right" component={Paper}>

            <TextField onChange={(e) => requestSearch(e.target.value)} placeholder="search" className="mt-4 me-4 mb-2" />



            <Table aria-label="simple table" stickyHeader>


              <TableHead  >
                <TableRow className="bg-primary">

                  {/* <TableCell className="  bg-dark text-light"><TableSortLabel className=" text-center bg-dark text-light" active={valueToOrderBy === "name"} direction={valueToOrderBy === "name" ? orderDirection : 'asc'} onClick={createSortHandler("name")}>id</TableSortLabel></TableCell> */}
                  <TableCell className=" mx-2 bg-dark text-light"><TableSortLabel className=" ms-2 bg-dark text-light" active={valueToOrderBy === "title"} direction={valueToOrderBy === "title" ? orderDirection : 'asc'} onClick={createSortHandler("title")}>title </TableSortLabel></TableCell>
                  <TableCell className="mx-2 bg-dark text-light"><TableSortLabel className=" text-center bg-dark text-light" active={valueToOrderBy === "slug"} direction={valueToOrderBy === "slug" ? orderDirection : 'asc'} onClick={createSortHandler("slug")} >slug</TableSortLabel></TableCell>
                  <TableCell className="text-center bg-dark text-light"><TableSortLabel className=" text-center bg-dark text-light" active={valueToOrderBy === "content"} direction={valueToOrderBy === "content" ? orderDirection : 'asc'} onClick={createSortHandler("content")} >content</TableSortLabel></TableCell>
                  <TableCell className="text-center bg-dark text-light"><TableSortLabel className=" text-center bg-dark text-light" active={valueToOrderBy === "keyword"} direction={valueToOrderBy === "keyword" ? orderDirection : 'asc'} onClick={createSortHandler("keyword")} >keyword</TableSortLabel></TableCell>
                  <TableCell className="text-center bg-dark text-light"><TableSortLabel className=" text-center bg-dark text-light" active={valueToOrderBy === "status"} direction={valueToOrderBy === "status" ? orderDirection : 'asc'} onClick={createSortHandler("status")} >status</TableSortLabel></TableCell>

                </TableRow>
              </TableHead>
              <TableBody>
                {(sortedRowInformation(filter, getComparator(orderDirection, valueToOrderBy))).slice(page * rowsperpage, page * rowsperpage + rowsperpage).map((row) => (
                  // (sortedRowInformation(data, getComparator(orderDirection, valueToOrderBy)))
                  <TableRow key={row.id}>
                    {/* <TableCell className="mx-2">{row.id}</TableCell> */}
                    <TableCell component="th" scope="row" className="text(sortedRowInformation(data, getComparator(orderDirection, valueToOrderBy)))-center">
                      {row.title}
                    </TableCell>
                    <TableCell className="mx-2">{row.slug}</TableCell>
                    <TableCell align="right" className="text-center" dangerouslySetInnerHTML={{ __html: sanitize(row.content) }} />
                    <TableCell align="right" className="text-center">{row.keyword}</TableCell>
                    <TableCell align="right" className="text-center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15, 25]}
              count={data.length}
              rowsPerPage={rowsperpage}
              page={page}
              onChangePage={onChangePage}
              onChangeRowsPerPage={onChangeRowsPerPage}
            />
          </TableContainer>
      }
    </>
  );
}