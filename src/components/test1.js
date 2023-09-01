import { Field, FieldArray, Formik, Form } from "formik";

const test1 = () => {
    return (
        <Formik
            initialValues={{
                gender: "male",
                subscribe: false,
                selectboxs: [],
                selectradio: "",
                hobbies: [],
            }}
            onSubmit={values => {
                console.log(values);
            }}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    {/* <Field name="gender" as="select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Field> */}
                    <Field name="gender" as="select">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </Field>
                    <label>
                        <Field type="checkbox" name="subscribe" />
                        Subscribe to newsletter
                    </label>
                    <FieldArray name="selectboxs">
                        {({ push, remove }) => (
                            <div>
                                <h2>Checkboxes</h2>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkboxs"
                                        value="Checkbox 1"
                                    />
                                    Checkbox 1
                                </label>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkboxs"
                                        value="Checkbox 2"
                                    />
                                    Checkbox 2
                                </label>
                                <label>
                                    <Field
                                        type="checkbox"
                                        name="checkboxs"
                                        value="Checkbox 3"
                                    />
                                    Checkbox 3
                                </label>
                            </div>
                        )}
                    </FieldArray>
                    <Field
                        type="radio"
                        name="selectradio"
                        value="radio 1"
                        checked={values.selectradio === "radio 1"}
                        onChange={() => setFieldValue('selectradio', "radio 1")}
                    />
                    <Field
                        type="radio"
                        name="selectradio"
                        value="radio 2"
                        checked={values.selectradio === "radio 2"}
                        onChange={() => setFieldValue('selectradio', "radio 2")}
                    />
                    <FieldArray name="hobbies">
                        {({ insert, remove, push }) => (
                            <div>
                                {values.hobbies.length > 0 &&
                                    values.hobbies.map((hobby, index) => (
                                        <div key={index}>
                                            <Field name={`hobbies.${index}`} />
                                            <button
                                                type="button"
                                                onClick={() => remove(index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                <button
                                    type="button"
                                    onClick={() => push("new    ")}
                                >
                                    Add Hobby
                                </button>
                            </div>
                        )}
                    </FieldArray>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    );
};

export default test1;
