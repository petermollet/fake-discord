import { PlusCircleIcon } from '@heroicons/react/24/solid';
import { Field, Form, Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    message: Yup.string().required('').trim(),
});

const InputBar = () => {
    const channelSelected = useSelector((state) => state.channel.channelSelected);

    const handleSubmit = (values, { resetForm }) => {
        values.message = values.message.trim();
        resetForm();
    };

    return (
        <div className="h-[67px] w-full px-4 pb-6">
            <div className="flex h-full items-center rounded-md bg-zinc-600 px-2 py-1">
                <PlusCircleIcon className="h-6 cursor-pointer text-gray-300 hover:text-gray-100" />
                <Formik
                    initialValues={{ message: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <Form className=" w-full">
                        <Field
                            name="message"
                            type="text"
                            className="ml-3 w-full border-none bg-transparent text-gray-300 placeholder-zinc-500 outline-none"
                            placeholder={`Message #${channelSelected?.name}`}
                        />
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

export default InputBar;
