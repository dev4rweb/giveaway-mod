require('./bootstrap');
import {App} from '@inertiajs/inertia-react'
import React from 'react'
import {Provider} from "react-redux";
import {store} from './reducers'
import {render} from 'react-dom'

const el = document.getElementById('app')

render(
    <Provider store={store}>
        <App
            initialPage={JSON.parse(el.dataset.page)}
            resolveComponent={name => require(`./Pages/${name}`).default}
        />
    </Provider>,
    el
)
