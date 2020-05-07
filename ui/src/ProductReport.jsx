import React from 'react';
import { Route } from 'react-router-dom';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';

class ProductReport extends React.Component {
      constructor(props) {
        super(props);
        const stats = store.initialData ? store.initialData.productCounts : null;
        delete store.initialData;
        this.state = { stats };
        
      }
      
      componentDidMount() {
        const { stats } = this.state;
     
        if (stats == null) this.loadData();
      }
    
      async loadData() {

        const query = `query {
            productCounts {
              productName
            }
          }`;

        const data = await graphQLFetch(query);
        if (data) {
          this.setState({ stats: data.productCounts });
        }
        
      }

      render() {
        const { stats } = this.state;
        if (stats == null) return null;

        const statRows = <p>Showing {stats.length} available products</p>      
        
        return (
            <div>
                {statRows}
            </div>
            
        );
    }
}

export default ProductReport;