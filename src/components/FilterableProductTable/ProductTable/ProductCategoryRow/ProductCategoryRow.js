import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

class ProductCategoryRow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        const category = this.props.category;
        return (
            <TableRow>
                <TableCell colSpan={2} align="center">
                    <Typography component="div" style={{ fontWeight: 'bold'}}>
                        {category}
                    </Typography>
                </TableCell>
            </TableRow>
        );
    }
}
export default ProductCategoryRow;