import React from 'react';
import { Switch,Route } from 'react-router-dom';

import News from './News';
import Converter from './Converter';
import Home from './Home'
import Counter from './Counter';
import Form from './Form';
import HookConcept from './HookConcept'

const Main = ()=>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/home" component={Home} />
        <Route  path="/converter" component={Converter} />
        <Route path="/news" component={News} />
        <Route path="/counter" component={Counter} />
        <Route path="/form" component={Form} />
        <Route  path="/hook" component={HookConcept} />
    </Switch>
)

export default Main;