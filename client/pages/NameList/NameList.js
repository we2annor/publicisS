import React from "react";
import Link from "next/link";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { gql, useQuery } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const NameList = ({ props }) => {
  const { loading, error, data } = useQuery(NAME_LIST_QUERY);
  const classes = useStyles();

  console.log("namelist", data, "loading", loading, "error", props);

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error Occured {error}</div>;

  return (
    <div className={classes.root}>
      <h2>Person Cards </h2> <Link href='/about'>About</Link>
      {data.cards.map((card, index) => (
        <Grid
          key={index}
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={2}
        >
          <Grid item md={6} xs={4}>
            <Paper className={classes.paper}>
              <Typography>
                <h3>Card</h3>
              </Typography>
              <Typography>Name: {card.name}</Typography>
              <Typography>Email: {card.email}</Typography>
              <Typography>
                Address: {card.address.streetA} {card.address.streetB}
                {card.address.streetC} {card.address.streetD}
                <Typography>City: {card.address.city} </Typography>
                <Typography>Country: {card.address.country}</Typography>
                <Typography>ZipCode: {card.address.zipcode}</Typography>
              </Typography>
              <Typography>Phone:{card.phone}</Typography>
            </Paper>
          </Grid>
        </Grid>
      ))}
      <button>Load more</button>
    </div>
  );
};

export default NameList;

export const NAME_LIST_QUERY = gql`
  query cards {
    cards {
      name
      email
      phone
      address {
        streetA
        streetB
        streetC
        streetD
        city
        country
        zipcode
      }
    }
  }
`;
