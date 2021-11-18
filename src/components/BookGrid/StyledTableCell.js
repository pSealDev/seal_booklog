import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'

export  const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: '#3ba395',
        color: theme.palette.common.white,
        fontWeight: 'bold',
        fontSize: 20
    },
    body: {
        fontSize: 18,
    }
}))(TableCell);