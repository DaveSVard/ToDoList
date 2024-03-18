import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../../features/toDo/toDoSlice";
import * as Yup from 'yup';

import "./addTasks.scss"

const addTaskSchema = Yup.object().shape({
    name: Yup.string()
        .required("Enter task name!"),
    description: Yup.string()
        .required("Enter task description")
})

export const AddTasks:React.FC = React.memo(():JSX.Element => {

    const dispatch = useDispatch()

    return(
        <div className="createTask">
            <div className="container">
                <Formik 
                    initialValues={{name: "", description: ""}} 
                    validationSchema={addTaskSchema}
                    onSubmit={(values, {setSubmitting}) => {
                        let toDoList = JSON.parse(localStorage.base)
                        let id = toDoList.at(-1).id

                        let newToDo = {name: values.name, description: values.description, id: ++id, done: false}

                        dispatch(addToDo(newToDo))
                        setSubmitting(false)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="createTask__form" onSubmit={handleSubmit}>
                            <input className="createTask__form-input" placeholder="Enter task name" type="text" name="name" onChange={handleChange} onBlur={handleBlur} value={values.name} />
                            {errors.name && touched.name ? (
                                <p className="error">{errors.name}</p>
                            ) : null}
                            <input className="createTask__form-input" placeholder="Enter task description" type="text" name="description" onChange={handleChange} onBlur={handleBlur} value={values.description} />
                            {errors.description && touched.description ? (
                                <p className="error">{errors.description}</p>
                            ) : null}
                            <button className="create-btn" type="submit" disabled={isSubmitting}>AddTask</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    )
})  