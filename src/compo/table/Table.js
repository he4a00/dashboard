import React, { useEffect } from "react";
import "./Table.css"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/productsSlice";

export default function BasicTable() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <TableContainer className="table" component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell-header">ID</TableCell>
            <TableCell className="tableCell-header" align="right">
              Title
            </TableCell>
            <TableCell className="tableCell-header" align="right">
              Category
            </TableCell>
            <TableCell className="tableCell-header" align="right">
              Status
            </TableCell>
            <TableCell className="tableCell-header" align="right">
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="tableCell">
                {product.id}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {product.title}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {product.category}
              </TableCell>
              <TableCell className={`tableCell-s ${product.status}`} align="right">
                {product.status}
              </TableCell>
              <TableCell className="tableCell" align="right">
                {product.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
