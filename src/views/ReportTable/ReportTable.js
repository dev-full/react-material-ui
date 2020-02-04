import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import mockData from './data';
import { TypeBullet, StatusBullet } from '../../components';
import './ReportTable.css';

const useStyles = makeStyles(theme => ({
  root: {
  },
  tblHeader: {
    height: 20
  },
  content: {
    padding: 0
  },
  inner: {
    minWidth: 800
  },
  statusContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  status: {
  },
  actions: {
    justifyContent: 'flex-end'
  },
  underlined: {
    textDecoration: 'underline'
  },
}));

const ReportTable = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const [orders] = useState(mockData);
  const [curRow, setCurRow] = useState(-1);

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead className={classes.tblHeader}>
                <TableRow>
                  <TableCell>Type</TableCell>
                  <TableCell>ReporterID</TableCell>
                  <TableCell>Post reported</TableCell>
                  <TableCell>Date Reported</TableCell>
                  <TableCell>Status</TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                {orders.map(order => (
                  <TableRow
                    hover
                    key={order.id}
                    onClick={()=>setCurRow(order.id)}
                    selected={order.id == curRow}
                  >
                    <TableCell>
                      <div className={classes.statusContainer}>
                        <TypeBullet
                          className={classes.status}
                          color={order.type}
                          size="sm"
                        />
                      </div>
                    </TableCell>
                    <TableCell>{order.reporterId}</TableCell>
                    <TableCell><a className="normal_anchor" href={order.post_url}>{order.postReported}</a></TableCell>
                    <TableCell>
                      {
                      moment(order.reportedDate, "YYYY-MM-DD hh:mm:ss").isSame(moment(), "day")?
                      moment(order.reportedDate, "YYYY-MM-DD hh:mm:ss").format("h.mA ") + 'today':
                      moment(order.reportedDate, "YYYY-MM-DD hh:mm:ss").format("MMM D, YYYY")
                      }
                    </TableCell>
                    <TableCell>
                    <div className={classes.statusContainer}>
                        <StatusBullet
                          className={classes.status}
                          color={order.status}
                          size="sm"
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <Divider />
    </Card>
  );
};

ReportTable.propTypes = {
  className: PropTypes.string
};

export default ReportTable;
