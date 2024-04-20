import React, { useState, useEffect } from 'react';
import { ActivityController } from '../controllers/ActivityController';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    borderRadius: 10,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    marginTop: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    borderRadius: 10,
    padding: '10px 20px',
    color: '#333',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    },
  },
});

const ActivityView = () => {
  const classes = useStyles();
  const [activity, setActivity] = useState(null);

  const getNewActivity = async () => {
    const newActivity = await ActivityController.getActivity();
    setActivity(newActivity);
  };

  useEffect(() => {
    getNewActivity();
  }, []);

  return (
    <Card className={classes.root}>
      <CardContent>
        {activity ? (
          <div>
            <Typography variant="h4" component="h2" gutterBottom>
              {activity.activity}
            </Typography>
            
            <Typography variant="subtitle1" color="textSecondary">
              Type: {activity.type}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Participants: {activity.participants}
            </Typography>
           
            {activity.link && (
              <Typography variant="subtitle1">
                Link:{' '}
                <a href={activity.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                </a>
              </Typography>
            )}
          </div>
        ) : (
          <Typography variant="h5">Loading...</Typography>
        )}
        <Button className={classes.button} onClick={getNewActivity}>
          Get New Activity
        </Button>
      </CardContent>
    </Card>
  );
};

export default ActivityView;