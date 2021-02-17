import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { gql, useQuery } from "@apollo/client";
import Navigation from "../../components/Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const NameList = () => {
  const { loading, error, data, fetchMore } = useQuery(NAME_LIST_QUERY);

  const classes = useStyles();

  if (loading) return <div>Loading ...</div>;
  if (error) return <div>Error Occured {error}</div>;

  return (
    <div className={classes.root}>
      <Navigation />
      <h2>Person Cards </h2>
      {data.cards.map((card, index) => (
        <Grid
          key={index}
          container
          direction='row'
          justify='center'
          alignItems='center'
          spacing={4}
        >
          <Grid item md={6} xs={4}>
            <Paper className={classes.paper}>
              <Typography>
                <span>
                  <strong>Card {index + 1}</strong>
                </span>
              </Typography>
              <Typography>Name: {card.name}</Typography>
              <Typography>Email: {card.email}</Typography>
              <Typography>
                Address: {card.address.streetA} {card.address.streetB}
                {card.address.streetC} {card.address.streetD}
              </Typography>
              <Typography>City: {card.address.city} </Typography>
              <Typography>Country: {card.address.country}</Typography>
              <Typography>ZipCode: {card.address.zipcode}</Typography>

              <Typography>Phone:{card.phone}</Typography>
            </Paper>
          </Grid>
        </Grid>
      ))}
      <button
        onClick={() => {
          return fetchMore({
            updateQuery: (previous, { fetchMoreResult }) => {
              if (!fetchMoreResult) return previous;
              return {
                cards: [...previous.cards, ...fetchMoreResult.cards],
              };
            },
          });
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default NameList;

export const NAME_LIST_QUERY = gql`
  query Cards {
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
