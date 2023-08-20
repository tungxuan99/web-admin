import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.scss'

export const TableRequirement = ({
    tabledata
}) => {
    return (
        <TableContainer component={Paper}>
            <Table
                sx={{ minWidth: 650 }}
                aria-label="table requirement"
                className='table-requirement'>
                <TableHead>
                    <TableRow className='table-requirement__header'>
                        <TableCell align='left'>Type</TableCell>
                        <TableCell align='center' width={"40px"}>Edit</TableCell>
                        <TableCell align='center' width={"40px"}>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table-requirement__body'>
                    {tabledata.map((row, index) => (
                        <TableRow
                            key={index}
                            sx={{ '&:last-child td, &:last-child td': { border: 0 } }}
                        >
                            <TableCell align='left'>
                                {row?.type}
                            </TableCell>
                            <TableCell align='center'>
                                {row?.edit}
                            </TableCell>
                            <TableCell align='center'>
                                {row?.delete}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
