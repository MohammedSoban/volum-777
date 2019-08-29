import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

const styles = theme => ({
  card: {
    minWidth: 275,
    margin: "20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Category extends Component {
  render() {
    const { classes, category, getCategories } = this.props;
    return (
      <Card
        className={classes.card}
        onClick={() => {
          getCategories({ pId: category.id });
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="h2"
            style={{ textTransform: "capitalize" }}
          >
            {category.name}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(Category);
