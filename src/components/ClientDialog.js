import React from 'react';
import Organization from '../api/OrganizationService';
import Member from '../api/MembersService';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { formatDate, filterMembers } from '../utils';

import MemberList from './MemberList';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.common.white
  }
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600
  },
  container: {
    minHeight: 440,
    minWidth: 440,
    padding: '2rem'
  },
  head: {
    backgroundColor: theme.palette.main
  }
}));

function ClientDialog(props) {
  const dialogClasses = useStyles();

  const [client, setClient] = React.useState({});
  const [members, setMembers] = React.useState({});

  React.useEffect(() => {
    if (props.clientId !== null) {
      Promise.all([Organization.getClient(props.clientId), Member.getMembers()])
        .then(function (results) {
          const client = results[0].data;
          setClient({ ...client });
          const filteredMembers = filterMembers(
            props.clientId,
            results[1].data
          );
          setMembers([...filteredMembers]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [props.clientId]);

  return (
    <div>
      <Dialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        scroll="paper"
      >
        <DialogTitle id="customized-dialog-title" onClose={props.handleClose}>
          Client Details
        </DialogTitle>
        <div className={dialogClasses.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h6">{client.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary">Address</Typography>
              <Typography variant="subtitle2">{client.address_1}</Typography>
              <Typography variant="subtitle2">
                {client.city}, {client.state}, {client.zip_code}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary">Account Type</Typography>
              <Typography variant="subtitle2">
                {client.is_public ? 'Public' : 'Private'}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary">Start Date</Typography>
              <Typography variant="subtitle2">
                {formatDate(client.created_at)}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography color="textSecondary">Head Count</Typography>
              <Typography variant="subtitle2">{client.headcount}</Typography>
            </Grid>
            <Grid item xs={12}>
              <MemberList members={members} />
            </Grid>
          </Grid>
        </div>
      </Dialog>
    </div>
  );
}

export default ClientDialog;
