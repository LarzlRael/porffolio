import React, { useState, createContext } from 'react'
import { IntlProvider } from 'react-intl';

import MessagesEng from '../locales/en-Us.json';
import MessagesES from '../locales/es-Es.json';

type AuthContexsProps = {
    mensajes: any;
    locale: string;
    changeLan: (lan: string) => void;
}
const LangContext = createContext({} as AuthContexsProps);


const LangProvider = ({ children }: any) => {

    const [mensajes, setmensajes] = useState(MessagesEng);
    const [locale, setLocale] = useState('es-ES')

    const changeLan = (lan: string) => {

        switch (lan) {
            case 'en-US':
                setmensajes(MessagesES)
                setLocale('es-ES')
                break;
            case 'es-ES':
                setmensajes(MessagesEng)
                setLocale('en-US')
                break;
            default:
                setmensajes(MessagesEng)
                setLocale('es-ES')
                break;
        }
    }
    return (
        <LangContext.Provider
            value={{
                mensajes,
                locale,
                changeLan
            }}>
            <IntlProvider
                locale={locale}
                messages={mensajes}
                onError={() => null}>

                {children}

            </IntlProvider>
        </LangContext.Provider>
    )
}

export { LangProvider, LangContext }