
import { useIntl, FormattedMessage } from 'react-intl';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { useForm } from '../hooks/useForm';
import { serverAPI } from '../api/server';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { RefreshCircleOutline } from 'react-ionicons';

import styled from 'styled-components';


export const FormContact = () => {

    const intl = useIntl();
    const { themeColors, darkTheme } = useContext(ThemeContext);

    const { email, name, message, onChange } = useForm({
        email: '',
        name: '',
        message: '',
    });
    const [sending, setSending] = useState(false);

    const onHandleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            setSending(true);
            const { status } = await serverAPI.post('/email', {
                name,
                from: email,
                message
            });

            setSending(false);

            if (status === 200) {

                return toast.success(intl.formatMessage({ id: 'app.messageSentSuccess' }), {
                    position: 'top-right',
                    autoClose: 3500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    closeButton: false,
                });
            }
        } catch (error) {
            setSending(false);

            return toast.error(intl.formatMessage({ id: 'app.messageSentError' }), {
                position: 'top-right',
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                closeButton: false,
            });

        }

    }

    return (
        <div className="contact" id="contact">
            <h2
                style={{
                    color: themeColors.primaryColor
                }}
            >
                <FormattedMessage
                    id="app.contact"
                />
            </h2>
            <form onSubmit={onHandleSubmit}>
                <div className="flex">
                    <input
                        type="text"
                        placeholder={intl.formatMessage({ id: 'app.name' })}
                        onChange={({ target }) => onChange(target.value, 'name')}
                        value={name}
                    />
                    <input
                        type="email"
                        placeholder={intl.formatMessage({ id: 'app.email' })}
                        onChange={({ target }) => onChange(target.value, 'email')}
                        value={email}
                    />
                </div>
                <textarea
                    className="area"
                    placeholder={intl.formatMessage({ id: 'app.message' })}
                    onChange={({ target }) => onChange(target.value, 'message')}
                    value={message}
                >
                </textarea>
                <div className="button-container">
                    <button className={`buttonSend pointer ${darkTheme ? 'light' : 'dark'}`}
                        disabled={sending}
                    >
                        {!sending ? <FormattedMessage
                            id="app.send"
                        /> : <RefreshCircleOutline
                            width="80px"
                            height="30px"
                            color="white"
                            rotate
                        />}
                    </button>

                    <ToastContainer />
                </div>
            </form>
        </div>
    )
}


