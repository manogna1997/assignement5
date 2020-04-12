import React from 'react';
import ReactDOM from 'react-dom';
import Inventory from './Inventory.jsx'
import EditProduct from './inventory/route/EditProduct.jsx'
import DisplayImage from './inventory/route/DisplayImage.jsx'
import '../css/app.css'
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Switch, Link, useParams } from "react-router-dom";

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:3000/graphql',
    })
});
/**
 * render to index.html page
 */
ReactDOM.render(

    <BrowserRouter>
        <ApolloProvider client={client}>
            <Switch>
                <Route path="/" exact component={Inventory} />
                <Route path="/edit/:id" exact component={EditProduct} />
                <Route path="/image/:id" exact component={DisplayImage} />
            </Switch>
        </ApolloProvider>
    </BrowserRouter>
    , document.getElementById('root'));
