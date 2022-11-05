import React, { useEffect } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/productsSlice";
import "./Datatable.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { Link, useParams } from "react-router-dom";

const columns: GridColDef[] = [
  {
    
    field: "id",
    headerName: "ID",
    width: 70,
    renderCell: (params) => {
      return (
        <div className="cellId">
          <span>{params.row.id}</span>
        </div>
      );
    },
  },
  {
    field: "title",
    headerName: "Title",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cell">
          <img className="cellImg" src={params.row.image} alt=""></img>
          {params.row.title}
        </div>
      );
    },
  },
  {
    field: "category",
    headerName: "Category",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellCategory">
          <span>{params.row.category}</span>
        </div>
      );
    },
  },
  {
    field: "price",
    headerName: "Price",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellPrice">
          <span>{params.row.price}</span>
        </div>
      );
    },
  },

  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className={`cellStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 330,
    renderCell: (params) => {
      return (
        <div className="cellActions">
          {/* <button className="btn">Edit</button>
          <button className="btn">View</button> */}
          <Link to={`/users/${params.row.id}`}>
            <RemoveRedEyeIcon className="cellIcon" />
          </Link>
          <EditIcon className="cellIcon" />
          <DeleteOutlineIcon className="cellIcon" />
        </div>
      );
    },
  },
];

export default function DataTable() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { userID } = useParams();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div className="datatable" style={{ height: 900, width: "100%" }}>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={15}
        rowsPerPageOptions={[15]}
        checkboxSelection
      />
    </div>
  );
}
