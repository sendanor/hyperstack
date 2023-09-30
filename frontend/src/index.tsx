// Copyright (c) 2022-2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { HelmetProvider } from "react-helmet-async";
import { HgReact } from "./fi/hg/frontend/HgReact";
import { HgReactContext } from "./fi/hg/frontend/HgReactContext";
import { HyperApp } from './fi/sendanor/hyperapp/components/apps/HyperApp';
import { HgFrontend } from "./fi/hg/frontend/HgFrontend";
import { HyperArticle } from "./fi/sendanor/hyperapp/components/article/HyperArticle";
import './fi/sendanor/hyperapp/styles/hyperapp-index.scss';

const PUBLIC_URL = process.env.PUBLIC_URL ?? 'http://localhost:3000'
const REACT_APP_LANGUAGE = process.env.REACT_APP_LANGUAGE ?? 'en'

const INDEX_ROUTE = '/';
const ANY_ROUTE = '*';

HgFrontend.initialize();
HgReact.initialize(
    <HelmetProvider>
        <HgReactContext>
            <HyperApp
                publicUrl={PUBLIC_URL}
                language={REACT_APP_LANGUAGE}
                routeList={[
                    {
                        path: INDEX_ROUTE,
                        view: [
                            <HyperArticle><p>hello world</p></HyperArticle>
                        ]
                    },
                    {
                        path: ANY_ROUTE,
                        redirect: INDEX_ROUTE
                    },
                ]}
            />
        </HgReactContext>
    </HelmetProvider>
);
