import React, { useState } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect, useDispatch } from "react-redux";
import moment from "moment";
import { Button } from "@material-ui/core";
import { setAllPosts } from "../../Redux/Action";
import Card from "@material-ui/core/Card";
import EmptyCoffee from "../../Assets/Coffee.json";
import Lottie from "react-lottie";

import { Link } from "react-router-dom";
import ViewPost from "./ViewPost";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const AllPosts = ({ allPosts }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectedPost, setSelectedPost] = useState(null);

  const handleDeletePost = (postId) => {
    let filteredPost = allPosts.filter((post) => post.id !== postId);
    dispatch(setAllPosts(filteredPost));
  };

  return allPosts.length ? (
    selectedPost? <div>
      <div className="p-2 bg-white rounded-lg" >
        <Button variant="contained" color="primary" onClick={()=>setSelectedPost(null)}  >Back</Button>
      
      </div>
      <ViewPost post={selectedPost} />
    </div> :
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{""}</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="center">Created at</StyledTableCell>
            <StyledTableCell align="center">View</StyledTableCell>
            <StyledTableCell align="right">Delete</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allPosts.map((post, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell
                component="th"
                scope="row"
                className="font-weight-bold"
              >
                {i + 1}.
              </StyledTableCell>
              <StyledTableCell align="left">{post.title}</StyledTableCell>
              <StyledTableCell align="center" className="font-13">
                {moment(post.createdAt).format("lll")}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => setSelectedPost(post)}
                >
                  View
                </Button>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Button
                  variant="contained"
                  size="small"
                  color="secondary"
                  onClick={() => handleDeletePost(post.id)}
                >
                  Delete
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Card className="h-100 d-flex align-items-center justify-content-center flex-column">
      <h6 className="text-danger">No posts found!</h6>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: EmptyCoffee,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        height={150}
        width={150}
      />
      <Link className="text-decoration-none" to="/admin/add-post">
        <Button variant="contained" size="small" color="primary">
          Add new post
        </Button>
      </Link>
    </Card>
  );
};

export default connect((state) => ({ allPosts: state.allPosts }))(AllPosts);
