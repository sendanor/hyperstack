// Copyright (c) 2022-2023. Heusala Group Oy <info@heusalagroup.fi>. All rights reserved.

import { HelmetProvider } from "react-helmet-async";
import { HgFrontend } from "./fi/hg/frontend/HgFrontend";
import { HgReact } from "./fi/hg/frontend/HgReact";
import { HgReactContext } from "./fi/hg/frontend/HgReactContext";
import { Hyper } from "./fi/sendanor/hyperapp/components/apps/Hyper";
import { HyperRenderer } from "./fi/sendanor/hyperapp/renderers/HyperRenderer";
import { HyperRendererImpl } from "./fi/sendanor/hyperapp/renderers/HyperRendererImpl";
import { HyperDTO } from "./fi/sendanor/hyperstack/dto/HyperDTO";
import { createCompleteOrderApp } from "./fi/sendanor/hyperstack/samples/order/CompleteOrderApp";
import './fi/sendanor/hyperapp/styles/hyperapp-index.scss';

const PUBLIC_URL : string = process.env.PUBLIC_URL ?? 'http://localhost:3000';
const REACT_APP_LANGUAGE : string = process.env.REACT_APP_LANGUAGE ?? 'en';

const MY_APP_NAME : string = 'OrderApp';

const dto : HyperDTO = createCompleteOrderApp(
    MY_APP_NAME,
    PUBLIC_URL,
    REACT_APP_LANGUAGE
);

const hyperRenderer : HyperRenderer = HyperRendererImpl.create();

HgFrontend.initialize();
HgReact.initialize(
    <HelmetProvider>
        <HgReactContext>
            <Hyper
                app={MY_APP_NAME}
                definitions={dto}
                renderer={hyperRenderer}
            />
        </HgReactContext>
    </HelmetProvider>
);
