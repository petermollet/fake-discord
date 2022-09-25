import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { addDoc, collection } from 'firebase/firestore';
import { Field, Form, Formik } from 'formik';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

import { auth, db } from '../../../../firebase';

const validationSchema = Yup.object({
    message: Yup.string().required('').trim(),
});

const InputBar = ({ disabled }) => {
    const channelSelected = useSelector((state) => state.channel.channelSelected);
    const [user] = useAuthState(auth);

    const handleSubmit = (values, { resetForm }) => {
        values.message = values.message.trim();
        addDoc(collection(db, 'messages'), {
            content: values.message,
            date: new Date().toString(),
            channelId: channelSelected.id,
            avatar: user.photoURL,
            username: user.displayName,
        });
        resetForm();
    };

    return (
        <div className="h-[67px] w-full px-4 pb-6">
            <div className="flex h-full items-center rounded-md bg-zinc-600 px-2 py-1">
                <button
                    className="text-gray-300 disabled:cursor-not-allowed disabled:text-gray-300 hover:text-gray-100"
                    disabled={disabled}
                >
                    <PlusCircleIcon className="h-6 " />
                </button>

                <Formik
                    initialValues={{ message: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className=" w-full">
                        <Field
                            name="message"
                            type="text"
                            className="ml-3 w-full border-none bg-transparent text-gray-300 placeholder-zinc-500 outline-none
                            disabled:cursor-not-allowed"
                            placeholder={`Message${
                                channelSelected?.name ? `#${channelSelected.name}` : ''
                            }`}
                            disabled={disabled}
                        />
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default InputBar;
