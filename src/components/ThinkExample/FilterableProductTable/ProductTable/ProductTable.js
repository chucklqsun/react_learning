import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow/index";
import ProductRow from "./ProductRow/index";
import './ProductTable.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {

            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }

            if (product.category !== lastCategory) {
                rows.push(
                    <ProductCategoryRow category={product.category} key={product.category}/>
                );
            }
            rows.push(
                <ProductRow product={product} key={product.name}/>
            );
            lastCategory = product.category;
        });

        if(this.props.products.length === 0){
            if(!this.props.isLoaded){
                rows.push(
                    <TableRow key={1}>
                        <TableCell>Loading...</TableCell>
                    </TableRow>
                )
            } else {
                rows.push(
                    <TableRow key={1}>
                        <TableCell>No results</TableCell>
                    </TableRow>
                )
            }
        }

        return (
            <Table className="product-table">
                <TableHead>
                    <TableRow>
                        <TableCell component="th" scope="row" key={1}>Name</TableCell>
                        <TableCell component="th" scope="row" key={2}>Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows}
                </TableBody>
            </Table>
        );
    }
}

export default ProductTable;