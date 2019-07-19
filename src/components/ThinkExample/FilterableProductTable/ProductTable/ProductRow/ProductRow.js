import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: 'red'}}>{product.name}</span>;

        return (
            <TableRow>
                <TableCell>{name}</TableCell>
                <TableCell>{product.price}</TableCell>
            </TableRow>
        );
    }
}
export default ProductRow;