import React from 'react';
import Organization from '../api/OrganizationService';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import ClientTable from '../components/ClientTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    marginTop: theme.spacing(8),
    padding: theme.spacing(3),
    display: 'flex',
    justifyContent: 'center'
  }
}));

const Admin = (props) => {
  const classes = useStyles();
  const [clients, setClient] = React.useState([]);

  React.useEffect(() => {
    Organization.getClients()
      .then((res) => {
        setClient([...res.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Admin - Client Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <ClientTable clients={clients} />
      </main>
    </div>
  );
};

export default Admin;
